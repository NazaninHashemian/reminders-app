import React from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';

const Reminders: Reminder[] = [
  {id:1, title: 'Remonder 1'}
]

function App() {
  return (
    <div className="App">
      <ReminderList items={Reminders}/>
    </div>
  );
}

export default App;
