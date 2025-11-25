import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, TrendingDown } from "lucide-react";

const Reports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Cough Analysis",
      risk: "Low",
      score: 15,
      vitals: { hr: 72, spo2: 98, temp: 36.8 },
    },
    {
      id: 2,
      date: "2024-01-10",
      type: "Cough Analysis",
      risk: "Low",
      score: 12,
      vitals: { hr: 68, spo2: 97, temp: 36.6 },
    },
    {
      id: 3,
      date: "2024-01-05",
      type: "Full Assessment",
      risk: "Medium",
      score: 45,
      vitals: { hr: 85, spo2: 94, temp: 37.2 },
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-success";
      case "Medium":
        return "text-warning";
      case "High":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Test Reports & History</h1>
              <p className="text-muted-foreground">View and download your pneumonia screening reports</p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 neumorphic">
              <p className="text-sm text-muted-foreground mb-2">Total Tests</p>
              <p className="text-4xl font-bold text-primary">12</p>
              <p className="text-sm text-success flex items-center gap-1 mt-2">
                <TrendingDown className="w-3 h-3" />
                Risk trending down
              </p>
            </Card>
            <Card className="p-6 neumorphic">
              <p className="text-sm text-muted-foreground mb-2">Average Risk</p>
              <p className="text-4xl font-bold text-success">24%</p>
              <p className="text-sm text-muted-foreground mt-2">Low risk category</p>
            </Card>
            <Card className="p-6 neumorphic">
              <p className="text-sm text-muted-foreground mb-2">Last Test</p>
              <p className="text-4xl font-bold">2d</p>
              <p className="text-sm text-muted-foreground mt-2">2 days ago</p>
            </Card>
          </div>

          {/* Reports List */}
          <div className="space-y-4">
            {reports.map((report) => (
              <Card key={report.id} className="p-6 neumorphic hover:shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold">{report.type}</h3>
                        <span className={`text-sm font-semibold ${getRiskColor(report.risk)}`}>
                          {report.risk} Risk
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{report.score}%</p>
                      <p className="text-xs text-muted-foreground">Risk Score</p>
                    </div>

                    <div className="hidden md:flex gap-6">
                      <div className="text-center">
                        <p className="text-sm font-semibold">{report.vitals.hr}</p>
                        <p className="text-xs text-muted-foreground">HR</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">{report.vitals.spo2}%</p>
                        <p className="text-xs text-muted-foreground">SpO₂</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold">{report.vitals.temp}°C</p>
                        <p className="text-xs text-muted-foreground">Temp</p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State for more data */}
          {reports.length === 0 && (
            <Card className="p-12 text-center neumorphic">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">No Reports Yet</h2>
              <p className="text-muted-foreground mb-6">Start by taking your first pneumonia test</p>
              <Button onClick={() => navigate("/cough-analysis")}>Take Test Now</Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
