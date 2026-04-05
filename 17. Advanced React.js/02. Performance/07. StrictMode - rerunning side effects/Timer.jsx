import React from "react"

export default function Timer() {
    const [seconds, setSeconds] = React.useState(0)
    
    /**
     * Challenge: clean up the interval as the last part of
     * the useEffect. You're welcome to check out my lesson
     * from my Learn React course about this topic if you
     * need a refresher:
     * 
     * https://scrimba.com/learn/learnreact/useeffect-cleanup-function-coa6a4c9985b4339f164fe0ab
     */
    
    React.useEffect(() => {
        setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            // console.log("Timer is running")
        }, 1000)
    }, [])

    return (
        <h2>{seconds} seconds</h2>
    )
}