import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Activity, Heart, Thermometer, Wifi, WifiOff } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const VitalsMonitor = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const [vitals, setVitals] = useState({
    heartRate: 72,
    spo2: 98,
    temperature: 36.8,
  });

  useEffect(() => {
    if (isConnected) {
      const interval = setInterval(() => {
        setVitals({
          heartRate: 68 + Math.floor(Math.random() * 12),
          spo2: 96 + Math.floor(Math.random() * 4),
          temperature: 36.5 + Math.random() * 0.8,
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isConnected]);

  const getStatus = (metric: string, value: number) => {
    if (metric === "heartRate") {
      if (value < 60 || value > 100) return { color: "text-warning", bg: "bg-warning/10" };
      return { color: "text-success", bg: "bg-success/10" };
    }
    if (metric === "spo2") {
      if (value < 95) return { color: "text-danger", bg: "bg-danger/10" };
      return { color: "text-success", bg: "bg-success/10" };
    }
    if (metric === "temperature") {
      if (value > 37.5) return { color: "text-warning", bg: "bg-warning/10" };
      return { color: "text-success", bg: "bg-success/10" };
    }
    return { color: "text-muted-foreground", bg: "bg-muted" };
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Real-Time Vitals Monitor</h1>
              <p className="text-muted-foreground">Live data from ESP32 sensors (MAX30102 + DS18B20)</p>
            </div>
            <Button
              onClick={() => setIsConnected(!isConnected)}
              variant={isConnected ? "default" : "outline"}
              className="gap-2"
            >
              {isConnected ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              {isConnected ? "Connected" : "Connect Sensors"}
            </Button>
          </div>

          {!isConnected ? (
            <Card className="p-12 text-center neumorphic">
              <WifiOff className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Sensors Not Connected</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Connect your ESP32 device with MAX30102 and DS18B20 sensors to start monitoring vitals
              </p>
              <Button onClick={() => setIsConnected(true)}>Simulate Connection</Button>
            </Card>
          ) : (
            <div className="space-y-6 animate-slide-up">
              {/* Heart Rate */}
              <Card className={`p-8 neumorphic ${getStatus("heartRate", vitals.heartRate).bg}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-danger/20 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-danger animate-pulse-glow" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Heart Rate</p>
                      <p className="text-sm text-muted-foreground">MAX30102 Sensor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-5xl font-bold ${getStatus("heartRate", vitals.heartRate).color}`}>
                      {vitals.heartRate}
                    </p>
                    <p className="text-sm text-muted-foreground">BPM</p>
                  </div>
                </div>
                <Progress value={(vitals.heartRate / 120) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">Normal range: 60-100 BPM</p>
              </Card>

              {/* SpO2 */}
              <Card className={`p-8 neumorphic ${getStatus("spo2", vitals.spo2).bg}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Activity className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Blood Oxygen</p>
                      <p className="text-sm text-muted-foreground">MAX30102 Sensor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-5xl font-bold ${getStatus("spo2", vitals.spo2).color}`}>
                      {vitals.spo2}
                    </p>
                    <p className="text-sm text-muted-foreground">%</p>
                  </div>
                </div>
                <Progress value={vitals.spo2} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">Normal range: 95-100%</p>
              </Card>

              {/* Temperature */}
              <Card className={`p-8 neumorphic ${getStatus("temperature", vitals.temperature).bg}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-warning/20 flex items-center justify-center">
                      <Thermometer className="w-8 h-8 text-warning" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Body Temperature</p>
                      <p className="text-sm text-muted-foreground">DS18B20 Sensor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-5xl font-bold ${getStatus("temperature", vitals.temperature).color}`}>
                      {vitals.temperature.toFixed(1)}
                    </p>
                    <p className="text-sm text-muted-foreground">°C</p>
                  </div>
                </div>
                <Progress value={(vitals.temperature / 40) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">Normal range: 36.1-37.2°C</p>
              </Card>

              {/* Summary Card */}
              <Card className="p-6 neumorphic bg-primary/5">
                <h3 className="text-lg font-semibold mb-4">Current Status</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Overall Health</span>
                    <span className="font-semibold text-success">Good</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pneumonia Risk</span>
                    <span className="font-semibold text-success">Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Last Updated</span>
                    <span className="text-sm text-muted-foreground">Just now</span>
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1" onClick={() => navigate("/reports")}>
                  Save Vitals Report
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => navigate("/cough-analysis")}>
                  Run Cough Test
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VitalsMonitor;
