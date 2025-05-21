
export default function PropDrilling() {
    
const [nome, setNome] = useState('João');

  return (
    <section>
      <h1>Component Prop Drilling</h1>
      <Hello nome={nome} changeName={ () => setNome('Maria')}/>
    </section>
  )
}

function Hello (props){
    return (
        <section>
          <h1>Component Hello</h1>
          <Greetings nome={props.nome} changeName={props.changeName}/>
        </section>
      )
}

function Greetings (props){
    return (
        <section>
          <h1>Component Greetings</h1>
          <p>Recebido do Avô (Via Pai): {props.nome}</p>
          <button onClick={props.changeName}>Mudar Nome</button>
        </section>
      )
}