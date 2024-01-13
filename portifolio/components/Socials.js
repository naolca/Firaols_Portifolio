
import Link from 'next/link'
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTwitchLine, RiTwitterLine, RiLinkedinLine, RiTiktokLine,

} from "react-icons/ri";
import {FiFacebook} from "react-icons/fi";

const Socials = () => {
  return (
      <div className= 'flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.linkedin.com/in/firaol-ibrahim/'}  target={'_blank'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine />
    </Link>
    <Link href={'https://www.instagram.com/firaolca/'} target={'_blank'} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine />
    </Link>
    <Link href={'https://twitter.com/Firaol_CA'} target={'_blank'} className='hover:text-accent transition-all duration-300'>
      <RiTwitterLine />
    </Link>
    <Link href={''} target={'_blank'} className='hover:text-accent transition-all duration-300'>
      <RiTiktokLine />
    </Link>

  </div>
  );
};

export default Socials;
