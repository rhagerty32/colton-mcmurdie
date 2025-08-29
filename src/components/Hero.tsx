import Link from 'next/link';
import { Play, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Background with Black and White Photo Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-100">
                <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-60 filter grayscale" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-start -mt-8 md:-mt-16 lg:-mt-32 gap-6 md:gap-10 w-full px-4">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px]">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center shadow-lg">
                        <Image
                            src={'https://cdn.spotparking.app/public/misc/colton/gold_buckles.png'}
                            alt={`Gold Buckles Cover`}
                            width={800}
                            height={800}
                            className="object-cover rounded-lg z-10 w-full h-full"
                        />
                    </div>
                </div>
                <div className="relative z-10 text-center max-w-2xl mx-auto px-2 sm:px-4">

                    {/* Featured Event - Match the promo design */}
                    <div className="bg-primary text-white p-4 sm:p-8 mb-6 sm:mb-8 max-w-full sm:max-w-2xl mx-auto transform -skew-y-1">
                        <h3 className="font-western text-3xl sm:text-4xl md:text-6xl font-black mb-2 sm:mb-4 leading-none">
                            8/29/25
                        </h3>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 uppercase tracking-wide">NEW SONG RELEASE</h4>
                        <p className="text-xs sm:text-sm md:text-base uppercase tracking-wider">
                            &quot;Gold Buckles&quot; • Available Everywhere August 29th
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link
                            href="http://vyd.co/GoldBuckles"
                            className="inline-flex items-center justify-center bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wide hover:bg-accent/90 transition hover:-translate-y-[2px] hover:shadow-lg text-sm sm:text-base"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Listen Now
                        </Link>
                        {/* <Link
                            href="/tour"
                            className="inline-flex items-center justify-center bg-transparent border-2 border-accent text-accent px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition hover:-translate-y-[2px] hover:shadow-lg text-sm sm:text-base"
                        >
                            <Calendar className="w-4 h-4 mr-2" />
                            Tour Dates
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-4 lg:bottom-10 hidden lg:block left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-accent/50 rounded-full mt-2"></div>
                </div>
            </div> */}
        </section>
    );
}
