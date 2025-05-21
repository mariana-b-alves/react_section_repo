import { useEffect } from "react";
import { useState } from "react";

export default function UsingLocalStorage() {
   /*  localStorage.setItem('nome', 'João');
    localStorage.setItem('pais', 'PT');
    console.log(localStorage.getItem('nome'));
    localStorage.removeItem('pais');
     */

    const [user, setUser] = useState('');
    const [xpto, setXpto] = useState('xpto state');

    useEffect(() => {
        //Início na construção da componente; verificar se tenho um user guardado.
        const storedUser = localStorage.getItem('user');
        if(storedUser){
            setUser(storedUser);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('user', user);
        console.log('User: ', user);
        
    }, [user]);

    useEffect(() => {
        localStorage.setItem('user', user);
        console.log('User: ', user);
        
    }, [user]);


  return (
    <>
      <h1>Using Depedencies in Effect</h1>
      <select value={user} onChange={(evt) => setUser(evt.target.value)}>
        <option>João</option>
        <option>Maria</option>
        <option>Joana</option>
        <option>António</option>
        <option>Pedro</option>
        <option>Inês</option>
      </select>
      <br />
      <button onClick={() => setXpto('alterado')}>{xpto}</button>
    </>
  )
}
