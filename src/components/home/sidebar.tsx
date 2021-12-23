
import pointer from '../imgs/pointer.png'
import Logo from '../logo/logo'
import {Link} from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

function Sidebar(){
    const activeref = useRef<HTMLDivElement|null>(null)
    const [tag, setTag] = useState<HTMLElement|null>(null)
    useEffect(()=>{
        tag?.parentElement?.parentElement?.classList.add('active')
        return ()=>{
            tag?.parentElement?.parentElement?.classList.remove('active')
        }
    },[tag])

    function handleClick(e:any){
        setTag(e.target)
    }

    return(
        <div className="sidebar">
            <Logo/>

            <div className='home icon' ref={activeref} onClick={(handleClick)}>
                <Link to="/"><i className="fas fa-home"></i></Link>
                <img className='pointer' src={pointer} alt='' />
            </div>

            <div className='import icon' onClick={handleClick}>
                <Link to='/import'><i className="fas fa-file-import"></i></Link>
                <img className='pointer' src={pointer} alt=''/>
            </div>

            <div className='conversation icon' onClick={handleClick}>
                <Link to='/conversation'><i className="fas fa-comments"></i></Link>
                <img className='pointer' src={pointer} alt=''/>
            </div>

            <div className='group icon' onClick={handleClick}>
                <Link to='/group'><i className="far fa-folder-open"></i></Link>
                <img className='pointer' src={pointer} alt=''/>
            </div>

            <div className='trash icon' onClick={handleClick}>
                <Link to='/trash'><i className="fas fa-trash-alt"></i></Link>
                <img className='pointer' src={pointer} alt=''/>
            </div>
            
            <div className='gear icon' onClick={handleClick}>
                <Link to='/gear'><i className="fas fa-cog"></i></Link>
                <img className='pointer' src={pointer} alt=''/>
            </div>
        </div>
    )
}

export default Sidebar