import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RedirectPage() {
  const router = useRouter();
  const { link } = router.query;
  const [countdown, setCountdown] = useState(10); // Set initial countdown value

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // Decrease countdown every second
      return () => clearTimeout(timer); // Cleanup on unmount
    } else if (link) {
      // Redirect when countdown reaches zero
      // window.location.href = String(link);
      document.location = String(link);
    }
  }, [countdown, link]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-lg font-bold text-green-400">Redirecting...</h1>
        <p className="mt-2">You will be redirected in {countdown} seconds.</p>
        <p className="mt-4">
          If nothing happens, click{" "}
          <a href={link as string} className="text-green-400 hover:underline">
            here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
