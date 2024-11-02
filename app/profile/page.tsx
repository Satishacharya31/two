"use client"

import { useSession } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { Story } from "@/lib/types"
import Link from "next/link"

export default function ProfilePage() {
  const { data: session } = useSession()
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    // TODO: Fetch user's stories
    // For now, using mock data
    setStories([
      {
        id: "1",
        title: "Summer Adventures",
        description: "Memories from our amazing summer trip",
        template: "modern",
        media: [
          {
            id: "1",
            url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
            type: "image",
            order: 1,
          },
        ],
        createdAt: new Date().toISOString(),
        user: {
          name: session?.user?.name || "",
          image: session?.user?.image || "",
        },
      },
    ])
  }, [session])

  return (
    <div className="container py-8">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
            <p className="text-muted-foreground">{session?.user?.email}</p>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="stories" className="mt-8">
        <TabsList>
          <TabsTrigger value="stories">My Stories</TabsTrigger>
          <TabsTrigger value="liked">Liked Stories</TabsTrigger>
        </TabsList>
        <TabsContent value="stories" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <Link href={`/stories/${story.id}`}>
                  <div className="aspect-video relative bg-muted">
                    <img
                      src={story.media[0].url}
                      alt={story.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {story.description}
                    </p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          {stories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                You haven't created any stories yet
              </p>
              <Button asChild>
                <Link href="/create">Create Your First Story</Link>
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="liked" className="mt-4">
          <div className="text-center py-12 text-muted-foreground">
            No liked stories yet
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}