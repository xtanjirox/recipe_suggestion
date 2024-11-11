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
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          recipe_id: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          recipe_id: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          recipe_id?: number
          created_at?: string
        }
      }
      shopping_list: {
        Row: {
          id: string
          user_id: string
          item: string
          completed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          item: string
          completed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          item?: string
          completed?: boolean
          created_at?: string
        }
      }
    }
  }
}