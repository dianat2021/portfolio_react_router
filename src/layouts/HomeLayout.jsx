import React, { Fragment } from 'react'
import {  Outlet } from 'react-router-dom'


const HomeLayout = () => {
  return (
    <Fragment>
      <main>
        <Outlet/>
      </main>
    </Fragment>
  )
}

export default HomeLayout
