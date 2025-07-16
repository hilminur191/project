export default function SkillGrid() {
  const skill = [
    "/images/react.png",
    "/images/nextjs.png",
    "/images/html.png",
    "/images/css.png",
    "/images/nodejs.png",
    "/images/expressjs.png",
    "/images/mongodb.png",
    "/images/postgresql.png",
    "/images/github.png",
    "/images/docker.png",
    "/images/linux.png",
    "/images/vscode.png",
  ];

  return (
    <section id="skills"
      className="px-4 py-12 mx-auto justify-center items-center grid mt-2 mb-2" >
      <div>
        <h2 className="text-2xl font-bold mb-4">Skills: Front-End, Back-End, Dev Tools</h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skill.map((src, index) => (
          <div
            key={index}
            className="bg-gray-800 w-[100px] h-[100px] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform"
          >
            <img src={src} alt={`Image ${index + 1}`} className="object-fill" />
          </div>
        ))}
      </div>
    </section>
  );

}
