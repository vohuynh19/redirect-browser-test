import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");

  const resetText = () => setText("");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white ${inter.className}`}
    >
      <form className="flex flex-col items-center w-full max-w-md">
        <label className="mb-4 text-lg font-bold text-green-400">
          Redirect Link
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter link"
          className="border border-gray-700 bg-gray-800 rounded-lg p-3 mb-4 w-full text-white placeholder-gray-400"
        />
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={resetText}
            className="bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-2 transition"
          >
            RESET
          </button>
          <a
            href={text}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white rounded-lg px-4 py-2 transition"
          >
            PRESS LINK
          </a>
        </div>
      </form>

      <div className="flex flex-col items-center mt-6 space-y-2">
        <button
          onClick={() =>
            window.open(
              `api/redirect?url=${encodeURIComponent(text)}`,
              "_blank"
            )
          }
          className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 transition"
        >
          Server Side Redirect
        </button>

        <button
          onClick={() =>
            window.open(`/redirect?link=${encodeURIComponent(text)}`, "_blank")
          }
          className="bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg px-4 py-2 transition"
        >
          Intercept Page Redirect
        </button>

        <button
          onClick={() => window.location.replace(text)}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 transition"
        >
          window.location.replace
        </button>
        <button
          onClick={() => (window.location.href = text)}
          className="bg-purple-600 hover:bg-purple-500 text-white rounded-lg px-4 py-2 transition"
        >
          window.location.href
        </button>
      </div>

      <footer className="mt-10 text-center">
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://github.com/vohuynh19"
            className="text-green-400 hover:underline"
          >
            vohuynh19
          </a>
          . Check out my GitHub for more amazing projects!
        </p>
      </footer>
    </main>
  );
}
