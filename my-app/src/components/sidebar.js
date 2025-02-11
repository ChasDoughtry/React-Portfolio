import React from "react";
import "../styles/sidebar.css";

function Sidebar({isOpen}) {
    return (
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutme">About Me</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Sidebar;