export type UserRole = "student" | "faculty" | "staff" | "admin"
export type EnrollmentStatus = "enrolled" | "completed" | "dropped" | "waitlisted"

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: UserRole
          avatar_url: string | null
          student_id: string | null
          department: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: UserRole
          avatar_url?: string | null
          student_id?: string | null
          department?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          full_name?: string | null
          role?: UserRole
          avatar_url?: string | null
          student_id?: string | null
          department?: string | null
          updated_at?: string
        }
      }
      departments: {
        Row: {
          id: string
          name: string
          code: string
          description: string | null
          head_of_department: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          description?: string | null
          head_of_department?: string | null
          created_at?: string
        }
        Update: {
          name?: string
          code?: string
          description?: string | null
          head_of_department?: string | null
        }
      }
      courses: {
        Row: {
          id: string
          department_id: string | null
          name: string
          code: string
          description: string | null
          credits: number
          instructor_id: string | null
          semester: string
          year: number
          max_enrollment: number
          created_at: string
        }
        Insert: {
          id?: string
          department_id?: string | null
          name: string
          code: string
          description?: string | null
          credits?: number
          instructor_id?: string | null
          semester: string
          year: number
          max_enrollment?: number
          created_at?: string
        }
        Update: {
          department_id?: string | null
          name?: string
          code?: string
          description?: string | null
          credits?: number
          instructor_id?: string | null
          semester?: string
          year?: number
          max_enrollment?: number
        }
      }
      enrollments: {
        Row: {
          id: string
          student_id: string
          course_id: string
          status: EnrollmentStatus
          grade: string | null
          enrolled_at: string
        }
        Insert: {
          id?: string
          student_id: string
          course_id: string
          status?: EnrollmentStatus
          grade?: string | null
          enrolled_at?: string
        }
        Update: {
          status?: EnrollmentStatus
          grade?: string | null
        }
      }
      announcements: {
        Row: {
          id: string
          title: string
          content: string
          author_id: string | null
          target_role: UserRole | "all" | null
          published_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          author_id?: string | null
          target_role?: UserRole | "all" | null
          published_at?: string | null
          created_at?: string
        }
        Update: {
          title?: string
          content?: string
          target_role?: UserRole | "all" | null
          published_at?: string | null
        }
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
  }
}
