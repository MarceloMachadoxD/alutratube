import react from "react";


export const ColorModeContext = react.createContext({
    mode: ""
});

export default function ColorModeProvider(props) {
    return (
        <ColorModeContext.Provider value={{ mode: props.initialMode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}