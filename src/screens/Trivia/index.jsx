import { useState } from 'react';

import preguntas from './preguntas';
import Quest from './Quest';

const Trivia = ({ setScreen }) => {
    const [quest, setQuest] = useState('dos');

    const back = () => setScreen('inicio');

    return <Quest pregunta={preguntas[quest]} setQuest={setQuest} back={back} />;
};

export default Trivia;
