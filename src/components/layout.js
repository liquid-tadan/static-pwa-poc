import React from "react"
import Header from "./Header"

import logoPath from "../../content/assets/411439669.png"

function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        fontFamily: `Open Sans`,
      }}
    >
      <header>
        {" "}
        <Header location={location} />{" "}
      </header>
      <main
        style={{
          minHeight: `calc(100vh - 120px)`,
          borderBottom: `0px`,
          paddingTop: `-20px`,
          background: `url(${logoPath}) top/cover no-repeat`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
