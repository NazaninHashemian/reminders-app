import Reminder from "../models/reminder";

interface ReminderListprops {
    items: Reminder[];
}
function ReminderList(props: ReminderListprops) {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    );
}

export default ReminderList;