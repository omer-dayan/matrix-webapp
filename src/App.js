import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ad935c',
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}></ThemeProvider>
    </div>
  )
}

export default App
