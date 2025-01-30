import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800/80 backdrop-blur-md border-b border-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
        >
          TryRedirect
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="https://github.com/vohuynh19"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors duration-300"
        >
          GitHub
        </motion.a>
      </div>
    </nav>
  );
}
