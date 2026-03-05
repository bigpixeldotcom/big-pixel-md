import { forwardRef } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@awesome.me/kit-89a9106b13/icons/classic/regular';

type InputProps = {
  name: string;
  label: string;
  describedById?: string;
  describedBy?: string;
  type?: string;
  placeholder?: string;
  errorId?: string;
  errorText?: string;
  required: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextAreaProps = {
  name: string;
  label: string;
  describedById?: string;
  describedBy?: string;
  placeholder?: string;
  errorId?: string;
  errorText?: string;
  required: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      describedById,
      describedBy,
      type,
      placeholder,
      errorId,
      errorText,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className="block text-sm/6 font-semibold text-metal-900 dark:text-white"
          >
            {label}
            {required && <span className="ml-1 text-red-600 dark:text-red-400">*</span>}
          </label>
          {describedBy && (
            <span id={describedById} className="text-sm/6 text-metal-600 dark:text-metal-400">
              {describedBy}
            </span>
          )}
        </div>
        <div className="mt-2 grid grid-cols-1">
          <input
            ref={ref}
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            aria-invalid={errorText ? 'true' : 'false'}
            aria-describedby={errorText ? errorId : describedById}
            className={clsx(
              errorText
                ? 'text-red-800 outline-red-500 placeholder:text-red-300 focus:outline-red-600 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400'
                : 'text-metal-900 outline-metal-400 placeholder:text-metal-400 focus:outline-indigo-600 dark:text-white',
              'col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:pr-9 sm:text-sm/6 dark:bg-white/5'
            )}
            {...rest}
          />
          {errorText && (
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-600 sm:size-4 dark:text-red-400"
            />
          )}
        </div>
        {errorText && (
          <p
            id={errorId}
            className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400"
            aria-live="polite"
          >
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { name, label, describedById, describedBy, placeholder, errorId, errorText, required, ...rest },
    ref
  ) => {
    return (
      <div>
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className="block text-sm/6 font-semibold text-metal-900 dark:text-white"
          >
            {label}
            {required && <span className="ml-1 text-red-600 dark:text-red-400">*</span>}
          </label>
          {describedBy && (
            <span id={describedById} className="text-sm/6 text-metal-600 dark:text-metal-400">
              {describedBy}
            </span>
          )}
        </div>
        <div className="mt-2 grid grid-cols-1">
          <textarea
            ref={ref}
            id={name}
            name={name}
            rows={4}
            placeholder={placeholder}
            required={required}
            aria-invalid={errorText ? 'true' : 'false'}
            aria-describedby={errorText ? errorId : describedById}
            className={clsx(
              errorText
                ? 'text-red-800 outline-red-500 placeholder:text-red-300 focus:outline-red-600 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400'
                : 'text-metal-900 outline-metal-400 placeholder:text-metal-400 focus:outline-indigo-600 dark:text-white',
              'col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:pr-9 sm:text-sm/6 dark:bg-white/5'
            )}
            {...rest}
          />
          {errorText && (
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-red-500 sm:size-4 dark:text-red-400"
            />
          )}
        </div>
        {errorText && (
          <p
            id={errorId}
            className="mt-2 text-sm font-semibold text-red-600 dark:text-red-400"
            aria-live="polite"
          >
            {errorText}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
