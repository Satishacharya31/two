import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const data = await req.json()
    const { title, description, template, media } = data

    const story = await prisma.story.create({
      data: {
        title,
        description,
        template,
        userId: session.user.id,
        media: {
          create: media.map((m: any, index: number) => ({
            url: m.url,
            type: m.type,
            order: index,
          })),
        },
      },
      include: {
        media: true,
        user: true,
      },
    })

    return NextResponse.json(story)
  } catch (error) {
    console.error("[STORIES_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}