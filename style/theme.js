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

      .sk - chase {
          width: 40 px;
          height: 40 px;
          position: relative;
          animation: sk - chase 2.5 s infinite linear both;
        }

        .sk - chase - dot {
          width: 100 % ;
          height: 100 % ;
          position: absolute;
          left: 0;
          top: 0;
          animation: sk - chase - dot 2.0 s infinite ease - in -out both;
        }

        .sk - chase - dot: before {
          content: '';
          display: block;
          width: 25 % ;
          height: 25 % ;
          background - color: #fff;
          border - radius: 100 % ;
          animation: sk - chase - dot - before 2.0 s infinite ease - in -out both;
        }

        .sk - chase - dot: nth - child(1) {
          animation - delay: -1.1 s;
        }
        .sk - chase - dot: nth - child(2) {
          animation - delay: -1.0 s;
        }
        .sk - chase - dot: nth - child(3) {
          animation - delay: -0.9 s;
        }
        .sk - chase - dot: nth - child(4) {
          animation - delay: -0.8 s;
        }
        .sk - chase - dot: nth - child(5) {
          animation - delay: -0.7 s;
        }
        .sk - chase - dot: nth - child(6) {
          animation - delay: -0.6 s;
        }
        .sk - chase - dot: nth - child(1): before {
          animation - delay: -1.1 s;
        }
        .sk - chase - dot: nth - child(2): before {
          animation - delay: -1.0 s;
        }
        .sk - chase - dot: nth - child(3): before {
          animation - delay: -0.9 s;
        }
        .sk - chase - dot: nth - child(4): before {
          animation - delay: -0.8 s;
        }
        .sk - chase - dot: nth - child(5): before {
          animation - delay: -0.7 s;
        }
        .sk - chase - dot: nth - child(6): before {
          animation - delay: -0.6 s;
        }

      @keyframes sk - chase {
        100 % {
          transform: rotate(360 deg);
        }
      }

      @keyframes sk - chase - dot {
        80 % , 100 % {
          transform: rotate(360 deg);
        }
      }

      @keyframes sk - chase - dot - before {
        50 % {
          transform: scale(0.4);
        }
        100 % , 0 % {
          transform: scale(1.0);
        }
      }
      
      `