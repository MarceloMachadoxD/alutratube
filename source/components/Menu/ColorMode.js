import react from "react";


export const ColorModeContext = react.createContext({
    mode: "ligth"
});

export default function ColorModeProvider(props) {
    return (
        <ColorModeContext.Provider value={{ mode: "light" }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}