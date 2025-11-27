import React, { useState, useEffect } from "react";
import "./Head.css";
import { Link, useLocation } from "react-router-dom";

// 1. UPDATED: Remove 'Casting' from the main navigation links
const navLinks = ["Home", "About", "Regsister", "Contact"]; // "About" is here

// 2. EXISTING: Sub-links for the Service dropdown (formerly Casting)
const castingSubLinks = [
    { name: "Casting", path: "/casting" },
    { name: "Portrait", path: "/portrait" },
    { name: "Product", path: "/product" },
];

// 3. ⭐️ NEW: Define the sub-links for the LookBook dropdown
const lookBookSubLinks = [
    { name: "Female Models", path: "/Female" },
    { name: "Male Models", path: "/Male" },
    { name: "Child Models", path: "/kids" },
    { name: "Product Catalogue", path: "/Pro" },
];

const Head = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeLink, setActiveLink] = useState("Home");

    // EXISTING State for Service/Casting dropdown
    const [isCastingDropdownOpen, setIsCastingDropdownOpen] = useState(false);

    // ⭐️ NEW STATE: For the LookBook desktop dropdown
    const [isLookBookDropdownOpen, setIsLookBookDropdownOpen] = useState(false);

    // ⭐️ NEW STATE: For the LookBook mobile dropdown toggle
    const [isMobileLookBookOpen, setIsMobileLookBookOpen] = useState(false);

    // EXISTING State for mobile Service dropdown
    const [isMobileCastingOpen, setIsMobileCastingOpen] = useState(false);


    const location = useLocation();
    // const isHomePage = location.pathname === "/"; // isHomePage is not strictly needed for this fix

    // Check if current path starts with '/casting' to keep the Service link active
    const isCastingPath = location.pathname.startsWith("/casting") || location.pathname.startsWith("/portrait") || location.pathname.startsWith("/product");
    // ⭐️ NEW: Check if current path starts with '/lookbook' (or any of its subpaths)
    const isLookBookPath = location.pathname.startsWith("/Female") || location.pathname.startsWith("/Male") || location.pathname.startsWith("/kids") || location.pathname.startsWith("/Pro");

    // Existing scroll effect hook (re-added for completeness, assuming it was truncated but functional)
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { // Check if scrolling down
                    setIsNavVisible(false);
                } else {
                    setIsNavVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);


    useEffect(() => {
        if (location.pathname === "/") {
            setActiveLink("Home");
        } else if (location.pathname.includes("about")) {
            setActiveLink("About");
        } else if (location.pathname.includes("contact")) {
            setActiveLink("Contact");
        } else if (location.pathname.includes("register")) {
            setActiveLink("Regsister");
        }
        // UPDATED: Check for both dropdown paths
        else if (isCastingPath) {
            setActiveLink("Service"); // Assuming the dropdown is now called 'Service'
        } else if (isLookBookPath) {
            setActiveLink("LookBook"); // New active link for LookBook
        }
    }, [location.pathname, isCastingPath, isLookBookPath]);

    const toggleMenu = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        if (newIsOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            // Close all mobile dropdowns when main menu closes
            setIsMobileCastingOpen(false);
            setIsMobileLookBookOpen(false);
        }
    };

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
        setIsNavVisible(true);

        if (isOpen) {
            setIsOpen(false);
            document.body.style.overflow = "auto";
        }
        // Close all desktop dropdowns
        setIsCastingDropdownOpen(false);
        setIsLookBookDropdownOpen(false);
        // Close all mobile dropdowns
        setIsMobileCastingOpen(false);
        setIsMobileLookBookOpen(false);
    };

    // Toggle functions for desktop dropdowns (ensuring only one is open at a time)
    const toggleCastingDropdown = () => {
        setIsCastingDropdownOpen(!isCastingDropdownOpen);
        setIsLookBookDropdownOpen(false); // Close LookBook dropdown
    };

    // ⭐️ NEW: Toggle function for the LookBook desktop dropdown
    const toggleLookBookDropdown = () => {
        setIsLookBookDropdownOpen(!isLookBookDropdownOpen);
        setIsCastingDropdownOpen(false); // Close Service dropdown
    };

    // ⭐️ NEW: Toggle function for the LookBook mobile dropdown
    const toggleMobileLookBookDropdown = () => {
        setIsMobileLookBookOpen(!isMobileLookBookOpen);
        setIsMobileCastingOpen(false); // Close Service dropdown
    };

    // Toggle function for the Service mobile dropdown
    const toggleMobileCastingDropdown = () => {
        setIsMobileCastingOpen(!isMobileCastingOpen);
        setIsMobileLookBookOpen(false); // Close LookBook dropdown
    };

    // Handler for Service sub-links
    const handleCastingSubLinkClick = () => {
        handleNavLinkClick('Service');
    };

    // ⭐️ NEW: Handler for LookBook sub-links
    const handleLookBookSubLinkClick = () => {
        handleNavLinkClick('LookBook');
    };


    return (
        <header
            className={`header-container ${!isNavVisible && !isOpen ? "hidden" : ""}`}
        >
            <nav className="navbar navbar-expand-lg">
                <div className="container-xl d-flex justify-content-between align-items-center">
                    <Link
                        to="/"
                        className="navbar-brand"
                        onClick={() => handleNavLinkClick("Home")}
                    >
                        <span className="logo-head"> ONE CAST</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="d-none d-lg-flex">
                        <ul className="navbar-nav">
                            {navLinks.map((link) => (
                                <React.Fragment key={link}>

                                    {/* ⭐️ NEW LOGIC: RENDER About, Regsister, Contact, Home */}
                                    <li className="nav-item">
                                        {/* Determine the 'to' path. Home is '/', others are '/link' */}
                                        <Link
                                            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                            className={`nav-link ${activeLink === link || (link === 'About' && !isCastingPath && !isLookBookPath && location.pathname.includes('/about')) ? "active" : ""}`}
                                            onClick={() => handleNavLinkClick(link)}
                                        >
                                            {link}
                                        </Link>
                                    </li>

                                    {/* --- SERVICE/CASTING DROPDOWN (Rendered after About) --- */}
                                    {/* NOTE: We now render this unconditionally after 'About' link, not tied to the 'About' map iteration */}
                                    {link === "About" && (
                                        <li
                                            className={`nav-item dropdown ${isCastingDropdownOpen ? 'show' : ''}`}
                                            onMouseEnter={() => { setIsCastingDropdownOpen(true); setIsLookBookDropdownOpen(false); }}
                                            onMouseLeave={() => setIsCastingDropdownOpen(false)}
                                            key="desktop-service-dropdown"
                                        >
                                            <button
                                                type="button"
                                                className={`nav-link dropdown-toggle ${isCastingPath ? "active" : ""}`}
                                                id="navbarCastingDropdown"
                                                aria-expanded={isCastingDropdownOpen}
                                                onClick={toggleCastingDropdown}
                                            >
                                                Service
                                            </button>
                                            <ul
                                                className={`dropdown-menu ${isCastingDropdownOpen ? 'show' : ''}`}
                                                aria-labelledby="navbarCastingDropdown"
                                            >
                                                {castingSubLinks.map((subLink) => (
                                                    <li key={subLink.path}>
                                                        <Link
                                                            to={subLink.path}
                                                            className={`dropdown-item ${location.pathname === subLink.path ? "active" : ""}`}
                                                            onClick={handleCastingSubLinkClick}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}

                                    {/* ⭐️ NEW: LOOKBOOK DROPDOWN (Rendered after Service) */}
                                    {link === "About" && ( // Using 'About' as the anchor still, but rendering the link above
                                        <li
                                            className={`nav-item dropdown ${isLookBookDropdownOpen ? 'show' : ''}`}
                                            onMouseEnter={() => { setIsLookBookDropdownOpen(true); setIsCastingDropdownOpen(false); }}
                                            onMouseLeave={() => setIsLookBookDropdownOpen(false)}
                                            key="desktop-lookbook-dropdown"
                                        >
                                            <button
                                                type="button"
                                                className={`nav-link dropdown-toggle ${isLookBookPath ? "active" : ""}`}
                                                id="navbarLookBookDropdown"
                                                aria-expanded={isLookBookDropdownOpen}
                                                onClick={toggleLookBookDropdown}
                                            >
                                                LookBook
                                            </button>
                                            <ul
                                                className={`dropdown-menu ${isLookBookDropdownOpen ? 'show' : ''}`}
                                                aria-labelledby="navbarLookBookDropdown"
                                            >
                                                {lookBookSubLinks.map((subLink) => (
                                                    <li key={subLink.path}>
                                                        <Link
                                                            to={subLink.path}
                                                            className={`dropdown-item ${location.pathname === subLink.path ? "active" : ""}`}
                                                            onClick={handleLookBookSubLinkClick}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    )}

                                    {/* ❌ REMOVED OLD LINK MAPPING LOGIC (It was hiding 'About') */}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Toggle Button (unchanged) */}
                    <button
                        className="btn d-lg-none menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <span className="close-icon">&times;</span>
                        ) : (
                            <span className="navbar-toggler-icon"></span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
                <ul className="list-unstyled">
                    {navLinks.map((link) => (
                        <React.Fragment key={`mobile-${link}`}>
                            {/* 1. Render the main navigation link */}
                            <li className="nav-item" key={`mobile-link-${link}`}>
                                <Link
                                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                    className={`nav-link ${activeLink === link ? "active" : ""}`}
                                    onClick={() => handleNavLinkClick(link)}
                                >
                                    {link}
                                </Link>
                            </li>

                            {/* 2. Insert Service Dropdown after 'About' */}
                            {link === "About" && (
                                <li className={`nav-item mobile-dropdown-item ${isMobileCastingOpen ? "open" : ""}`} key="mobile-casting-parent">
                                    <span
                                        className={`nav-link mobile-dropdown-parent ${isCastingPath ? "active" : ""}`}
                                        onClick={toggleMobileCastingDropdown}
                                    >
                                        Service <span className="arrow-icon">&#9660;</span>
                                    </span>
                                    <ul className="mobile-sub-menu list-unstyled">
                                        {castingSubLinks.map((subLink) => (
                                            <li key={`mobile-${subLink.path}`}>
                                                <Link
                                                    to={subLink.path}
                                                    className={`nav-link sub-link ${location.pathname === subLink.path ? "active" : ""}`}
                                                    onClick={handleCastingSubLinkClick}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}

                            {/* 3. Insert LookBook Dropdown after 'Service' (which is after 'About') */}
                            {link === "About" && (
                                <li className={`nav-item mobile-dropdown-item ${isMobileLookBookOpen ? "open" : ""}`} key="mobile-lookbook-parent">
                                    <span
                                        className={`nav-link mobile-dropdown-parent ${isLookBookPath ? "active" : ""}`}
                                        onClick={toggleMobileLookBookDropdown}
                                    >
                                        LookBook <span className="arrow-icon">&#9660;</span>
                                    </span>
                                    <ul className="mobile-sub-menu list-unstyled">
                                        {lookBookSubLinks.map((subLink) => (
                                            <li key={`mobile-${subLink.path}`}>
                                                <Link
                                                    to={subLink.path}
                                                    className={`nav-link sub-link ${location.pathname === subLink.path ? "active" : ""}`}
                                                    onClick={handleLookBookSubLinkClick}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Head;