import react from "react";

import { ThemeProvider } from "styled-components";
import { CSSReset } from "../source/components/cssReset";
import ColorModeProvider, { ColorModeContext } from "../source/components/Menu/ColorMode";

const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function MyApp({ Component, pageProps }) {
    const contexto = react.useContext(ColorModeContext)
    console.log(contexto.mode)
    return (
        <>
            <ColorModeProvider>
                <ThemeProvider theme={theme[contexto.mode]} >
                    <CSSReset />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ColorModeProvider>
        </>
    )
}

export default MyApp;