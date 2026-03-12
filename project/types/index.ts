export type UserRole = 'advisor' | 'client'

export interface User {
  id: string
  email: string
  role: UserRole
  advisor_id?: string
  created_at: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone?: string
  notes?: string
  advisor_id: string
  created_at: string
  updated_at: string
}

export interface Document {
  id: string
  client_id: string
  filename: string
  file_size: number
  mime_type: string
  storage_path: string
  status: 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'
  category?: string
  extracted_text?: string
  structured_data?: Record<string, any>
  created_at: string
  updated_at: string
}

export interface Insight {
  id: string
  client_id: string
  type: 'summary' | 'opportunities' | 'proposal'
  content: string
  version: number
  created_at: string
}

export interface ChatMessage {
  id: string
  client_id: string
  role: 'user' | 'assistant'
  content: string
  mode: 'personal' | 'general'
  sources?: string[]
  created_at: string
}
