
import './home.scss'
import './responsive.scss'
import Sidebar from './sidebar'
import {HomeContent, ImportContent, SettingContent, ConversationContent} from './content'
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function Home(){
    return (
        <Router>
            <div className="main">
                <Sidebar/>

                <Routes>
                    <Route path='/' element={<HomeContent/>}/>
                    <Route path='/import' element={<ImportContent/>}/>
                    <Route path='/conversation' element={<ConversationContent/>}/>
                    <Route path='/group' element={<></>}/>
                    <Route path='/trash' element={<></>}/>
                    <Route path='/gear' element={<SettingContent/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export {Home}