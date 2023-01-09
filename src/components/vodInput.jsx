import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router';

const VodInput = () => {

    const inputRef = useRef();
    const nav = useNavigate();

    const onSearchClick = () => {
        const input_val = inputRef.current.value;
        nav(`?s=${input_val}`)
    }

    return (
        <div className="p-2 vod_input">
            <div className="p-2 pe-4 ps-4 vod_input2">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="col-auto ">
                        <h2 className='vod_input_h2'>MyVod</h2>
                    </div>
                    <nav className=' col-6 d-flex justify-content-end'>
                        <div className='d-flex justify-content-end col-8 col-md-6 col-lg-4 vod_input3'>
                            <input onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onSearchClick();
                                }
                            }} ref={inputRef} placeholder='search...' type="search" className=' vod_input4 w-100 p-1' />
                            <div className='d-flex align-items-center vod_input5'>
                                <svg onClick={onSearchClick} xmlns="http://www.w3.org/2000/svg" width="32" height="16" fill="currentColor" class="bi bi-search text-light" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default VodInput