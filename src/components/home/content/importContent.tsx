function ImportContent(){
    return (
        <div className="content">

            <header className='header'>
                <div className='titlebox'>
                    <div className='searchcontainer' placeholder='Search name of conversation'>
                        <input type='text' placeholder='Search name of conversation'/>
                        <i className="fas fa-search"></i>
                    </div>
                    <h2>Imported Audio List</h2>
                </div>
                <div className='optionbox'>

                    <div className='account'>
                        <i className="fas fa-user-circle"></i>
                        <p>Admin</p>
                    </div>

                    <div className='container'>
                        <button>Import</button>
                        <div className='filter'>
                            <i className="fas fa-filter"></i>
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className='mainContent'>
                <div className="contentContainer">
                    <div className='list-header'>
                        <div>
                            <p className='conversation'>Imported Audio Name</p>
                        </div>
                        {/* <div> */}
                            <p className='group'>Duration</p>
                            <p className='duration'>Status</p>
                        {/* </div> */}
                        <div className='temp'></div>
                    </div>

                    <div className='item 1'>
                        <div className='detail'>
                            <h4>Audio 1</h4>
                            <p>19/08/2020  19:34</p>
                        </div>

                        {/* <div className='subinfo'> */}
                            <p className='itemgroup'>56:35s</p>
                            <p className='itemtime'>Processing...</p>
                        {/* </div> */}

                        <div className='itemoption'>
                            <button>Details</button>
                            <button>Move to group</button>
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
    )
}
export {ImportContent}