import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Activity,
  TrendingUp,
  Database,
  FileText,
  Settings,
} from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Users", value: "1,234", icon: <Users className="w-6 h-6" />, trend: "+12%" },
    { label: "Tests Today", value: "45", icon: <Activity className="w-6 h-6" />, trend: "+8%" },
    { label: "Avg Risk Score", value: "28%", icon: <TrendingUp className="w-6 h-6" />, trend: "-5%" },
    { label: "Database Size", value: "2.4GB", icon: <Database className="w-6 h-6" />, trend: "+15%" },
  ];

  const recentUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", tests: 5, lastTest: "2h ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", tests: 3, lastTest: "5h ago" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", tests: 8, lastTest: "1d ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage users, monitor system, and view analytics</p>
            </div>
            <Button>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 neumorphic">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <span className="text-sm text-success">{stat.trend}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 neumorphic hover:shadow-xl transition-all cursor-pointer group">
              <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-1">Manage Users</h3>
              <p className="text-sm text-muted-foreground">View and manage user accounts</p>
            </Card>
            <Card className="p-6 neumorphic hover:shadow-xl transition-all cursor-pointer group">
              <FileText className="w-8 h-8 text-success mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-1">View Reports</h3>
              <p className="text-sm text-muted-foreground">Access all test reports</p>
            </Card>
            <Card className="p-6 neumorphic hover:shadow-xl transition-all cursor-pointer group">
              <Database className="w-8 h-8 text-warning mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-1">Database</h3>
              <p className="text-sm text-muted-foreground">Manage datasets and backups</p>
            </Card>
          </div>

          {/* Recent Users */}
          <Card className="p-6 neumorphic">
            <h2 className="text-2xl font-bold mb-6">Recent Users</h2>
            <div className="space-y-4">
              {recentUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center hidden md:block">
                      <p className="font-semibold">{user.tests}</p>
                      <p className="text-xs text-muted-foreground">Tests</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Last test</p>
                      <p className="font-semibold">{user.lastTest}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
