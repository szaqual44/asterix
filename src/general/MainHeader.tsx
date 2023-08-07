import {HeaderContainer} from '../common/styles/forms.styles';
import {NavLink} from '../common/styles/typography.style';
import {Routes} from '../common/RoutesEnum';
import {Colors} from '../common/styles/variables.styles';
import {useLocation} from 'react-router-dom';

export const MainHeader = () => {

    const location = useLocation()
    const pathname = location.pathname

    const navLinks = [
        {
            title: 'Home',
            path: '/',
            id: 'home',
        },
        {
            title: 'About',
            path: '/',
            id: 'about',
        },
        {
            title: 'Services',
            path: Routes.WHYUS,
            id: 'services',
        },
        {
            title: 'Contact',
            path: Routes.CONTACT,
            id: 'contact',
        },
        {
            title: 'Privacy Policy',
            path: Routes.PRIVACY_POLICY,
            id: 'policy',
        },
    ];

    const navLinkClass = {
        color: Colors.white,
        fontWeight:'light',
        '&:hover': {
            color: Colors.navLinkHoover,
            textDecoration: 'none',
        },
    };


    const getPath = (id: string, navLinksPath: Routes | string) => {
        if (pathname.includes('/privacypolicy')) return `/`
        else if (navLinksPath.includes(Routes.PRIVACY_POLICY)) return `/${Routes.PRIVACY_POLICY}`
        else return `#${id}`
    }

    return (
        <>
            <HeaderContainer>
                <ul>
                    {navLinks.map((link, i) => (
                        <NavLink
                            href={getPath(link.id, link.path)}
                            key={i}
                            color={'inherit'}
                            underline={'hover'}
                            variant={'h3'}
                            sx={navLinkClass}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </ul>
            </HeaderContainer>
        </>
    );
};
