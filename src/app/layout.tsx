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
            <head>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "t1nraym8x8");
                `
                    }}
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-PRM5PKH9LL"></script>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-PRM5PKH9LL');
                        `
                    }}
                />
            </head>
            <body
                className={`${inter.variable} font-body bg-background text-text antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
