import React, { useContext, useEffect, useState } from 'react'
import { Mode } from '../Mode'
import { useMode } from '../useMode'
import search from '../Images/icon-search.svg'
export default function Search(props) {
    let context = useContext(Mode)
    const [user, setUser] = useState('Search GitHub username…')
    const [foundUser, setFoundUser] = useState(null)
    const [found, setFound] = useState(false)
    const [width, setWidth] = useState('80%')
    function change(e) {
        setUser(e.target.value)
    }
    function clear() {
        user === 'Search GitHub username…' && setUser('')
    }
    function notFound() {
        if (foundUser !== null && found === false) {
            return <p className='notFound'>No results</p>
        }
    }
    useEffect(() => {
        if (window.innerWidth < 375) {
            setUser('GitHub username…')
        }
    }, [])
    async function getUser() {
        let info;
        await fetch(`https://api.github.com/users/${user}`).then(response => response.json()).then((json) => {
            info = json
        })
        if (info.message !== 'Not Found') {
            await fetch(`https://api.github.com/users/${user}/repos`).then(response => response.json()).then((json) => {
                info.repos = json
                props.setUser(info)
            })
            setFound(true)
            setWidth('80%')
        } else {
            setWidth('50%')
            setFound(false)
        }
    }

    return (
        <div id='search' className='spaceBetween' style={{ backgroundColor: useMode('#FEFEFE', '#1E2A47', context.mode), boxShadow: useMode('0px 16px 30px -10px rgba(70, 96, 187, 0.198567)', 'none', context.mode) }}>
            <div className='left' style={{ width }}>
                <label style={{ cursor: 'pointer' }} htmlFor="inputSearch"><img src={search} alt="Search" /></label>
                <input style={{ color: useMode('#4B6A9B', 'white', context.mode) }} type="search" id='inputSearch' name='inputSearch' value={user} onChange={change} onClick={clear} />
            </div>
            <div className='center'>
                {notFound()}
                <button onClick={getUser} style={{ cursor: 'pointer' }}>Search</button>
            </div>
        </div>
    )
}
