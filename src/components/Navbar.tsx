export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/10">

      <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">

        {/* LEFT LOGO */}

        <div className="w-[220px]">

          <h1 className="text-3xl font-black gradient-text">
            GenAI Engine
          </h1>

        </div>

        {/* CENTER NAVIGATION */}

        <div className="flex-1 flex justify-center">

          <div className="flex gap-14 text-[17px] font-medium text-gray-300">

            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#workflow"
              className="hover:text-white transition"
            >
              Workflow
            </a>

            <a
              href="#architecture"
              className="hover:text-white transition"
            >
              Architecture
            </a>

            <a
              href="#platforms"
              className="hover:text-white transition"
            >
              Platforms
            </a>

          </div>

        </div>

        {/* RIGHT BUTTON */}

        <div className="w-[220px] flex justify-end">

          <button className="btn text-sm">
            Launch AI
          </button>

        </div>

      </div>

    </nav>
  );
}