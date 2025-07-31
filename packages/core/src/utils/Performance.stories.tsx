import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { trackPerformance, type PerformanceConfig } from './performance';

const meta: Meta = {
  title: 'Utils/Performance',
  parameters: {
    docs: {
      description: {
        component: `Performance tracking utility using web-vitals to monitor Core Web Vitals metrics.

## Overview

The Performance utility provides real-time tracking of Core Web Vitals metrics including CLS, FID, FCP, LCP, and TTFB. It supports custom endpoints, debug logging, and metric callbacks.

## Quick Start

\`\`\`tsx
import { trackPerformance } from '@jetstream/core';

// Basic usage
trackPerformance();

// With configuration
trackPerformance({
  debug: true,
  endpoint: '/api/metrics',
  onMetric: (metric) => console.log(metric)
});
\`\`\`

## Metrics Tracked

- **CLS (Cumulative Layout Shift)**: Visual stability
- **FID (First Input Delay)**: Interactivity
- **FCP (First Contentful Paint)**: Loading performance
- **LCP (Largest Contentful Paint)**: Loading performance
- **TTFB (Time to First Byte)**: Server response time

## Configuration Options

\`\`\`tsx
interface PerformanceConfig {
  endpoint?: string;        // API endpoint for metrics
  debug?: boolean;          // Console logging
  onMetric?: (metric) => void; // Custom handler
}
\`\`\`

## Best Practices

### Do
- Initialize tracking early in your app
- Use debug mode during development
- Send metrics to analytics service
- Monitor trends over time

### Don't
- Track in development builds only
- Ignore poor metric ratings
- Send excessive data to endpoints
- Block the main thread with tracking
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const PerformanceDemo = ({ config }: { config: PerformanceConfig }) => {
  const [metrics, setMetrics] = useState<Array<{ name: string; value: number; rating: string }>>([]);

  useEffect(() => {
    const tracker = trackPerformance({
      ...config,
      onMetric: (metric) => {
        setMetrics(prev => [...prev, {
          name: metric.name,
          value: Math.round(metric.value * 100) / 100,
          rating: metric.rating
        }]);
        config.onMetric?.(metric);
      }
    });

    return () => {
      // Cleanup if needed
    };
  }, [config]);

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h3>Performance Metrics</h3>
      <p>Refresh the page to see new metrics being tracked.</p>
      
      {metrics.length === 0 ? (
        <p style={{ color: '#666' }}>Waiting for metrics...</p>
      ) : (
        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          {metrics.map((metric, index) => (
            <div
              key={index}
              style={{
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <strong>{metric.name}</strong>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {getMetricDescription(metric.name)}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {formatMetricValue(metric.name, metric.value)}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: getRatingColor(metric.rating),
                    fontWeight: 'bold'
                  }}
                >
                  {metric.rating.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getMetricDescription = (name: string) => {
  const descriptions = {
    CLS: 'Visual stability',
    FID: 'First input delay',
    FCP: 'First contentful paint',
    LCP: 'Largest contentful paint',
    TTFB: 'Time to first byte'
  };
  return descriptions[name as keyof typeof descriptions] || '';
};

const formatMetricValue = (name: string, value: number) => {
  if (name === 'CLS') return value.toFixed(3);
  return `${value}ms`;
};

const getRatingColor = (rating: string) => {
  switch (rating) {
    case 'good': return '#0f5132';
    case 'needs-improvement': return '#664d03';
    case 'poor': return '#842029';
    default: return '#666';
  }
};

export const Default: Story = {
  render: () => <PerformanceDemo config={{}} />,
};

export const WithDebug: Story = {
  render: () => <PerformanceDemo config={{ debug: true }} />,
};

export const WithCustomHandler: Story = {
  render: () => (
    <PerformanceDemo 
      config={{
        debug: true,
        onMetric: (metric) => {
          console.log(`Custom handler: ${metric.name} = ${metric.value}`);
        }
      }} 
    />
  ),
};