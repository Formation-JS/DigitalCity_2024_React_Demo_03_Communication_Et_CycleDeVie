import { useCallback, useState } from 'react';
import DisplayCount from '../../components/display-count/display-count';
import BtnActionCount from '../../components/btn-action-count/btn-action-count';

const INITIAL_COUNT = 0;

const CounterCom = () => {

    const [countValue, setCountValue] = useState(INITIAL_COUNT);

    const handleIncrDecr = useCallback((direction, step) => {
        setCountValue(cv => (direction === 'incr') ? cv + step : cv - step);
    }, []);

    const handleReset = useCallback(() => {
        setCountValue(INITIAL_COUNT);
    }, [])

    return (
        <>
            <DisplayCount count={countValue} />
            <BtnActionCount onIncrDecr={handleIncrDecr} />
            {countValue !== INITIAL_COUNT && (
                <button onClick={handleReset}>Reset</button>
            )}
        </>
    );
};

export default CounterCom;