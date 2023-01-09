import React from 'react'
import Footer from './footer'
import Header from './header'
import VodList from './vodList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import "./home.css"
import { useRef } from 'react'

const Home = () => {
    const [query] = useSearchParams();
    const [ar, setAr] = useState([]);
    const [loading, setLoading] = useState(true);
    const refSelect = useRef();
    const params = useParams();
    console.log(params["yyyy"]);
    const nav = useNavigate();


    let arrSelect = [];
    const changeArrSelect = () => {
        const years = new Date().getFullYear();
        for (let i = 0; i < 50; i++) {
            arrSelect[i] = years - i;
        }
    }
    changeArrSelect();

    const doApi = async (_searchQ) => {
        if (_searchQ) {
            let myUrl = `https://www.omdbapi.com/?s=${_searchQ}&y=${params["yyyy"]}&apikey=3a61052c`;
            let { data } = await axios.get(myUrl);
            console.log(data);
            setAr(data.Search);
            setLoading(false)
        }
    }

    useEffect(() => {
        let searchQ = query.get("s") || "road";

        doApi(searchQ);
    }, [query, params])

    return (
        <React.Fragment>

            <div className='container-fluid' style={{ backgroundColor: "black" }}>
                <div className='container p-2 border-bottom border-2'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid ">
                            <Link className="navbar-brand nav10" to={`/year/TopYear?s=${query.get("s") || "road"}`}>Top Years</Link>
                            <button className="navbar-toggler nav_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/1950?s=${query.get("s") || "road"}`} >1950</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/1960?s=${query.get("s") || "road"}`} >1960</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/1970?s=${query.get("s") || "road"}`} >1970</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/1980?s=${query.get("s") || "road"}`} >1980</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/1990?s=${query.get("s") || "road"}`} >1990</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/2000?s=${query.get("s") || "road"}`} >2000</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/2010?s=${query.get("s") || "road"}`} >2010</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav10" aria-current="page" to={`/year/2020?s=${query.get("s") || "road"}`} >2020</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className='p-2 col-6 col-md-4 col-lg-3 nav5'>
                        <select className='form-select text-center fs-4 nav2' ref={refSelect} onChange={() => {
                           const input_ref = refSelect.current.value;
                           nav(`/year/${input_ref}?s=${query.get("s") || "road"}`)
                        
                        }}>
                            <option className='nav3'>Select Year...</option>
                            {arrSelect.map(item => {
                                return (
                                    <option key={item} className='nav3' value={item}>{item}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ background: "black", minHeight: "55vh" }}>
                <div className='container'>
                    {loading ? <img src='images/giphy.gif' style={{ width: "100%", maxHeight: "300px" }}></img>
                        : ar ? < VodList vod_ar={ar} /> :
                            <h2 className='text-white display-5'>Not results...</h2>
                    }
                </div>
            </div>
            <Footer />

        </React.Fragment>
    )
}

export default Home




