import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  // let hours = now.getHours();
  // let minutes = now.getMinutes();

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  // const time = now.toLocaleTimeString('en-US', {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   timeZone: userTimeZone,
  // });
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata', // Set to IST
  });
  // const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeZone: userTimeZone,
  }).format(now);

  // const ampm = hours >= 12 ? 'PM' : 'AM';
  // hours = hours % 12;
  // hours = hours ? hours : 12; // the hour '0' should be '12'
  // const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
  // const day = now.getDate();
  // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday"];
  // const week = weekdays[now.getDay()];
  // const month = now.toLocaleString('default', {month: 'long'});
  // const year = now.getFullYear();

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Your Next Session Awaits!</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-7xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>

    </section>
  )
}

export default Home
