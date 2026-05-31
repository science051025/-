// Firebase types
export interface VoiceMessage {
  id: string;
  userId: string;
  category: "morning" | "meal" | "sleep" | "other";
  audioUrl: string;
  duration: number; // seconds
  createdAt: Date;
  updatedAt: Date;
  title?: string;
  notes?: string;
}

export interface CountdownDate {
  name: string;
  date: Date;
  daysRemaining: number;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  dischargeDate?: Date;
  vacationDates: Date[];
  createdAt: Date;
}
