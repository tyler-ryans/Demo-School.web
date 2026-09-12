import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditDetails = () => {
    const initialState = {
        class: "",
        section: "",
        admno: "",
    };

    const { id } = useParams();
    const navigate = useNavigate();

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
                `http://localhost:9000/student/edit-student/${id}`,
                formValue,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);

            if (response.status === 201) {
                setMessage("Student details updated successfully!");

                setTimeout(() => {
                    navigate("/");
                }, 1000);
            }
        } catch (error) {
            console.error(error);
            setMessage(
                "Unable to update student details. Please try again."
            );
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
                        Edit Student Details
                    </h2>

                    <p className="text-muted mb-0">
                        Update the student's admission and class information
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">

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
                                        ✏️
                                    </div>

                                    <div>
                                        <h5 className="mb-1 fw-bold">
                                            Update Information
                                        </h5>

                                        <small className="opacity-75">
                                            Modify the required student details
                                        </small>
                                    </div>

                                </div>
                            </div>

                            {/* Form */}
                            <div className="card-body p-4 p-md-5">

                                {/* Message */}
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

                                    <h6 className="fw-bold text-success mb-4">
                                        Student Information
                                    </h6>

                                    <div className="row g-4">

                                        {/* Admission Number */}
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">
                                                Admission No.
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter admission number"
                                                name="admno"
                                                value={formValue.admno}
                                                onChange={handleInputChange}
                                                required
                                            />

                                            <div className="form-text">
                                                Enter the student's admission
                                                number.
                                            </div>
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

                                                <option value="1">
                                                    Class 1
                                                </option>
                                                <option value="2">
                                                    Class 2
                                                </option>
                                                <option value="3">
                                                    Class 3
                                                </option>
                                                <option value="4">
                                                    Class 4
                                                </option>
                                                <option value="5">
                                                    Class 5
                                                </option>
                                                <option value="6">
                                                    Class 6
                                                </option>
                                                <option value="7">
                                                    Class 7
                                                </option>
                                                <option value="8">
                                                    Class 8
                                                </option>
                                                <option value="9">
                                                    Class 9
                                                </option>
                                                <option value="10">
                                                    Class 10
                                                </option>
                                                <option value="11">
                                                    Class 11
                                                </option>
                                                <option value="12">
                                                    Class 12
                                                </option>
                                            </select>
                                        </div>

                                        {/* Section */}
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

                                    </div>

                                    <hr className="my-4" />

                                    {/* Buttons */}
                                    <div className="d-flex flex-column flex-sm-row justify-content-end gap-2">

                                        <button
                                            type="button"
                                            className="btn btn-light border px-4 py-2"
                                            onClick={() => navigate("/")}
                                            disabled={loading}
                                        >
                                            Cancel
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

                                                    Updating...
                                                </>
                                            ) : (
                                                <>
                                                    💾 Update Student
                                                </>
                                            )}
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <p className="text-center text-muted small mt-3">
                            Check the information carefully before updating.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDetails;