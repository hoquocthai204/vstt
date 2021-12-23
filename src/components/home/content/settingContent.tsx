function SettingContent() {
    return (
        <div className="content">

            <header className='header'>
                <div className='titlebox'>
                    <h2>Settings</h2>
                </div>
                <div className='optionbox'>
                    <div className='account'>
                        <i className="fas fa-user-circle"></i>
                        <p>Admin</p>
                    </div>
                </div>
            </header>

            <div className='mainContent'>
                <div className="contentContainer">
                    <div className="setting_box">
                        <div className="left side">
                            <h3 className="header">Account</h3>
                            <div className="container">
                                <div className="avatar_container">
                                    <p>Change Profile Picture</p>
                                    <svg width="100" height="100" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_135)">
                                            <path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="#A1C1D7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.3287 29.0028C34.0199 27.045 35.7693 23.871 35.7693 20.2884C35.7693 14.3407 30.9477 9.5192 25 9.5192C19.0524 9.5192 14.2308 14.3407 14.2308 20.2884C14.2308 23.871 15.9802 27.045 18.6713 29.0028C10.7273 31.6507 5 39.1469 5 47.9808C5 59.0265 13.9543 67.9808 25 67.9808C36.0457 67.9808 45 59.0265 45 47.9808C45 39.1469 39.2727 31.6507 31.3287 29.0028Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_135">
                                                <path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div className="uploadbtn">
                                        <button>Upload picture</button>
                                    </div>
                                </div>

                                <div className="line"></div>
                                <div className="selectbox">
                                    <p>UserName: <span>Admin</span></p>
                                </div>

                                <div className="line"></div>
                                <div className="selectbox clearfix">
                                    <p>Change Password</p>
                                    <i className="fas fa-chevron-down"></i>
                                </div>

                                <div className="line"></div>
                                <div className="selectbox">
                                    <p className="logout">Log Out</p>
                                </div>
                            </div>
                        </div>

                        <div className="right side">
                            <div className="language">
                                <h3 className="header">Language</h3>
                                <div className="container">
                                    <p>Change Language</p>
                                    <div className="select_box"><p>English</p><i className="fas fa-sort-down"></i></div>
                                </div>
                            </div>

                            <div className="setup">
                                <h3 className="header">Set up</h3>
                                <div className="container">
                                    <p>All conversations in trash will be automatically deleted after this setup time. You can manually delete by checking the box below.</p>

                                    <div className="clock">
                                        <div>3<span>Days</span></div>:
                                        <div>0<span>Hours</span></div>:
                                        <div>0<span>Minutes</span></div>
                                    </div>

                                    {/* <div className="note_box">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span> 
                                        I want to delete conversations manually.
                                    </div> */}
                                    <label className="note_box">I want to delete conversations manually.
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { SettingContent }