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
    <div className="w-full lg:w-2/3 graph-paper shadow-xl dark:shadow-none border-3 border-metal-50 dark:border-black/20 flex flex-col items-start gap-8 p-8 rounded-2xl">
      <h1 className="font-headline font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {title}
        <span className="ml-3 pl-3 border-l-4 border-blue-300 dark:border-black/20 font-sans">
          {client}
        </span>
      </h1>
      <h2 className="italic text-lg md:text-xl lg:text-2xl text-metal-600 dark:text-metal-400">
        {subtitle}
      </h2>
      <div className="prose prose-metal dark:prose-invert text-base lg:text-lg">{children}</div>
    </div>
  );
}
