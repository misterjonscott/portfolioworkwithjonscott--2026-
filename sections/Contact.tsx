import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import { CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { cn } from "@/lib/utils"

// --- Helper Function ---
function isStateWithErrors(s: unknown): s is { errors: Array<{ field?: string | undefined }> } {
    if (!s || typeof s !== 'object') return false;
    const errors = (s as { errors?: unknown }).errors;
    return Array.isArray(errors);
}

const hasFieldError = (state: unknown, fieldName: string): boolean => {
    if (!isStateWithErrors(state)) return false;
    return state.errors.some((error) => (error as { field?: string | undefined }).field === fieldName);
};

// --- Sub-Components ---
const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm('mpwqlzvq');
    const hasError = (fieldName: string) => hasFieldError(state, fieldName);

    return (
        <Card className="w-full max-w-[500px] border-0 bg-white p-6 shadow-lg rounded-lg dark:bg-slate-800">
            {/* Render both success message and form, but conditionally hide one */}
            <div className={state.succeeded ? 'block' : 'hidden'}>
                <div className="mt-4 flex h-full flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <CheckCircle className="h-16 w-16 text-green-500" aria-hidden="true" />
                    </div>
                    <div className="mt-4 text-xl font-medium text-green-600">
                        Thanks for reaching out!
                    </div>
                    <p className="mt-2 text-center text-gray-600">
                        I&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className={`space-y-6 ${state.succeeded ? 'hidden' : 'block'}`}
                aria-label="Contact form"
            >
                <FormField
                    label="Name"
                    fieldName="name"
                    required
                    errorMessage={<ValidationError prefix="Name" field="name" errors={state.errors} />}
                    hasError={hasError('name')}
                >
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        aria-label="Name"
                        className="w-full"
                        autoComplete="name"
                        required
                    />
                </FormField>

                <FormField
                    label="Email Address"
                    fieldName="email"
                    required
                    errorMessage={<ValidationError prefix="Email" field="email" errors={state.errors} />}
                    hasError={hasError('email')}
                >
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        aria-label="Email Address"
                        className="w-full"
                        autoComplete="email"
                        required
                    />
                </FormField>

                <FormField
                    label="Inquiry Type"
                    fieldName="inquiryType"
                    required
                    errorMessage={<ValidationError prefix="Inquiry Type" field="inquiryType" errors={state.errors} />}
                    hasError={hasError('inquiryType')}
                >
                    <Select name="inquiryTypeSelect" required>
                        <SelectTrigger
                            id="inquiryType"
                            aria-label="Inquiry Type"
                            className="w-full"
                        >
                            <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="project">Project Proposal</SelectItem>
                            <SelectItem value="support">Support Request</SelectItem>
                        </SelectContent>
                    </Select>
                </FormField>

                <FormField
                    label="Message"
                    fieldName="message"
                    required
                    errorMessage={<ValidationError prefix="Message" field="message" errors={state.errors} />}
                    hasError={hasError('message')}
                >
                    <Textarea
                        id="message"
                        name="message"
                        aria-label="Message"
                        className="w-full"
                        autoComplete="off"
                        required
                    />
                </FormField>

                <FormField label="Phone Number (optional)" fieldName="phone">
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        aria-label="Phone Number"
                        className="w-full"
                        autoComplete="tel"
                    />
                </FormField>

                <FormField label="Company (optional)" fieldName="company">
                    <Input
                        id="company"
                        name="company"
                        type="text"
                        aria-label="Company"
                        className="w-full"
                        autoComplete="organization"
                    />
                </FormField>

                <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-teal-600 transition-all duration-300 hover:bg-teal-700 text-white"
                    aria-label={state.submitting ? 'Submitting form' : 'Submit message'}
                >
                    {state.submitting ? (
                        <div className="mr-2 opacity-80">
                            <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        </div>
                    ) : (
                        <>
                            Submit
                            <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                        </>
                    )}
                </Button>
            </form>
        </Card>
    );
};

interface FormFieldProps {
    label: string;
    fieldName: string;
    required?: boolean;
    errorMessage?: React.ReactNode;
    children: React.ReactNode;
    hasError?: boolean;
    className?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, fieldName, required, errorMessage, children, hasError }) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={fieldName} className="font-medium">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <div className={hasError ? 'border-red-500' : ''}>{children}</div>
            {hasError && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <div
            className="section-container relative min-h-[100dvh] flex items-center justify-center justify-[safe_center] flex-col py-12 md:py-20 z-0" 
        >
            <div className="w-full">
                <h2 className="mx-auto mb-8 text-center text-3xl font-bold tracking-tight font-title text-foreground md:mb-16 md:text-6xl">
                    Let&apos;s get started!
                </h2>
                <div className="mx-auto mt-8 flex flex-col gap-8 justify-center items-center px-4 md:flex-row md:items-start">
                    <ContactInfo className="flex-grow max-w-[300px]" />
                    <div className="flex-1 max-w-[500px] w-full">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactInfo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("mb-5 flex-col items-center hidden md:block", className)}>
            <div className="relative overflow-hidden rounded-full shadow-lg w-[300px] h-[300px]">
                <Image
                    src="/images/jon-scott.webp"
                    alt="Contact Me Graphic"
                    fill
                    priority
                    sizes="(max-width: 768px) 200px, 300px"
                    className="object-cover rounded-full"
                />
            </div>
            <div className="mt-4 text-center">
                <p className="text-base text-gray-700 md:text-lg"></p>
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center font-medium text-link"
                >
                    <Image
                        src="/images/logos/linkedin-logo.svg"
                        alt="LinkedIn Logo"
                        width={24}
                        height={24}
                        className="mr-2 inline-block"
                    />
                    <span style={{ color: '#0072b1' }}>Connect With Me</span>
                </a>
            </div>
        </div>
    )
}

export default Contact;