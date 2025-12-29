export default function Projects() {
  const projects = [
    {
      title: "Doctor Appointment Management System (Azure Cloud)",
      description:
        "Deployed Azure-based system with backups, monitoring, and AI chatbot, improving scalability and uptime.",
      link: "https://github.com/Harshm2004/Doctor-Appointment-Management-System-/tree/master/dams",
    },
    // {
    //   title: "End-to-End Data Analysis in Excel",
    //   description:
    //     "Built an automated dashboard with VBA, KPIs, and visualizations, reducing manual effort by 80%.",
    //   link: "https://github.com/gautam9892/Excel-End-to-End-Data-Analysis-Project",
    // },
    // {
    //   title: "Mobile Sales Dashboard (Power BI)",
    //   description:
    //     "Designed an interactive Power BI dashboard with KPIs, slicers, and visualizations to analyze sales performance and trends.",
    //   link: "https://github.com/gautam9892/PowerBI-Mobile-Sales-Dashboard",
    // },
    // {
    //   title: "E-Commerce Sales Dashboard (Power BI)",
    //   description:
    //     "E-Commerce Sales Dashboard built in Power BI to analyze sales by category, product, region, and customer segment — transforming raw data into actionable insights for smarter business decisions.",
    //   link: "https://github.com/gautam9892/PowerBI-Ecommerce-Sales-Dashboard",
    // },
    // {
    //   title: "Meta Ad Performace Dashboard (Power BI)",
    //   description:
    //     "Power BI dashboard showcasing Meta (Facebook & Instagram) ad performance, highlighting engagement, conversions, and ROI to drive actionable marketing insights.",
    //   link: "https://github.com/gautam9892/PowerBI-Meta-Ad-Performamce-Dashboard",
    // },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-16 bg-gradient-to-b from-[#1a0b2e] via-[#2a0f4d] to-[#0a0a23] text-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          📂 Projects
        </h2>

        {/* Enhanced clickable subtitle */}
        <a
          href="#projects"
          className="text-center block text-gray-400 mb-10 max-w-2xl mx-auto text-sm md:text-base cursor-pointer hover:text-white hover:underline transition-all duration-300"
        >
          Click here to explore all my projects in detail ➔
        </a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-6 bg-[rgba(255,255,255,0.03)] 
              border border-[rgba(255,255,255,0.08)] shadow-md backdrop-blur-sm 
              transition duration-300 transform 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400/40"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r 
                from-purple-500 to-pink-500 text-white font-medium shadow-md 
                hover:opacity-90 transition"
              >
                🔗 View Project
              </a>

              {/* Glow circle effect */}
              <div
                className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full 
                opacity-0 group-hover:opacity-20 transition duration-500 
                bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
