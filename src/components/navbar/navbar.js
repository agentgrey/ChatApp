/* -------------- IMPORT CSS -------------- */
import Style from "./navbar.module.css";


/* Function to display the header */
function Navbar() {
    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.title}>
                    <h1>Chat App</h1>
                </div>
                <div className={Style.image}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRzSGyoPFkAK611PRdY8mApcrkJOHxX_rXw&usqp=CAU" alt="Logo" />
                </div>
            </div>
        </>
    )
}


/* -------------- EXPORT MODULES -------------- */
export default Navbar;