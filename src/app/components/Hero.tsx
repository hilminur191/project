import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-16 py-12">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold mb-2">Hilmi Nurbani</h1>
        <h2 className="text-xl mb-6 text-gray-800 dark:text-gray-300">
          Full-Stack Web Developer
        </h2>
        <p className="mb-6 text-gray-800 dark:text-gray-300">
          Hi, I'm a Fullstack Web Developer passionate about building seamless
          digital experience-from beautiful frontends to powerful backends.
        </p>
        <button className="bg-blue-500 text-white px-4 py-4 rounded hover:bg-blue-600">
          Get in Touch
        </button>
      </div>
      <Image
        src="/hilmi.jpg"
        alt="Hilmi Photo"
        width={200}
        height={200}
        sizes="(max-width: 768px) 100vw, 300px"
        className="rounded-full mt-8 md:mt-0"
      />
    </section>
  );
}
