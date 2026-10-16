import clsx from 'clsx';
import { NavLink } from '../../constants/navLinks';
import CircularLoadingBar from '../CircularLoadingBar';

const NavItem = ({
    link,
    isActive,
    onActivate,
    noBorder,
}: {
    link: NavLink;
    isActive: boolean;
    onActivate: () => void;
    noBorder: boolean;
}) => {
    return (
        <a
            className={clsx("flex snap-center flex-nowrap text-nowrap items-center max-lg:!w-[300px] max-lg:min-w-[300px] justify-center py-4 gap-4", noBorder ? 'border-none' : 'border-l border-gray-200', isActive && "bg-blue-100/20")}
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
                    className={clsx('block h-8 w-8', isActive ? 'bg-blue-500' : 'bg-black')}
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
            <h1>{link.label}</h1>
        </a>
    );
};

export default NavItem;
