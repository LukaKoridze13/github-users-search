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
    const [show,setShow] = useState(false)
    let input = React.createRef()
    let usemode = useMode
    function change(e) {
        setUser(e.target.value)
    }
    function clear() {
        user === 'Search GitHub username…' && setUser('')
        user === 'GitHub username…' && setUser('')

    }
    function notFound() {
        if (show) {
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
            setShow(false)
            props.setFetched(true)
        } else {
            setWidth('50%')
            setFound(false)
            setShow(true)
            props.setFetched(true)

        }
    }
    function color() {
        if (user === 'Search GitHub username…' || user === 'GitHub username…') {
            return '#4B6A9B'
        } else if (context.mode === 'light') {
            return '#222731'
        } else {
            return 'white'
        }
    }
    return (
        <div id='search' className='spaceBetween' style={{ backgroundColor: useMode('#FEFEFE', '#1E2A47', context.mode), boxShadow: useMode('0px 16px 30px -10px rgba(70, 96, 187, 0.198567)', 'none', context.mode) }}>
            <div className='left' style={{ width }}>
                <form autoComplete="off" onSubmit={(e) => { e.preventDefault(); getUser(); props.setFetched(false) }}>
                    <label style={{ cursor: 'pointer' }} htmlFor="inputSearch"><img src={search} alt="Search" /></label>
                    <input ref={input} autoComplete="off" style={{ color: color() }} type="search" id='inputSearch' name='inputSearch' value={user} onChange={change} onClick={clear} />
                </form>

            </div>
            <div className='center'>
                {notFound()}
                <button onClick={() => { getUser(); props.setFetched(false) }} style={{ cursor: 'pointer' }}>Search</button>
            </div>
        </div>
    )
}
