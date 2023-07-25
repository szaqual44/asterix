import styled from "styled-components";

import {Link as LinkMui} from "@mui/material";
import {Colors} from "./variables.styles";


export const NavLink = styled(LinkMui)` 
 padding:1.5rem; 

 &:hover {
    color: ${Colors.darkGrey};
 }
`;