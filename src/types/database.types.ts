export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      studies: {
        Row: {
          id: string
          subject: string
          user_id: string
          seconds: number
          is_active: boolean
          is_paused: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          subject: string
          user_id: string
          seconds?: number
          is_active?: boolean
          is_paused?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          subject?: string
          user_id?: string
          seconds?: number
          is_active?: boolean
          is_paused?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
          updated_at?: string
        }
      }
      timer_sessions: {
        Row: {
          id: string
          title: string
          description: string | null
          seconds: number
          started_at: string
          ended_at: string | null
          user_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          seconds?: number
          started_at?: string
          ended_at?: string | null
          user_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          seconds?: number
          started_at?: string
          ended_at?: string | null
          user_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      timer_sessions_tags: {
        Row: {
          timer_session_id: string
          tag_id: string
        }
        Insert: {
          timer_session_id: string
          tag_id: string
        }
        Update: {
          timer_session_id?: string
          tag_id?: string
        }
      }
      users: {
        Row: {
          id: string
          name: string
          email: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
} 