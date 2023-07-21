import styled from "styled-components";
import {Colors} from "./variables.styles";

const headerHeight = '10rem'

export const mainSideMargin = '3rem';


export const Main = styled.main`
  margin: 0 ${mainSideMargin} 2rem ${mainSideMargin};  
`;

export const HeaderContainer = styled.header`
    position: sticky;
    left: 0;
    top: 0;
    height: ${headerHeight};
    background-color:${Colors.white};
    z-index:100;
    width:100vw;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const ContainerWithShadow = styled.div`
  background-color: ${Colors.white};
  margin: 4rem 0;
  padding: 2rem 5rem;
  box-shadow: 0 0 1.6rem 0.6rem ${Colors.shadow};
`;