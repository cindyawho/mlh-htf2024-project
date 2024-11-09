import { useState } from 'react';
import Calendar from 'react-calendar'; // npm install react-calendar
import './Calendar.css'

function CalendarApp() {
  const [value, setValue] = useState(new Date());

  return (
    <div class="calendar">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}

export default CalendarApp;