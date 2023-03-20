import '../SideMenu/SideMenu.css'

function SideMenu() {
    return (
        <nav className="navbar shadow-lg navbar-expand-lg navbar-dark bg-dark flex-start sideNavBarSize">
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-column">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Favorites</a>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Request access</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Catalog Task</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
} export default SideMenu;