import { useEffect, useState } from "react";

export const TodoDate = () => {
    const [dateTime, setDateTime] = useState("")
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date()
            // console.log(now);
            const formattedDate = now.toLocaleDateString()
            const formattedTime = now.toLocaleTimeString()
            // console.log(formattedDate);
            // console.log(formattedTime);

            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        //<h2 className="date-time">{formattedDate} - {formattedTime}</h2> 
        <h2 className="date-time">{dateTime}</h2>
    )
}
