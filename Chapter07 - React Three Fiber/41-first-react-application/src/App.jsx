import { useState } from 'react';
import Clicker from "./Clicker.jsx";
import People from "./People.jsx";

export default function App({ clickersCount, children }) {

    const [count, setCount] = useState(0)
    const [ hasClicker, setHasClicker ] = useState(true)

    const toggleClickerClick = () => 
    {
        setHasClicker(!hasClicker)
    }

    const increment = () => 
    {
        setCount(count + 1)
    }

    return <>
        { children }

        <div>Total count: { count }</div>

        <button onClick={ toggleClickerClick }>{ hasClicker ? 'Hide' : 'Show' }</button>

        { hasClicker && <>
            { [...Array(clickersCount)].map((value, index) => 
                <Clicker 
                    key={ index }
                    increment={ increment } 
                    keyName={ `count${index}` } 
                    colorName={`hsl(${ Math.random() * 360 }deg, 100%, 70%)`} 
                />
            ) }
            {/* <Clicker increment={ increment } keyName="countA" colorName="orange" /> */}
        </> }

        <People />
    </>
}