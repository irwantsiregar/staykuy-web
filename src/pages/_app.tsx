import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import Layout from "@/components/layouts/Layout";

const inter = Inter({
  subsets: ["latin"],
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <main className={cn(inter.className)}>
        <Layout title="Home Page - Guest">
          <Component {...pageProps} />
        </Layout>
      </main>
    </HeroUIProvider>
  );
}
