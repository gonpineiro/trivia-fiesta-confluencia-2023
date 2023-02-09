import { useState } from 'react';

import preguntas from './preguntas';
import Quest from './Quest';

const Trivia = ({ setScreen }) => {
    const [quest, setQuest] = useState('uno');

    const back = () => setScreen('inicio');

    const continuar = () => {
        if (quest === 'uno') setQuest('dos');
        if (quest === 'dos') setQuest('tres');
        if (quest === 'tres') setQuest('uno');
    };

    return (
        <Quest pregunta={preguntas[quest]} setQuest={setQuest} back={back} continuar={continuar} />
    );
};

export default Trivia;
