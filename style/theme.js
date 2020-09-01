import css from 'styled-jsx/css'

export const fonts = {
    base: "system-ui, roboto, Ubuntu, 'Helvetica Neue', sans-serif ",
}


export const colors = {
    primary: "#2EAC6D",
    secondary: "#9DDA52",
    gray: "#F0F0F0",
    dark: "#3C2F3D"
}

export const globalStyle = css.global` 
    html,
    body{
        padding:0;
        margin:0;
        font-family: ${fonts.base};
        background: ${colors.gray}
      }  `