import { useState } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import { navLinks, type BannerId } from '../constants/navLinks';

const HeroContainer = () => {
  const [activeId, setActiveId] = useState<BannerId>('documentScanner');
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-full max-w-[1440px] h-screen supports-[height:100dvh]:h-dvh justify-center">
        <div className="flex items-center justify-center">
          <Hero activeId={activeId} />
        </div>
        <Nav
          navLinks={navLinks}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </div>
  );
};

export default HeroContainer;
