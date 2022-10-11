import React, { useContext } from 'react'
import { Mode } from '../Mode'
import { useMode } from '../useMode'
import Moon from '../Images/icon-moon.svg'
import Sun from '../Images/icon-sun.svg'
export default function Header(props) {
    let context = useContext(Mode)
    return (
        <header className='spaceBetween'>
            <h1 style={{ color: useMode('#222731', 'white', context.mode) }}>
                devfinder
            </h1>
            {context.mode === 'light' ? 
                <div style={{ color:'#697C9A'}} onClick={() => { context.setMode('dark') }} id='mode'><p>DARK</p> <img src={Moon} alt="Moon" /></div> 
                : <div id='mode' style={{ color: 'white' }}  onClick={() => { context.setMode('light') }}><p>LIGHT</p> <img src={Sun} alt="Sun" /></div>}
        </header>
    )
}
