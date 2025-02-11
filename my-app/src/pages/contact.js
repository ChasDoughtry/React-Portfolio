import React, { useState } from "react";
import Header from '../components/header.js';
import Sidebar from "../components/sidebar.js";

const Contact = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div>
            <Header onToggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isSidebarOpen} />
            <main className={isSidebarOpen ? "sidebar-open" : ""}>
                <h1>Contact</h1>
            </main>
        </div>
    );
};

export default Contact;