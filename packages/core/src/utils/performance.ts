import { onCLS, onFID, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

export interface PerformanceConfig {
  endpoint?: string;
  debug?: boolean;
  onMetric?: (metric: Metric) => void;
}

export class PerformanceTracker {
  private config: PerformanceConfig;

  constructor(config: PerformanceConfig = {}) {
    this.config = config;
  }

  private handleMetric = (metric: Metric) => {
    if (this.config.debug) {
      console.log(`[Performance] ${metric.name}:`, metric.value);
    }

    if (this.config.onMetric) {
      this.config.onMetric(metric);
    }

    if (this.config.endpoint) {
      this.sendMetric(metric);
    }
  };

  private async sendMetric(metric: Metric) {
    try {
      await fetch(this.config.endpoint!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      });
    } catch (error) {
      if (this.config.debug) {
        console.error('[Performance] Failed to send metric:', error);
      }
    }
  }

  start() {
    onCLS(this.handleMetric);
    onFID(this.handleMetric);
    onFCP(this.handleMetric);
    onLCP(this.handleMetric);
    onTTFB(this.handleMetric);
  }
}

export const trackPerformance = (config?: PerformanceConfig) => {
  const tracker = new PerformanceTracker(config);
  tracker.start();
  return tracker;
};