type ArticleProps = {
  children: React.ReactNode;
};

export default function Article({
  children
}: ArticleProps) {
  return (
    <article className={`bg-white border p-4 rounded-lg flex
      items-center gap-x-2 border-zinc-200
    `}>
      {children}
    </article>
  );
}
