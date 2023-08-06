import styled from 'styled-components';
import { Colors } from './variables.styles';

export const Container = styled.div`
  width: 80%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const FooterContainer=styled.div`
width: 80%;
`

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  background-color: ${Colors.navBG};
  z-index: 100;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 10rem;
`;

export const Section = styled.div<{ direction?: string; height?: string }>`
  display: flex;
  width: 100%;
  ${(props) => {
    if (props.dir === 'column')
      return `
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `;
    else return '';
  }}

  ${(props) => {
    if (props.height)
      return `
               height:${props.height}
            `;
    else return '';
  }}
`;

export const LetsTalkSection = styled.section`
  background:#DFE5E5;

`
export const PolicySection = styled.section`
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const CenterBlock = styled.div<{ kolor?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  ${(props) => {
    if (props.kolor)
      return `
                padding:2rem 0 0.5rem 0;
                background: rgb(249,112,255);
                background: linear-gradient(90deg, rgba(249,112,255,1) 19%, rgba(86,196,254,0.9809173669467787) 80%);
            `;
    else return '';
  }}
`;

export const NameBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundHome = styled.div`
  width: 100vw;
  background: ${Colors.black};
  margin-top:-170px;
`;

export const MottoContainer = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
height: 50%;
`

export const BackgroundImageHome = styled.div`
  background-size: contain;
  width: 100%;
  height:140vh;
  background-repeat: no-repeat;
  background-position-x: center;  
  background-image: url('/assets/colors.png');
`;

export const Block = styled.div`
  display: flex;
  width: 100%;
`;
export const CarouselContainer = styled.div`
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
  height: 120px;
  display: flex;
  align-items: center;
`;
export const LogoContainer = styled.div`
  display: flex;
`;
export const Img = styled.img<{ objectFit?: string }>`
  width: 100%;

  ${(props) => {
    if (props.objectFit)
      return `
              object-fit: ${props.objectFit};
            `;
    else return 'object-fit: cover;';
  }}
`;

export const Svg = styled.img<{ size?: string; color?: string; logo?: boolean }>`
  object-fit: contain;
  height: 150px;
  margin: 6rem;

  ${(props) => {
    if (props.color === 'white')
      return `
              filter: invert(98%) sepia(22%) saturate(90%) hue-rotate(316deg) brightness(116%) contrast(100%);
            `;
    if (props.color === 'primary')
      return `
               filter: invert(67%) sepia(67%) saturate(6993%) hue-rotate(234deg) brightness(104%) contrast(101%);
            `;
    else return '';
  }}

  ${(props) => {
    if (props.size === 'small')
      return `
              width:4rem;
              margin:3rem;
       
            `;
    else return '';
  }}
       ${(props) => {
    if (props.logo)
      return `
              width:11rem;
              margin:0 2rem 0 0;
  height: 200px;
            `;
    else return '';
  }}
`;

export const ServiceElementContainer = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicePuzzelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
`;

export const PuzzelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
`;

export const ServicesBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 100px;
`;

export const ConctactBlock = styled.div`
  background-image: url('/assets/bghome.gif');

`;

export const AboutStyling = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${Colors.black};
  color: ${Colors.aboutText};
  padding-top:100px;

`;
export const ServicesStyling = styled.div`
  background-image: url('/assets/bghome.gif');
  color: ${Colors.white};

 display: flex;
  justify-content: center;
`;

export const ContactDataContainer = styled.div<{ justify?: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20rem;

  ${(props) => {
    if (props.justify === 'start')
      return `
              justify-content:start;
              align-items:center;
            `;
    else return '';
  }}
`;

export const Rights = styled.div`
  width: 100%;
  height: 50px;
  background: ${Colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const PolicyStyling = styled.section`
  background: ${Colors.white};
  padding:10rem;

`
