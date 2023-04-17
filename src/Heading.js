import { Link } from "react-router-dom"
import './Heading.css'


const Heading = () => {
    return(
        <div className="Heading">
            <h1>Microblog</h1>
            <p>Get in the Rithim of blogging</p>
            <Link to ="/">Blog</Link>
            <Link to ="/new">Add a new post</Link>

        </div>
    )
}

export default Heading