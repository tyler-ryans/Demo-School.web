import { useState } from "react";
import axios from "axios";

function AddNewStudent() {
    const initialState = {
        studentName: "",
        admno: "",
        class: "",
        section: "",
        dob: "",
        parentName: "",
    };

    const [formValue, setFormValue] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setMessage("");

            const response = await axios.post(
                "https://demo-school-web-backend.onrender.com/student/add-new-student",
                formValue,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);

            if (response.status === 201) {
                setFormValue(initialState);
                setMessage("Student added successfully!");
            }
        } catch (error) {
            console.error(error);
            setMessage("Unable to add student. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="container">

                {/* Page Header */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-dark mb-2">
                        Add New Student
                    </h2>

                    <p className="text-muted mb-0">
                        Enter the student's details below
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">

                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                            {/* Card Header */}
                            <div className="card-header bg-success text-white border-0 p-4">
                                <div className="d-flex align-items-center gap-3">

                                    <div
                                        className="bg-white text-success rounded-circle d-flex justify-content-center align-items-center"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            fontSize: "22px",
                                        }}
                                    >
                                        👨‍🎓
                                    </div>

                                    <div>
                                        <h5 className="mb-1 fw-bold">
                                            Student Information
                                        </h5>

                                        <small className="opacity-75">
                                            All fields are required
                                        </small>
                                    </div>

                                </div>
                            </div>

                            {/* Form */}
                            <div className="card-body p-4 p-md-5">

                                {/* Success / Error Message */}
                                {message && (
                                    <div
                                        className={`alert ${
                                            message.includes("successfully")
                                                ? "alert-success"
                                                : "alert-danger"
                                        } border-0 rounded-3`}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>

                                    {/* Section Heading */}
                                    <h6 className="fw-bold text-success mb-3">
                                        Personal Details
                                    </h6>

                                    <div className="row g-4">

                                        {/* Student Name */}
                                        <div className="col-md-8">
                                            <label className="form-label fw-semibold">
                                                Student Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter student's full name"
                                                value={formValue.studentName}
                                                name="studentName"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        {/* Admission Number */}
                                        <div className="col-md-4">
                                            <label className="form-label fw-semibold">
                                                Admission No.
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="ADM001"
                                                value={formValue.admno}
                                                name="admno"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        {/* Class */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Class
                                            </label>

                                            <select
                                                className="form-select form-select-lg"
                                                name="class"
                                                value={formValue.class}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">
                                                    Select class
                                                </option>
                                                <option value="1">Class 1</option>
                                                <option value="2">Class 2</option>
                                                <option value="3">Class 3</option>
                                                <option value="4">Class 4</option>
                                                <option value="5">Class 5</option>
                                                <option value="6">Class 6</option>
                                                <option value="7">Class 7</option>
                                                <option value="8">Class 8</option>
                                                <option value="9">Class 9</option>
                                                <option value="10">Class 10</option>
                                                <option value="11">Class 11</option>
                                                <option value="12">Class 12</option>
                                            </select>
                                        </div>

                                        {/* Section A-H */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Section
                                            </label>

                                            <select
                                                className="form-select form-select-lg"
                                                name="section"
                                                value={formValue.section}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">
                                                    Select section
                                                </option>
                                                <option value="A">
                                                    Section A
                                                </option>
                                                <option value="B">
                                                    Section B
                                                </option>
                                                <option value="C">
                                                    Section C
                                                </option>
                                                <option value="D">
                                                    Section D
                                                </option>
                                                <option value="E">
                                                    Section E
                                                </option>
                                                <option value="F">
                                                    Section F
                                                </option>
                                                <option value="G">
                                                    Section G
                                                </option>
                                                <option value="H">
                                                    Section H
                                                </option>
                                            </select>
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Date of Birth
                                            </label>

                                            <input
                                                type="date"
                                                className="form-control form-control-lg"
                                                value={formValue.dob}
                                                name="dob"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        {/* Parent Name */}
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">
                                                Parent / Guardian Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter parent name"
                                                value={formValue.parentName}
                                                name="parentName"
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    {/* Buttons */}
                                    <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">

                                        <button
                                            type="button"
                                            className="btn btn-light border px-4 py-2"
                                            onClick={() =>
                                                setFormValue(initialState)
                                            }
                                            disabled={loading}
                                        >
                                            Clear
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-success px-4 py-2"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span
                                                        className="spinner-border spinner-border-sm me-2"
                                                        role="status"
                                                    ></span>
                                                    Saving...
                                                </>
                                            ) : (
                                                <>➕ Add Student</>
                                            )}
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <p className="text-center text-muted small mt-3">
                            Make sure all student information is correct before
                            submitting.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewStudent;