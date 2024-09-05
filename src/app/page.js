import HomePage from "./pages/page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9635869266478553"
          crossOrigin="anonymous"
        ></script>
      </head>
      <main className="flex min-h-screen flex-col bg-white ">
        <HomePage />
      </main>
    </>
  );
}
