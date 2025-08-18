export const EmailContent = ({ name, email, subject, message, inquiryType }: {
    name: string;
    email: string;
    subject: string;
    message: string;
    inquiryType: string;
}) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    const inquiryTypeLabels: { [key: string]: string } = {
        'general': 'General Inquiry',
        'booking': 'Booking/Performance',
        'music': 'Music/Recording',
        'media': 'Media/Press',
        'fan': 'Fan Mail'
    };

    return (
        `
        <div class="email-container">
            <h2>New Contact Form Submission - ${inquiryTypeLabels[inquiryType] || 'General Inquiry'}</h2>
            
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Type:</strong> ${inquiryTypeLabels[inquiryType] || 'General Inquiry'}</p>
            <p><strong>Received:</strong> ${currentDate} at ${currentTime}</p>
            
            <hr>
            
            <h3>Message:</h3>
            <div class="message-content">
                ${message.replace(/\n/g, '<br>')}
            </div>
            
            <hr>
            
            <p><small>Sent from coltonmcmurdie.com contact form</small></p>

            <style>
                .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #FFFFFF;
                    font-family: Arial, sans-serif;
                    color: #000000;
                    line-height: 1.5;
                }
                
                h2 {
                    color: #333;
                    margin-bottom: 20px;
                }
                
                h3 {
                    color: #333;
                    margin-top: 20px;
                    margin-bottom: 10px;
                }
                
                p {
                    margin: 8px 0;
                }
                
                hr {
                    border: none;
                    border-top: 1px solid #ddd;
                    margin: 20px 0;
                }
                
                .message-content {
                    background: #f9f9f9;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }
                
                small {
                    color: #666;
                }
            </style>
        </div>
        `
    );
};