
import pointer from '../imgs/pointer.png'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

function Sidebar() {
    const [active, setActive] = useState('home')

    useEffect(()=>{
        let element = document.querySelector(`.${active}`) as HTMLElement
        element.classList.add('active')

        return()=>{
            element.classList.remove('active')
        }
    },[active])
    
    return (
        <div className="sidebar">
            <Logo />

            <div className='home icon active' onClick={()=>setActive('home')}>
                <Link to="/"><i className="fas fa-home"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='import icon' onClick={()=>setActive('import')}>
                <Link to='/import'><i className="fas fa-file-import"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='conversation icon' onClick={()=>setActive('conversation')}>
                <Link to='/conversation'><i className="fas fa-comments"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='group icon' onClick={()=>setActive('group')}>
                <Link to='/group'><i className="far fa-folder-open"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='trash icon' onClick={()=>setActive('trash')}>
                <Link to='/trash'><i className="fas fa-trash-alt"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='gear icon' onClick={()=>setActive('gear')}>
                <Link to='/gear'><i className="fas fa-cog"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>
        </div>
    )
}

export default Sidebar