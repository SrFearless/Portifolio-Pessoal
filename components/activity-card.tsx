import Image from "next/image"
import { Calendar, Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ActivityCardProps {
  id: string
  title: string
  description: string
  distance: number
  date: string
  likes: number
  comments: number
  imageUrl: string
}

export default function ActivityCard({
  id,
  title,
  description,
  distance,
  date,
  likes,
  comments,
  imageUrl,
}: ActivityCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{description}</div>
              <div className="rounded-full bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">
                {distance} km
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <div className="flex gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
            <Heart className="h-4 w-4" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="px-2">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

