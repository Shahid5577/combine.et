import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import dayjs from 'dayjs';

function CareersPage() {
  const targetDate = dayjs().add(180, 'days'); // Set countdown for 180 days from now
  const [remainingTime, setRemainingTime] = useState(targetDate.diff(dayjs()));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(targetDate.diff(dayjs()));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (ms: number) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const time = formatTime(remainingTime);

  return (
    <div className="flex flex-col bg-slate-50 dark:bg-neutral-900 text-neutral-800 dark:text-zinc-100 mt-4 sm:mt-14">
      <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-semibold">Coming Soon!</h1>
          <p className="mt-4 text-lg sm:text-xl">We’re working hard to bring exciting opportunities. Stay tuned!</p>
        </div>

        <div className="text-center text-lg sm:text-2xl font-bold p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
          <h2>Countdown to Launch</h2>
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{time.days}</span>
              <span>Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{time.hours}</span>
              <span>Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{time.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-semibold">{time.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Links */}
      <footer className="py-4 w-full fixed bottom-0 left-0">
        <Divider className="w-full" />
        <div className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:justify-between w-full max-w-[95%] mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/about">
              <Typography className="text-gray-600 dark:text-gray-300">About</Typography>
            </Link>
            <Link to="/services">
              <Typography className="text-gray-600 dark:text-gray-300">Services</Typography>
            </Link>
            <Link to="/careers">
              <Typography className="text-gray-600 dark:text-gray-300">Careers</Typography>
            </Link>
            <Link to="/privacy">
              <Typography className="text-gray-600 dark:text-gray-300">Privacy</Typography>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/help">
              <Typography className="text-gray-600 dark:text-gray-300">Help</Typography>
            </Link>
            <div className="border border-gray-600 rounded-md px-4 py-2 text-gray-600 dark:text-gray-300">
              <Typography>Support</Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CareersPage;
