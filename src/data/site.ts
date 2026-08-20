const LOREM_LONG =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.";

const LOREM_MED =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.";

const LOREM_SHORT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.";

const LOREM_VM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.";

export const site = {
  name: "NSRL Infrastructure",
  wordmark: "NSRL INFRASTRUCTURE",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Brands", href: "#brands" },
  ],
  cta: { label: "Contact Us", href: "#contact" },
};

export const hero = {
  headline: ["From", "Technology to", "Industry Leadership."],
  intro:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
};

export const whoWeAre = {
  title: "Who We Are",
  body: [LOREM_LONG, LOREM_LONG],
  stats: [
    { value: "5+", label: "Lorem Ipsum" },
    { value: "5+", label: "Lorem Ipsum" },
    { value: "5+", label: "Lorem Ipsum" },
    { value: "5+", label: "Lorem Ipsum" },
  ],
};

export const journey = {
  title: "Our Journey",
  intro: LOREM_MED,
  points: [
    { title: "Point 1", body: LOREM_SHORT },
    { title: "Point 2", body: LOREM_SHORT },
    { title: "Point 3", body: LOREM_SHORT },
    { title: "Point 4", body: LOREM_SHORT },
    { title: "Point 5", body: LOREM_SHORT },
    { title: "Point 6", body: LOREM_SHORT },
  ],
};

export const visionMission = [
  { title: "Vision", body: LOREM_VM },
  { title: "Mission", body: LOREM_VM },
];

export const founder = {
  title: "Man Behind The Success",
  body: [
    LOREM_MED,
    LOREM_MED +
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  ],
  name: "Mr. Nagarajan",
  role: "Founder & CEO",
};

export const brands = {
  title: ["Brands under", "NSRL Infrastructure"],
  intro: LOREM_MED,
};

export const footer = {
  columns: [
    {
      heading: "Page",
      links: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Brands", href: "#brands" },
      ],
    },
    {
      heading: "Social Media",
      links: [
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Whatsapp", href: "https://wa.me/919876543210" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Pintrest", href: "https://pinterest.com" },
        { label: "Youtube", href: "https://youtube.com" },
        { label: "X", href: "https://x.com" },
      ],
    },
  ],
  contact: {
    heading: "Contact",
    phone: { label: "+91 95974 81976", href: "tel:+919597481976" },
    email: {
      label: "nsrlinfrastructure@gmail.com",
      href: "mailto:nsrlinfrastructure@gmail.com",
    },
    address: [
      "Pulayanvilai Veedu, 12/270B,",
      "Vellivilagom, Marthandam,",
      "Unnamalaikadai, Tamil Nadu",
      "629165.",
    ],
  },
};
