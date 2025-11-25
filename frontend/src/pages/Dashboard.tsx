import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  FileText,
  LogOut,
  Mic,
  Stethoscope,
  TrendingUp,
  User,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "New Cough Test",
      description: "Record or upload cough audio",
      action: () => navigate("/cough-analysis"),
      color: "bg-primary",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Monitor Vitals",
      description: "Check real-time sensor data",
      action: () => navigate("/vitals"),
      color: "bg-success",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "View Reports",
      description: "See test history & trends",
      action: () => navigate("/reports"),
      color: "bg-warning",
    },
  ];

  const recentTests = [
    { date: "2024-01-15", risk: "Low", score: 15 },
    { date: "2024-01-10", risk: "Low", score: 12 },
    { date: "2024-01-05", risk: "Medium", score: 45 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">PneumoDetect</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Patient!</h1>
          <p className="text-muted-foreground">
            Monitor your respiratory health and track pneumonia risk
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="p-6 neumorphic hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={action.action}
            >
              <div
                className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{action.title}</h3>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Tests Completed", value: "12", trend: "+3 this month" },
            { label: "Avg Risk Score", value: "24", trend: "Low risk" },
            { label: "Last SpO₂", value: "98%", trend: "Normal" },
            { label: "Last Temp", value: "36.8°C", trend: "Normal" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 neumorphic">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold mb-1 text-primary">{stat.value}</p>
              <p className="text-xs text-success flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </p>
            </Card>
          ))}
        </div>

        {/* Recent Tests */}
        <Card className="p-6 neumorphic">
          <h2 className="text-2xl font-bold mb-4">Recent Tests</h2>
          <div className="space-y-3">
            {recentTests.map((test, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mic className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{test.date}</p>
                    <p className="text-sm text-muted-foreground">Cough Analysis Test</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">{test.score}%</p>
                  <p
                    className={`text-sm ${
                      test.risk === "Low"
                        ? "text-success"
                        : test.risk === "Medium"
                        ? "text-warning"
                        : "text-danger"
                    }`}
                  >
                    {test.risk} Risk
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4" onClick={() => navigate("/reports")}>
            View All Reports
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
