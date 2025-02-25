import React from "react"
import PropTypes from "prop-types"

import Seo from "./seo"

import "../styles/default.css"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Seo title="SCSF" />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
