"use client"

import React from "react"

interface MarkdownSectionProps {
  title: string
  content: string | React.ReactNode
}

export function MarkdownSection({ title, content }: MarkdownSectionProps) {
  return (
    <section className="mx-auto max-w-3xl py-12">
      <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="prose prose-neutral max-w-none text-muted-foreground">
        {typeof content === "string" ? (
          <p className="leading-relaxed text-justify">{content}</p>
        ) : (
          content
        )}
      </div>
    </section>
  )
}
