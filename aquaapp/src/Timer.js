import { useState, useEffect } from 'react'

export const DateTime = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <span className='text-borderColor'>{date.toLocaleTimeString()}</span>
    )
}

export default DateTime