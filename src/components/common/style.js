import styled from "styled-components";

export const C = {};

C.Header = styled.header`
  width: 100%;
  background: white;`

C.Section = styled.section`
  background-color:${(props) => props.$bgColor || "unset"};
  overflow:${(props) => props.$overflow || ""};
  `
C.Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.$maxWidth || "1140px"};
  padding-top: ${(props) => props.$mdPaddingTop || "0"};
  padding-bottom: ${(props) => props.$mdPaddingBottom || "0"};
  padding-left: ${(props) => props.$paddingLeft || "0"};
  padding-right: ${(props) => props.$paddingRight || "0"};
  position:${(props) => props.$position || ""};
  z-index:${(props) => props.$zIndex || ""};
  margin: 0 auto;
  @media (max-width: 1140px) {
      padding-top: ${(props) => props.$lgPaddingTop || ""};
      padding-bottom: ${(props) => props.$lgPaddingBottom || ""};
      padding-left: ${(props) => props.$paddingLeft || "12px"};
      padding-right: ${(props) => props.$paddingRight || "12px"};
    }
    @media (max-width: 768px) {
      padding-bottom: ${(props) => props.$smPaddingBottom || "0"};
      padding-top: ${(props) => props.$smPaddingTop || "0"};
    }
    @media (max-width: 556px) {
    padding-bottom: ${(props) => props.$paddingBottom || "0"};
    padding-top: ${(props) => props.$PaddingTop || "0"};
  }
