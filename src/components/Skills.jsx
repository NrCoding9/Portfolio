function Skills() {
  const skillCategories = [
    {
      title: "Front end",
      skills: [
        { name: "JavaScript (ES6+)", icon: "devicon-javascript-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Redux", icon: "devicon-redux-original" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "Tailwindcss", icon: "devicon-tailwindcss-plain" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain" },
      ],
    },
    {
      title: "Backend & API Integration",
      skills: [
        { name: "Node", icon: "devicon-nodejs-plain" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "RESTful APIs", icon: "" },
        { name: "GraphQL", icon: "devicon-graphql-plain" },
        { name: "SOAP", icon: "devicon-soap-plain" },
        { name: "JWT", icon: "devicon-jwt-plain" },
      ],
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
        { name: "GCP", icon: "devicon-googlecloud-plain-wordmark" },
        { name: "Azure", icon: "devicon-azure-plain" },
        { name: "CI/CD Pipelines", icon: "devicon-plain" },
        { name: "Vite", icon: "devicon-vite-original" },
        { name: "Webpack", icon: "devicon-webpack-plain" },
        { name: "Babel", icon: "devicon-babel-plain" },
      ],
    },
    {
      title: "Testing & Databases",
      skills: [
        { name: "Jest", icon: "devicon-jest-plain" },
        { name: "Mocha", icon: "devicon-mocha-plain" },
        { name: "React Testing Library", icon: "devicon-mocha-plain" },
        { name: "Chai", icon: "devicon-chai-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
      ],
    },
  ];

  return (
    <section id="skills" className="p-16 scroll-mt-8">
      <h2 className="text-3xl text-gray-400 font-bold text-center mb-8">
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-slate-200 mb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm hover:bg-gray-600 transition whitespace-nowrap"
                >
                  <i className={`${skill.icon} text-lg`}></i>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
