import Layout from '@/components/Layout';
import { Music, Heart, Star, Award } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="font-western text-4xl md:text-6xl font-bold text-primary mb-6">
                                About Colton
                            </h1>
                            <p className="text-xl text-text/70 leading-relaxed">
                                A country music artist bringing authentic western sound and storytelling
                                that captures the spirit of the modern cowboy lifestyle.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-lg">
                                <Image
                                    src={'https://cdn.spotparking.app/public/misc/colton/blueShirt.JPEG'}
                                    alt={`Gold Buckles Cover`}
                                    width={800}
                                    height={800}
                                    className="object-cover rounded-lg z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography */}
            <section className="py-16 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-text/80 mb-6 leading-relaxed">
                            Born and raised with deep western values, I strive to represent the authentic voice
                            of modern country music. My journey began in the heartland of America, where I developed
                            a profound appreciation for the stories and traditions that define the western way of life.
                        </p>

                        <p className="text-lg text-text/80 mb-6 leading-relaxed">
                            In 2017, at just 17 years old, I was involved in a rollover car accident that resulted in the loss of use of my legs. Refusing to let this define me, I dedicated myself to rehabilitation and, within a year, was back in the saddle—riding horses and team roping once again. My determination also led me to attend auctioneering school and become an auctioneer.
                        </p>

                        <p className="text-lg text-text/80 mb-6 leading-relaxed">
                            I taught myself how to play the guitar, building on a lifelong love of singing that began in my childhood. My music is deeply rooted in real experiences—from ranch life to rodeo arenas, each song tells a story that resonates with anyone who values hard work, integrity, and the pursuit of dreams. My authentic approach to songwriting draws from personal experiences and the rich tapestry of western culture.
                        </p>

                        <p className="text-lg text-text/80 mb-8 leading-relaxed">
                            With influences ranging from classic country legends to contemporary artists, I have developed a sound that honors tradition while speaking to today’s audiences. My commitment to authenticity and musical craftsmanship has earned me a growing fanbase who appreciate genuine storytelling and heartfelt performances. I hope you enjoy my music and invite you to follow along on social media using the links below.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values & Approach */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        What Drives the Music
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary mb-2">Authenticity</h3>
                            <p className="text-text/70">
                                Every song comes from real experiences and genuine emotions,
                                creating music that truly connects with listeners.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Star className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary mb-2">Tradition</h3>
                            <p className="text-text/70">
                                Honoring the rich heritage of country music while bringing
                                fresh perspectives to timeless themes.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Music className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary mb-2">Craftsmanship</h3>
                            <p className="text-text/70">
                                Dedicated to creating quality music with attention to detail
                                in every aspect of songwriting and performance.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg text-primary mb-2">Excellence</h3>
                            <p className="text-text/70">
                                Striving for excellence in every performance, recording,
                                and interaction with fans and fellow musicians.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Musical Journey */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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

                        <div className="order-1 lg:order-2">
                            <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                                The Musical Journey
                            </h2>
                            <p className="text-lg text-text/80 mb-6 leading-relaxed">
                                Colton&apos;s musical journey reflects a deep commitment to the art of country music.
                                From intimate acoustic performances to full-band concerts, he brings the same
                                level of passion and authenticity to every stage.
                            </p>
                            <p className="text-lg text-text/80 mb-6 leading-relaxed">
                                His performances often feature a mix of original compositions and carefully
                                selected covers that showcase his vocal range and musical versatility. Whether
                                performing at rodeo events, festivals, or intimate venues, Colton connects with
                                audiences through genuine storytelling and heartfelt delivery.
                            </p>
                            <p className="text-lg text-text/80 mb-8 leading-relaxed">
                                The release of &quot;Gold Buckles&quot; marks an important milestone in his career,
                                representing both his artistic growth and his commitment to creating music
                                that resonates with fans of authentic country music.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect Section */}
            <section className="py-16 bg-primary text-secondary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-western text-3xl md:text-4xl font-bold mb-6">
                        Connect With Colton
                    </h2>
                    <p className="text-xl text-secondary/90 mb-8 leading-relaxed">
                        Music is about connection, and I&apos;d love to connect with you. Follow along
                        for behind-the-scenes content, tour updates, and new music announcements.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://www.tiktok.com/@cjmcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-colors"
                        >
                            Follow on TikTok
                        </a>
                        <a
                            href="https://www.instagram.com/colton_mcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-colors"
                        >
                            Follow on Instagram
                        </a>
                        <a
                            href="/contact"
                            className="bg-transparent border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-primary transition-colors"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
