import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: rbg(212, 203, 188);
  }


img {
  width: 100%;
      height: 100%;
    object-fit: cover;
}
`;

export default GlobalStyle;
