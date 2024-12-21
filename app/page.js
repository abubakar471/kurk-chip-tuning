import BestChipTuningSolution from "@/components/landingPage/BestChipTuningSolution/BestChipTuningSolution";
import CustomerReviews from "@/components/landingPage/CustomerReviews/CustomerReviews";
import FAQs from "@/components/landingPage/FAQs/FAQs";
import Hero from "@/components/landingPage/Hero/Hero";
import MakeAnAppointment from "@/components/landingPage/MakeAnAppointment/MakeAnAppointment";
import NewsletterSection from "@/components/landingPage/NewsletterSection/NewsletterSection";
import Qualifications from "@/components/landingPage/Qualifications/Qualifications";
import SelectVehicleConfiguration from "@/components/landingPage/SelectVehicleConfiguration/SelectVehicleConfiguration";
import SubHero from "@/components/landingPage/SubHero/SubHero";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export const metadata = {
  title: "KTuning | Home",
  description: "Unlock your car's potential with expert chip tuning services. Enhance performance, efficiency, and control with our reliable solutions tailored to your needs."
}

export default function Home() {
  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )
  // }, [])

  return (
    <div className="relative">
      <Hero />
      {/* <SubHero /> */}
      <SelectVehicleConfiguration />
      <BestChipTuningSolution />
      <Qualifications />
      <CustomerReviews />
      <FAQs />
      <NewsletterSection />
      <MakeAnAppointment />
    </div>
  );
}
