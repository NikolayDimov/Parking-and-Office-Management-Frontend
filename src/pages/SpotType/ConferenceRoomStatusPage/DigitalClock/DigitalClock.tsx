import { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formaTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }

    function padZero(number: number) {
        return (number < 10 ? '0' : '') + number;
    }

    return (
        <div>
            <div>
                <span>{formaTime()}</span>
            </div>
        </div>
    );
};

export default DigitalClock;
