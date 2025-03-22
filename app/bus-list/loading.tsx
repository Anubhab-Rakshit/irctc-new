import { Bus } from "lucide-react"

export default function BusListLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Bus className="h-16 w-16 text-blue-700 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-700"></div>
          </div>
        </div>
        <h3 className="text-xl font-medium text-gray-700 mt-4">Loading Buses</h3>
        <p className="text-gray-500 mt-2">Please wait while we find the best buses for you...</p>
      </div>
    </div>
  )
}

