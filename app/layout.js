import Footer from "@/components/landingPage/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/landingPage/Header/Navbar";
import { Exo } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import AOSInitiator from "@/lib/aos-initiator";

export const metadata = {
  title: "KTuning | Home",
  description: "Unlock your car's potential with expert chip tuning services. Enhance performance, efficiency, and control with our reliable solutions tailored to your needs.",
};

const exo = Exo({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${exo.className} antialiased`}
      >
        <AOSInitiator>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </AOSInitiator>
      </body>
    </html>
  );
}
