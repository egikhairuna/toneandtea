import localFont from "next/font/local";

export const stefanFont = localFont({
  src: [
    {
      path: "../../public/fonts/stefan/ABCStefan-Simple.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/stefan/ABCStefan-Bubble.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-stefan",
});

export const neueFont = localFont({
  src: [
    {
      path: "../../public/fonts/neue/neuehaasgrotdispround-45light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue/neuehaasgrotdispround-55roman.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue/neuehaasgrotdispround-75bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue",
});
