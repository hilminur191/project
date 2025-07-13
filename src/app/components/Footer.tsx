import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-center text-black">
      <div className="max-w-2xl mx-auto">
        <p className="mb-2">
          <span className="font-semibold">Email:</span>
          hilminurbani98@gmail.com
        </p>
        <p className="mb-2">
          <span className="font-semibold">LinkedIn:</span>hilmi nurbani
        </p>
        <p className="mb-2">
          <span className="font-semibold">Github:</span>hilminur
        </p>
        <a
          href="#top"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          <ArrowUp className="mr-2" />
          Back to Top
        </a>
      </div>
    </footer>
  );
}
