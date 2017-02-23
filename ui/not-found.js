import React from "react";
import { Link } from "react-router"; 

class NotFound extends React.Component {
    render () {
        return (
            <div>
                Page not found. Back to  <Link to='/Project'>main</Link>
            </div>
        )
    }
}

export { NotFound };