// Vercel Speed Insights integration
// This script injects the Speed Insights tracking for static HTML sites
import { injectSpeedInsights } from 'https://esm.sh/@vercel/speed-insights@2.0.0';

// Initialize Speed Insights
// Once deployed to Vercel and Speed Insights is enabled in the dashboard,
// this will automatically track Web Vitals and performance metrics
injectSpeedInsights({
  debug: false, // Set to true for debugging in development
});
