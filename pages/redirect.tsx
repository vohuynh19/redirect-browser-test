import { useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RedirectPage() {
  const router = useRouter();
  const { link } = router.query; // Get the link from the query parameters

  useEffect(() => {
    if (link) {
      const timer = setTimeout(() => {
        window.location.replace(link as string); // Redirect to the specified link
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [link]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-lg font-bold text-green-400">Redirecting...</h1>
        <p className="mt-2">You will be redirected in 2 seconds.</p>
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
