

import type { Request, Response } from 'express';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type EstimateRequest = {
    fullName: string;
    email: string;
    phone?: string;
    location: string;
    projectType: string;
    servicesOfInterest: string[];
    estimatedBudget: string;
    timeline: string;
    comment?: string;
    consent: boolean;
};

export const emailEstimateProject = async (
    request: Request<object, object, EstimateRequest>,
    response: Response,
): Promise<void> => {
    try {
        const {
            fullName,
            email,
            phone,
            location,
            projectType,
            servicesOfInterest,
            estimatedBudget,
            timeline,
            comment,
            consent,
        } = request.body;

        if (
            !fullName ||
            !email ||
            !location ||
            !projectType ||
            servicesOfInterest.length === 0 ||
            !estimatedBudget ||
            !timeline ||
            !consent
        ) {
            response.status(400).json({
                message: 'Please complete all required fields.',
            });

            return;
        }

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: process.env.OWNER_EMAIL!,
            replyTo: email,
            subject: `New estimate request from ${fullName}`,
            text: `
New estimate request

CONTACT DETAILS
Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Location: ${location}

PROJECT DETAILS
Project type: ${projectType}
Services: ${servicesOfInterest.join(', ')}

PLANNING
Estimated budget: ${estimatedBudget}
Preferred timeline: ${timeline}

ADDITIONAL INFORMATION
${comment || 'No additional information provided.'}

Consent accepted: ${consent ? 'Yes' : 'No'}
            `.trim(),
        });

        if (error) {
            console.error('Resend error:', error);

            response.status(500).json({
                message: 'The estimate request could not be sent.',
            });

            return;
        }

        response.status(200).json({
            message: 'Your estimate request was sent successfully.',
            emailId: data?.id,
        });
    } catch (error) {
        console.error('Estimate controller error:', error);

        response.status(500).json({
            message: 'Something went wrong while sending the estimate.',
        });
    }
};