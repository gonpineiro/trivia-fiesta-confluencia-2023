const Inicio = ({ setScreen, resetCount }) => {

    const changeScreen = () => {
        resetCount()
        setScreen('trivia')
    }

    return (
        <div className="main_fondo">
            <div className="btn_inicio" onClick={changeScreen}></div>
        </div>
    );
};

export default Inicio;
