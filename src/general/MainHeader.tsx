import {HeaderContainer, Main} from "../common/styles/forms.styles";
import {NavLink} from "../common/styles/typography.style";
import {Routes} from "../common/RoutesEnum";

export const MainHeader = () => {

    const navLinks = [{title: "Home", path: Routes.HOME},
        {
            title: "Company",
            path: Routes.COMPANY
        },
        {
            title: "About",
            path: Routes.ABOUT
        },
        {
            title: "Contact",
            path: Routes.CONTACT
        }]


    return <>
        <HeaderContainer>
            <ul>
                {navLinks.map((link, i) => (
                    <NavLink  href={link.path}
                             key={i}
                             color={"inherit"}
                             underline={"hover"}
                             variant={'h3'}>
                        {link.title}
                    </NavLink>))}
            </ul>
        </HeaderContainer>
    </>
}