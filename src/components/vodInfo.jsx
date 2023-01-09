import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Footer from './footer';

import "./home.css"
import VodInput from './vodInput';

const VodInfo = () => {

    const params = useParams();
    const nav = useNavigate();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState([]);
    const [counter2, setCounter2] = useState([]);

    useEffect(() => {
        doApi();
    }, [])

    const doApi = async () => {
        if (params) {
            let url = `https://www.omdbapi.com/?i=${params["id"]}&apikey=3a61052c`
            let { data } = await axios.get(url)
            setItem(data);
            setLoading(false);
            const temp = Math.round(data.imdbRating);
            setCounter([...Array(temp)])
            const temp2 = 10 - temp;
            setCounter2([...Array(temp2)])
        }
    }

    return (

        <div>
           
            {loading ?
                <div style={{ height: "100vh", backgroundColor: "black" }}>
                    <img src='/images/giphy.gif' style={{ width: "100%" }} />
                    <h2 className='text-light text-center'>please wait</h2>
                </div>
                :

                <div className=" vod_info">
                    <div className='vod_info2'>
                        <div className='vod_info3 '>
                            <img src={item.Poster} className='' alt="" />
                        </div>
                        <div className=' vod_info4 '>
                            <h2>{item.Title}</h2>
                            <h5>Year : <span className='span1'>{item.Year}</span></h5>
                            <h6><span className='span1'>{item.Plot}</span></h6>
                            <h6>Genre : <span className='span1'>{item.Genre}</span></h6>
                            <h6>Runtime : <span className='span1'>{item.Runtime}</span></h6>
                            <h6>actors : <span className='span1'>{item.Actors}</span></h6>
                            <div className='vod_info5'>
                                {counter.map((item, i) => {
                                    return (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-warning " viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    )
                                })}
                                {counter2.map((item, i) => {
                                    return (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg>
                                    )
                                })} <span className='ms-2'>{item.imdbRating}</span>
                            </div>
                            <button className='btn_info btn btn-light mt-3' onClick={() => {
                                nav(-1)
                            }}>Back</button>
                        </div>
                    </div>
                </div>
            }
            <div className='text-white d-flex align-items-center justify-content-center text-center vod_info6' style={{ height: "7vh", fontWeight: "bold" }}>
                All rights reserved ©
                <br />
                binyamin bar 2022
            </div>
        </div>

        // <div className="row p-2 pb-1 vod_info">
        //     <div className='p-2 overflow-hidden shadow vod_info2' style={{ borderRadius: 5 }}>
        //         <img src={item.Poster} className='float-start me-2 ' alt="" />
        //         <h2 className='float-inline-end'>{item.Title}</h2>
        //         <div>Year: {item.Year}</div>
        //         <div>Runtime: {item.Runtime}</div>
        //         <div>Rating: {item.imdbRating}</div>
        //         <div>Genre: <span>{item.Genre}</span></div>
        //         <div className='col-md-7 nx-auto'>Plot: {item.Plot}</div>
        //         <button className='btn btn-dark mt-1' onClick={() => {
        //             nav(-1)
        //         }}>Back</button>
        //     </div>
        // </div>

    )
}

export default VodInfo