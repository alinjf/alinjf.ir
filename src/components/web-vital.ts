import { onCLS, onFID, onLCP } from "web-vitals";

function sendToAnalytics(metric) {
    const body = JSON.stringify(metric);
    // Use `navigator.sendBeacon()` or a third-party analytics tool to send the metric to a backend or analytics endpoint.
    console.log(metric);
}

export function reportWebVitals() {
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
}
