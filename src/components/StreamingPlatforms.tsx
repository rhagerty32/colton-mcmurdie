import { ExternalLink } from 'lucide-react';

interface Platform {
    name: string;
    url: string;
    color: string;
    icon: string;
}

const platforms: Platform[] = [
    {
        name: 'Spotify',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#1DB954]',
        icon: '🎵'
    },
    {
        name: 'Apple Music',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#FA57C1]',
        icon: '🎶'
    },
    {
        name: 'YouTube Music',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#FF0000]',
        icon: '📺'
    },
    {
        name: 'Amazon Music',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#FF9900]',
        icon: '🛒'
    },
    {
        name: 'Pandora',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#005483]',
        icon: '📻'
    },
    {
        name: 'SoundCloud',
        url: 'http://vyd.co/GoldBuckles',
        color: 'bg-[#FF3300]',
        icon: '☁️'
    }
];

export default function StreamingPlatforms() {
    return (
        <section className="py-16 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-western text-3xl md:text-4xl font-bold text-primary mb-4">
                        Listen Everywhere
                    </h2>
                    <p className="text-lg text-text/70 max-w-2xl mx-auto">
                        Stream my music on your favorite platform
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {platforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border"
                        >
                            <div className="text-3xl mb-2">{platform.icon}</div>
                            <h3 className="font-semibold text-text group-hover:text-primary transition-colors">
                                {platform.name}
                            </h3>
                            <ExternalLink className="w-4 h-4 mx-auto mt-2 text-text/50 group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
