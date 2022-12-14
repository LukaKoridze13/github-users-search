import './CSS/Reset.css'
import './CSS/style.css'
import './CSS/responsive.css'
import { useEffect, useState } from 'react';
import { Mode } from './Mode'
import { useMode } from './useMode'
import Header from './Components/Header';
import Search from './Components/Search';
import User from './Components/User';
import ReactLoading from 'react-loading';

function App() {
  const [mode, setMode] = useState('light')
  const [user, setUser] = useState('Octocat')
  const [fetched, setFetched] = useState(false)
  let color = useMode
  async function getInfo() {
    let info;
    await fetch('https://api.github.com/users/octocat').then(response => response.json()).then((json) => { info = json })
    fetch(`https://api.github.com/users/${user}/repos`).then(response => response.json()).then((json) => {
      info.repos = json
      setUser(info)
      if (info.message !== 'Not Found') {
        setFetched(true)
      }
    })
  }
  useEffect(() => {
    getInfo()
  }, [])
  return (
    <Mode.Provider value={{ mode, setMode }}>
      <div className="container" style={{ backgroundColor: useMode('#F6F8FF', '#141D2F', mode) }}>
        <Header />
        <Search setUser={setUser} fuser={user} setFetched={setFetched} />
        {fetched ? <User user={user} /> : <ReactLoading type={'bubbles'} color={color('#141D2F', '#F6F8FF', mode)} height={375} width={320} />}
      </div>
    </Mode.Provider>
  );
}

export default App;
