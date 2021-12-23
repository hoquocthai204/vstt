import { useState, useRef, useEffect } from 'react'
import './login.scss'

function Login(){
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [showpass, setShowpass] = useState(false)

    const inputElement = useRef<HTMLInputElement>()

    function handleToggleShow(){
        setShowpass(!showpass)
    }

    useEffect(()=>{

    },[showpass])

    return(
        <div id='main' className='clearfix'>
            <div className='leftside'>
                <div className='header'>
                    <h1>Welcome to</h1>
                    <div className='logobox'>
                        <div className='voicebox'>
                            <div className='elip _1'></div>
                            <div className='elip _2'></div>
                            <div className='elip _4'></div>
                            <div className='elip _3'></div>
                            <div className='elip _2'></div>
                            <div className='elip _1'></div>
                        </div>
                        <div className='vstt'>
                            <h2>VSTT</h2>
                        </div>
                    </div>
                    <h4>Voice Speech to Text</h4>
                </div>
                <form className='form'>
                    <p>Sign in now to experience Voice Speech to Text</p>
                    <div className='inputbox'>
                        <input type="text" placeholder='Username' value={user} onChange={e=>setUser(e.target.value)} />
                        <i className="far fa-user"></i>
                    </div>
                    <div className='inputbox'>
                        <input type="password" placeholder='Password' value={pwd} onChange={e=>setPwd(e.target.value)} />
                        <i className="fas fa-lock"></i>
                        <div>
                            <i onClick={handleToggleShow} className="far fa-eye"></i>
                        </div>
                    </div>
                    <button>Sign in</button>
                    <p>Don't have an account? <a href='#'>Sign Up Now</a></p>
                </form>
            </div>
            <div className='rightside'>
                <div className='logobox'>
                    <div className='voicebox'>
                        <div className='elip _1'></div>
                        <div className='elip _2'></div>
                        <div className='elip _4'></div>
                        <div className='elip _3'></div>
                        <div className='elip _2'></div>
                        <div className='elip _1'></div>
                    </div>
                    <div className='vstt'>
                        <h2>VSTT</h2>
                    </div>
                </div>
                <p>Voice Speech to Text</p>
            </div>
        </div>
    )
}

export {Login}