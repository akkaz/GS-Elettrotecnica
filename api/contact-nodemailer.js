import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { nome, cognome, email, telefono, azienda, messaggio } = req.body;

        // Validate required fields
        if (!nome || !cognome || !email || !messaggio) {
            return res.status(400).json({
                success: false,
                message: 'Campi obbligatori mancanti'
            });
        }

        // Create email transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT == 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${process.env.SMTP_FROM_NAME || 'GS Elettrotecnica'}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO_EMAIL,
            replyTo: email,
            subject: `Nuova richiesta dal sito - ${nome} ${cognome}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #007F8E; border-bottom: 3px solid #007F8E; padding-bottom: 10px;">
                        Nuova Richiesta di Contatto
                    </h2>
                    
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome} ${cognome}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        ${telefono ? `<p style="margin: 10px 0;"><strong>Telefono:</strong> <a href="tel:${telefono}">${telefono}</a></p>` : ''}
                        ${azienda ? `<p style="margin: 10px 0;"><strong>Azienda:</strong> ${azienda}</p>` : ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333;">Messaggio:</h3>
                        <p style="background: white; padding: 15px; border-left: 4px solid #007F8E; white-space: pre-wrap;">${messaggio}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                        <p>Questa email è stata inviata dal modulo di contatto del sito web GS Elettrotecnica</p>
                    </div>
                </div>
            `,
            text: `
Nuova Richiesta di Contatto

Nome: ${nome} ${cognome}
Email: ${email}
${telefono ? `Telefono: ${telefono}` : ''}
${azienda ? `Azienda: ${azienda}` : ''}

Messaggio:
${messaggio}

---
Questa email è stata inviata dal modulo di contatto del sito web GS Elettrotecnica
            `.trim()
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Email inviata con successo'
        });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Errore durante l\'invio dell\'email',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
