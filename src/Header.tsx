import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            if (dropdownOpen) {
                dropdownRef.current.style.maxHeight = dropdownRef.current.scrollHeight + "px";
            } else {
                dropdownRef.current.style.maxHeight = "0px";
            }
        }
    }, [dropdownOpen]);

    return (
        <header>
            <div className="container" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <h1 style={{ flexShrink: 0 }}><Link to="/">Travis Evans</Link></h1>
                <nav style={{ width: "100%" }}>
                    <div id="inlineNav">
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/">Home</Link>
                    </div>

                    <div id="dropdownNav">
                        <p style={{ display: "inline"}}>Portfolio of works</p>
                        <button
                            className="icon"
                            aria-label="Toggle navigation"
                            onClick={() => setDropdownOpen(prev => !prev)}
                            style={{
                                fontSize: 28,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                float: "right"
                            }}
                            >
                            <IoIosMenu />
                        </button>

                        <div
                            ref={dropdownRef}
                            className="dropdownLinks"
                            style={{
                                overflow: "hidden",
                                maxHeight: "0px",
                                transition: "max-height 0.3s ease",
                            }}
                            >
                            <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
                            <Link to="/projects" onClick={() => setDropdownOpen(false)}>Projects</Link>
                            <Link to="/about" onClick={() => setDropdownOpen(false)}>About</Link>
                            <Link to="/contact" onClick={() => setDropdownOpen(false)}>Contact</Link>
                        </div>
                            
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
