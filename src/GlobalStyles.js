import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  color:${(props) => props.theme.color};
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
  outline:none;
  border:none;
  font-family: 'Roboto', sans-serif;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
}
:is(a){
  color:${(props) => props.theme.success}
}
:is(h1,h2,h3,h4,h5,h6){
  line-height:1.2;
  font-family: "Poppins", sans-serif;
 
}
:is(code,.code){
   font-family: 'Fira Mono', monospace;
   font-size:1rem;
}
*::-webkit-scrollbar {
  display: none;
}
*:not(html, body, div#root) {
  transition: background-color 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),color 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),border-color 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) ;
}

img{
  pointer-events:none;
}

.touchableOpacity:active{
  filter: opacity(0%);
}
 :is(.hasCursorPointer,button,img) {
  cursor: pointer;
}
.hasShadow {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.hasShadowTwo {
  box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
}

@media only screen and (max-width: 600px) {
  .wontShowOnMobile {
    display: none;
  }
}

@media only screen and (min-width: 600px) and (max-width: 1114px) {
  .wontShowOnTablet {
    display: none;
  }
}

@media only screen and (min-width: 1115px) {
  .wontShowOnDesktop {
    display: none;
  }
}
`;
