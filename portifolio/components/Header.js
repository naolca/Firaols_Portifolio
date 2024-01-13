
import Link from 'next/link'
import Image from "next/image";
import Socials  from '../components/Socials';

const Header = () => {
  return <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>

                {/* logo */}
                <Link href={`/`}>
                    {/*<Image*/}
                    {/*    priority={true}*/}
                    {/*    src={'/logo.svg'}*/}
                    {/*    width={220}*/}
                    {/*    height={48} />*/}
                    <div
                        priority={true}

                    >
                        <h1 className='text-3xl font-bold text-white'> <span className={`text-accent text-4xl`}>F</span>iraol <span className={`text-accent text-4xl`}>I</span>brahim</h1>
                    </div>
                </Link>
                {/* Socials */}
                <Socials />

            </div>
    </div>
  </header>;
};

export default Header;
