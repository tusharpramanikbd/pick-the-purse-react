import './App.css'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <Button variant='primary'>Primary</Button>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  )
}

export default App
