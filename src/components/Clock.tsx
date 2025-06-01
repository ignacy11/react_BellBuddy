import '../css/Clock.css'
import {useEffect, useState} from "react";

const Clock = () => {
    const now = new Date()
    const [currentTime, setCurrentTime] = useState(now.toLocaleTimeString("pl"))

    useEffect(() => {
            const timer = setInterval( () => {
                setCurrentTime(new Date().toLocaleTimeString("pl"))
            }, 1000)
            return () => clearInterval(timer)
        },
        []
    )

    return (
        <>
            <div className="clock">
                <h2>{currentTime.toString()}</h2>
            </div>
        </>
    )
}

export default Clock