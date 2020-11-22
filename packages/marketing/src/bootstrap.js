import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

console.log("Marketing!")

// export mount function for the parent container
export const mount = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement)
}

// if in development and standalone, mount immediately
if (process.env.NODE_ENV === "development") {
  const devStandaloneDiv = document.querySelector("#dev-marketing-standalone")
  devStandaloneDiv && mount(devStandaloneDiv)
}