`;

C.H2 = styled.h2`
  font-size: ${(props) => props.$mdFontSize || "48px"};
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => props.$textColor || "#140865"};
  line-height:${(props) => props.$mdLineHeight || "57.6px"};
  text-align: center;
  text-transform: capitalize;
  padding-top:${(props) => props.$mdPaddingTop || "0"};
  @media (max-width: 768px) {
      padding-top:${(props) => props.$smPaddingTop || "0"};
      font-size: ${(props) => props.$smFontSize || "36px"};
      line-height: 44px;
    }
    @media (max-width: 556px) {
        font-size: ${(props) => props.$xsFontSize || "32px"};
    padding-top:${(props) => props.$paddingTop || "0"};
    line-height: 36px;
  }
  @media (max-width: 375px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 320px) {
    font-size: 24px;
    line-height: 28px;
  }`;

C.H3 = styled.h3`
  font-size: 20px;
  font-weight: 700;
  font-family: "inter", sans-serif;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.$textColor || "#140865"};
  padding-top:${(props) => props.$mdPaddingTop || "16px"};
  @media (max-width: 768px) {
      padding-top:${(props) => props.$smPaddingTop || "16px"};
      font-size: 18px;
      line-height: 24px;
      padding-top:24px;
    }
    @media (max-width: 556px) {
    padding-top:${(props) => props.$paddingTop || "16px"};
      padding-top:20px;
  }`;

C.P = styled.p`
  font-size: ${(props) => props.$fontSize || "16px"};
  padding-top:${(props) => props.$mdPaddingTop || "16px"};
  color: ${(props) => props.$textColor || "#000000"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  font-family: ${(props) => props.$fontFamily || "inter"};
  line-height:${(props) => props.$lineHeight || "32px"};
  text-align: ${(props) => props.$textAlign || "start"};
  opacity: ${(props) => props.$opacity || "1"};
  @media (max-width: 992px) {
    text-align: ${(props) => props.$mdTextAlign || ""};
  }
  @media (max-width: 768px) {
      padding-top:${(props) => props.$smPaddingTop || "14px"};
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-width: 375px) {
    padding-top:${(props) => props.$paddingTop || "12px"};
    font-size: 14px;
    line-height: 20px;
  }
  `;

C.Span = styled.span`
  color: ${(props) => props.$textColor || "#553AF5"};
  `;
C.Row = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.$flexWrap || "wrap"};
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  align-items: ${(props) => props.$alignItems || "none"};
  margin-top:${(props) => props.$mdMarginTop || "0"};
  position:${(props) => props.$position || ""};
  @media (max-width: 1240px) {
      margin-top:${(props) => props.$smMarginTop || "0"};
      justify-content: ${(props) => props.$justifyContent || "center"};
      gap:${(props) => props.$lgGap || "24px"};
    }
    @media (max-width: 556px) {
        gap:${(props) => props.$smGap || "16px"};
      margin-top:${(props) => props.$marginTop || "0"};
  }
  `
C.Col = styled.div`
  display:${(props) => props.$display || "flex"};
  flex-direction:${(props) => props.$flexDirection || ""};
  padding-left: ${(props) => props.$paddingLeft || "0"};
  padding-right: ${(props) => props.$paddingRight || "0"};
  width: ${(props) => props.$lgWidth || "32%"};
  height:auto;
  @media (max-width: 1240px) {
    width: ${(props) => props.$mdWidth || "32%"};
    justify-content:center;
  }
  @media (max-width: 992px) {
    width: ${(props) => props.$smWidth || "50%"};
  }
  @media (max-width: 556px) {
    width: ${(props) => props.$width || "100%"};
  }
  `;

C.Card = styled.div`
  display:flex;
  flex-direction:column;
  width: ${(props) => props.$width || "100%"};
  max-width: ${(props) => props.$maxWidth || "351px"};
  height:auto;
  box-shadow:${(props) => props.$lgBoxShadow || "0px 31px 73.8px 0px #00000033;"}
  padding:30px 12px;
  align-items:center;
  justify-content:${(props) => props.$justifyContent || "unset"};
  margin:${(props) => props.$margin || "0 0"};
  border-radius:11.6px;
  transition: all 0.3s ease 0s;
  position:relative;
  overflow:${(props) => props.$overflow || "hidden"};
  @media (max-width: 1140px) {
      box-shadow:${(props) => props.$mdBoxShadow || "0px -3px 73.8px 3px #00000033;"}
    }
    @media (max-width: 556px) {
      padding:24px 12px;
    max-width: 100%;
  }
  &:hover {
    box-shadow:${(props) => props.$lgBoxShadow || "0px -3px 73.8px 3px #00000033;"}
  }
`;
C.Button = styled.button`
  padding: 25px 34px;
  font-size: 16px;
  font-weight: 700;
  font-family: "inter", sans-serif;
  line-height: 19.36px;
  text-align: center;
  color: ${(props) => props.$textColor || "#FFFFFF"};
  background-color: ${(props) => props.$bgColor || "#553AF5"};
  border-radius: 132px;
  border: 1px solid white;
  box-shadow:${(props) => props.$lgBoxShadow || "0px 4px 53.2px 0px #553AF594;"};
  cursor: pointer;
  margin-top:${(props) => props.$mdMarginTop || "0"};
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow:0px 3px 53.2px 3px #553AF594;
    background-color: ${(props) => props.$bgColor || "#FFF"};
    color: ${(props) => props.$textColor || "#553AF5"};
  }
  @media (max-width: 768px) {
      margin-top:${(props) => props.$smMarginTop || "0"};
      padding: 16px 24px;
      font-size: 14px;
      line-height: 16px;
    }
    @media (max-width: 556px) {
      margin-top:${(props) => props.$marginTop || "0"};
  }
  `;

C.Ellipse = styled.div`
  width: ${(props) => props.$width || "151px"};
  height: ${(props) => props.$height || "151px"};
  border-radius: ${(props) => props.$borderRadius || "100%"};
  background-color: ${(props) => props.$bgColor || "#553AF5"};
  position: absolute;
  top: ${(props) => props.$top || "0"};
  left: ${(props) => props.$left || "0"};
  opacity: ${(props) => props.$opacity || "1"};
  right: ${(props) => props.$right || "0"};
  z-index: ${(props) => props.$zIndex || "1"};
  transition: all 0.3s ease 0s;
  filter: ${(props) => props.$filter || "blur(65px)"};`