import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* sidebar */}
             {/* <Sidebar/>  */}
            <div className="wrapper">
                <motion.span 
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                >Govind Kumar</motion.span>
                <div className="social">
                <a href="https://www.facebook.com/govindyadav.kumar.14?mibextid=rS40aB7S9Ucbxw6v"><img src="./facebook.png" alt=""/></a>
                <a href="https://www.instagram.com/govind.yadav?igsh=a2p2aGs1ZzgxMGdj"><img src="./instagram.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/govind-kumar-645451286"> <img src="./linkedin.jpg" alt=""/></a>
                <a href="https://github.com/Govind-yada"><img src="./github2.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;