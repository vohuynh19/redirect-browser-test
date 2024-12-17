import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RedirectPage() {
  const router = useRouter();
  const { link } = router.query; // Get the link from the query parameters

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

        <Script id="redirect-script">
          {`
            setTimeout(function(){
                function getQueryParam(param) {
                  const urlParams = new URLSearchParams(window.location.search);
                  return urlParams.get(param);
                }
                const link = getQueryParam('link');
                document.location = link;
              }, 2000);
          `}
        </Script>
      </div>
    </main>
  );
}
