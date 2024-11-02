"use client"

import { useEffect, useState } from "react"
import { StoryViewer } from "@/components/story/story-viewer"
import { StoryControls } from "@/components/story/story-controls"
import { useParams } from "next/navigation"
import { Story } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"

export default function StoryPage() {
  const { id } = useParams()
  const [story, setStory] = useState<Story | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchStory = async () => {
      setLoading(true)
      // Simulated API response
      const mockStory: Story = {
        id: id as string,
        title: "Summer Adventures",
        description: "Memories from our amazing summer trip",
        template: "modern",
        media: [
          {
            id: "1",
            url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
            type: "image",
            order: 1
          },
          {
            id: "2",
            url: "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478",
            type: "image",
            order: 2
          },
          {
            id: "3",
            url: "https://images.unsplash.com/photo-1455849318743-b2233052fcff",
            type: "image",
            order: 3
          }
        ],
        createdAt: new Date().toISOString(),
        user: {
          name: "John Doe",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        }
      }
      setStory(mockStory)
      setLoading(false)
    }

    fetchStory()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-full max-w-4xl space-y-4">
          <Skeleton className="h-[60vh] w-full" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    )
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Story not found</h1>
          <p className="text-muted-foreground">
            The story you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 max-w-4xl">
        <StoryViewer story={story} />
        <StoryControls story={story} />
      </div>
    </div>
  )
}