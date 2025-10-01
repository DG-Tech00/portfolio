import { onCLS, onFCP, onINP, onLCP, onTTFB } from "web-vitals";

type WebVitalsMetric = {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
};

function sendToAnalytics(metric: WebVitalsMetric) {
  // Enviar para Google Analytics, Vercel Analytics, etc
  if (process.env.NODE_ENV === "production") {
    const body = JSON.stringify(metric);
    const url = "/api/analytics";

    // Use `navigator.sendBeacon()` se disponível, senão use `fetch()`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: "POST", keepalive: true });
    }
  } else {
    // Em desenvolvimento, apenas log no console para debug
    // eslint-disable-next-line no-console
    console.log("[Web Vitals]", metric);
  }
}

export function reportWebVitals() {
  onCLS(sendToAnalytics);
  onFCP(sendToAnalytics);
  onINP(sendToAnalytics); // INP substituiu FID na versão 5
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
}
