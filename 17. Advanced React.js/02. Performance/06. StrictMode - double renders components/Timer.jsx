import React from "react"

export default function Timer() {
    const [seconds, setSeconds] = React.useState(0)
    
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
    }, [])

    return (
        <h2>{seconds}</h2>
    )
}