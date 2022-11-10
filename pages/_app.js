import { CSSReset } from "../source/components/cssReset";

function MyApp({ Component, pageProps }) {
    return(
    <>
        <CSSReset />
        <Component {...pageProps} />
    </>
    )
}

export default MyApp;