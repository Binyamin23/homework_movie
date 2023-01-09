import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header'


const Layout = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <Outlet />
        </div>
    )
}

export default Layout