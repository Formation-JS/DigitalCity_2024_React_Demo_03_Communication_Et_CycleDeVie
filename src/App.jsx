import { useCallback, useState } from 'react';
import './App.css'
import CounterCom from './containers/counter-com/counter-com';

function App() {

  const [isVisible, setVisible] = useState(false);

  const handleVisibilityCounter = useCallback(() => {
    setVisible(v => !v);
  });

  return (
    <>
      <h1>Demo communication entre composant</h1>
      <div>
        <button onClick={handleVisibilityCounter}>
          {isVisible ? 'Caché' : 'Affiché'} le compteur
        </button>
      </div>
      {isVisible && (
        <CounterCom />
      )}
    </>
  )
}

export default App
