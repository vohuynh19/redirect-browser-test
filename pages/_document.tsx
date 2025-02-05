import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Browser Redirect Simulation Tool | Test Browser Redirects |
          TryRedirect
        </title>
        <meta
          name="title"
          content="Browser Redirect Simulation Tool | Test Browser Redirects | TryRedirect"
        />
        <meta
          name="description"
          content="Free online web redirect simulation tool. Test and analyze different browser redirect methods including client-side, server-side, and delayed redirects in a safe environment."
        />
        <meta
          name="keywords"
          content="web redirect simulation, redirect testing tool, browser redirect test, URL redirection simulator, HTTP redirect testing"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="TryRedirect" />
        <meta
          property="og:title"
          content="Web Redirect Simulation Tool | Test Browser Redirects | TryRedirect"
        />
        <meta
          property="og:description"
          content="Free online web redirect simulation tool. Test and analyze different browser redirect methods including client-side, server-side, and delayed redirects in a safe environment."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:site_name" content="Try Redirect" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Redirect Simulation Tool | Test Browser Redirects"
        />
        <meta
          name="twitter:description"
          content="Free online tool to test and analyze different browser redirect methods in a safe environment."
        />
        <meta name="twitter:image" content="/preview.png" />
        <link rel="canonical" href="https://tryredirect.net" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
