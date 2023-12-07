import { useState } from "react"
import { closeModalIcon, crowdfundLogo, hamburgerIcon } from "../images"

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header>
            <p className="sr-only">crowdfund</p>
            <img alt="" src={crowdfundLogo}/>

            <button onClick={toggleNav}>
                {
                isNavOpen ?
                <img alt="" src={closeModalIcon}/>
                :
                <img alt="" src={hamburgerIcon}/>
                }
            </button>

            <nav className={isNavOpen ? "openNav" : ""}>
                <ul>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header