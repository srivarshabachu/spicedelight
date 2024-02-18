import './layoutstyles.css'
import Image from 'next/image'
export default function HomeMenu() {
    return (
        <section className='HomeMenu'>
            <div className='absolute justify-start'>
                <div className="staranise absolute -left-12">
                    <Image src={'/staranise.png'} layout={'fill'} alt={'staranise'} objectFit={'contain'} />
                </div>
            </div>
            <div className="px-20 py-20 text-center">
                <h3 className="leading-10">Check  Out Our  </h3>
                <h2 className="uppercase font-bold text-4xl italic text-biryani">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 text-black text-2xl  py-20">
                <div className="items rounded-lg">
                    <img src='' alt='biryani'></img>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.ligula hendrerit mattis.</h4>
                </div>
                <div className="items rounded-lg">
                    <img src='' alt='biryani'></img>
                    <h4 className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.ligula hendrerit mattis.</h4>
                </div>
                <div className="items rounded-lg">
                    <img src='' alt='biryani'></img>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.ligula hendrerit mattis.</h4>
                </div>
            </div>
        </section>
    )
}