export function MarkdownContent({ content }: { content: string }) {
  const paragraphs = content.split("\n\n");
  return (
    <div className="space-y-5 text-muted-foreground leading-relaxed">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
