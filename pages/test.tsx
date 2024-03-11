import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState("");

  const resetText = () => setText("");

  useEffect(() => {
    setTimeout(() => {
      window.location.replace(
        "https://test.links.banqup.com/payment?paymentId=2d5d676a-d266-4edb-84fd-cfe40c123ff2&successRedirect=https%3A%2F%2Fbanqupone.free.beeceptor.com%2Fsuccess-payment-redirect&failureRedirect=https%3A%2F%2Fbanqupone.free.beeceptor.com%2Ffailure-payment-redirect"
      );
    }, 2000);
  }, []);

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
