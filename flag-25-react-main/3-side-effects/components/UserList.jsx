import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);

    /* useEffect(() => {
        fetch('https://my-json-server.typicode.com/JoaoGoncalves/bookables/users')
            .then (resp => resp.json())
            .then (data => setUsers(data))
            .catch( () => console.log('Ocorreu um erro.'));
    }, []) //Somente no início da construção da componente. */

    useEffect(() => {
      (async () => {
        let response = await fetch('https://my-json-server.typicode.com/JoaoGoncalves/bookables/users');
        let data = await fetch response.json();
        setUsers(data);
      })();
    }, [])
    

    if (users.length > 0){
        return(
            <ul>
                {users.map(u => [
                    <li key={u.id}>{u.name}</li>
                ])}
            </ul>
        )
    }
  return (
    
    <>
      <h1>Loading...</h1>
    </>
  )
}
