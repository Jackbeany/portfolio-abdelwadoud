export const metadata = {
    title: "About Me - Abdelwadoud",
    description: "Learn more about Abdelwadoud, a passionate 19-year-old student skilled in technology and creativity.",
  };
  
  async function fetchPageData() {
    const skills = {
      languages: [
        { name: 'C#', level: 'Advanced' },
        { name: 'PHP', level: 'Intermediate' },
        { name: 'HTML & CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'Python', level: 'Intermediate' },
        { name: 'SQL', level: 'Intermediate' },
      ],
      frameworks: [
        { name: 'Laravel', level: 'Intermediate' },
        { name: 'Next.js', level: 'Intermediate' },
      ],
      tools: [
        { name: 'Git', level: 'Intermediate' },
        { name: 'Adobe XD', level: 'Intermediate' },
      ],
    };
  
    const hobbies = ['Gaming', 'Programming', 'Movies', 'Series', 'Documentaries'];
  
    return { skills, hobbies };
  }
  
  export default async function About() {
    const { skills, hobbies } = await fetchPageData();
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Hello! I&apos;m Abdelwadoud, a 19-year-old student passionate about technology and creativity.
            My journey in programming and design started several years ago, and I&apos;ve been continuously
            developing my skills and expanding my knowledge ever since.
          </p>
                  {/* What I Do */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in creating modern web applications using the latest technologies. 
              From responsive designs to efficient backend solutions, I bring ideas to life 
              through code.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">My Focus</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Currently focusing on expanding my knowledge in web development and exploring 
              new technologies. Always eager to learn and take on new challenges.
            </p>
          </div>
        </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
  
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.languages.map((skill) => (
                  <div key={skill.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.frameworks.map((framework) => (
                  <div key={framework.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="font-medium">{framework.name}</span>
                  </div>
                ))}
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.tools.map((tool) => (
                  <div key={tool.name} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">My Hobbies</h2>
          <div className="flex flex-wrap gap-3">
            {hobbies.map((hobby) => (
              <span key={hobby} className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                {hobby}
              </span>
            ))}
          </div>
        </section>
  
        <section>
          <h2 className="text-2xl font-bold mb-6">What I Can Do For You</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With my technical knowledge and creative approach, I help develop functional
            and attractive digital solutions. Whether it&apos;s a dynamic website,
            efficient backend, or engaging user interface, I ensure the end result
            meets your expectations.
          </p>
        </section>
      </div>
    );
  }
  