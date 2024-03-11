import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");

  const resetText = () => setText("");

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex">
        <label> Redirect Link </label>
        <div className="ml-4"></div>
        <input
          placeholder="Enter link"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="ml-4"></div>
        <button onClick={() => resetText()}>RESET</button>
      </div>

      <br />

      <a href={text} target="_blank">
        PRESS LINK
      </a>

      <br />

      <button onClick={() => window.location.replace(text)}>
        WINDOW REPLACE HREF
      </button>

      <br />

      <button onClick={() => (window.location.href = text)}>
        WINDOWN CHANGE HREF
      </button>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
