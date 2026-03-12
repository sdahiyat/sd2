import { FileText, MessageCircle, Shield, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Quick Sheets
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered financial advisory platform that transforms client documents into actionable insights. 
            Advisors upload documents, get AI-generated summaries and proposals. 
            Clients chat with their financial data for personalized guidance.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started as Advisor
            </button>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium border border-primary-600 hover:bg-primary-50 transition-colors">
              Client Login
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FileText className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Document Intelligence</h3>
            <p className="text-gray-600">Upload financial documents and get AI-powered insights, summaries, and recommendations.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MessageCircle className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Personal Chat</h3>
            <p className="text-gray-600">Clients can ask questions about their finances and get answers based on their documents.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Client Management</h3>
            <p className="text-gray-600">Advisors manage multiple clients with role-based access and secure document sharing.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">Enterprise-grade security with compliance disclaimers and audit logging.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold mb-2">Upload Documents</h3>
              <p className="text-gray-600">Advisors upload client financial documents (PDFs, tax returns, statements)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">AI processes documents to generate summaries, opportunities, and proposals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold mb-2">Client Interaction</h3>
              <p className="text-gray-600">Clients access their portal to chat with their financial data and view insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
