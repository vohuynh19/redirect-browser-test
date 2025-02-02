import { motion } from "framer-motion";

export default function GuideSection() {
  return (
    <section className="py-16 bg-gray-800 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 50 Q25 40 50 50 T100 50 V100 H0Z"
            fill="url(#gradient)"
            animate={{
              d: [
                "M0 50 Q25 40 50 50 T100 50 V100 H0Z",
                "M0 50 Q25 60 50 50 T100 50 V100 H0Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, yoyo: true }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-6 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-green-400/50 transition-colors duration-300"
          >
            <div className="text-2xl font-bold text-green-400 mb-4">Step 1</div>
            <p className="text-gray-300">
              Enter your target URL and select the redirect type to begin
              testing your navigation flow.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-6 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-green-400/50 transition-colors duration-300"
          >
            <div className="text-2xl font-bold text-green-400 mb-4">Step 2</div>
            <p className="text-gray-300">
              Set your preferred delay timing and customize additional
              parameters for your redirect test.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-6 bg-gray-700/50 backdrop-blur-sm rounded-lg border border-gray-600 hover:border-green-400/50 transition-colors duration-300"
          >
            <div className="text-2xl font-bold text-green-400 mb-4">Step 3</div>
            <p className="text-gray-300">
              {`Click "Test Redirect" and watch the countdown timer as your
              redirect simulation runs in real-time.`}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
