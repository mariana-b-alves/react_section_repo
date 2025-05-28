import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Invoice from './components/Invoice.jsx'
import Invoices from './components/Invoices.jsx'
import NotFound from './components/NotFound.jsx'
import Expenses from './components/Expenses.jsx'
import Search from './components/Search.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }>
        <Route index element={<h3>HOMEPAGE</h3>} />
          <Route path='/invoices' element={ <Invoices /> }>
            <Route index element={<h3>Selecione fatura à esquerda.</h3>} />
            <Route path=':invoiceId' element={ <Invoice /> } />
          </Route>
          <Route path='/expenses' element={ <Expenses /> } /> 
          <Route path='/search' element={ <Search /> } />
          <Route path='*' element={<NotFound />} />
        </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
