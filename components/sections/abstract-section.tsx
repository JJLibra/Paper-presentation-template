interface AbstractSectionProps {
  content: string
  keywords?: string[]
}

export function AbstractSection({ content, keywords }: AbstractSectionProps) {
  return (
    <section className="mx-auto max-w-3xl py-12">
      <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
        Abstract
      </h2>
      <p className="text-base leading-relaxed text-muted-foreground text-justify">
        {content}
      </p>
      {keywords && keywords.length > 0 && (
        <div className="mt-6">
          <span className="text-sm font-medium text-foreground">Keywords: </span>
          <span className="text-sm text-muted-foreground">
            {keywords.join(", ")}
          </span>
        </div>
      )}
    </section>
  )
}
