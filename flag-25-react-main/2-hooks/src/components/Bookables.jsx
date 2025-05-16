import { useState } from 'react';
import {bookables} from '../db.json';

export default function Bookables() {

    const [bookablesIndex, setBookablesIndex] = useState(0);
    const [group, setGroup] = useState('Rooms');
    //useReducer() => Serve para retirar dos states todos um único valor
    const [hasDetails, setHasDetails] = useState(false);

    const bookablesInGroup = bookables.filter( b => b.group === group);

    const bookable = bookablesInGroup[bookablesIndex];


    const groups =[...new Set(bookables.map(b => b.group))];


   const nextBookable = () => {
    //setBookablesIndex( (bookablesIndex + 1) % bookablesInGroup.length);
    setBookablesIndex( index => (index + 1) % bookablesInGroup.length);
    //Está-se a delegar a responsabilidade de atualização de state ao React.
   }

   const changeGroup = (e) => {
    setBookablesIndex(0);
    setGroup(e.target.value);
   }

    return (
     <>
         <div>
            <select value={group} onChange={changeGroup}>
                {groups.map((g, i) => <option key={i}> {g} </option> )}
            </select>
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
         <div>
            {
                bookable && (
                   <>
                        <p>
                            <label htmlFor="details">Show Details</label>
                            <input 
                                type="checkbox" 
                                id="details"
                                checked={hasDetails}
                                onChange={(e) => setHasDetails(e.target.checked)}/>
                        </p>
                        { //Conditional Rendering
                        hasDetails && (
                            <article>
                                <h2>{bookable.title}</h2>
                                <p>{bookable.notes}</p>
                            </article>
                            )
                        }
                    </>
                    )
                }
               
                   
         </div> 
     </>
    );
}

