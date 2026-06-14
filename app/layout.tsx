import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clarity PR — Strategic Public Relations",
  description:
    "Boutique PR consultancy specialising in brand launches, media relations, and strategic communications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}var l=localStorage.getItem('locale');if(l){d.lang=l}else if(navigator.language.startsWith('ja')){d.lang='ja'};}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.netlifyIdentity){window.netlifyIdentity.on("init",function(user){if(!user){window.netlifyIdentity.on("login",function(){document.location.href="/admin/"})}})}`,
          }}
        />
      </body>
    </html>
  );
}
