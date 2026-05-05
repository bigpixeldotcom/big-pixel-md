'use client';

import { useState } from 'react';
import { z } from 'zod';
import { InputField, TextArea } from '@/app/components/global/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@awesome.me/kit-85090e0c99/icons/classic/regular';
import { toast } from 'sonner';

const schema = z.strictObject({
  name: z.string().min(2, { error: 'Please provide a name' }),
  organisation: z.string({ error: 'Please provide the name of your organisation' }),
  email: z.email({ error: 'Please provide a valid email address' }),
  telephone: z.string({ error: 'Please provide a telephone number' }),
  project: z
    .string({ error: 'Please provide information on the project' })
    .min(20, { error: 'Please give me more information on the project (min 20 characters)' }),
});

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<{
    name?: string[] | undefined;
    organisation?: string[] | undefined;
    email?: string[] | undefined;
    telephone?: string[] | undefined;
    project?: string[] | undefined;
  }>({
    name: undefined,
    organisation: undefined,
    email: undefined,
    telephone: undefined,
    project: undefined,
  });

  const handleFormSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError({
        name: undefined,
        organisation: undefined,
        email: undefined,
        telephone: undefined,
        project: undefined,
      });
      const myForm = event.target;
      const formData = new FormData(myForm);
      const body = {
        name: formData.get('name') as string,
        organisation: formData.get('organisation') as string,
        email: formData.get('email') as string,
        telephone: formData.get('telephone') as string,
        project: formData.get('project') as string,
      };

      const result = schema.safeParse(body);

      if (!result.success) {
        setStatus('error');
        const flattened = z.flattenError(result.error);
        setError(flattened.fieldErrors);
        toast.error('Validation failed. Please check your input and try again.');
        return;
      }

      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...result.data }).toString(),
      });
      if (res.status === 200) {
        setStatus('ok');
        toast.success('Message sent successfully!');
        myForm.reset();
      } else {
        setStatus('error');
        setError({
          name: undefined,
          organisation: undefined,
          email: undefined,
          telephone: undefined,
          project: undefined,
        });
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (e) {
      setStatus('error');
      setError({
        name: undefined,
        organisation: undefined,
        email: undefined,
        telephone: undefined,
        project: undefined,
      });
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mt-12">
      <form name="contact" onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <InputField
            name="name"
            type="text"
            label="Name"
            required
            placeholder="Jane Smith"
            errorId={error?.name ? 'name-error' : undefined}
            errorText={error?.name ? 'Please provide a name' : undefined}
          />
          <InputField
            name="organisation"
            type="text"
            label="Organisation"
            required
            placeholder="Your Organisation"
            errorId={error?.organisation ? 'organisation-error' : undefined}
            errorText={
              error?.organisation ? 'Please provide the name of your organisation' : undefined
            }
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <InputField
            name="email"
            type="email"
            label="Email"
            required
            placeholder="jane@smith.org.uk"
            errorId={error?.email ? 'email-error' : undefined}
            errorText={error?.email ? 'Please provide a valid email address' : undefined}
          />
          <InputField
            name="telephone"
            type="text"
            label="Telephone"
            required
            placeholder="01234 567 890"
            errorId={error?.telephone ? 'telephone-error' : undefined}
            errorText={error?.telephone ? 'Please provide a telephone number' : undefined}
          />
        </div>
        <TextArea
          name="project"
          label="How can I help you?"
          required
          placeholder="Details of the project here…"
          errorId={error?.project ? 'project-error' : undefined}
          errorText={error?.project ? 'Please provide details of the project' : undefined}
        />
        <div data-netlify-recaptcha="true" />
        <button
          className="mt-4 w-36 bg-indigo-700 hover:bg-indigo-600 disabled:bg-metal-400 py-4 rounded text-xl text-white font-semibold cursor-pointer transition-colors ease-in-out duration-300"
          disabled={status === 'pending'}
        >
          {status === 'pending' ? (
            <div className="flex items-center justify-center gap-x-3">
              <FontAwesomeIcon icon={faCircleCheck} /> <span>Submitting</span>
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}
