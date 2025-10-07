import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";
import { fetchDevices, healthCheck } from "../lib/api";

export default function Dashboard() {
  const [visible, setVisible] = React.useState(true);
  const [type, setType] = React.useState("info");
  const [devices, setDevices] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const nextType = () => {
    setType((t) => (t === "info" ? "success" : t === "success" ? "warning" : "info"));
  };

  React.useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      try {
        await healthCheck();
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
    <div className="min-h-screen w-full bg-navio-dark text-navio-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">NAVIO Dashboard</h1>
          <p className="text-navio-cream/60 text-sm">Real-time maritime navigation monitoring</p>
        </header>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setVisible((v) => !v)}
            className="rounded-xl bg-navio-cream/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-navio-cream/15 hover:bg-navio-cream/15 transition"
          >
            {visible ? "Hide" : "Show"} Alert
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={nextType}
            className="rounded-xl bg-navio-cream/10 px-4 py-2 text-sm font-semibold backdrop-blur ring-1 ring-navio-cream/15 hover:bg-navio-cream/15 transition"
          >
            Cycle Type ({type})
          </motion.button>
        </div>

        {/* Example usage of Button component variants */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button type="primary" onClick={() => alert("Primary action engaged.")}>Primary</Button>
          <Button type="secondary" onClick={() => alert("Secondary sequence initiated.")}>Secondary</Button>
          <Button type="danger" onClick={() => alert("Danger protocol activated!")}>Danger</Button>
        </div>

        {/* Device Status */}
        <div className="pt-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-wide">Live Device Tracking</h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-navio-cream/60">Live Updates</span>
            </div>
          </div>

          {loading && (
            <Alert type="info" message="Loading devices from NAVIO core..." />
          )}

          {!loading && error && (
            <Alert type="warning" message={error} />
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {devices.map((d) => (
                <motion.div
                  key={d.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    title={d.name}
                    content={`${d.name} - Speed: ${d.speed} km/h | Status: ${d.status}`}
                    type={d.status === "safe" ? "default" : d.status === "alert" ? "alert" : "info"}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Example usage of Card component variants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          <Card title="Device 1" content="Device 1 - Proximity: Safe" type="default" />
          <Card title="Device 2" content="Device 2 - Proximity: Near" type="info" />
          <Card title="Device 3" content="Device 3 - Collision Alert!" type="alert" />
        </div>

        <AnimatePresence mode="wait">
          {visible && (
            <Alert
              key={type}
              type={type}
              message={
                type === "info"
                  ? "Real-time telemetry link established. All systems operational."
                  : type === "success"
                  ? "Navigation optimization completed successfully."
                  : "Multiple vessel proximity alert. Recommend course correction."
              }
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

