'use client';

import { useActionState, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { sendContactForm } from '@/app/actions';
import { InputField, TextArea } from '@/app/components/global/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@awesome.me/kit-85090e0c99/icons/classic/regular';
import { toast } from 'sonner';

const initialState = {
  message: '',
};

const initialFormData = {
  name: '',
  organisation: '',
  email: '',
  telephone: '',
  project: '',
};

export default function ContactForm() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(sendContactForm, initialState);
  const [formData, setFormData] = useState(initialFormData);

  const isSuccess = state?.message === 'Success';

  useEffect(() => {
    if (isSuccess) {
      toast.success('Form submitted');
      router.refresh();
    }
  }, [isSuccess, router]);

  return (
    <div className="mt-12">
      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <InputField
            name="name"
            type="text"
            label="Name"
            required
            placeholder="Jane Smith"
            defaultValue={state?.message === 'Success' ? '' : formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            errorId={state?.errors?.fieldErrors.name ? 'name-error' : ''}
            errorText={state?.errors?.fieldErrors.name ? state?.errors?.fieldErrors.name[0] : ''}
          />
          <InputField
            name="organisation"
            type="text"
            label="Organisation"
            required
            placeholder="Your Organisation"
            defaultValue={state?.message === 'Success' ? '' : formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            errorId={state?.errors?.fieldErrors.organisation ? 'organisation-error' : ''}
            errorText={
              state?.errors?.fieldErrors.organisation
                ? state?.errors?.fieldErrors.organisation[0]
                : ''
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
            defaultValue={state?.message === 'Success' ? '' : formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            errorId={state?.errors?.fieldErrors.email ? 'email-error' : ''}
            errorText={state?.errors?.fieldErrors.email ? state?.errors?.fieldErrors.email[0] : ''}
          />
          <InputField
            name="telephone"
            type="text"
            label="Telephone"
            required
            placeholder="01234 567 890"
            defaultValue={state?.message === 'Success' ? '' : formData.telephone}
            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
            errorId={state?.errors?.fieldErrors.telephone ? 'telephone-error' : ''}
            errorText={
              state?.errors?.fieldErrors.telephone ? state?.errors?.fieldErrors.telephone[0] : ''
            }
          />
        </div>
        <TextArea
          name="project"
          label="How can I help you?"
          required
          placeholder="Details of the project here…"
          defaultValue={state?.message === 'Success' ? '' : formData.project}
          onChange={(e) => setFormData({ ...formData, project: e.target.value })}
          errorId={state?.errors?.fieldErrors.project ? 'project-error' : ''}
          errorText={
            state?.errors?.fieldErrors.project ? state?.errors?.fieldErrors.project[0] : ''
          }
        />
        <button
          className="mt-4 w-36 bg-indigo-700 hover:bg-indigo-600 disabled:bg-metal-400 py-4 rounded text-xl text-white font-semibold cursor-pointer transition-colors ease-in-out duration-300"
          disabled={pending}
        >
          {pending ? (
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
