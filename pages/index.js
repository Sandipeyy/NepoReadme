import Head from "next/head";
import Script from "next/script";
import Broadcast from "../components/broadcast/Broadcast";
import Footer from "../components/elements/Footer";
import NavBar from "../components/NavBar";
import HomePage from "../components/slides/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>NepoReadme</title>
        <meta name="title" content="NepoReadme" />
        <meta
          name="description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta name="copyright" content="SandipGurung" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://neporeadme.vercel.app" />
        <meta
          property="og:title"
          content="NepoReadme"
        <meta
          property="og:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta property="og:image" content="https://neporeadme.vercel.app/logo.png" />
        <meta property="x:card" content="summary_large_image" />
        <meta property="x:url" content="https://neporeadme.vercel.app" />
        <meta
          property="x:title"
          content="NepoReadme"
        />
        <meta
          property="x:description"
          content="Best Profile Generator, Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !"
        />
        <meta
          property="x:image"
          content="https://neporeadme.vercel.app"
        />
        <link rel="icon" href="/logo.png" />
        {/* Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7377463303850503"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9FEXPTFC17"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9FEXPTFC17', { page_path: window.location.pathname });
            `,
        }}
      />
      <>
        <CrispBanner />
        <div className="overflow-x-hidden max-w-[100vw] p-3 md:p-4 text-green-200">
          <Broadcast />
          <NavBar />
          <HomePage />
          <Footer />
        </div>
      </>
    </>
  );
}