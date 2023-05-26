import "./globals.css";
import Nav from "@/components/Nav";
import Script from "next/script";

export const metadata = {
  title: "Amauri Ulloa | Desarrollo Web Front-End",
  authors: [{ name: "Amauri Ulloa" }],
  description: "Portafolio de desarrollo web",
  keywords: ["HTML", "CSS", "JavaScript", "React", "NextJs"],

  icons: {
    icon: "/img/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </head>
      <body>
        <Nav />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
