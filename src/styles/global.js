import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: #e8e9fe;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }

    .toolbar {
        display: block;
        min-height: 64px;
    }

    button {
        cursor: pointer;
    }

    .ReactModal__Overlay--after-open {
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.75) !important;
        z-index: 9999;
    }
`;
