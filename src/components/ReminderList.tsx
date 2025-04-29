// components/ReminderList.tsx
import Reminder from "../models/reminder";
interface ReminderListProps {
    items: Reminder[];
    // onRemoveReminder: (id: number) => void;
    onRemoveReminder: (id: string) => void;
}
function ReminderList({items, onRemoveReminder}: ReminderListProps) {
    console.log(items);  // Debugging
    return (
        <ul className="list-group">
            {items.map(item => 
            // <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item._id}>
                {item.title}
                {/* <button onClick={() => onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button> */}
                <button 
                    onClick={() => onRemoveReminder(item._id)} 
                    className="btn btn-outline-danger mx-2 rounded-pill"
                >
                    Delete
                </button>
            </li>)}
        </ul>
    );
}

export default ReminderList;