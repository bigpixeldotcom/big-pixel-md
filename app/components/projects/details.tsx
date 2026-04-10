import Link from 'next/link';
import { format } from 'date-fns';
import clsx from 'clsx';

const colourMap = {
  green: 'bg-green-500',
  indigo: 'bg-indigo-700',
  violet: 'bg-violet-700',
};

function pdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      focusable="false"
      role="img"
      aria-label="PDF icon"
    >
      <path d="M304 112L192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L448 528C456.8 528 464 520.8 464 512L464 272L376 272C336.2 272 304 239.8 304 200L304 112zM444.1 224L352 131.9L352 200C352 213.3 362.7 224 376 224L444.1 224zM128 128C128 92.7 156.7 64 192 64L325.5 64C342.5 64 358.8 70.7 370.8 82.7L493.3 205.3C505.3 217.3 512 233.6 512 250.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128z" />
    </svg>
  );
}

export function DataPoint({
  label,
  value,
  colour,
}: {
  label: string;
  value: string;
  colour?: keyof typeof colourMap;
}) {
  return (
    <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:px-0">
      <dt className="text-sm/6 font-bold sm:col-span-2">{label}</dt>
      <dd
        className={clsx(
          'font-mono text-sm/6 sm:col-span-2 mt-1 sm:mt-0',
          colour
            ? `${colourMap[colour]} text-white rounded-full w-max px-4 py-0.5`
            : 'text-metal-700 dark:text-metal-300'
        )}
      >
        {value}
      </dd>
    </div>
  );
}

export function CaseStudy({
  caseStudyTitle,
  caseStudyUrl,
}: {
  caseStudyTitle: string;
  caseStudyUrl: string;
}) {
  return (
    <div className="py-6 flex flex-col gap-2">
      <dt className="text-sm/6 font-bold">Case Study</dt>
      <dd>
        <Link
          href={caseStudyUrl}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors ease-out duration-200 flex flex-row items-center gap-1"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="-ml-1 size-6 inline-block" aria-hidden="true">
            {pdfIcon()}
          </span>
          {caseStudyTitle}
        </Link>
      </dd>
    </div>
  );
}

export default function ProjectDetails({
  client,
  date,
  projectType,
  projectColour,
  tags,
  tech,
  caseStudy,
  caseStudyTitle,
  caseStudyUrl,
}: {
  client: string;
  date: string;
  projectType: string;
  projectColour: keyof typeof colourMap;
  tags: string[];
  tech: string[];
  caseStudy: boolean;
  caseStudyTitle?: string;
  caseStudyUrl?: string;
}) {
  return (
    <div className="bg-metal-50/50 dark:bg-black/20 flex flex-col gap-3 lg:gap-6 p-6 lg:p-8 rounded-2xl lg:w-1/3">
      <h2 className="font-headline font-bold text-xl">Project Details</h2>
      <div className="border-t border-metal-300 dark:border-white/10">
        <dl className="divide-y divide-metal-200 dark:divide-white/10">
          <DataPoint label="Client" value={client} />
          <DataPoint label="Completed" value={format(new Date(date), 'do MMMM yyyy')} />
          <DataPoint label="Project type" value={projectType} colour={projectColour} />
          <DataPoint label="Tech" value={tech.join(', ')} />
          <DataPoint label="Tags" value={tags.join(', ')} />
          {caseStudy && caseStudyTitle && caseStudyUrl && (
            <CaseStudy caseStudyTitle={caseStudyTitle} caseStudyUrl={caseStudyUrl} />
          )}
        </dl>
      </div>
    </div>
  );
}
