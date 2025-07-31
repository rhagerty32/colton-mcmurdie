import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: "Colton McMurdie - Country Music Artist",
    description: "Official website of country music artist Colton McMurdie. Listen to the latest music, tour dates, and more.",
    keywords: "Colton McMurdie, country music, Gold Buckles, tour dates, concerts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-body bg-background text-text antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
