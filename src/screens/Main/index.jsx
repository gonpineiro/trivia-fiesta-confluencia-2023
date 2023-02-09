import { useState } from 'react';
import { Inicio, Trivia } from '../';

const Main = () => {
    const [screen, setScreen] = useState('inicio');

    return (
        <>
            {screen === 'inicio' && <Inicio setScreen={setScreen} />}
            {screen === 'trivia' && <Trivia setScreen={setScreen} />}
        </>
    );
};

export default Main;
