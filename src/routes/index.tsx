import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Features from "~/components/Features";
import Pricing from "~/components/Pricing";
import Footer from "~/components/Footer";
import Contact from "~/components/Contact";
import useModal from "~/hooks/useModal";

export default function Index() {
  const { showing, open, close } = useModal();

  return (
    <main className=" h-full flex flex-col">
      <Contact showing={showing} close={close} />
      <Header showWaitlist={open} />
      <Hero />
      <Features />
      <Pricing showWaitlist={open} />
      <div className="flex-1">
        <Footer />
      </div>
    </main>
  );
}
