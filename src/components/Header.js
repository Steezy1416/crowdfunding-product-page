import { useState } from "react"
import { closeNavIcon, crowdfundLogo, hamburgerIcon } from "../images"

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header className="main-header">
            <div className="header-max-width-wrapper">
                <p className="sr-only">crowdfund</p>
                <img alt="" src={crowdfundLogo}/>
    
                <button className="mobile-only navToggleBtn" onClick={toggleNav}>
                    {
                    isNavOpen ?
                    <img alt="" src={closeNavIcon}/>
                    :
                    <img alt="" src={hamburgerIcon}/>
                    }
                </button>
    
                <nav className={isNavOpen ? "headerNav" : "closedNav headerNav"}>
                    <ul className="nav-link-container">
                        <li>About</li>
                        <li>Discover</li>
                        <li>Get Started</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header