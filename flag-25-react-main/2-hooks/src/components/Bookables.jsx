import { useState } from 'react';
import {bookables} from '../db.json';

export default function Bookables() {

    const [bookablesIndex, setBookablesIndex] = useState(0);

    const group = 'Rooms';

    const bookablesInGroup = bookables.filter( b => b.group === group);

   const nextBookable = () => {
    //setBookablesIndex( (bookablesIndex + 1) % bookablesInGroup.length);
    setBookablesIndex( index => (index + 1) % bookablesInGroup.length);
    //Está-se a delegar a responsabilidade de atualização de state ao React.
   }

    return (
     <div>
            <ul className='bookables'>
            {
                bookablesInGroup.map( (b, i) => (
                <li key={b.id} 
                    className={i === bookablesIndex ? 'selected' : null}
                    onClick={() => setBookablesIndex(i)}>
                    {b.title}
                </li>
                ))
            }
            </ul>
            <p>
                <button autoFocus onClick={nextBookable}>Next</button>
            </p>
     </div>
    );
}

