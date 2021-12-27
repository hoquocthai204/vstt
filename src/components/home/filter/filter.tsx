import { useEffect, useState } from 'react'
import './filter.scss'

function Filter() {
    const [tagname, setTagname] = useState('all_option')
    useEffect(()=>{
        let element = document.querySelector(`.${tagname}`) as HTMLDivElement
        element.classList.add('active')

        return()=>{
            element.classList.remove('active')
        }
    },[tagname])
    return (
        <div className='filter_container'>
            <div className='filter_header'>Filter</div>
            <form action="" className='filter_form'>

                <div className='conversation_title'>
                    <h5 className='header'>Conversation Title</h5>
                    <input type="text" placeholder='Presentation 1' />
                </div>

                <div className='selector_container'>
                    <div className='all_option active' onClick={()=>setTagname('all_option')}>All <br />Conversation</div>
                    <div className='my_option' onClick={()=>setTagname('my_option')}>My <br />Conversation</div>
                    <div className='trash_option' onClick={()=>setTagname('trash_option')}>Trash <br />Conversation</div>
                </div>

                <div className='duration'>
                    <h5>Date</h5>
                    <div className='date_box'>
                        <div className='container'>
                            <input type="text" placeholder='dd/mm/yy' />
                            <i className="far fa-calendar-alt"></i>
                        </div>
                        <span>to</span>
                        <div className='container'>
                            <input type="text" placeholder='dd/mm/yy' />
                            <i className="far fa-calendar-alt"></i>
                        </div>
                    </div>
                </div>

                <div className='sort_box'>
                    <h5>Sort</h5>
                    <div className='select_box'>

                        <p className='asc'>
                            <input type="radio" name="type" id="asc" defaultChecked/>
                            <label htmlFor="asc">ASC</label>
                        </p>

                        <p className='desc'>
                            <input type="radio" name="type" id="desc" />
                            <label htmlFor="desc">DESC</label>
                        </p>

                    </div>
                </div>

                <div className='final_options'>
                    <input type="button" value={"Cancel"} />
                    <input type="reset" value={'Reset'} />
                    <input type="submit" value={'Apply'} />
                </div>
            </form>
        </div>
    )
}

export { Filter }