import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        ::-webkit-scrollbar{
            width: 1em; 
            height: 1em;
	    }
        ::-webkit-scrollbar-track{
            border-radius: 100vw;
            border: solid 3.5px transparent;
            box-shadow: inset 0 0 25px 25px ${(props) => props.theme.palette.primary.light};
            margin-block: .1em;
        }
        ::-webkit-scrollbar-thumb{
            border-radius: 100vw;
            border: solid 3.5px transparent;
            box-shadow: inset 0 0 25px 25px ${(props) => props.theme.palette.primary.main};
            &:hover{
                box-shadow: inset 0 0 25px 25px ${(props) => props.theme.palette.primary.dark};
            }
        }
        @supports(scrollbar-color: ${(props) => props.theme.palette.primary.main} ${(props) =>
	props.theme.palette.primary.light}){
            *{ 
                scrollbar-color: ${(props) => props.theme.palette.primary.main} ${(props) =>
	props.theme.palette.primary.light};
                scrollbar-width: thin;
            }
        }
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            height:100vh;
            width: 100vw;	
            line-height: 1;
            overflow-x: overlay; 
            overflow-y: overlay;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
        #root{
            height: 100%;
        }
    }
`;
