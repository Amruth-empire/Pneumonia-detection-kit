import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, Upload, Play, AlertCircle, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const CoughAnalysis = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [riskLevel, setRiskLevel] = useState<"low" | "medium" | "high">("low");

  const startRecording = () => {
    setIsRecording(true);
    toast.info("Recording started. Cough into your microphone.");
    
    setTimeout(() => {
      setIsRecording(false);
      analyzeAudio();
    }, 5000);
  };

  const analyzeAudio = () => {
    setIsAnalyzing(true);
    toast.info("Analyzing cough pattern...");

    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
      const risks: Array<"low" | "medium" | "high"> = ["low", "medium", "high"];
      setRiskLevel(risks[Math.floor(Math.random() * risks.length)]);
      toast.success("Analysis complete!");
    }, 3000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-success";
      case "medium":
        return "text-warning";
      case "high":
        return "text-danger";
      default:
        return "text-muted-foreground";
    }
  };

  const getRiskBgColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-success/10";
      case "medium":
        return "bg-warning/10";
      case "high":
        return "bg-danger/10";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Cough Sound Analysis</h1>
          <p className="text-muted-foreground mb-8">
            Record or upload your cough to detect early signs of pneumonia
          </p>

          {/* Recording Interface */}
          {!hasResult && (
            <Card className="p-8 neumorphic mb-6">
              <div className="text-center space-y-6">
                <div
                  className={`w-32 h-32 mx-auto rounded-full ${
                    isRecording ? "bg-danger/20 animate-pulse-glow" : "bg-primary/10"
                  } flex items-center justify-center`}
                >
                  <Mic className={`w-16 h-16 ${isRecording ? "text-danger" : "text-primary"}`} />
                </div>

                {isRecording && (
                  <div>
                    <p className="text-lg font-semibold mb-2">Recording...</p>
                    <Progress value={60} className="w-64 mx-auto" />
                  </div>
                )}

                {isAnalyzing && (
                  <div>
                    <p className="text-lg font-semibold mb-2">Analyzing cough pattern...</p>
                    <Progress value={80} className="w-64 mx-auto" />
                  </div>
                )}

                {!isRecording && !isAnalyzing && (
                  <div className="space-y-4">
                    <p className="text-lg">Ready to record</p>
                    <div className="flex gap-4 justify-center">
                      <Button size="lg" onClick={startRecording}>
                        <Mic className="w-5 h-5 mr-2" />
                        Record Cough
                      </Button>
                      <Button size="lg" variant="outline">
                        <Upload className="w-5 h-5 mr-2" />
                        Upload File
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-semibold mb-2">Recording Tips:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Find a quiet environment</li>
                  <li>• Hold device 6-8 inches from mouth</li>
                  <li>• Cough naturally 3-5 times</li>
                  <li>• Recording lasts 5 seconds</li>
                </ul>
              </div>
            </Card>
          )}

          {/* Results */}
          {hasResult && (
            <div className="space-y-6 animate-slide-up">
              <Card className={`p-8 neumorphic ${getRiskBgColor(riskLevel)}`}>
                <div className="flex items-start gap-4">
                  {riskLevel === "low" ? (
                    <CheckCircle2 className="w-12 h-12 text-success flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-12 h-12 text-warning flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">
                      <span className={getRiskColor(riskLevel)}>
                        {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
                      </span>{" "}
                      Detected
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {riskLevel === "low" &&
                        "Your cough pattern shows normal characteristics. Continue monitoring."}
                      {riskLevel === "medium" &&
                        "Some indicators present. Consider checking vitals and consulting a doctor."}
                      {riskLevel === "high" &&
                        "Multiple pneumonia indicators detected. Please consult a healthcare professional."}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Confidence</p>
                        <p className="text-2xl font-bold">87%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Risk Score</p>
                        <p className="text-2xl font-bold">
                          {riskLevel === "low" ? "15" : riskLevel === "medium" ? "52" : "78"}/100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 neumorphic">
                <h3 className="text-lg font-semibold mb-4">Analysis Details</h3>
                <div className="space-y-3">
                  {[
                    { metric: "Cough Frequency", value: "Normal", status: "success" },
                    { metric: "Sound Pattern", value: "Wet cough detected", status: "warning" },
                    { metric: "Duration", value: "Within range", status: "success" },
                    { metric: "Intensity", value: "Moderate", status: "success" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                    >
                      <span className="font-medium">{item.metric}</span>
                      <span
                        className={`text-sm ${
                          item.status === "success" ? "text-success" : "text-warning"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="flex gap-4">
                <Button className="flex-1" onClick={() => navigate("/vitals")}>
                  Check Vitals
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => navigate("/reports")}>
                  Save Report
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  setHasResult(false);
                  setIsRecording(false);
                  setIsAnalyzing(false);
                }}
              >
                <Play className="w-4 h-4 mr-2" />
                Record Another Test
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoughAnalysis;
