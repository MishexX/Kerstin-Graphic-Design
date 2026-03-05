import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { saveContactToMongoDB } from '@/utils/mongodb';

const resend = new Resend(process.env.RESEND_API_KEY);

// Deine E-Mail-Adresse (wo du die Kontaktanfragen erhalten möchtest)
const YOUR_EMAIL = process.env.YOUR_EMAIL || 'morokuttidesignwebsite@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validierung
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // Speichere in MongoDB
    try {
      await saveContactToMongoDB({ firstName, lastName, email, message });
    } catch (mongoError) {
      // MongoDB Fehler wird geloggt, aber E-Mail-Versand wird trotzdem versucht
      console.error('MongoDB Fehler (E-Mail wird trotzdem versendet):', mongoError);
    }

    // E-Mail an dich (Kerstin) - Neue Kontaktanfrage
    const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://morokutti-design.vercel.app';
    const now = new Date();
    const formattedDate = now.toLocaleString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    
    const emailToYou = await resend.emails.send({
      from: 'Morokutti Design <noreply@morokuttidesign.com>',
      to: YOUR_EMAIL,
      subject: `✨ Neue Kontaktanfrage von ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header mit Logo -->
                  <tr>
                    <td style="background-color: #000000; padding: 40px 30px; text-align: center;">
                      <img src="https://i.imgur.com/qBu0hqR.png" alt="Morokutti Design Logo" style="max-width: 200px; height: auto; margin-bottom: 20px;" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Neue Kontaktanfrage</h1>
                      <p style="color: #d7e3db; margin: 10px 0 0 0; font-size: 14px;">Du hast eine neue Nachricht erhalten</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <div style="background-color: #f8f9fa; border-left: 4px solid #2B2F39; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
                        <p style="margin: 0 0 12px 0; color: #2B2F39; font-size: 16px; font-weight: 600;">
                          📅 <strong>Eingegangen am:</strong> ${formattedDate}
                        </p>
                        <p style="margin: 0 0 12px 0; color: #2B2F39; font-size: 16px; font-weight: 600;">
                          👤 <strong>Name:</strong> ${firstName} ${lastName}
                        </p>
                        <p style="margin: 0 0 12px 0; color: #2B2F39; font-size: 16px; font-weight: 600;">
                          📧 <strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #2B2F39; text-decoration: none;">${email}</a>
                        </p>
                      </div>
                      
                      <div style="margin-bottom: 30px;">
                        <h3 style="color: #2B2F39; font-size: 18px; margin: 0 0 15px 0; font-weight: 600;">Nachricht:</h3>
                        <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; color: #333333; line-height: 1.6; font-size: 15px;">
                          ${message.replace(/\n/g, '<br>')}
                        </div>
                      </div>
                      
                      <div style="background-color: #d7e3db; padding: 20px; border-radius: 8px; text-align: center;">
                        <p style="margin: 0; color: #2B2F39; font-size: 14px; font-weight: 500;">
                          💬 Du kannst direkt auf diese E-Mail antworten, um ${firstName} zu kontaktieren.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #2B2F39; padding: 30px; text-align: center;">
                      <p style="margin: 0; color: #ffffff; font-size: 14px;">
                        <strong>Morokutti Design</strong><br>
                        <span style="color: #d7e3db; font-size: 12px;">Durchdachtes Design, klare Botschaften</span>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      replyTo: email, // Damit du direkt antworten kannst
    });

    // Bestätigungsmail an den Absender
    const confirmationEmail = await resend.emails.send({
      from: 'Morokutti Design <noreply@morokuttidesign.com>',
      to: email,
      subject: 'Vielen Dank für Ihre Anfrage - Morokutti Design',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header mit Logo -->
                  <tr>
                    <td style="background-color: #000000; padding: 40px 30px; text-align: center;">
                      <img src="https://i.imgur.com/qBu0hqR.png" alt="Morokutti Design Logo" style="max-width: 200px; height: auto; margin-bottom: 20px;" />
                      <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 600;">Vielen Dank!</h1>
                      <p style="color: #d7e3db; margin: 10px 0 0 0; font-size: 16px;">Ihre Anfrage ist bei mir angekommen</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="color: #2B2F39; font-size: 24px; margin: 0 0 20px 0; font-weight: 600;">Hallo ${firstName},</h2>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        vielen Dank für Ihre Anfrage und Ihr Interesse an meiner Arbeit.
                      </p>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Ihre Nachricht ist erfolgreich bei mir eingegangen. Ich melde mich innerhalb der nächsten 24–48 Stunden persönlich bei Ihnen, damit wir Ihr Projekt und Ihre Vorstellungen gemeinsam besprechen können.
                      </p>
                      
                      <div style="background-color: #f8f9fa; border-left: 4px solid #d7e3db; padding: 20px; border-radius: 4px; margin: 25px 0;">
                        <p style="margin: 0 0 10px 0; color: #2B2F39; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Ihre Nachricht:</p>
                        <p style="margin: 0; color: #333333; line-height: 1.6; font-size: 15px;">
                          ${message.replace(/\n/g, '<br>')}
                        </p>
                      </div>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 25px 0;">
                        Ich freue mich darauf, mehr über Ihr Vorhaben zu erfahren.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 30px 40px 30px;">
                      <div style="border-top: 2px solid #e0e0e0; padding-top: 30px;">
                        <p style="margin: 0 0 8px 0; color: #2B2F39; font-size: 18px; font-weight: 600;">
                          Liebe Grüße
                        </p>
                        <p style="margin: 0 0 8px 0; color: #2B2F39; font-size: 18px; font-weight: 600;">
                          Kerstin Morokutti
                        </p>
                        <p style="margin: 0 0 8px 0; color: #666666; font-size: 14px;">
                          Grafikdesignerin | Morokutti Design
                        </p>
                        <p style="margin: 0 0 15px 0;">
                          <a href="mailto:morokuttidesignwebsite@gmail.com" style="color: #2B2F39; text-decoration: none; font-size: 14px; font-weight: 500;">
                            📧 morokuttidesignwebsite@gmail.com
                          </a>
                        </p>
                        <p style="margin: 15px 0 0 0; color: #999999; font-size: 12px; line-height: 1.6;">
                          Durchdachtes Design, klare Botschaften – damit Deine Ideen sichtbar werden.
                        </p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #2B2F39; padding: 30px; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">
                        Morokutti Design
                      </p>
                      <p style="margin: 0; color: #d7e3db; font-size: 12px;">
                        Wien, Österreich
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (emailToYou.error || confirmationEmail.error) {
      const errorDetails = emailToYou.error || confirmationEmail.error;
      console.error('E-Mail Fehler:', errorDetails);
      return NextResponse.json(
        { 
          error: 'E-Mail konnte nicht versendet werden',
          details: errorDetails?.message || 'Unbekannter Fehler'
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'E-Mail erfolgreich versendet' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Server Fehler:', error);
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten',
        details: error?.message || 'Unbekannter Server-Fehler'
      },
      { status: 500 }
    );
  }
}
