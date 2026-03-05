import { format } from 'date-fns';
import clsx from 'clsx';

const colourMap = {
  green: 'bg-green-600',
  indigo: 'bg-indigo-700',
  violet: 'bg-violet-700',
};

export default function ProjectDetails({
  client,
  date,
  projectType,
  projectColour,
  tags,
  tech,
}: {
  client: string;
  date: string;
  projectType: string;
  projectColour: keyof typeof colourMap;
  tags: string[];
  tech: string[];
}) {
  return (
    <div className="bg-metal-50/50 dark:bg-black/20 flex flex-col gap-4 rounded-2xl lg:w-1/3 flex-1 p-6">
      <h2 className="font-headline font-bold text-xl">Project Details</h2>
      <div className="border-t border-metal-300 dark:border-white/10">
        <dl className="divide-y divide-metal-200 dark:divide-white/10">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold">Client</dt>
            <dd className="mt-1 font-mono text-sm/6 text-metal-700 sm:col-span-2 sm:mt-0 dark:text-metal-300">
              {client}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold">Completed</dt>
            <dd className="mt-1 font-mono text-sm/6 text-metal-700 sm:col-span-2 sm:mt-0 dark:text-metal-300">
              {format(new Date(date), 'do MMMM yyyy')}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold">Project type</dt>
            <dd
              className={clsx(
                'mt-1 font-mono text-sm/6 font-semibold text-white sm:col-span-2 sm:-mt-1 rounded-full w-max px-4 py-1',
                colourMap[projectColour]
              )}
            >
              {projectType}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold">Tech</dt>
            <dd className="mt-1 font-mono text-sm/6 text-metal-700 sm:col-span-2 sm:mt-0 dark:text-metal-300">
              {tech.join(', ')}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-bold">Tags</dt>
            <dd className="mt-1 font-mono text-sm/6 text-metal-700 sm:col-span-2 sm:mt-0 dark:text-metal-300">
              {tags.join(', ')}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
