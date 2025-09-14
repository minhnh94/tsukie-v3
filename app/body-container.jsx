"use client";
import { Analytics } from "@vercel/analytics/react";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";

export default function BodyContainer({ children }) {
  return (
    <PlausibleProvider
      domain="tsukie.com"
      scriptProps={{ defer: true }}
      trackOutboundLinks={true}
      taggedEvents={true}
      customDomain="https://plausible.tsukie.com"
      selfHosted={true}
    >
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
        <Analytics />
      </ThemeProvider>
    </PlausibleProvider>
  );
}
