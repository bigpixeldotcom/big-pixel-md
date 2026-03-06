import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { clsx } from 'clsx';
import { CTAButton } from '@/app/components/global/buttons';
import type { CTAButtonItem } from '@/app/components/global/buttons';

const colourMap = {
  red: 'bg-red-600',
  orange: 'bg-orange-400',
  yellow: 'bg-yellow-300',
  green: 'bg-green-600',
  blue: 'bg-blue-600',
  indigo: 'bg-indigo-700',
  purple: 'bg-purple-700',
  violet: 'bg-violet-700',
};

type ServiceCardProps = {
  icon: IconDefinition;
  title: string;
  subtitle: string;
  cta: CTAButtonItem;
  colour: keyof typeof colourMap;
  children: React.ReactNode;
};

export function ServiceGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">{children}</div>;
}

export function ServiceCard(service: ServiceCardProps) {
  return (
    <div
      className={clsx(
        'p-8 rounded-xl flex flex-col items-start justify-between gap-4 text-left text-white',
        colourMap[service.colour] || 'bg-gray-600'
      )}
    >
      <FontAwesomeIcon icon={service.icon} className="text-7xl" />
      <h3 className="font-headline font-black text-2xl">{service.title}</h3>
      <h4 className="font-bold text-xl leading-6 tracking-tight">{service.subtitle}</h4>
      <div className="text-base prose prose-white">{service.children}</div>
      {service.cta && <CTAButton button={service.cta} />}
    </div>
  );
}
