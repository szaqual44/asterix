import {HeaderContainer} from "../common/styles/forms.styles";
import {NavLink} from "../common/styles/typography.style";
import {Routes} from "../common/RoutesEnum";
import {Colors} from "../common/styles/variables.styles";


export const MainHeader = () => {


    const navLinks = [
        {
            title: "About",
            path: '/'
        },
        {
            title: "Why us?",
            path: Routes.WHYUS
        },
        {
            title: "Contact",
            path: Routes.CONTACT
        }]

    const navLinkClass = {
        color: Colors.navLink,
        "&:hover": {
            color: Colors.navLinkHoover,
            textDecoration:'none',

        }
    }


    return <>
        <HeaderContainer>
            <ul>
                {navLinks.map((link, i) => (
                    <NavLink href={'/'}
                             key={i}
                             color={"inherit"}
                             underline={"hover"}
                             variant={'h3'}
                             sx={navLinkClass}

                    >
                        {link.title}
                    </NavLink>))}
            </ul>

        </HeaderContainer>
    </>
}