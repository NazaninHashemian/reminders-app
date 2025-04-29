// App.tsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Reminder from './models/reminder';
import ReminderList from './components/ReminderList';
import reminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([

  ]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    console.log("Loading reminders...");  // Debugging
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  // const removeReminder = (id: number) => {
    const removeReminder = async (id: string) => {
    // const newReminders = reminders.filter(reminder => reminder.id !== id);
    const newReminders = reminders.filter(reminder => reminder._id !== id);
    setReminders(newReminders);
    await reminderService.removeReminder(id);
  }

  const addReminder = async(title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder}/>
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
