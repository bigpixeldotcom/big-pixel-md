export default function GraphCard({
  title,
  client,
  subtitle,
  children,
}: {
  title: string;
  client: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 w-full lg:w-2/3 graph-paper border-3 border-metal-50 dark:border-black/20 flex flex-col items-start gap-3 lg:gap-6 p-6 lg:p-8 rounded-2xl">
      <h1 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {title}
      </h1>
      <span className="pl-3 border-l-4 border-blue-300 dark:border-black/20 font-sans font-bold text-base md:text-lg lg:text-xl xl:text-2xl">
        {client}
      </span>
      <h2 className="italic text-lg md:text-xl lg:text-2xl text-metal-600 dark:text-metal-400">
        {subtitle}
      </h2>
      <div className="prose prose-metal dark:prose-invert text-base lg:text-lg">{children}</div>
    </div>
  );
}
