import "./header.css"
function Header({usersLength}) {
  return (
 <div className="navbar">
  <div className="navbar-container container">
    <h1 className="navbar-logo">Cuser</h1>
    <h3 className="navbar-counter">
      {usersLength>0 ? "You have:" + usersLength : "Not users"}
    </h3>
  </div>
 </div>
  )
}

export default Header