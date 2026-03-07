import { format } from 'date-fns';
import clsx from 'clsx';

const colourMap = {
  green: 'bg-green-600',
  indigo: 'bg-indigo-700',
  violet: 'bg-violet-700',
};

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
    <div className="bg-metal-50/50 dark:bg-black/20 flex flex-col gap-3 lg:gap-6 p-6 lg:p-8 rounded-2xl lg:w-1/3 flex-1">
      <h2 className="font-headline font-bold text-xl">Project Details</h2>
      <div className="border-t border-metal-300 dark:border-white/10">
        <dl className="divide-y divide-metal-200 dark:divide-white/10">
          <DataPoint label="Client" value={client} />
          <DataPoint label="Completed" value={format(new Date(date), 'do MMMM yyyy')} />
          <DataPoint label="Project type" value={projectType} colour={projectColour} />
          <DataPoint label="Tech" value={tech.join(', ')} />
          <DataPoint label="Tags" value={tags.join(', ')} />
        </dl>
      </div>
    </div>
  );
}
