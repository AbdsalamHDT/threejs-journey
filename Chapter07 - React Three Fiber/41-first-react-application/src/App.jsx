import Clicker from "./Clicker.jsx";
import { useState } from 'react';

export default function App() {

    const [ hasClicker, setHasClicker ] = useState(true)

    const toggleClickerClick = () => 
    {
        setHasClicker(!hasClicker)
    }

    return <>
        <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' }</button>
        { hasClicker && <Clicker /> }
    </>
}