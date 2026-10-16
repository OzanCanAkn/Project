import clsx from 'clsx';
import type { NavLink } from '../../constants/navLinks';
import CircularLoadingBar from '../CircularLoadingBar';

interface NavItemProps {
  link: NavLink;
  isActive: boolean;
  onActivate: () => void;
  noBorder: boolean;
}

const NavItem = ({ link, isActive, onActivate, noBorder }: NavItemProps) => {
  return (
    <a
      className={clsx(
        'flex snap-center flex-nowrap whitespace-nowrap items-center max-xl:w-[300px] max-xl:min-w-[300px] justify-center py-4 gap-4',
        noBorder ? 'border-none' : 'border-l border-gray-200',
        isActive && 'bg-blue-100/20',
      )}
      href={link.id}
      onClick={(event) => {
        event.preventDefault();
        onActivate();
      }}
    >
      <CircularLoadingBar isActive={isActive}>
        <span
          role="img"
          aria-label={link.label}
          className={clsx('block h-8 w-8', isActive ? 'bg-action' : 'bg-muted')}
          style={{
            maskImage: `url(${link.icon})`,
            WebkitMaskImage: `url(${link.icon})`,
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskMode: 'alpha',
          }}
        />
      </CircularLoadingBar>
      <p className="text-xl font-medium">{link.label}</p>
    </a>
  );
};

export default NavItem;
