export const navigation = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export const siteConfig = {
  name: "Salt & Fynbos",
  shortName: "SF",
  label: "Southern Coast Country Kitchen",
  siteUrl: "https://saltandfynbos.co.za",
  ogImage: "/images/restaurant-interior.jpg",
  description:
    "A Western Cape southern coast country kitchen shaped around sea air, local wine, and long-table hospitality.",
  location: "Malgas, Western Cape",
  email: "hello@saltandfynbos.co.za",
  phone: "+27 (0)21 000 0000",
  footerBlurb:
    "A Western Cape southern coast country kitchen shaped around sea air, local wine, and long-table hospitality.",
} as const

export const businessHours = [
  { label: "Thursday to Friday", value: "12:00 - late lunch" },
  { label: "Saturday", value: "12:00 - sunset supper" },
  { label: "Sunday", value: "12:00 - slow coastal lunch" },
  { label: "Monday to Wednesday", value: "Closed for market runs and prep" },
] as const

export const contactChannels = [
  {
    title: "Reservations",
    value: "Book lunch, sunset tables, and long-table gatherings by email or phone.",
  },
  {
    title: "Private tables",
    value: "Small celebrations and harvest-style suppers can be arranged on request.",
  },
  {
    title: "Local produce",
    value: "We work around what the coast, orchards, and pantry are offering that week.",
  },
] as const
