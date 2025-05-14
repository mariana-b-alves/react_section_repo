import { useState } from "react"

export default function FuncComp() {

const [name, setName] = useState('');

const handleChange = (evt) => setName(evt.target.value)
  return (
    <div>
        <h1>Class:</h1>
        <p>My name is: {name}</p>
        <p>Número de Letras: {name.length}</p>
        <input type="text" value={name} onChange={handleChange}/>
      
    </div>
  )
}

/*NOTA: Em funções, o component tem que ter o mesmo nome que o ficheiro.*/