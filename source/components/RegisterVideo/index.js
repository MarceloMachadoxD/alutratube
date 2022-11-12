import react from "react";
import { StyledRegisterVideo } from "./styles";

const form = {
    titulo: "",
    url: ""
}

//custom Hook
function useForm(props) {
    const [formValues, setFormValues] = react.useState(props.initialValues)
    return {
        formValues,
        handleChange: (evento) => {
            const value = evento.target.formValues;
            const name = evento.target.name
            setFormValues({
                ...formValues,
                [name]: value,
            });
        },
        clearForm() {
            setFormValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "Frost Punk", url: "https://youtube.com" }
    });

    const [formVisibility, setFormVisibility] = react.useState(false);

    return (
        <StyledRegisterVideo>
            <button type="button"
                className="add-video"
                onClick={() => setFormVisibility(true)}>
                ➕
            </button>
            {formVisibility ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    setFormVisibility(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        Cadastro de Vídeos
                        <button type="button"
                            className="close-modal"
                            onClick={() => setFormVisibility(false)}>
                            ✖️
                        </button>
                        <input placeholder="Titulo video"
                            name="titulo"
                            value={formCadastro.formValues.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input placeholder="url"
                            name="url"
                            value={formCadastro.formValues.url}
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">
                            <b>Cadastrar</b>
                        </button>
                    </div>
                </form>
            ) : false}

        </StyledRegisterVideo>
    )
}