// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import Link from 'next/link';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return <nav className={`flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full 
   xl:max-w-[50px] xl:h-screen`}>
    {/* inner */}
    <div className={`flex w-full xl:flex-col  items-center justify-between xl:justify-self-center gap-y-10 px-3 md:px-40 xl:px-0 h-[80px] xl:h-max bg-red-200/10 xl: h-max 
          py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full`}>
      {
        navData.map((item, index) => {
          return <Link key={index} href={item.path}>
            <Link className={`${item.path === pathName && 'text-accent'}`} href={item.path}>
              <div>
              {item.icon}

              </div>
            </Link>
          </Link>;
        }
        )
      }
    </div>
  </nav>;
};

export default Nav;
