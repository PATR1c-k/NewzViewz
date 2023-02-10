import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    let location = useLocation();

    React.useEffect(() => {
        // Google Analytics
        console.log(location.pathname);
    }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewzViewz</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="business">business</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="health">health</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="science">science</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="sports">sports</Link></li>
                            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="technology">technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
export default Navbar 