import Layout from '@/components/Layout';
import StreamingPlatforms from '@/components/StreamingPlatforms';
import { Play, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MusicPage() {
    const releases = [
        {
            title: "Gold Buckles",
            type: "Single",
            releaseDate: "August 29, 2025",
            description: "A powerful song about perseverance, inspired by the rodeo lifestyle.",
            imageUrl: "https://cdn.spotparking.app/public/misc/colton/gold_buckles.png", // Placeholder
            isLatest: true
        },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-western text-4xl md:text-6xl font-bold text-primary mb-6">
                        Music
                    </h1>
                    <p className="text-xl text-text/70 max-w-3xl mx-auto">
                        Authentic country music that tells real stories from the heart of America
                    </p>
                </div>
            </section>

            {/* Latest Release */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        Latest Release
                    </h2>

                    {releases.map((release, index) => (
                        <div key={index} className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-white border text-text px-3 py-1 rounded-full text-sm font-semibold">
                                            {release.type}
                                        </span>
                                        {release.isLatest && (
                                            <span className="bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                                                Latest
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-western text-3xl md:text-4xl font-bold text-primary mb-4">
                                        &quot;{release.title}&quot;
                                    </h3>

                                    <div className="flex items-center text-text/60 mb-6">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Released {release.releaseDate}
                                    </div>

                                    <p className="text-lg text-text/80 mb-8 leading-relaxed">
                                        {release.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href={'http://vyd.co/GoldBuckles'} className="inline-flex items-center bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition hover:-translate-y-[2px] hover:shadow-lg cursor-pointer">
                                            <Play className="w-5 h-5 mr-2" />
                                            Listen Now
                                        </Link>
                                        <a
                                            href="#streaming-platforms"
                                            className="inline-flex items-center bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition hover:-translate-y-[2px] hover:shadow-lg text-center cursor-pointer"
                                        >
                                            View All Platforms
                                        </a>
                                    </div>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-lg">
                                        <Image
                                            src={release.imageUrl}
                                            alt={`${release.title} Cover`}
                                            width={800}
                                            height={800}
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Streaming Platforms */}
            <div id="streaming-platforms">
                <StreamingPlatforms />
            </div>

            {/* Coming Soon */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                        More Music Coming Soon
                    </h2>
                    <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
                        Stay tuned for upcoming releases and new music. Follow me on social media
                        for the latest updates and behind-the-scenes content from the studio.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.tiktok.com/@cjmcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition hover:-translate-y-[2px] hover:shadow-lg"
                        >
                            Follow on TikTok
                        </a>
                        <a
                            href="https://www.instagram.com/colton_mcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition hover:-translate-y-[2px] hover:shadow-lg"
                        >
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
