import React, { Fragment } from 'react'
import {  Outlet } from 'react-router-dom'
import styles from './layout.module.css'

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
