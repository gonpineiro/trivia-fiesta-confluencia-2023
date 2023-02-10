import { useState } from 'react';

import preguntas from './preguntas';
import Quest from './Quest';

const Trivia = ({ setScreen, resetCount }) => {
    const [quest, setQuest] = useState('uno');

    const back = () => {
        resetCount();
        setScreen('inicio');
    };

    const continuar = () => {
        if (quest === 'uno') setQuest('dos');
        if (quest === 'dos') setQuest('tres');
        if (quest === 'tres') setQuest('cuatro');
        if (quest === 'cuatro') setQuest('cinco');

        if (quest === 'cinco') setQuest('uno');
    };

    return (
        <Quest
            pregunta={preguntas[quest]}
            setQuest={setQuest}
            back={back}
            continuar={continuar}
            resetCount={resetCount}
        />
    );
};

export default Trivia;
