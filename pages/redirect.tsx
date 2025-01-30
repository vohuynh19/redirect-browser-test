import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RedirectPage() {
  const router = useRouter();
  const { link, timeout } = router.query;
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    // Only initialize countdown when query params are available
    if (timeout && countdown === null) {
      setCountdown(parseInt(timeout as string));
    }
  }, [timeout, countdown]);

  useEffect(() => {
    // Only start countdown when it's properly initialized
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && link) {
      document.location = String(link);
    }
  }, [link, countdown]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white ${inter.className}`}
    >
      <div className="text-center relative">
        <motion.div
          className="absolute -inset-4 rounded-full border-2 border-green-400"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.h1
          className="text-2xl font-bold text-green-400 mb-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Redirecting...
        </motion.h1>

        <div className="relative inline-flex items-center justify-center mb-8">
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            <circle
              className="text-gray-700"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            <motion.circle
              className="text-green-400"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              initial={{ pathLength: 1 }}
              animate={{
                pathLength: countdown
                  ? countdown / (parseInt(timeout as string) || 3)
                  : 1,
              }}
              transition={{ duration: 1, ease: "linear" }}
              style={{
                strokeDasharray: "283",
                transformOrigin: "center",
                transform: "rotate(-90deg)",
              }}
            />
          </svg>
          <motion.span
            className="absolute text-4xl font-bold"
            key={countdown}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {countdown}
          </motion.span>
        </div>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          You will be redirected in {countdown} seconds
        </motion.p>

        <motion.p
          className="mt-6 text-gray-400"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          If nothing happens,{" "}
          <a
            href={link as string}
            className="text-green-400 hover:underline hover:text-green-300 transition-colors"
          >
            click here
          </a>
        </motion.p>
      </div>
    </main>
  );
}
