import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Symoura - Invoice Processing Automation for UK SMEs",
  description: "Custom invoice automation workflows for UK SMEs. Built around your existing systems, without the enterprise price tag.",
  keywords: ["invoice automation", "finance automation", "UK SME", "accounting automation", "invoice processing"],
  authors: [{ name: "Symoura" }],
  openGraph: {
    title: "Symoura - Invoice Processing Automation for UK SMEs",
    description: "Custom invoice automation workflows for UK SMEs. Built around your existing systems, without the enterprise price tag.",
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
        {/* Fixed watermark */}
        <div
          className="fixed inset-0 opacity-[0.4] pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/logo-watermark-new.png)',
            backgroundSize: 'auto 120%',
            backgroundPosition: 'right -15% center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
