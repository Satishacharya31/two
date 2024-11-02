"use client"

import { StoryCreator } from "@/components/story/story-creator"
import { TemplateSelector } from "@/components/story/template-selector"
import { useState } from "react"
import { StoryTemplate } from "@/lib/types"

export default function CreatePage() {
  const [selectedTemplate, setSelectedTemplate] = useState<StoryTemplate | null>(null)

  return (
    <div className="container py-8">
      {!selectedTemplate ? (
        <TemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <StoryCreator template={selectedTemplate} />
      )}
    </div>
  )
}