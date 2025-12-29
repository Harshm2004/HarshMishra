import React from "react";

const skills = [
  {
    title: "Cloud Platforms",
    icon: "☁️",
    bullets: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Oracle Cloud",
    ],
  },
  {
    title: "Cloud Infrastructure & Security",
    icon: "🔐",
    bullets: [
      "Terraform (Infrastructure as Code)",
      "IAM (Identity & Access Management)",
      "VPC, Subnets, Security Groups",
      "Load Balancing & DNS",
      "EC2 & Virtual Machines",
      "Cloud Security Best Practices",
    ],
  },
  {
    title: "DevOps & CI/CD",
    icon: "⚙️",
    bullets: [
      "Jenkins",
      "GitHub Actions",
      "Docker (Containerization)",
      "CI/CD Pipeline Automation",
      "Environment & Sandbox Management",
    ],
  },
  {
    title: "Monitoring & Observability",
    icon: "📊",
    bullets: [
      "Dynatrace",
      "AWS CloudWatch",
      "Azure Monitor",
      "Application & Infrastructure Monitoring",
      "Alerting, Anomaly Detection & Performance Optimization",
    ],
  },
  {
    title: "IT Service Management",
    icon: "🧾",
    bullets: [
      "ServiceNow",
      "Incident, Change & Problem Management",
      "ITIL Processes",
      "SLA Monitoring & Compliance",
    ],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    bullets: [
      "AI Services Integration",
      "NLP (Natural Language Processing)",
      "AI-powered Chatbots",
      "Automation for User Queries & Operations",
    ],
  },
  {
    title: "Programming & Databases",
    icon: "💻",
    bullets: [
      "Python",
      "SQL",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-16 bg-gradient-to-b from-[#0d0d2b] via-[#14143d] to-[#1a1a4f] text-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">🛠 Skills</h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Technologies, platforms, and tools I work with across cloud infrastructure, DevOps, and automation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl p-6 bg-[rgba(255,255,255,0.03)] 
              border border-[rgba(255,255,255,0.1)] shadow-md backdrop-blur-sm 
              transition duration-300 transform 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400/40"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {/* Glow effect circle (visible only when hovered) */}
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full 
                opacity-0 group-hover:opacity-20 transition duration-500 
                bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
