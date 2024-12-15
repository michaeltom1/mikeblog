import { Link } from "react-router-dom"
function Nopage() {
  return (
    <div className="w-full h-screen flex items-center justify-center text-center">
      <div>
        <h2 className="text-3xl font-bold">404 | Not Found</h2>
        <Link to={'/'}>Back to home</Link>
      </div>
    </div>
  )
}

export default Nopage
