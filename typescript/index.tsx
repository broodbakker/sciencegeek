export type Post = {
  title: string
  subtitle?: string
  date: Date
  onderwerp: string
  auteur: string
  tags: string[]
  html: string
  photos: Photos
  slug: string
}

type Photos = {
  headerData: Photo;
  photosData: Photo[];
}

export interface Photo {
  onderschrift: string
  bron: string
  image: string
}