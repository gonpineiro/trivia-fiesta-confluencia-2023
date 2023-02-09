const Inicio = ({ setScreen }) => {
    return (
        <div className="main_fondo">
            <div className="btn_inicio" onClick={() => setScreen('trivia')}></div>
        </div>
    );
};

export default Inicio;
