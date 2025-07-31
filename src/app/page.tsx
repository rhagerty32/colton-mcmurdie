import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import StreamingPlatforms from '@/components/StreamingPlatforms';
import Image from 'next/image';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <StreamingPlatforms />

            {/* About Preview Section */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                                Authentic Country. Real Stories.
                            </h2>
                            <p className="text-lg text-text/80 mb-6 leading-relaxed">
                                Born and raised with western values, Colton McMurdie brings authentic country music
                                that tells real stories from the heart of America. From rodeo arenas to concert halls,
                                his music captures the spirit of the modern cowboy lifestyle.
                            </p>
                            <p className="text-lg text-text/80 mb-8 leading-relaxed">
                                With influences ranging from classic country legends to contemporary artists,
                                Colton creates a sound that&apos;s both timeless and fresh, connecting with audiences
                                who value genuine storytelling and musical craftsmanship.
                            </p>
                            <a
                                href="/about"
                                className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                        <div className="relative">
                            <div className="order-2 lg:order-1">
                                <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-lg">
                                    <Image
                                        src={'https://cdn.spotparking.app/public/misc/colton/guitar.jpeg'}
                                        alt={`Gold Buckles Cover`}
                                        width={800}
                                        height={800}
                                        className="object-cover rounded-lg z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="py-16 bg-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                        Stay Connected
                    </h2>
                    <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
                        Follow me on social media for behind-the-scenes content, tour updates, and new music announcements.
                    </p>

                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.tiktok.com/@cjmcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
                        >
                            <div className="text-2xl mb-2">🎵</div>
                            <div className="font-semibold text-primary">TikTok</div>
                            <div className="text-sm text-text/60">@colton_mcmurdie_music</div>
                        </a>

                        <a
                            href="https://www.instagram.com/colton_mcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border"
                        >
                            <div className="text-2xl mb-2">📸</div>
                            <div className="font-semibold text-primary">Instagram</div>
                            <div className="text-sm text-text/60">@colton_mcmurdie</div>
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
