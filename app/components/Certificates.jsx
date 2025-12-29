import React from "react";

const certifications = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    link: "/certificates/Generative AI Professional.pdf",
  },
   {
    title: "Devops Professional by Oracle",
    issuer: "Oracle",
    year: "2025",
    link: "/certificates/oracle devops professional.pdf",
  },
  {
    title: "AWS AI Practitioner ",
    issuer: "AWS",
    year: "2025",
    link: "/certificates/AWS AI Practitioner .pdf",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "AWS",
    year: "2025",
    link: "/certificates/AWS Cloud Practitioner.pdf",
  },
    {
    title: "Microsoft Azure AZ900",
    issuer: "Microsoft",
    year: "2024",
    link: "/certificates/Microsoft Azure AZ900.pdf",
  },
   {
    title: "System Administration by Microsoft",
    issuer: "LinkedIn",
    year: "2024",
    link: "/certificates/CertificateOfCompletion_Career Essentials in System Administration by Microsoft and LinkedIn.pdf",
  },
  {
   title: "AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    link: "/certificates/AI Foundations Associate.pdf",
  },
   {
    title: "Cybersecurity by CISCO",
    issuer: "CISCO",
    year: "2024",
    link: "/certificates/CISCO Intro to cysec.pdf",
  },
  
 
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen pt-10 sm:pt-16 pb-16 bg-gradient-to-b from-[#0f0f25] to-[#151533] text-white flex flex-col justify-start"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-4">
          🎓 Certifications
        </h2>
        {/* Description with spacing like projects section */}
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Verified Certifications validating my expertise in Cloud, DevOps, and AI technologies.
        </p>

        {/* Certificates grid with same spacing as projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-5 pt-8 
              bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] 
              shadow-md backdrop-blur-sm transition duration-300 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400/40"
            >
              <div className="flex items-center justify-between mb-4 -mt-2">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <span className="text-xs text-purple-300 border border-purple-300/40 rounded-full px-2 py-0.5">
                  {cert.year}
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-4">{cert.issuer}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg text-sm font-medium 
                  bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                  shadow-md hover:shadow-lg hover:shadow-pink-500/40 
                  hover:scale-105 transition-transform duration-300"
                >
                  🔗 View Certificate
                </a>
              )}

              {/* Decorative Glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-10 bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
