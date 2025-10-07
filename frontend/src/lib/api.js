// Simple API client for NAVIO frontend
// In dev, Vite proxies /api to http://localhost:5000 (see vite.config.js)

export async function fetchDevices() {
  const res = await fetch('/api/devices');
  if (!res.ok) throw new Error(`Failed to fetch devices: ${res.status}`);
  const data = await res.json();
  if (data.status !== 'success') throw new Error(data.message || 'Unknown API error');
  return data.devices;
}

export async function healthCheck() {
  const res = await fetch('/api/health');
  if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
  return res.json();
}
