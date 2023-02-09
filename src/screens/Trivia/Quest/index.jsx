const Quest = ({ pregunta: preg, back }) => {
    return (
        <div className="quest">
            <div className="quest_container">
                <span style={{ backgroundColor: preg.color }}>{preg.number}</span>
                <p className="pregunta">{preg.quest}</p>
            </div>
            <div className="line" style={{ backgroundColor: preg.color }}></div>

            {preg.respuestas.map(({ respuesta, esCorrecta }) => (
                <span
                    className="btn_opcion btn_shadow"
                    style={{ backgroundColor: preg.color }}
                    id={esCorrecta}
                >
                    {respuesta}
                </span>
            ))}

            <button onClick={back}>volver</button>
        </div>
    );
};

export default Quest;
