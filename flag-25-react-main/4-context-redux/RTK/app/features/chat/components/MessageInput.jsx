import { useState } from "react";
import { addMessage } from "./messageSlice";
import { useDispatch } from 'react-redux'

export default function MessageInput() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(addMessage(value))
    }

  return (
    <section className="message-input">
      <h1>Message Input</h1>
      <input 
        type="text"
        placeholder="Send Your Message."
        value={value}
        onChange={e => setValue(e.target.value)}
    />
      <button onClick={handleSubmit}>Send</button>
    </section>
  )
}
