export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Quick Sheets
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            AI-Powered Financial Advisory Platform enabling advisors to upload client documents, 
            receive AI-generated insights, and manage client relationships—while clients can 
            chat with their own financial data and receive personalized guidance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Advisors</h2>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Upload and manage client documents</li>
                <li>• AI-generated financial summaries</li>
                <li>• Automated planning opportunities</li>
                <li>• Customizable client proposals</li>
                <li>• Comprehensive client dashboard</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">For Clients</h2>
              <ul className="text-gray-600 space-y-2 text-left">
                <li>• Chat with your financial data</li>
                <li>• Personalized AI guidance</li>
                <li>• View document summaries</li>
                <li>• Access financial insights</li>
                <li>• General financial Q&A</li>
              </ul>
            </div>
          </div>
          
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started as Advisor
            </button>
            <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Client Portal
            </button>
          </div>
          
          <div className="mt-16 text-sm text-gray-500">
            <p>Powered by AI • Secure Document Processing • Real-time Insights</p>
          </div>
        </div>
      </div>
    </main>
  )
}
