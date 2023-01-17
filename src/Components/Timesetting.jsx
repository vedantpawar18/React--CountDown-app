import React from 'react'

const Timesetting = ({setHour, setMinutes, setSeconds}) => {
  return (
    <div>
        <div>
        <input onInput={(e)=>setHour(e.target.value)} placeholder="Enter Hours .." />
        </div>
        <div>
        <input onInput={(e)=>setMinutes(e.target.value)} placeholder="Enter Minutes.." />
        </div>
        <div>
        <input onInput={(e)=>setSeconds(e.target.value)} placeholder="Enter Seconds .." />
        </div>
    </div>
  )
}

export default Timesetting