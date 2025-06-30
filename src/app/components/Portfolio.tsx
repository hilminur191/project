export default function Portfolio() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
        <p className="mb-2 font-semibold">
          Project Title: Task Management Dashboard
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          A web app for teams to organize tasks and collaborate efficiently.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-300">
          <li>
            <strong>Technologies:</strong> Next.js, Node.js, Express, MongoDB,
            Socket.io.
          </li>
          <li>
            <strong>Situation:</strong> A startup needed a tool to manage
            workflows and improve team productivity.
          </li>
          <li>
            <strong>Task:</strong> Develop an intuitive, real-time task
            dashboard with user roles.
          </li>
          <li>
            <strong>Action:</strong> Created UI in Next.js with Tailwind CSS,
            backend with Node.js/Express, real-time updates using Socket.io.
          </li>
          <li>
            <strong>Result:</strong> Improve task tracking, with client
            reporting a 30% fasteronboarding process.
          </li>
        </ul>
      </section>
    );
}