import { useCallback } from 'react';

const BtnActionCount = ({ step, onIncrDecr }) => {

    const handleIncr = useCallback(() => {
        onIncrDecr('incr', step);

    }, [onIncrDecr, step]);

    const handleDecr = useCallback(() => {
        onIncrDecr('decr', step);

    }, [onIncrDecr, step]);

    return (
        <div>
            <button onClick={handleDecr}>- {step}</button>
            <button onClick={handleIncr}>+ {step}</button>
        </div>
    );
};

BtnActionCount.defaultProps = {
    step: 1,
    onIncrDecr: () => {}  // NOOP -> No Operation
};

export default BtnActionCount;