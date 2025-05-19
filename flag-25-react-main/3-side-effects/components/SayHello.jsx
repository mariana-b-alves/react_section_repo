import { useEffect } from "react";
import { useState } from "react";

export default function SayHello(){
    const greetings = ['Olá', 'Hola', 'Bonjour', 'Ciao', 'Hello'];

    const [index, setIndex] = useState(0);

    //useEffect => Utilizar SEMPRE que temha uma side effect na componente
    //Executar sempre que o state for alterado.
    useEffect(
        () => {
            document.title = greetings[index];

        }
    )

    const updateGreetings = () => {
        setIndex(Math.floor(Math.random() * greetings.length));
    }
    return (
        <section>
            <p>{greetings[index]}</p>
            <button onClick={updateGreetings}>SAY HELLO</button>
        </section>
    );
}