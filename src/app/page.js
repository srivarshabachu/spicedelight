import Header from '/src/components/layout/header'
import Hero from "/src/components/layout/Hero";
import HomeMenu from "/src/components/layout/HomeMenu";
import './globals.css'
import SectionHeaders from "/src/components/layout/SectionHeaders";
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
