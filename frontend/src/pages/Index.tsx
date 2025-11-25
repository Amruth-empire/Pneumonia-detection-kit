import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Activity, Heart, Mic, Shield, Stethoscope, Zap } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import aiDetection from "@/assets/ai-detection.png";
import sensorsImage from "@/assets/sensors.png";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: "AI Cough Analysis",
      description: "Advanced machine learning analyzes cough patterns to detect early pneumonia signs",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Vitals",
      description: "Monitor SpO₂, heart rate, and temperature with medical-grade sensors",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confirmatory Tests",
      description: "Optional CRP test integration for comprehensive pneumonia screening",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Results",
      description: "Get pneumonia risk assessment in seconds with detailed analysis",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Record Cough Audio",
      description: "Use our app to record or upload your cough sound sample",
      image: aiDetection,
    },
    {
      step: "2",
      title: "Monitor Vitals",
      description: "Connect sensors to track SpO₂, heart rate, and body temperature",
      image: sensorsImage,
    },
    {
      step: "3",
      title: "Get Results",
      description: "Receive instant AI-powered pneumonia risk assessment",
      image: aiDetection,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">PneumoDetect</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button onClick={() => navigate("/auth")}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Early Pneumonia Detection
                <span className="block text-primary">At Your Fingertips</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                AI-powered cough analysis combined with real-time vital monitoring for accurate,
                at-home pneumonia screening.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2" onClick={() => navigate("/cough-analysis")}>
                  <Mic className="w-5 h-5" />
                  Start Test
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/dashboard")}>
                  View Dashboard
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10k+</p>
                  <p className="text-sm text-muted-foreground">Tests Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">&lt;1min</p>
                  <p className="text-sm text-muted-foreground">Results Time</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={heroImage}
                alt="Medical Technology"
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Health Monitoring</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets medical expertise for reliable pneumonia detection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 neumorphic hover:shadow-xl transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process for comprehensive pneumonia screening
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative mx-auto w-64 h-64">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="relative rounded-full w-full h-full object-cover neumorphic"
                  />
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold neumorphic">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Credibility */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Backed by Science</h2>
              <p className="text-lg opacity-90 mb-6">
                Our AI model is trained on thousands of validated pneumonia cases, achieving medical-grade
                accuracy. Combined with FDA-cleared sensor technology, PneumoDetect provides reliable
                screening you can trust.
              </p>
              <ul className="space-y-3">
                {[
                  "Trained on 50,000+ validated cough samples",
                  "Medical-grade MAX30102 and DS18B20 sensors",
                  "Peer-reviewed algorithms",
                  "HIPAA-compliant data security",
                ].map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Sensitivity", value: "94.5%" },
                { label: "Specificity", value: "96.2%" },
                { label: "PPV", value: "93.8%" },
                { label: "NPV", value: "95.1%" },
              ].map((stat, i) => (
                <Card key={i} className="p-6 bg-primary-foreground/10 border-primary-foreground/20 text-center">
                  <p className="text-4xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="p-12 text-center neumorphic">
            <Heart className="w-16 h-16 mx-auto mb-6 text-danger animate-pulse-glow" />
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take control of your respiratory health with AI-powered pneumonia detection
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate("/auth")}>
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/cough-analysis")}>
                Try Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Stethoscope className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">PneumoDetect</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced AI-powered pneumonia detection for early intervention and better health outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => navigate("/cough-analysis")} className="hover:text-primary">
                    Cough Analysis
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/vitals")} className="hover:text-primary">
                    Vitals Monitor
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/dashboard")} className="hover:text-primary">
                    Dashboard
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PneumoDetect. All rights reserved. Medical device for screening purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
