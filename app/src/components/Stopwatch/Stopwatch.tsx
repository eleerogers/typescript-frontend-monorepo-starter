import React, { useCallback, useEffect, useRef, useState } from 'react'

export function Stopwatch(): JSX.Element {
  const resetTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  }

  const [time, setTime] = useState(resetTime)
  const [running, setRunning] = useState(false)

  function toggleRunning() {
    setRunning((r) => !r)
  }

  type Time = {
    milliseconds: number
    seconds: number
    minutes: number
    hours: number
    days: number
  }
  type Unit = keyof Time

  const addTime = useCallback((unit: Unit, oldTime: Time, amount = 1): void => {
    const timeMap = {
      milliseconds: 100, // JS can only handle 10ms intervals
      seconds: 60,
      minutes: 60,
      hours: 24,
      days: 365,
    }
    const newTime = { ...oldTime }
    newTime[unit] = newTime[unit] + amount
    if (newTime[unit] >= timeMap[unit]) {
      newTime[unit] = newTime[unit] - timeMap[unit]
      switch (unit) {
        case 'milliseconds':
          addTime('seconds', newTime)
          break
        case 'seconds':
          addTime('minutes', newTime)
          break
        case 'minutes':
          addTime('hours', newTime)
          break
        case 'hours':
          addTime('days', newTime)
          break
      }
    } else {
      setTime(newTime)
    }
  }, [])

  const timer = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    if (running) {
      timer.current = setTimeout(() => {
        addTime('milliseconds', time, 1)
      }, 10)
    }
    return () => {
      clearTimeout(timer.current as NodeJS.Timeout)
    }
  }, [time, addTime, running])

  function handleReset() {
    setRunning(false)
    setTime(resetTime)
  }

  return (
    <div>
      <header className="text-3xl font-bold underline">Stopwatch</header>
      <br />
      <div className="stopwatch_container">
        <div className="stopwatch">
          Days: {String(time.days).padStart(2, '0')} | Hours:{' '}
          {String(time.hours).padStart(2, '0')} | Minutes:{' '}
          {String(time.minutes).padStart(2, '0')} | Seconds:{' '}
          {String(time.seconds).padStart(2, '0')} | Milliseconds:{' '}
          {String(time.milliseconds).padStart(2, '0')}0
        </div>
      </div>
      <br />
      <button
        className="bg-sky-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg mx-4"
        onClick={toggleRunning}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      {'  '}
      <button
        className="bg-sky-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg mx-4"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}
