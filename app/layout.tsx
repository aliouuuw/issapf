"use client";
import { DM_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) :
          <>{children}</>}
      </body>
    </html>
  );
}
