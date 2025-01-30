import { motion } from "framer-motion";

export default function WhySection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
            style={{ top: `${(i + 1) * 10}%` }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
            style={{ left: `${(i + 1) * 10}%` }}
          />
        ))}
      </div>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Why Use TryRedirect?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Safe Testing
            </h3>
            <p className="text-gray-300">
              Experiment with different redirect methods in a controlled
              environment before implementing them in your production
              applications. Understand the behavior and implications of each
              approach without risk.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Multiple Methods
            </h3>
            <p className="text-gray-300">
              Compare different redirect techniques including client-side,
              server-side, and delayed redirects. Understand the pros and cons
              of each method to make informed decisions for your projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Educational
            </h3>
            <p className="text-gray-300">
              Learn about browser navigation, URL handling, and various redirect
              mechanisms. Perfect for developers looking to understand web
              navigation patterns and best practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
