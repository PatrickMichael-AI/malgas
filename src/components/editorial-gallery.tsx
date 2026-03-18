import Image from "next/image"

import { SectionShell } from "@/components/section-shell"
import type { AboutGalleryItem } from "@/content/about"

type EditorialGalleryProps = {
  body: string
  eyebrow: string
  items: readonly AboutGalleryItem[]
  title: string
}

const galleryImageSizes = "(min-width: 1280px) 24rem, (min-width: 640px) 44vw, 92vw"

export function EditorialGallery({ body, eyebrow, items, title }: EditorialGalleryProps) {
  return (
    <SectionShell
      eyebrow={eyebrow}
      title={title}
      body={body}
      tone="paper"
      fullWidthChildren
      className="motion-delay-3 lg:py-12"
    >
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.src}
            className="postcard-panel flex h-full min-w-0 flex-col rounded-[2rem] bg-background/92 p-3 sm:p-4"
          >
            <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-[1.6rem]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center"
                sizes={galleryImageSizes}
              />
            </div>

            <div className="grid min-h-[8.5rem] content-start gap-3 px-1 pb-1 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/72">
                {item.title}
              </p>
              <p className="text-sm leading-7 text-foreground/86">{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
