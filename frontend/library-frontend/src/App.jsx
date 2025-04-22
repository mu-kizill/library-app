import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="p-6">
      <nav className="mb-6 space-x-4">
        <Link className="text-blue-600 hover:underline" to="/">Book List</Link>
        <Link className="text-blue-600 hover:underline" to="/add">Add Book</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
