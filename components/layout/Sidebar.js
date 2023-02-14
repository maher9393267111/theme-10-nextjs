import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo border-gray-800"><Link className="d-flex" href="/">
                            
                           
                            
                            </Link></div>
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav className="mt-15">
                                    <ul className="mobile-menu font-heading">
                                      
                                       
                                    <li className="color-gray-500"><Link className="active" href="/">Home</Link></li>
                                    <li><Link className="color-gray-500" href="/page-portfolio">Portfolio</Link></li>
                                    <li><Link className="color-gray-500" href="/page-about">About me</Link></li>
                                    <li><Link className="color-gray-500" href="/page-login">Login</Link></li>
                                    <li><Link className="color-gray-500" href="/page-signup">Register</Link></li>
                                    <li><Link className="color-gray-500" href="/blogs">blogs</Link></li>
                                      
                                        <li><Link href="/page-contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Sidebar;