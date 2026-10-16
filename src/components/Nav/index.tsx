import { type BannerId, type NavLink } from '../../constants/navLinks';
import NavItem from './NavItem';

interface NavProps {
  navLinks: NavLink[];
  activeId: BannerId;
  setActiveId: (id: BannerId) => void;
}

const Nav = ({ navLinks, activeId, setActiveId }: NavProps) => {
  return (
    <div className="lg:grid flex w-full items-center snap-x grid-cols-5 z-10 bg-white !max-w-[100vw] max-lg:overflow-x-scroll overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {navLinks.map((link, index) => (
        <NavItem
          key={link.id}
          link={link}
          noBorder={index === 0}
          isActive={activeId === link.id}
          onActivate={() => setActiveId(link.id)}
        />
      ))}
    </div>
  );
};

export default Nav;
