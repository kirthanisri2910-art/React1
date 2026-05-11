import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
function Web()
{
  
    return(
         <div className="min-h-screen bg-gray-100">

      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Tailwind css</h1>
        <button     className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-blue-100">
          Login
        </button>
        
      </nav>

      <div className="flex">

      
        <aside className="w-64 bg-gray-800 text-white min-h-screen p-5 hidden md:block">
          <ul className="space-y-4">
            <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-400 cursor-pointer">Users</li>
            <li className="hover:text-blue-400 cursor-pointer">Reports</li>
            <li className="hover:text-blue-400 cursor-pointer">Settings</li>
          </ul>
        </aside>

        <main className="flex-1 p-6 space-y-6">

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Users</h2>
              <p className="text-2xl font-bold text-blue-600">1,250</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Sales</h2>
              <p className="text-2xl font-bold text-green-600">$9,800</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Orders</h2>
              <p className="text-2xl font-bold text-purple-600">320</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-500">Errors</h2>
              <p className="text-2xl font-bold text-red-600">12</p>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-blue-100 p-4 rounded">
              <h3 className="font-bold text-blue-700 mb-2">Left Panel</h3>
              <p className="text-sm text-gray-600">
                This is left pannel
              </p>
            </div>
            <div className="flex-1 bg-green-100 p-4 rounded">
              <h3 className="font-bold text-green-700 mb-2">Right Panel</h3>
              <p className="text-sm text-gray-600">
                This is right pannel
              </p>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-200 font-semibold p-3">
              <div>Name</div>
              <div>Status</div>
              <div>Role</div>
            </div>
            <div className="grid grid-cols-3 p-3 border-t hover:bg-gray-50">
              <div>Ravi</div>
              <div className="text-green-600 font-semibold">Active</div>
              <div>User</div>
            </div>
            <div className="grid grid-cols-3 p-3 border-t hover:bg-gray-50">
              <div>Anu</div>
              <div className="text-yellow-600 font-semibold">Pending</div>
              <div>Editor</div>
            </div>
            <div className="grid grid-cols-3 p-3 border-t hover:bg-gray-50">
              <div>Kumar</div>
              <div className="text-red-600 font-semibold">Blocked</div>
              <div>Admin</div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
export default Web

 