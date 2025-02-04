import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import RedirectForm from "@/components/RedirectForm";
import GuideSection from "@/components/GuideSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white ${inter.className}`}
    >
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="py-20 px-4 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
          initial={{ rotate: 0, scale: 0.8, opacity: 0.1 }}
          animate={{ rotate: 360, scale: 1, opacity: 0.15 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-green-400">
            <path d="M50 0 L100 50 L50 100 L0 50Z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-0 w-48 h-48 translate-x-1/2"
          initial={{ rotate: 0, scale: 0.8, opacity: 0.1 }}
          animate={{ rotate: -360, scale: 1, opacity: 0.15 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-400">
            <circle cx="50" cy="50" r="45" fill="currentColor" />
          </svg>
        </motion.div>

        <div className="container mx-auto text-center relative z-10">
          <div className="h-4"></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-bold mb-6 mt-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Server-Side Redirect Testing Made Easy
          </motion.h1>
          <p className="text-xl mb-16 text-gray-300">
            Test server-side redirects without setting up backend endpoints
          </p>

          <RedirectForm />

          {/* Floating Dots */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + "%",
                  y: Math.random() * 100 + "%",
                  opacity: 0,
                }}
                animate={{
                  y: ["0%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
                style={{
                  left: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <GuideSection />
      <WhySection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 mb-2">
            &copy; 2025 TryRedirect. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Created by{" "}
            <a
              href="https://linkedin.com/in/brycevo19"
              className="text-green-400 hover:text-green-300"
            >
              Bryce Vo
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            <a
              href="https://github.com/vohuynh19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 mr-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/brycevo19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
