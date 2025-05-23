// components/NewReminder.tsx
import  { useState } from 'react';
import { JSX } from 'react/jsx-runtime';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] =  useState('');

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        onAddReminder(title);
        setTitle('');
    }
    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                className="form-control"
                placeholder="Enter your reminder here..."
            />

            <button 
                type="submit" 
                className="btn btn-primary my-3 rounded-pill add-reminder-btn"
            >
            Add Reminder
            </button>
        </form>
    );
}

export default NewReminder;