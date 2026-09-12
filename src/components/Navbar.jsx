import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
            <div className="container-fluid px-3 px-lg-4">

                {/* Brand */}
                <Link
                    className="navbar-brand d-flex align-items-center gap-2 fw-bold text-success"
                    to="/"
                >
                    <div
                        className="bg-success text-white rounded-3 d-flex justify-content-center align-items-center"
                        style={{
                            width: "42px",
                            height: "42px",
                            fontSize: "20px",
                        }}
                    >
                        🎓
                    </div>

                    <div className="d-flex flex-column">
                        <span className="lh-1">
                            Student Portal
                        </span>

                        <small
                            className="text-muted fw-normal"
                            style={{ fontSize: "11px" }}
                        >
                            Management System
                        </small>
                    </div>
                </Link>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

                        {/* Home */}
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link px-3 rounded-3 ${
                                        isActive
                                            ? "active bg-success text-white"
                                            : "text-dark"
                                    }`
                                }
                            >
                                🏠 Home
                            </NavLink>
                        </li>

                        {/* Add Student */}
                        <li className="nav-item">
                            <NavLink
                                to="/add-new-student"
                                className={({ isActive }) =>
                                    `nav-link px-3 rounded-3 ${
                                        isActive
                                            ? "active bg-success text-white"
                                            : "text-dark"
                                    }`
                                }
                            >
                                ➕ Add Student
                            </NavLink>
                        </li>

                        {/* Info Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle px-3 rounded-3 text-dark"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                📚 Information
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end border-0 shadow rounded-3 mt-lg-2">

                                <li>
                                    <Link
                                        className="dropdown-item py-2 rounded-2"
                                        to="/uniform"
                                    >
                                        👔 Uniform
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="dropdown-item py-2 rounded-2"
                                        to="/rul&reg"
                                    >
                                        📋 Rules & Regulations
                                    </Link>
                                </li>

                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;