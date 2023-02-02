import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { Box } from '@chakra-ui/react'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box id='body'>
    <Box className='navbar'>
    <Nav/>
    </Box>
        <Home />

      
    
    <Footer/>
    </Box>

    </>
  )
}

export default App
