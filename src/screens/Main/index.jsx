import { useState } from 'react';
import { Inicio, Trivia } from '../';

const Main = () => {
    const [screen, setScreen] = useState('inicio');
    const [count, setCount] = useState(0);

    const close = () => {
        setCount(count + 1);
        if (count >= 5) {
            window.close();
        }
    };

    const resetCount = () => setCount(0);

    return (
        <>
            <div className="close_btn" onClick={close}></div>
            {screen === 'inicio' && <Inicio setScreen={setScreen} resetCount={resetCount} />}
            {screen === 'trivia' && <Trivia setScreen={setScreen} resetCount={resetCount} />}
        </>
    );
};

export default Main;
