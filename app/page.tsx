import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors font-sans">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-[#2563EA]">Empire Tech</h1>
      </nav>

      <section className="flex flex-col items-center text-center py-20 px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold">
          Hi, I’m <span className="text-[#2563EA]">Empire Tech</span>
        </h2>
        <p className="mt-4 text-lg max-w-2xl">
          A Website Developer, Graphics Designer & Bot Developer.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-2 rounded-xl bg-[#2563EA] text-white hover:opacity-80"
          >
            View My Work
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-5 py-2 rounded-xl border border-[#2563EA] text-[#2563EA] dark:text-white hover:bg-[#2563EA] hover:text-white"
          >
            Hire Me
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border dark:border-gray-700 p-4 hover:shadow-xl transition">
            <Image
              src="/swiftpay.png"
              alt="SwiftPay Platform"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">SwiftPay Platform</h4>
            <p className="text-sm mb-3">
              A modern payment app with wallet, virtual accounts, and secure transfers.
            </p>
            <a
              href="https://swiftpay.net.ng"
              target="_blank"
              className="text-[#2563EA] underline"
            >
              View Project
            </a>
          </div>
          <div className="rounded-xl border dark:border-gray-700 p-4 hover:shadow-xl transition">
            <Image
              src="/telegram-bot.png"
              alt="Telegram Bot Suite"
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">Telegram Bot Suite</h4>
            <p className="text-sm mb-3">
              Custom automation bots for Telegram & WhatsApp, built for businesses.
            </p>
            <a
              href="https://github.com/yourgithub/telegram-bot"
              target="_blank"
              className="text-[#2563EA] underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
        <p className="mb-6">
          Let’s build something great together. Reach out via email or WhatsApp.
        </p>
        <a
          href="mailto:youremail@example.com"
          className="px-6 py-3 rounded-xl bg-[#2563EA] text-white hover:opacity-80"
        >
          Say Hello
        </a>
      </section>

      <footer className="text-center py-6 text-sm opacity-70">
        © {new Date().getFullYear()} Empire Tech. All rights reserved.
      </footer>
    </main>
  );
}