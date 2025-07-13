export default function Skills() {
    return (
      <section id="skills" className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-800 dark:text-gray-300">
          <li>
            <strong>Front-End:</strong> React, Next.js, Javascript (ES6+),
            TypeScript, HTML5, CSS3, Tailwind CSS, Responsive Design.
          </li>
          <li>
            <strong>Back-End:</strong> Node.js, Express, REST API Development,
            MongoDB, PostgreSQL, Authentication & Authorization.
          </li>
          <li>
            <strong>DevOps & Tools:</strong> Git & Github, Docker, CI/CD
            Workflows, Linux, Nginx, VS Code, Postman.
          </li>
        </ul>
      </section>
    );
}