import * as React from "react"

import * as Item from "@/lib/registry/ui/item"

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
]

export default function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <div className="flex w-full max-w-md flex-col gap-4">
        {music.map((song) => (
          <Item.Root variant="outline" key={song.title} asChild>
            <a href="#/">
              <Item.Media variant="image">
                <img
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width="32"
                  height="32"
                  className="size-8 rounded object-cover grayscale"
                />
              </Item.Media>
              <Item.Content>
                <Item.Title className="line-clamp-1">
                  {song.title} - <span className="text-muted-foreground">{song.album}</span>
                </Item.Title>
                <Item.Description>{song.artist}</Item.Description>
              </Item.Content>
              <Item.Content className="flex-none text-center">
                <Item.Description>{song.duration}</Item.Description>
              </Item.Content>
            </a>
          </Item.Root>
        ))}
      </div>
    </div>
  )
}
