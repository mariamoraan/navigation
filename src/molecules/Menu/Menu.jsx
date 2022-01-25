import './styles.css'
import { Link } from "react-router-dom"

const Menu = () => {
    return(
        <nav className="navigator">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/questions" >Questions</Link></li>
          </ul>
        </nav>
    )
}

export default Menu