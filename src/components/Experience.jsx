function Experience() {
  return (
    <section id="experience" className="max-w-6xl scroll-mt-20">
      <h1 className="text-3xl text-gray-400 font-bold text-center mb-10">Experience</h1>

      <ol className="flex flex-col items-center space-y-8 text-lg leading-relaxed text-justify">
        <li className="flex flex-col">
          {/* {Left Side} */}
          <div className="flex items-start">
            <header className="font-semibold text-sm whitespace-nowrap text-gray-400 w-48">
              NOV 2024 - PRESENT
            </header>

            {/* {Right Side} */}
            <div className="text-left max-w-2xl ml-32">
              <h2 className="text-base-lg font-semibold text-gray-400">
                Front End Developer - Health First
              </h2>
              <p className="text-gray-200 sm mt-2 leading-relaxed">
                At Healthfirst, I optimized application performance by
                implementing lazy loading and code splitting, cutting load time
                by 30%. I built a reusable UI component library that improved
                design consistency and accelerated feature delivery by 25%. I
                also strengthened security through JWT authentication and RBAC,
                ensuring data protection. Collaborating in an Agile team, I
                mentored juniors and enhanced CI/CD workflows for smoother
                deployments
              </p>
            </div>
          </div>
        </li>
        <li className="mt-5">
          <div className="flex items-start">
            <header className="font-semibold text-sm whitespace-nowrap text-gray-400 w-48">
              JULY 2020 - DEC 2022
            </header>

            <div className="text-left max-w-2xl ml-32">
              <h2 className="text-base-lg font-semibold text-gray-400">
                Front End Developer - Daifuku
              </h2>
              <p className="text-gray-200 sm mt-2 leading-relaxed">
                I developed responsive React applications that improved
                cross-device usability and reduced build time by 25% through
                reusable components. Integrated RESTful APIs and optimized data
                flow to deliver faster, more dynamic experiences. Introduced
                testing with Jest and React Testing Library, cutting post-QA
                bugs by 20%. Worked closely with backend teams to ensure
                seamless API integration and efficient deployments on GCP.
              </p>
            </div>
          </div>
        </li>
        <li className="mt-5">
          <div className="flex items-start">
            <header className="font-semibold text-sm whitespace-nowrap text-gray-400 w-48">
              JUNE 2016 - MAY 2020
            </header>

            {/* {Right Side} */}
            <div className="text-left max-w-2xl ml-32">
              <h2 className="text-base-lg font-semibold text-gray-400">
                System Analyst - Seymour Systems
              </h2>
              <p className="text-gray-200 sm mt-2 leading-relaxed">
                I collaborated with clients and developers to translate business
                requirements into actionable user stories, improving project
                clarity and delivery. Supported testing and documentation to
                ensure quality releases and smooth go-lives. Proposed process
                improvements that increased team productivity and reduced
                project delays. This role sharpened my communication and
                analytical skills, which now strengthen my front-end development
                approach.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default Experience;
