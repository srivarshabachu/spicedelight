import Header from "@/components/layout/header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import './globals.css'
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <SectionHeaders subHeader={'Our story'} mainHeader={'About US'} />
      <h4 className='normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.ligula hendrerit mattis.</h4>
    </>
  )
}
