import Careers from "@/components/Careers";
import ContactUs from "@/components/ContactUs";
import Navbar from "@/components/Navbar";
import Newsroom from "@/components/Newsroom";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <WhoWeAre />
      <Technology />
      <Solutions />
      <Newsroom />
      <Careers />
      <ContactUs />
    </div>
  );
}
