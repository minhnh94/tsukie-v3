import "@/styles/globals.css";
import BodyContainer from "@/app/body-container";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          defer
          data-domain="tsukie.com"
          src="https://plausible.tsukie.com/js/script.outbound-links.pageview-props.tagged-events.js"
        ></script>
        <script>
          window.plausible = window.plausible || function(){" "}
          {(window.plausible.q = window.plausible.q || []).push(arguments)}
        </script>
      </head>
      <body className="font-inter antialiased bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-200 tracking-tight">
        <BodyContainer>{children}</BodyContainer>
      </body>
    </html>
  );
}
