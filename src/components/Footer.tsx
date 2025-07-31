import Link from 'next/link';
import { Instagram, Music, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Artist Info */}
                    <div>
                        <h3 className="font-script text-2xl font-semibold mb-4">
                            Colton McMurdie
                        </h3>
                        <p className="text-secondary/80 mb-4">
                            Country music artist bringing authentic western sound and storytelling.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/music" className="text-secondary/80 hover:text-secondary transition-colors">
                                    Music
                                </Link>
                            </li>
                            <li>
                                <Link href="/tour" className="text-secondary/80 hover:text-secondary transition-colors">
                                    Tour Dates
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-secondary/80 hover:text-secondary transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-secondary/80 hover:text-secondary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.tiktok.com/@cjmcmurdie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary/80 hover:text-secondary transition-colors"
                                aria-label="TikTok"
                            >
                                <Music className="h-6 w-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/colton_mcmurdie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary/80 hover:text-secondary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="/contact"
                                className="text-secondary/80 hover:text-secondary transition-colors"
                                aria-label="Contact"
                            >
                                <Mail className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-secondary/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-secondary/60 text-sm">
                        © {currentYear} Colton McMurdie. All rights reserved.
                    </p>
                    <p className="text-secondary/60 text-sm mt-2 sm:mt-0">
                        Help keep the music alive - donations accepted
                    </p>
                </div>
            </div>
        </footer>
    );
}
