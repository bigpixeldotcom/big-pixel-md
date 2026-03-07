import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { clsx } from 'clsx';
import { CTAButton } from '@/app/components/global/buttons';
import type { CTAButtonItem } from '@/app/components/global/buttons';

const colourMap = {
  red: 'bg-red-50/50 dark:bg-red-900/50 text-red-700 dark:text-red-50',
  orange: 'bg-orange-50/50 dark:bg-orange-900/50 text-orange-700 dark:text-orange-50',
  yellow: 'bg-yellow-50/50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-50',
  green: 'bg-green-50/50 dark:bg-green-900/50 text-green-700 dark:text-green-50',
  blue: 'bg-blue-50/50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-50',
  indigo: 'bg-indigo-50/50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-50',
  purple: 'bg-purple-50/50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-50',
  violet: 'bg-violet-50/50 dark:bg-violet-900/50 text-violet-700 dark:text-violet-50',
};

type ServiceCardProps = {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  cta: CTAButtonItem;
  colour: keyof typeof colourMap;
  children: React.ReactNode;
};

export function StatementGrid({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}

export function StatementCard(service: ServiceCardProps) {
  return (
    <div
      className={clsx(
        'p-6 md:p-8 not-first:mt-8 rounded-xl flex flex-col items-start justify-between gap-4 text-left',
        colourMap[service.colour] || 'bg-metal-50 text-metal-700'
      )}
    >
      <div className="flex items-center justify-center gap-4">
        <FontAwesomeIcon icon={service.icon} className="text-7xl" />
        <h3 className="font-headline font-black text-3xl xl:text-4xl">{service.title}</h3>
      </div>
      <h4 className="font-bold text-xl leading-6 tracking-tight">{service.subtitle}</h4>
      <div className="text-base xl:text-lg">{service.children}</div>
      {service.cta && <CTAButton button={service.cta} />}
    </div>
  );
}
