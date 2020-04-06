import React from "react"
import Header from "./Header"

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
          paddingLeft: `30px`,
          paddingRight: `30px`,
          paddingTop: `-20px`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
