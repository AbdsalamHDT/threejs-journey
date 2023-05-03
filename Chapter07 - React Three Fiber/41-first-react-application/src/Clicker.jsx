import { useRef, useEffect, useState } from 'react';

export default function Clicker({ increment, keyName, colorName }) {

    const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0))
    const buttonRef = useRef()

    useEffect(() => 
    {
        buttonRef.current.style.backgroundColor = 'papayawhip'
        buttonRef.current.style.color = 'salmon'

        return () => 
        {
            localStorage.removeItem(keyName)
        }
    }, [])

    useEffect(() => 
    {
        localStorage.setItem(keyName, count)
    }, [ count ])

    const buttonClick = () => 
    {
        setCount(count + 1)
        increment()
    }

    return <>
        <div style={ { color: colorName } }>Clicks count : { count }</div>
        <button ref={ buttonRef } onClick={ buttonClick }>Click me</button>
    </>
}