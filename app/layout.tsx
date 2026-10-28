import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Symoura - Custom AI Automation Solutions",
  description: "Custom AI automation workflows built around your existing systems. AI agents, document processing, workflow automation, invoice processing, and CRM automation.",
  keywords: ["AI automation", "workflow automation", "AI agents", "document processing", "invoice processing", "CRM automation", "business automation"],
  authors: [{ name: "Symoura" }],
  openGraph: {
    title: "Symoura - Custom AI Automation Solutions",
    description: "Custom AI automation workflows built around your existing systems. AI agents, document processing, workflow automation, invoice processing, and CRM automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Fixed logo watermark - lines only, tinted gold */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="logo-mark absolute top-1/2 -translate-y-1/2 -right-[12%] h-[105vh] aspect-square text-gold-light opacity-[0.18]"
          />
        </div>
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
