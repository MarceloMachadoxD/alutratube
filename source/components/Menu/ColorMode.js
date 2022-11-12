import react from "react";


export const ColorModeContext = react.createContext({
    mode: "",
    setMode: () => {
        alert("me configure")
    },
    toggleMode: () => {
        alert("me configure")
    }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = react.useState(props.initialMode)

    function toggleMode() {
        if (mode === "dark") setMode("draculabased");
        if (mode === "draculabased") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}