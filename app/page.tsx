import Hero from "@/components/Hero";
import { Icon } from "@iconify/react";
import { FloatingNav } from "@/components/ui/FloatingNabar";
import Grid from "@/components/Grid";
import Image from "next/image";
import Skills from "@/components/Skills ";
import Projects from "@/components/Projects";
import Work_Experience from "@/components/Work_Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center items-center  flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <Icon icon="mage:home-2-fill" />,
            },
            { 
              name: "About", 
              link: "/#about" ,
              icon:<Icon icon="solar:user-broken" />,
            },
            { 
              name: "Projects",
               link: "#projects",
               icon: <Icon icon="pajamas:project" />,
             },
            { 
              name: "WorkExp",
               link: "/#work" ,
               icon:<Icon icon="hugeicons:work-update" />,
            },
            { 
              name: "Skills",
               link: "#skills",
               icon:<Icon icon="lets-icons:pen-light" />,
             },
            { 
              name: "Contact",
               link: "#contact",
               icon:<Icon icon="heroicons:phone" />,
             },
          ]}
        />
        <Hero />
        <Grid />
        <Skills />
        <Work_Experience />
        <Projects />
        <Footer/>
      </div>
    </main>
  );
}
