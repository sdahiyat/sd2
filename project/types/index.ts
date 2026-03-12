export type UserRole = 'advisor' | 'client'

export type DocumentStatus = 'uploading' | 'uploaded' | 'processing' | 'ready' | 'failed'

export type DocumentCategory = 'tax_return' | 'investment_statement' | 'insurance_policy' | 'estate_document' | 'bank_statement' | 'other'

export type InsightStatus = 'needs_documents' | 'processing' | 'ready' | 'failed'

export type User = {
  id: string
  email: string
  role: UserRole
  created_at: string
}

export type Client = {
  id: string
  advisor_id: string
  name: string
  email: string
  phone?: string
  notes?: string
  insight_status: InsightStatus
  created_at: string
  updated_at: string
}

export type Document = {
  id: string
  client_id: string
  advisor_id: string
  filename: string
  file_type: string
  file_size: number
  status: DocumentStatus
  category?: DocumentCategory
  extracted_text?: string
  structured_data?: any
  created_at: string
  updated_at: string
}

export type Insight = {
  id: string
  client_id: string
  type: 'summary' | 'opportunities' | 'proposal'
  content: string
  version: number
  created_at: string
}

export type ChatMessage = {
  id: string
  client_id: string
  role: 'user' | 'assistant'
  content: string
  mode: 'personal' | 'general'
  sources?: string[]
  created_at: string
}
