import React, { useEffect, useState } from 'react';

const Timer = ({ initialHours, initialMinutes, initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const countdown = () => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { hours, minutes, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer
          return { hours: initialHours, minutes: initialMinutes, seconds: initialSeconds };
        }
      });
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [initialHours, initialMinutes, initialSeconds]);

  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="mt-2 mb-6 text-5xl font-bold text-orange-500"> {/* Menambah ukuran font */}
      {`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}
    </div>
  );
};

export default Timer;
