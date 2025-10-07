import React from "react";
import { motion } from "framer-motion";
import Alert from "../components/Alert";

export default function Alerts() {
  const [alerts] = React.useState([
    {
      id: 1,
      type: "warning",
      message: "High wind speeds detected in sector 7. Recommend course adjustment.",
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 2,
      type: "info",
      message: "Navigation systems operating normally. All sensors reporting green status.",
      timestamp: new Date(Date.now() - 300000).toLocaleTimeString()
    },
    {
      id: 3,
      type: "success",
      message: "Course correction executed successfully. New heading: 045 degrees.",
      timestamp: new Date(Date.now() - 600000).toLocaleTimeString()
    }
  ]);

  return (
    <div className="min-h-screen w-full bg-navio-dark text-navio-cream px-4 py-12">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">NAVIO Alerts</h1>
          <p className="text-navio-cream/60 text-lg">Real-time maritime navigation alerts</p>
        </header>

        <div className="space-y-4">
          {alerts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-navio-cream/60 text-lg">No active alerts</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4 p-4 bg-navio-blue/20 rounded-xl">
                  <div className="flex-1">
                    <Alert type={alert.type} message={alert.message} />
                  </div>
                  <span className="text-navio-cream/40 text-sm">{alert.timestamp}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}