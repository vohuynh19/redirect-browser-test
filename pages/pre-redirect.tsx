import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function RedirectPage() {
  const router = useRouter();
  const { link } = router.query;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `redirect?url=${String(link)}`;
    }, 1000);
  }, [link]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white ${inter.className}`}
    >
      Loading...
    </main>
  );
}
