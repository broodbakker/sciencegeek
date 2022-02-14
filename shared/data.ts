const photo = {
  onderschrift: "onderschrift1",
  bron: "dit is een bron",
  image: "/images/image1.png"
}

const photos = {
  headerData: photo,
  photosData: [photo, photo]
}

export const post = {
  title: "title1",
  subtitle: "subtitle",
  date: new Date(),
  onderwerp: "onderwerp",
  auteur: "monique",
  tags: ["hello", "bye"],
  html: "html",
  photos: photos,
  slug: "slug"
}

export const post1 = {
  title: "oorwurmen helpen je geheugen!",
  subtitle: "human",
  date: new Date(),
  onderwerp: "human",
  auteur: "monique",
  tags: ["hello", "bye"],
  html: "html",
  photos: photos,
  slug: "slug"
}

export const post2 = {
  title: "Onze melkweg draait steeds trager.",
  subtitle: "subtitle",
  date: new Date(),
  onderwerp: "onderwerp",
  auteur: "monique",
  tags: ["hello", "bye"],
  html: "html",
  photos: photos,
  slug: "slug"
}

export const post3 = {
  title: "worden de mysteries rond Duitse stonehenge ooit opgehelderd  teries rond Duitse stonehenge ooit opgehelderd ",
  subtitle: "subtitle",
  date: new Date(),
  onderwerp: "onderwerp",
  auteur: "monique",
  tags: ["hello", "bye"],
  html: "html",
  photos: photos,
  slug: "slug"
}

export const footerData = [["Over de website", "Colofon", "Voorwaarden", "Privacy statement", "Cookies"], ["Cookies", "Over PRO", "VI Kiosk", "RSS", "test1"],
[
  "Service & contact", "Klantenservice", "Meepraten", "Meepraten", "Wijzig privacy instellingen",
]]

export const posts = [post, post1, post2, post3, post, post1, post2, post3, post, post1, post2, post3,]

export const NAV_NAMES = ["Home", "History", "Nature", "Human", "Quirky", "Space", "Tech"]
export const NAV_LINKS = ["/", "/history", "/nature", "/human", "/quirky", "/space", "/tech"]
export const NAV_SLIDER_NAMES =  ["Home", "History", "Nature", "Human", "Quirky", "Space", "Tech","Over ScienceGeek"]
export const NAV_SLIDER_LINKS = ["/", "/history", "/nature", "/human", "/quirky", "/space", "/tech", "/over-sciencegeek"]
