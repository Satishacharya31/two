import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Share2, Camera } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Share Your Life Stories
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Create beautiful multimedia stories from your precious moments. Share memories that last a lifetime.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/create">
                  Create Your Story <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/explore">Explore Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card className="p-6">
              <Camera className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">Rich Media Support</h3>
              <p className="text-muted-foreground">
                Upload up to 10 photos and videos to create immersive stories
              </p>
            </Card>
            <Card className="p-6">
              <Share2 className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">Easy Sharing</h3>
              <p className="text-muted-foreground">
                Share your stories via unique URLs or directly to social media
              </p>
            </Card>
            <Card className="p-6">
              <Heart className="h-12 w-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">Beautiful Templates</h3>
              <p className="text-muted-foreground">
                Choose from 5 stunning animated templates to showcase your memories
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-12">
            Featured Stories
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <img
                    src={`https://source.unsplash.com/random/800x600?memory,${i}`}
                    alt="Story preview"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Summer Adventures {i}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A collection of unforgettable moments from our summer trip...
                  </p>
                  <Button variant="secondary" size="sm" className="w-full">
                    View Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}