import { useState, useEffect } from 'react'
import { Filter } from '../filter'

function TrashContent() {

    const [showFilter, setShowFilter] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)

    function handleHide() {
        setShowOverlay(!showOverlay)
        setShowFilter(false)
    }

    useEffect(() => {
        let overlay = document.querySelector('.overlay') as HTMLElement;
        let showfilter = document.querySelector('.filter_container') as HTMLElement;

        if (showFilter) {
            showfilter.style.display = 'block'
            overlay.style.display = 'block'
        }
        else {
            showfilter.style.display = 'none'
            overlay.style.display = 'none'
        }

    }, [showFilter])

    return (
        <>
            <div className="content">

                <header className='header'>
                    <div className='titlebox'>
                        <div className='searchcontainer' placeholder='Search name of conversation'>
                            <input type='text' placeholder='Search name of conversation' />
                            <i className="fas fa-search"></i>
                        </div>
                        <h2>Trash</h2>
                    </div>
                    <div className='optionbox'>

                        <div className='account'>
                            <i className="fas fa-user-circle"></i>
                            <p>Admin</p>
                        </div>

                        <div className='container'>
                            <div className='filter' onClick={() => setShowFilter(!showFilter)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" d="M20 5H18.8293C18.4175 3.83481 17.3062 3 16 3 14.6938 3 13.5825 3.83481 13.1707 5H4C3.44772 5 3 5.44772 3 6 3 6.55228 3.44772 7 4 7H13.1707C13.5825 8.16519 14.6938 9 16 9 17.3062 9 18.4175 8.16519 18.8293 7H20C20.5523 7 21 6.55228 21 6 21 5.44772 20.5523 5 20 5zM16 7C16.5523 7 17 6.55228 17 6 17 5.44772 16.5523 5 16 5 15.4477 5 15 5.44772 15 6 15 6.55228 15.4477 7 16 7zM3 12C3 11.4477 3.44772 11 4 11H5.17071C5.58254 9.83481 6.69378 9 8 9 9.30622 9 10.4175 9.83481 10.8293 11H20C20.5523 11 21 11.4477 21 12 21 12.5523 20.5523 13 20 13H10.8293C10.4175 14.1652 9.30622 15 8 15 6.69378 15 5.58254 14.1652 5.17071 13H4C3.44772 13 3 12.5523 3 12zM8 13C8.55229 13 9 12.5523 9 12 9 11.4477 8.55229 11 8 11 7.44772 11 7 11.4477 7 12 7 12.5523 7.44772 13 8 13zM4 17C3.44772 17 3 17.4477 3 18 3 18.5523 3.44772 19 4 19H13.1707C13.5825 20.1652 14.6938 21 16 21 17.3062 21 18.4175 20.1652 18.8293 19H20C20.5523 19 21 18.5523 21 18 21 17.4477 20.5523 17 20 17H18.8293C18.4175 15.8348 17.3062 15 16 15 14.6938 15 13.5825 15.8348 13.1707 17H4zM17 18C17 18.5523 16.5523 19 16 19 15.4477 19 15 18.5523 15 18 15 17.4477 15.4477 17 16 17 16.5523 17 17 17.4477 17 18z" clip-rule="evenodd" /></svg>
                                <p>Filter</p>
                            </div>
                        </div>
                    </div>
                </header>

                <div className='mainContent'>
                    <div className="contentContainer">
                        <div className='list-header'>
                            <div>
                                <p className='conversation'>Conversation Name</p>
                            </div>
                            <p className='group'>Removed Date</p>
                            <p className='duration'>Duration</p>
                            <div className='temp'></div>
                        </div>

                        <div className='item 1'>
                            <div className='detail'>
                                <h4>Conversation 1</h4>
                                <p>19/08/2020  19:34</p>
                            </div>

                            <p className='removedDate'>20/08/2020  23:00</p>
                            <p className='itemtime'>56:35s</p>


                            <div className='itemoption'>
                                <button>Restore</button>
                                <div className='removeitem'>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>

                        <ul className='pagenumber'>
                            <li><button><i className="fas fa-caret-left"></i></button></li>
                            <li><button>1</button></li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                            <li><button>...</button></li>
                            <li><button>10</button></li>
                            <li><button><i className="fas fa-caret-right"></i></button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overlay" onClick={handleHide}></div>

            <Filter />
        </>
    )
}
export { TrashContent }