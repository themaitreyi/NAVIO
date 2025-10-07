import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { fetchDevices } from "../lib/api";

export default function Devices() {
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        const list = await fetchDevices();
        if (mounted) {
          setDevices(list);
          setError("");
        }
      } catch (e) {
        if (mounted) setError(e.message || "Failed to load devices");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadData();

    // Set up polling for real-time updates every 3 seconds
    const interval = setInterval(loadData, 3000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-navio-dark text-navio-cream px-4 py-12">
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">NAVIO Devices</h1>
          <p className="text-navio-cream/60 text-lg">Real-time maritime device monitoring</p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-navio-cream/60">Live Connection Active</span>
          </div>
        </header>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navio-cream"></div>
            <span className="ml-3 text-navio-cream">Loading devices...</span>
          </div>
        )}

        {error && (
          <div className="bg-navio-light-blue text-white p-4 rounded-xl text-center mb-6">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devices.map((device) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  title={device.name}
                  content={`Speed: ${device.speed} km/h | Status: ${device.status} | Lat: ${device.latitude.toFixed(4)} | Lng: ${device.longitude.toFixed(4)}`}
                  type={device.status === "safe" ? "default" : device.status === "alert" ? "alert" : "info"}
                />
              </motion.div>
            ))}
          </div>
        )}

        {devices.length === 0 && !loading && !error && (
          <div className="text-center py-12">
            <p className="text-navio-cream/60 text-lg">No devices found</p>
          </div>
        )}

        {/* Real-time status indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-navio-blue/20 px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm text-navio-cream/80">Live Data Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
