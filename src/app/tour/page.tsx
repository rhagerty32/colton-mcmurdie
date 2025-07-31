import Layout from '@/components/Layout';
import { Music } from 'lucide-react';

export default function TourPage() {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Layout>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-western text-4xl md:text-6xl font-bold text-primary mb-6">
                        Tour Dates
                    </h1>
                    <p className="text-xl text-text/70 max-w-3xl mx-auto">
                        Join me live for authentic country music and unforgettable experiences
                    </p>
                </div>
            </section>

            {/* Upcoming Shows */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        Upcoming Shows
                    </h2>

                    {/* {upcomingShows.length > 0 ? (
                        <div className="space-y-6">
                            {upcomingShows.map((show, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-lg shadow-lg overflow-hidden ${show.featured ? 'border-2 border-accent' : ''
                                        }`}
                                >
                                    {show.featured && (
                                        <div className="bg-accent text-text px-4 py-2 text-center font-semibold">
                                            Featured Event
                                        </div>
                                    )}

                                    <div className="p-6 lg:p-8">
                                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                                            <div className="text-center lg:text-left">
                                                <div className="flex items-center justify-center lg:justify-start text-primary mb-2">
                                                    <Calendar className="w-5 h-5 mr-2" />
                                                    <span className="font-semibold">Date</span>
                                                </div>
                                                <p className="text-text font-medium">
                                                    {formatDate(show.date)}
                                                </p>
                                                <div className="flex items-center justify-center lg:justify-start text-text/60 mt-1">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    <span className="text-sm">{show.time}</span>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-2">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                                                        {show.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-text mb-2">
                                                    {show.title}
                                                </h3>
                                                <div className="flex items-start text-text/70 mb-2">
                                                    <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <p className="font-medium">{show.venue}</p>
                                                        <p className="text-sm">{show.location}</p>
                                                    </div>
                                                </div>
                                                {show.description && (
                                                    <p className="text-text/80 text-sm">{show.description}</p>
                                                )}
                                            </div>

                                            <div className="text-center lg:text-right">
                                                <a
                                                    href={show.ticketUrl}
                                                    className="inline-flex items-center bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                                                >
                                                    Get Tickets
                                                    <ExternalLink className="w-4 h-4 ml-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : ( */}
                    <div className="text-center py-12">
                        <Music className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-text mb-2">No Shows Scheduled</h3>
                        <p className="text-text/60 mb-6">
                            Check back soon for upcoming tour dates and special events.
                        </p>
                    </div>
                    {/* )} */}
                </div>
            </section>

            {/* Booking Information */}
            <section className="py-16 bg-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                            Book Colton McMurdie
                        </h2>
                        <p className="text-lg text-text/80 mb-8 leading-relaxed">
                            Interested in booking Colton for your venue, festival, or private event?
                            Get in touch for availability and booking information.
                        </p>

                        <div className="bg-white rounded-lg p-8 shadow-md">
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                Available for:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Concerts & Festivals
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Rodeo Events
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Private Events
                                    </li>
                                </ul>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Corporate Events
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Fundraisers
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        Community Events
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-block bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Contact for Booking
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stay Updated */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-6">
                        Stay Updated
                    </h2>
                    <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
                        Follow me on social media to be the first to know about new tour dates and special events.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.tiktok.com/@cjmcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Follow on TikTok
                        </a>
                        <a
                            href="https://www.instagram.com/colton_mcmurdie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-secondary transition-colors"
                        >
                            Follow on Instagram
                        </a>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
