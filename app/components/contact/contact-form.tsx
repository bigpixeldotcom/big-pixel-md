'use client';

import { useState } from 'react';
import { InputField, TextArea } from '@/app/components/global/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@awesome.me/kit-85090e0c99/icons/classic/regular';
import { toast } from 'sonner';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const body = {
        name: formData.get('name') as string,
        organisation: formData.get('organisation') as string,
        email: formData.get('email') as string,
        telephone: formData.get('telephone') as string,
        project: formData.get('project') as string,
      };
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(body).toString(),
      });
      if (res.status === 200) {
        setStatus('ok');
        toast.success('Message sent successfully!');
        myForm.reset();
      } else {
        setStatus('error');
        setError(`Unexpected response status: ${res.status}`);
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="mt-12">
      <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <InputField name="name" type="text" label="Name" required placeholder="Jane Smith" />
          <InputField
            name="organisation"
            type="text"
            label="Organisation"
            required
            placeholder="Your Organisation"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <InputField
            name="email"
            type="email"
            label="Email"
            required
            placeholder="jane@smith.org.uk"
          />
          <InputField
            name="telephone"
            type="text"
            label="Telephone"
            required
            placeholder="01234 567 890"
          />
        </div>
        <TextArea
          name="project"
          label="How can I help you?"
          required
          placeholder="Details of the project here…"
        />
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
