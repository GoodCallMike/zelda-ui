# Utils

Utility functions for performance tracking and monitoring.

## Performance Tracking

Track Core Web Vitals metrics using the web-vitals library.

### Quick Start

```tsx
import { trackPerformance } from '@zelda/core';

// Basic usage
trackPerformance();

// With configuration
trackPerformance({
  debug: true,
  endpoint: '/api/metrics',
  onMetric: (metric) => console.log(metric)
});
```

### Metrics Tracked

- **CLS**: Cumulative Layout Shift (visual stability)
- **FID**: First Input Delay (interactivity)
- **FCP**: First Contentful Paint (loading)
- **LCP**: Largest Contentful Paint (loading)
- **TTFB**: Time to First Byte (server response)

### Configuration

```tsx
interface PerformanceConfig {
  endpoint?: string;        // API endpoint for metrics
  debug?: boolean;          // Console logging
  onMetric?: (metric) => void; // Custom handler
}
```

### Advanced Usage

```tsx
import { PerformanceTracker } from '@zelda/core';

const tracker = new PerformanceTracker({
  endpoint: 'https://analytics.example.com/metrics',
  debug: process.env.NODE_ENV === 'development',
  onMetric: (metric) => {
    // Custom analytics
    analytics.track('web_vital', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating
    });
  }
});

tracker.start();
```