import { Link } from 'react-router-dom'
import './App.css'
import Invoices from './components/invoices'
import Expenses from './components/Expenses'
import Search from './components/Search'


function App() {
  return (
    <section className='App'>
      <h1>Contabilidade - React Router</h1>
      <nav>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expenses'>Expenses</Link>
        <Link to='/search'>Search</Link>
      </nav>

      <Invoices />
      <Expenses />
      <Search />

    </section>
  )
}

export default App
