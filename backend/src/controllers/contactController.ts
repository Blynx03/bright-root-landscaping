

import type { Request, Response } from 'express';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactRequest = {
    fullName: string;
    email: string;
    phone?: string;
    service?: string;
    location?: string;
    message: string;
};

export const emailContactCustomer = async (
    request: Request<object, object, ContactRequest>,
    response: Response,
): Promise<void> => {
    try {
        const {
            fullName,
            email,
            phone,
            service,
            location,
            message,
        } = request.body;

        if (!fullName || !email || !message) {
            response.status(400).json({
                message: 'Please complete all required fields.',
            });

            return;
        }

        if (!email && !phone) {
            response.status(400).json({
                message: 'Please provide your email or phone number so we can contact you.'
            })
        }

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: process.env.OWNER_EMAIL!,
            replyTo: email,
            subject: `New BrightRoot inquiry from ${fullName}`,
            text: `
New contact inquiry

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service: ${service || 'Not specified'}
Location: ${location || 'Not specified'}

Message:
${message}
            `.trim(),
        });

        if (error) {
            console.error('Resend error:', error);

            response.status(500).json({
                message: 'The inquiry could not be sent.',
            });

            return;
        }

        response.status(200).json({
            message: 'Your inquiry was sent successfully. We will contact you as soon as we can.',
            emailId: data?.id,
        });
    } catch (error) {
        console.error('Contact controller error:', error);

        response.status(500).json({
            message: 'Something went wrong while sending the inquiry.',
        });
    }
};