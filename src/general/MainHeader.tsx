import Button from '@mui/material/Button';
import {HeaderContainer, Main} from "../common/styles/forms.styles";
import {NavLink} from "../common/styles/typography.style";

export const MainHeader = () => {

    const navLinks = ["Company", "About", "Contact"]


    return <>
        <HeaderContainer>
            <ul>
                {navLinks.map((link, i) => (
                    <NavLink href={'#'}
                             key={i}
                             color={"inherit"}
                             underline={"hover"}
                             variant={'h3'}>
                        {link}
                    </NavLink>))}
            </ul>
        </HeaderContainer>
    </>
}