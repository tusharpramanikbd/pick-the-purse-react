import './App.css'
import Header from './components/Header/Header'
import QAAccordion from './components/QAAccordion/QAAccordion'
import Shop from './components/Shop/Shop'

function App() {
  return (
    <>
      <Header />
      <h1 className='title'>Pick any 4 bags</h1>
      <Shop />
      <h2 className='title'>Question Answer Section</h2>
      <QAAccordion className='accordion' />
    </>
  )
}

export default App
