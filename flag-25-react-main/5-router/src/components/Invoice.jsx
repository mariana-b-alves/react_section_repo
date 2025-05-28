import { useParams } from "react-router-dom"
import { getInvoiceByNumber } from "../data";

export default function Invoice() {

    let params = useParams();
    let invoice = getInvoiceByNumber(Number(params.invoiceId));

  return (

    
    <>
      <h1>Invoice: {invoice.name}</h1>
      <h1>Total: {invoice.amount}</h1>
      <h1>{invoice.name} - {invoice.numbeer}</h1>
      <h1>Data: {invoice.due}</h1>

      <hr />

      <button onClick={ () => navigate('/expenses')}>Ver Despesas</button>
      <button onClick={ () => navigate('-')}>Go Page</button>
      <button onClick={ () => navigate('/')}>Home Page</button>
    </>
  )
}
