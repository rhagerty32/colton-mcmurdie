export const ConfirmationEmailContent = ({ name }: {
    name: string;
}) => {
    return (
        `
        <div class="email-container">
            <div class="header">
                <div class="header-accent"></div>
                <h1>Thanks for reaching out!</h1>
                <div class="artist-name">Colton McMurdie</div>
            </div>
            
            <div class="content-section">
                <div class="greeting">
                    <h2>Hey ${name}!</h2>
                    <p>Thanks for getting in touch through my website. I really appreciate you taking the time to reach out.</p>
                </div>

                <div class="message-section">
                    <p>Your message has been received and I'll be getting back to you soon. In the meantime, feel free to:</p>
                    
                    <ul class="action-list">
                        <li>Follow me on social media for the latest updates</li>
                        <li>Check out my music on all streaming platforms</li>
                        <li>Stay tuned for upcoming shows and releases</li>
                    </ul>
                </div>

                <div class="upcoming-highlight">
                    <div class="highlight-badge">🎵 Coming Soon</div>
                    <h3>"Gold Buckles" - August 29th, 2025</h3>
                    <p>Don't miss my new single dropping on all streaming platforms!</p>
                </div>
            </div>

            <div class="footer">
                <p class="signature">Best,<br><strong>Colton McMurdie</strong></p>
                <p class="website-info">
                    This is an automated response from coltonmcmurdie.com
                </p>
            </div>

            <style>
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #FFFFFF;
                    font-family: 'Inter', Arial, sans-serif;
                    color: #000000;
                    line-height: 1.6;
                }
                
                .header {
                    background: linear-gradient(135deg, #CC0000 0%, #990000 100%);
                    color: white;
                    padding: 40px 20px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .header-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: #f9f9f9;
                }
                
                .header h1 {
                    margin: 0 0 10px 0;
                    font-size: 32px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                }
                
                .artist-name {
                    font-size: 18px;
                    font-weight: 600;
                    opacity: 0.9;
                    letter-spacing: 0.05em;
                }
                
                .content-section {
                    padding: 40px 30px;
                }
                
                .greeting h2 {
                    color: #CC0000;
                    font-size: 24px;
                    font-weight: 700;
                    margin: 0 0 15px 0;
                }
                
                .greeting p {
                    font-size: 18px;
                    margin-bottom: 25px;
                    color: #333;
                }
                
                .message-section p {
                    font-size: 16px;
                    margin-bottom: 20px;
                    color: #333;
                }
                
                .action-list {
                    background: #F9F9F9;
                    padding: 20px 25px;
                    border-left: 4px solid #CC0000;
                    margin: 20px 0;
                }
                
                .action-list li {
                    font-size: 16px;
                    margin: 8px 0;
                    color: #333;
                }
                
                .upcoming-highlight {
                    background: #F9F9F9;
                    padding: 25px;
                    border-radius: 8px;
                    border: 2px solid #CC0000;
                    text-align: center;
                    margin-top: 30px;
                    position: relative;
                }
                
                .highlight-badge {
                    background: #CC0000;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    display: inline-block;
                    margin-bottom: 15px;
                }
                
                .upcoming-highlight h3 {
                    color: #CC0000;
                    font-size: 22px;
                    font-weight: 800;
                    margin: 0 0 10px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                .upcoming-highlight p {
                    color: #333;
                    font-size: 16px;
                    margin: 0;
                    font-weight: 500;
                }
                
                .footer {
                    background: #F9F9F9;
                    padding: 30px 20px;
                    text-align: center;
                    border-top: 3px solid #CC0000;
                }
                
                .signature {
                    font-size: 18px;
                    color: #CC0000;
                    margin: 0 0 15px 0;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }
                
                .website-info {
                    font-size: 12px;
                    color: #666666;
                    margin: 0;
                    font-style: italic;
                }
                
                /* Responsive Design */
                @media (max-width: 600px) {
                    .email-container {
                        margin: 0;
                    }
                    
                    .header {
                        padding: 30px 20px;
                    }
                    
                    .header h1 {
                        font-size: 26px;
                    }
                    
                    .content-section {
                        padding: 30px 20px;
                    }
                    
                    .greeting h2 {
                        font-size: 20px;
                    }
                    
                    .greeting p {
                        font-size: 16px;
                    }
                    
                    .upcoming-highlight {
                        padding: 20px;
                    }
                    
                    .upcoming-highlight h3 {
                        font-size: 18px;
                    }
                }
            </style>
        </div>
        `
    );
};
