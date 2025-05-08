import { createClient } from '@supabase/supabase-js'
import Reminder from '../models/reminder'

// Access the Supabase URL and Key from environment variables
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || ''
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || ''

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

class ReminderService {
  async getReminders(): Promise<Reminder[]> {
    const { data, error } = await supabase
      .from('reminders')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching reminders:', error)
      return []
    }

    return data as Reminder[]
  }

  async addReminder(title: string): Promise<Reminder | null> {
    const { data, error } = await supabase
      .from('reminders')
      .insert([{ title }])
      .select()
      .single()

    if (error) {
      console.error('Error adding reminder:', error)
      return null
    }

    return data as Reminder
  }

  async removeReminder(id: string): Promise<void> {
    const { error } = await supabase
      .from('reminders')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting reminder:', error)
    }
  }
}

export default new ReminderService()
