import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params.id) {
      return new NextResponse("Story ID required", { status: 400 })
    }

    const story = await prisma.story.findUnique({
      where: {
        id: params.id,
      },
      include: {
        media: {
          orderBy: {
            order: "asc",
          },
        },
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    })

    if (!story) {
      return new NextResponse("Story not found", { status: 404 })
    }

    return NextResponse.json(story)
  } catch (error) {
    console.error("[STORY_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}