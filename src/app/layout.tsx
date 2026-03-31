import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "NewCarSuperstore",
  description: "Modern marketplace for new car deals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-ink-900 antialiased">
        <Providers>{children}</Providers>
      </body>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5Z13V7V5JW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5Z13V7V5JW');
</script>
      
    </html>
  );
}
