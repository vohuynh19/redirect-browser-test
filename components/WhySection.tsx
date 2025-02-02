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
              No Backend Required
            </h3>
            <p className="text-gray-300">
              Test deeplinks, app links, and universal links without setting up
              endpoints. Save development time by instantly simulating various
              redirect scenarios in a controlled environment, perfect for
              frontend prototyping and testing.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Comprehensive Testing
            </h3>
            <p className="text-gray-300">
              Test all redirect types including client-side navigation, URL
              replacements, and timed redirects. Perfect for validating mobile
              deep linking behavior and cross-platform navigation flows before
              implementation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Developer-Friendly
            </h3>
            <p className="text-gray-300">
              Visual countdown timers, progress indicators, and detailed
              redirect information help you understand exactly how your
              redirects behave. Ideal for debugging and optimizing user
              navigation experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
