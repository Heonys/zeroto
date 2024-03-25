import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AuthProvider from "./api/auth/Provider";
import QueryClientProvider from "./QueryClientProvider";
import RecoilProvider from "./RecoilProvider";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Zeroto",
  description: "From zero to Github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f3efee]">
        <Theme>
          <AuthProvider>
            <RecoilProvider>
              <QueryClientProvider>
                <div
                  className={`flex items-center relative ${notoSansKr.className}`}
                >
                  <div className="self-start pl-2 mt-2 fixed top-1 left-1">
                    <Sidebar />
                  </div>
                  <main className="ml-4 mr-5 mt-2 flex flex-col w-[93vw] pt-2 absolute left-[65px] top-0">
                    <Navbar />
                    {children}
                  </main>
                </div>
              </QueryClientProvider>
            </RecoilProvider>
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
