// services/reminder.ts
import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
    http = axios.create({
        // baseURL: 'https://jsonplaceholder.typicode.com/'
        baseURL: "https://crudcrud.com/api/9abc8d84835f4e298dec4b72d6021298/reminders"
       
    });

    async getReminders() {
        try {
          const response = await this.http.get<Reminder[]>('');
          console.log("API Response:", response.data);  // Log the API response
          return response.data;
        } catch (error) {
          console.error("Error fetching reminders:", error);
          return [];
        }
      }

    async addReminder(title: string) {
        // const response= await this.http.post('/todos', {title});
        const response= await this.http.post('', {title});
        return response.data;
    }

    // async removeReminder(id: number) {
        async removeReminder(id: string) {
        // const response = await this.http.delete('/todos/'+ id);
        const response = await this.http.delete('/'+ id);
        return response.data;
    }
}

export default new ReminderService();