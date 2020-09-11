import css from 'styled-jsx/css'
export const fonts = {
base: "system-ui, roboto, Ubuntu, 'Helvetica Neue', sans-serif ",
title: "url('../public/fonts/BaronNeue-Black.otf') format('otf')"
}

export const colors = {
primary: "#25C685",
secondary: "#3DD598",
complement: "#D4F5E9",
gray: "#F0F0F0",
dark: "#1A3B34",
gradient_light: "linear-gradient(to right bottom, #fafbfc, #f7f9fc, #f5f7fc, #f3f5fb, #f2f3fb);",
gradient_green: "linear-gradient(to bottom, #40df9f, #40dc9d, #3fda9b, #3fd79a, #3ed598);"
}

export const globalStyle = css.global ` 
    html,
    body,
    #__next{
        padding:0;
        margin:0;
        font-family: ${fonts.base};
        background: ${colors.gradient_light};
        height: 100vh;
      } 
      
      `