export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative 
      bg-gradient-to-b from-[#0a0a23] via-[#1a1a40] to-[#111132] text-white py-20"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Profile / Avatar */}
        <div className="flex justify-center relative">
          <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-purple-500/40 hover:scale-105 transition-transform duration-300">
            <img
              src="/harsh.png"
              alt="Harsh Mishra"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-3xl -z-10" />
        </div>

        {/* Right Side - About Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            👨‍💻 About Me
            <span className="block w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mt-2 rounded-full"></span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Hi, I’m{" "}
            <span className="text-purple-400 font-semibold">
              Harsh Mishra
              </span>
  , a{" "}
  <span className="text-pink-400 font-semibold">
    Cloud & DevOps Enthusiast
  </span>{" "}
  currently working as an Analyst at{" "}
  <span className="text-purple-400 font-semibold">
    Cognizant
  </span>.
          </p>
          <p className="text-gray-400 mb-6">
  I have hands-on experience with AWS and Microsoft Azure, specializing in cloud
  infrastructure, monitoring, CI/CD automation, and AI-powered solutions using
  Python and SQL. I’m passionate about building scalable, secure, and reliable
  cloud systems that solve real-world problems.
</p>

          <div className="flex flex-wrap gap-3">
            {[
    { skill: "AWS", icon: "☁️" },
    { skill: "Azure", icon: "🔵" },
    { skill: "Docker", icon: "🐳" },
    { skill: "CI/CD", icon: "⚙️" },
    { skill: "Monitoring", icon: "📊" },
    { skill: "Python", icon: "🐍" },
    { skill: "SQL", icon: "🗄️" },
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm rounded-full 
                bg-purple-500/20 border border-purple-400/30 
                text-purple-300 shadow-sm flex items-center gap-2 transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                <span>{item.icon}</span> {item.skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
