export default function Experience() {
  return (
    <section id="experience" className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-6 text-gray-800 dark:text-gray-300">
        <div>
          <p className="font-semibold">
            Full-stack Web Developer - Freelance (2021 - Present)
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
            <li>
              Developed custom web apps using React, Next.js, Node.js, and
              Express.
            </li>{" "}
            <li>Handled both frontend and backend, plus deployment.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">
            Front-End Developer - Tech Solution Inc. (2020 - 2021)
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
            <li>Built reponsive UIs with React and Tailwind CSS.</li>{" "}
            <li>
              Collaborated closely with designers for high-quality interfaces.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">
            Back-End Developer - CloudApps Ltd. (2019 - 2020)
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
            <li>Created REST APIs with Node.js and Express.</li>{" "}
            <li>Managed MongoDB and PostgreSQL databases.</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">
            Web Developer Intern - Creative Studio (2018 - 2019)
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
            <li>Assisted in building responsive websites.</li>{" "}
            <li>Supported senior devs on frontend and backend tasks.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
