import react from "react";

import { ThemeProvider } from "styled-components";
import { CSSReset } from "../source/components/cssReset";
import ColorModeProvider, { ColorModeContext } from "../source/components/Menu/ColorMode";
import RegisterVideo from "../source/components/RegisterVideo";

const theme = {
    draculabased: {
        backgroundBase: "#55586b",
        backgroundLevel1: "#44475a",
        backgroundLevel2: "#44475a",
        borderBase: "#6272a4",
        textColorBase: "#bd93f9",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = react.useContext(ColorModeContext);
    
    return (
        <>
            <ThemeProvider theme={theme[contexto.mode]} >
                <CSSReset />
                <Component {...pageProps} />
                <RegisterVideo />
            </ThemeProvider>
        </>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
};