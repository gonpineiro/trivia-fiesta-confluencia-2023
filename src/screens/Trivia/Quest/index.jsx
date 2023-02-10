import { useState } from 'react';

const Quest = ({ pregunta: preg, back, continuar, resetCount }) => {
    /* o - Opciones || d - Descripcion  || f - Finalizado*/
    const [state, setState] = useState('o');

    const handlerContinuar = () => {
        if (preg.number === 3) {
            setState('f');
        } else {
            setState('o');
            continuar();
        }
        resetCount();
    };

    const selectOp = () => {
        resetCount();
        setState('d')
    };

    return (
        <div className={`quest ${state === 'd' && 'quest_desc_container'}`}>
            {state === 'o' && (
                <>
                    <div className="quest_container">
                        <span style={{ backgroundColor: preg.color }}>{preg.number}</span>
                        <p className="pregunta">{preg.quest}</p>
                    </div>
                    <div className="line" style={{ backgroundColor: preg.color }}></div>

                    {preg.respuestas.map((r) => (
                        <span
                            className="btn_opcion btn_shadow"
                            style={{ backgroundColor: preg.color }}
                            onClick={selectOp}
                        >
                            {r.respuesta}
                        </span>
                    ))}
                </>
            )}

            {state === 'd' && (
                <>
                    <div className="quest_des_container">
                        <p className="quest_descripcion quest_correcta">
                            Respuesta correcta: {preg.correcta}
                        </p>
                        {preg.description.map((e) => (
                            <p className="quest_descripcion"> * {e}</p>
                        ))}
                        <span className="quest_descripcion_img"></span>
                    </div>
                    <span
                        className="btn_siguente btn_shadow"
                        style={{ backgroundColor: preg.color }}
                        onClick={handlerContinuar}
                    >
                        Siguiente
                    </span>
                </>
            )}

            {state === 'f' && (
                <div className="quest_fin">
                    <span className="btn_volver" onClick={back}></span>
                </div>
            )}
        </div>
    );
};

export default Quest;
