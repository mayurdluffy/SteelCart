import { Footer } from "@/components/footer";
import { LandingPage } from "@/components/landingPage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[6.2vh]">
      <LandingPage />
      <Footer />
    </div>
  );
}
