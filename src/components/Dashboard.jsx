import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchApi() {
            try {
                const { data } = await axios.get(
                    "http://localhost:9000/student/all-students",
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                setStudents(data.students || []);
            } catch (error) {
                console.error("Error fetching students:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchApi();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(
                `http://localhost:9000/student/delete-student/${id}`
            );

            // Remove deleted student without reloading the page
            setStudents((prevStudents) =>
                prevStudents.filter((student) => student._id !== id)
            );
        } catch (error) {
            console.error("Error deleting student:", error);
            alert("Failed to delete student.");
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100 py-4">
            <div className="container">

                {/* Header */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h2 className="fw-bold mb-1">
                            Student Dashboard
                        </h2>
                        <p className="text-muted mb-0">
                            Manage all student records
                        </p>
                    </div>

                    <div className="bg-white shadow-sm rounded-3 px-4 py-3">
                        <span className="text-muted me-2">
                            Total Students
                        </span>
                        <span className="badge bg-success fs-6">
                            {students.length}
                        </span>
                    </div>
                </div>

                {/* Student Table Card */}
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                    {/* Card Header */}
                    <div className="card-header bg-white border-0 px-4 py-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold mb-0">
                                All Student Details
                            </h5>

                            <span className="text-muted small">
                                {students.length} Records
                            </span>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">

                            <thead className="table-success">
                                <tr>
                                    <th className="px-4 py-3">ADM. No.</th>
                                    <th className="py-3">Student Name</th>
                                    <th className="py-3">Class</th>
                                    <th className="py-3">Section</th>
                                    <th className="py-3">Parents Name</th>
                                    <th className="py-3">D.O.B</th>
                                    <th className="py-3 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-5"
                                        >
                                            <div
                                                className="spinner-border text-success"
                                                role="status"
                                            >
                                                <span className="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>

                                            <p className="text-muted mt-2 mb-0">
                                                Loading students...
                                            </p>
                                        </td>
                                    </tr>
                                ) : students.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-5"
                                        >
                                            <div className="text-muted">
                                                <div className="fs-1 mb-2">
                                                    📚
                                                </div>

                                                <h6 className="fw-bold">
                                                    No Students Found
                                                </h6>

                                                <p className="mb-0">
                                                    There are currently no
                                                    student records.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    students.map((item) => (
                                        <tr key={item._id}>
                                            <td className="px-4 fw-semibold">
                                                {item.admno}
                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div
                                                        className="rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
                                                        style={{
                                                            width: "38px",
                                                            height: "38px",
                                                        }}
                                                    >
                                                        {item.studentName
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </div>

                                                    <span className="fw-semibold">
                                                        {item.studentName}
                                                    </span>
                                                </div>
                                            </td>

                                            <td>
                                                <span className="badge bg-light text-dark border">
                                                    {item.class}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge bg-success-subtle text-success">
                                                    {item.section}
                                                </span>
                                            </td>

                                            <td>
                                                {item.parentName}
                                            </td>

                                            <td>
                                                {item.dob}
                                            </td>

                                            <td>
                                                <div className="d-flex justify-content-center gap-2">

                                                    <Link
                                                        to={`/edit-details/${item._id}`}
                                                        className="text-decoration-none"
                                                    >
                                                        <button
                                                            className="btn btn-sm btn-outline-success px-3"
                                                            title="Edit student"
                                                        >
                                                            ✏️ Edit
                                                        </button>
                                                    </Link>

                                                    <button
                                                        className="btn btn-sm btn-outline-danger px-3"
                                                        onClick={() =>
                                                            handleDelete(
                                                                item._id
                                                            )
                                                        }
                                                        title="Delete student"
                                                    >
                                                        🗑️ Delete
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-muted small mt-4">
                    Student Management System
                </div>

            </div>
        </div>
    );
}

export default Dashboard;