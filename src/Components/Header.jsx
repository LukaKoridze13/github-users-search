import React, { useContext, useState } from 'react'
import { Mode } from '../Mode'
import { useMode } from '../useMode'
import Moon from '../Images/icon-moon.svg'
import MoonHover from '../Images/icon-moon-hover.svg'
import Sun from '../Images/icon-sun.svg'
import SunHover from '../Images/icon-sun-hover.svg'

export default function Header(props) {
    let context = useContext(Mode)
    const [moon, setMoon] = useState(Moon)
    const [sun, setSun] = useState(Sun)
    const [light, setLight] = useState('white')
    const [dark, setDark] = useState('#697C9A')
    return (
        <header className='spaceBetween'>
            <h1 style={{ color: useMode('#222731', 'white', context.mode) }}>
                devfinder
            </h1>
            {context.mode === 'light' ?
                <div onMouseEnter={() => { setMoon(MoonHover); setDark('#222731') }} onMouseLeave={() => { setMoon(Moon); setDark('#697C9A') }} style={{ color: dark }} onClick={() => { context.setMode('dark') }} id='mode'><p>DARK</p> <img src={moon} alt="Moon" /></div>
                : <div onMouseEnter={() => { setSun(SunHover); setLight('#90A4D4') }} onMouseLeave={() => { setSun(Sun); setLight('white') }} id='mode' style={{ color: 'white' }} onClick={() => { context.setMode('light') }}><p>LIGHT</p> <img src={sun} alt="Sun" /></div>}
        </header>
    )
}
