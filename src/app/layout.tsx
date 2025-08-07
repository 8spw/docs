import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Kreatiko Docs",
  description: "Kreatiko Documentation, How to style your profile",
};

const banner = <Banner storageKey="some-key">Kreatiko is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          className="w-6"
          alt="Kreatiko"
          width={32}
          height={32}
        />
        <b className="font-bold">Kreatiko</b>
      </div>
    }
  />
);

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout banner={banner} navbar={navbar} pageMap={await getPageMap()}>
          {children}
        </Layout>
      </body>
    </html>
  );
}
