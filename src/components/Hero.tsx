import Link from 'next/link';
import { Play, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Background with Black and White Photo Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-100">
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-60 filter grayscale" />
            </div>

            {/* Content */}
            <div className='flex flex-col items-center justify-start -mt-16 lg:-mt-32 gap-10'>
                <div className="w-[400px]">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-lg">
                        <Image
                            src={'https://cdn.spotparking.app/public/misc/colton/gold_buckles.png'}
                            alt={`Gold Buckles Cover`}
                            width={800}
                            height={800}
                            className="object-cover rounded-lg z-10"
                        />
                    </div>
                </div>
                <div className="relative z-10 text-center max-w-6xl mx-auto px-4">

                    {/* Featured Event - Match the promo design */}
                    <div className="bg-primary text-white p-8 mb-8 max-w-2xl mx-auto transform -skew-y-1">
                        <h3 className="font-western text-4xl md:text-6xl font-black mb-4 leading-none">
                            8/29/25
                        </h3>
                        <h4 className="text-xl md:text-2xl font-bold mb-2 uppercase tracking-wide">NEW SONG RELEASE</h4>
                        <p className="text-sm md:text-base mb-4 uppercase tracking-wider">
                            &quot;Gold Buckles&quot; • Available Everywhere August 29th
                        </p>
                        <p className="text-xs md:text-sm opacity-90">
                            Mark your calendar and follow for updates!
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/music"
                            className="inline-flex items-center bg-accent text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent/90 transition hover:-translate-y-[2px] hover:shadow-lg"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Pre-save Now
                        </Link>
                        <Link
                            href="/tour"
                            className="inline-flex items-center bg-transparent border-2 border-accent text-accent px-8 py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition hover:-translate-y-[2px] hover:shadow-lg"
                        >
                            <Calendar className="w-4 h-4 mr-2" />
                            Tour Dates
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 lg:bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-accent/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
