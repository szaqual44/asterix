import {HeaderContainer} from '../common/styles/forms.styles';
import {NavLink} from '../common/styles/typography.style';
import {Routes} from '../common/RoutesEnum';
import {Colors} from '../common/styles/variables.styles';
import * as F from '../common/styles/forms.styles';

export const MainHeader = () => {
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
    ];

    const navLinkClass = {
        color: Colors.navLink,
        '&:hover': {
            color: Colors.navLinkHoover,
            textDecoration: 'none',
        },
    };

    return (
        <>
            <HeaderContainer>
                <a href={'#home'}>
                    <F.Logo src={'/assets/logo.jpg'}/>
                </a>
                <ul>
                    {navLinks.map((link, i) => (
                        <NavLink
                            href={`#${link.id}`}
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
