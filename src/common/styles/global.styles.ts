import { createGlobalStyle } from 'styled-components';
import { Colors, REM_TO_PX_RATIO } from './variables.styles';

export const GlobalStyles = createGlobalStyle`
:root {
    font-size: ${REM_TO_PX_RATIO}px;  
}

body{    
    box-sizing:border-box;
    background-color:${Colors.bodyBG};
    margin:0;
}

ul {
    margin:0;
}

div{
    box-sizing:border-box;
}

`;
