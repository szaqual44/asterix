import styled from 'styled-components';
import { Colors } from './variables.styles';

const headerHeight = '15rem';

export const Anim = styled.div`
  animation:slidein${(p)=>(`${p.dir}${p.id}`)} 2s forwards;
  width:100%;
  height:100%;

  @keyframes slidein${(p)=>(`${p.dir}${p.id}`)} {
      0% {
        transform: translateX(200%);
       }
      100% {
        ${(p)=>{
          if (p.dir==='right') return "transform: translateX(0);"
          }      
       }
`;

export const MainContainer = styled.div`
  height: 100vh;
`;
// background:url(/src/common/styles/bgPattern.jpg);
export const Overlay = styled.div`
  // position:absolute;
  // top:0;
  // left:0;
  // width:100%;
  // height:100%;
  background: ${Colors.bodyBGRBA};
`;

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  height: ${headerHeight};
  background-color: ${Colors.navBG};
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  border-bottom: 4px solid ${Colors.navLink};
`;

interface SectionStyle {
  direction?: string;
}

export const Section = styled.div<SectionStyle>`
  display: flex;
  width: 100%;
  ${(props) => {
    if (props.dir === 'column')
      return `
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin:10rem 0;
                padding:0 5rem;
            `;
    else return '';
  }}
`;

export const FirstBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
`;
export const CarouselContainer = styled.div`
  margin: 12rem 0;
  padding: 5rem;
  background: ${Colors.white};
`;
export const TextContainer = styled.div`
    width:100%;
    height:100%;
    padding: 15rem 5rem;    
    text-align: justify;           
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}    
`;
export const ElementContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const Svg = styled.img`
  object-fit: cover;
  height: 100px;
`;

export const PuzzelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  margin: 5rem 0;
`;

export const Bar = styled.div`
  width: 100%;
  height: 150px;
  background: ${Colors.separationBar1};
`;
export const ServicesBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const FooterStyling = styled.div`
  background-color: ${Colors.footerBG};
  color: ${Colors.footerText};
`;

export const AboutStyling = styled.div`
  background-color: ${Colors.aboutBG};
  color: ${Colors.aboutText};
`;
