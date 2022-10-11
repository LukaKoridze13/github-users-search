import './CSS/Reset.css'
import './CSS/style.css'

import { useState } from 'react';
import { Mode } from './Mode'
import { useMode } from './useMode'
import Header from './Components/Header';
function App() {
  const [mode, setMode] = useState('light')
  return (
    <Mode.Provider value={{ mode, setMode }}>
      <div className="container" style={{ backgroundColor: useMode('#F6F8FF', '#141D2F', mode) }}>
        <Header />
      </div>
    </Mode.Provider>
  );
}

export default App;
