import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RedirectForm() {
  const [text, setText] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [redirectType, setRedirectType] = useState("direct");
  const [redirectDelay, setRedirectDelay] = useState<number>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [processingDelay, setProcessingDelay] = useState<number>(0);

  const redirectOptions = [
    { value: "direct", label: "Direct (location.href)" },
    { value: "replace", label: "Replace (location.replace)" },
    { value: "server", label: "Server-side Redirect" },
  ] as const;

  const handleRedirect = () => {
    switch (redirectType) {
      case "direct":
        window.location.href = text;
        break;
      case "replace":
        window.location.replace(text);
        break;
      case "server":
        window.open(
          `api/redirect?url=${encodeURIComponent(
            text
          )}&processingDelay=${processingDelay}&redirectDelay=${redirectDelay}`,
          "_blank"
        );
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700"
    >
      <div className="mb-6">
        <label
          htmlFor="redirectUrl"
          className="block mb-2 text-green-50 text-left"
        >
          Redirect URL
        </label>
        <input
          id="redirectUrl"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter redirect URL"
          className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 text-green-50 placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300"
        />
      </div>

      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="w-full mb-6 p-3 text-green-400 hover:text-green-300 transition-colors duration-300 focus:outline-none"
      >
        {showAdvanced ? "Hide" : "Show"} Advanced Settings
      </button>

      {showAdvanced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 space-y-4"
        >
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-4 mb-2 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400 transition-colors duration-300 text-green-50 text-left flex justify-between items-center hover:bg-gray-600/50"
            >
              <span className="text-green-50">
                {
                  redirectOptions.find((opt) => opt.value === redirectType)
                    ?.label
                }
              </span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-green-400"
              >
                <path d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-gray-700 rounded-lg border border-gray-600 shadow-lg overflow-hidden"
                >
                  {redirectOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setRedirectType(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full p-4 text-left hover:bg-gray-600 transition-colors duration-200 ${
                        redirectType === option.value
                          ? "bg-gray-600 text-green-400"
                          : "text-green-50"
                      }`}
                      whileHover={{ backgroundColor: "rgba(75, 85, 99, 0.9)" }}
                    >
                      {option.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {redirectType === "server" && (
            <div className="space-y-4">
              <div className="relative flex flex-col">
                <label
                  htmlFor="redirectDelay"
                  className="block mb-2 text-green-50 text-left"
                >
                  Redirect Delay (seconds)
                </label>
                <div className="relative flex items-center">
                  <motion.input
                    id="redirectDelay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    type="number"
                    value={String(redirectDelay)}
                    onChange={(e) => {
                      const value = Math.max(
                        0,
                        parseInt(e.target.value || "0")
                      );
                      setRedirectDelay(value);
                    }}
                    placeholder="Redirect delay (seconds)"
                    min="0"
                    className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400 transition-colors duration-300 pr-16 text-green-50 placeholder-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="absolute right-0 h-full flex flex-col border-l border-gray-600">
                    <button
                      type="button"
                      onClick={() =>
                        setRedirectDelay((prev) => Math.max(0, prev + 1))
                      }
                      className="flex-1 px-4 hover:bg-gray-600/50 text-green-400 transition-colors duration-200 rounded-tr-lg"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setRedirectDelay((prev) => Math.max(0, prev - 1))
                      }
                      className="flex-1 px-4 hover:bg-gray-600/50 text-green-400 transition-colors duration-200 rounded-br-lg border-t border-gray-600"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col">
                <label
                  htmlFor="processingDelay"
                  className="block mb-2 text-green-50 text-left"
                >
                  Processing Delay (seconds)
                </label>
                <div className="relative flex items-center">
                  <motion.input
                    id="processingDelay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    type="number"
                    value={String(processingDelay)}
                    onChange={(e) => {
                      const value = Math.max(
                        0,
                        parseInt(e.target.value || "0")
                      );
                      setProcessingDelay(value);
                    }}
                    placeholder="Processing delay (seconds)"
                    min="0"
                    className="w-full p-4 bg-gray-700/50 rounded-lg border border-gray-600 focus:outline-none focus:border-green-400 transition-colors duration-300 pr-16 text-green-50 placeholder-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="absolute right-0 h-full flex flex-col border-l border-gray-600">
                    <button
                      type="button"
                      onClick={() =>
                        setProcessingDelay((prev) => Math.max(0, prev + 1))
                      }
                      className="flex-1 px-4 hover:bg-gray-600/50 text-green-400 transition-colors duration-200 rounded-tr-lg"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setProcessingDelay((prev) => Math.max(0, prev - 1))
                      }
                      className="flex-1 px-4 hover:bg-gray-600/50 text-green-400 transition-colors duration-200 rounded-br-lg border-t border-gray-600"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <motion.button
        onClick={handleRedirect}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full p-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 rounded-lg font-bold transition-all duration-300 shadow-lg text-green-50"
      >
        Redirect Now
      </motion.button>
    </motion.div>
  );
}
