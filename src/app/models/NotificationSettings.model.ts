export interface NotificationSettings {
    enabled: boolean
    emailFrom: string
    daysBeforeExpiration: number
    sendReminder: boolean
    reminderFrequency: "daily" | "weekly" | "biweekly"
  }
  