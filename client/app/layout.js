import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Next.js Blog",
  description: "Developed by Tahmid Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-darkMain dark:">
      <body className="w-full  container mx-auto dark:bg-darkMain">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
