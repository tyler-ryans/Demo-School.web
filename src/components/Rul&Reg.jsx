function RulReg() {
    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="container">

                {/* Page Header */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-dark mb-2">
                        School Rules & Regulations
                    </h1>

                    <p className="text-muted mb-0">
                        Disciplinary guidelines and prohibited items
                    </p>
                </div>

                {/* Disciplinary Cards */}
                <div className="card border-0 shadow-sm rounded-4 mb-4 overflow-hidden">

                    <div className="card-header bg-success text-white border-0 p-4">
                        <h3 className="fw-bold mb-1">
                            🎓 Disciplinary Cards
                        </h3>

                        <p className="mb-0 opacity-75">
                            Consequences for disciplinary violations
                        </p>
                    </div>

                    <div className="card-body p-4 p-md-5">

                        <div className="row g-4">

                            {/* Yellow Card */}
                            <div className="col-md-4">
                                <div className="card h-100 border-warning shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <div
                                            className="rounded-circle bg-warning d-flex justify-content-center align-items-center mb-3"
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                            }}
                                        >
                                            🟨
                                        </div>

                                        <h4 className="fw-bold text-warning-emphasis">
                                            Yellow Card
                                        </h4>

                                        <p className="text-muted mb-0">
                                            A note will be sent home and is
                                            required to be signed by the
                                            parents.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Orange Card */}
                            <div className="col-md-4">
                                <div className="card h-100 border-warning shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <div
                                            className="rounded-circle d-flex justify-content-center align-items-center mb-3"
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                                backgroundColor: "#fd7e14",
                                            }}
                                        >
                                            🟧
                                        </div>

                                        <h4
                                            className="fw-bold"
                                            style={{
                                                color: "#d96b00",
                                            }}
                                        >
                                            Orange Card
                                        </h4>

                                        <ul className="text-muted ps-3 mb-0">
                                            <li>
                                                Suspension from all outdoor
                                                activities
                                            </li>
                                            <li>
                                                Detention during break
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Red Card */}
                            <div className="col-md-4">
                                <div className="card h-100 border-danger shadow-sm rounded-4">
                                    <div className="card-body p-4">
                                        <div
                                            className="rounded-circle bg-danger d-flex justify-content-center align-items-center mb-3"
                                            style={{
                                                width: "55px",
                                                height: "55px",
                                            }}
                                        >
                                            🟥
                                        </div>

                                        <h4 className="fw-bold text-danger">
                                            Red Card
                                        </h4>

                                        <ul className="text-muted ps-3 mb-0">
                                            <li>
                                                Suspension for up to 15 days
                                            </li>
                                            <li>
                                                Expulsion if deemed necessary
                                            </li>
                                            <li>
                                                Students below 14 years of age
                                                will not be expelled
                                            </li>
                                            <li>
                                                Detention during break for all
                                                students of the section
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Principal Notice */}
                        <div className="alert alert-info border-0 rounded-4 mt-4 mb-0">
                            <div className="d-flex gap-3">
                                <div className="fs-4">
                                    ℹ️
                                </div>

                                <div>
                                    <h6 className="fw-bold mb-1">
                                        Important Notice
                                    </h6>

                                    <p className="mb-0 text-muted">
                                        The Parents/Guardian will be given a
                                        chance to explain, but the decision of
                                        the Principal is final and binding.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Banned Items */}
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                    <div className="card-header bg-danger text-white border-0 p-4">
                        <h3 className="fw-bold mb-1">
                            🚫 Banned Items
                        </h3>

                        <p className="mb-0 opacity-75">
                            Items that are not permitted on school premises
                        </p>
                    </div>

                    <div className="card-body p-4 p-md-5">

                        <div className="row g-3">

                            {[
                                "Electronics",
                                "Gaming Devices",
                                "Mobile Phones",
                                "Headphones",
                                "Smart Watch",
                            ].map((item, index) => (
                                <div
                                    className="col-sm-6 col-lg-4"
                                    key={index}
                                >
                                    <div className="d-flex align-items-center gap-3 bg-light border rounded-3 p-3">
                                        <span className="text-danger fs-5">
                                            🚫
                                        </span>

                                        <span className="fw-semibold">
                                            {item}
                                        </span>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-muted small mt-4 mb-0">
                    Please ensure that all students and parents are aware of
                    these school regulations.
                </p>

            </div>
        </div>
    );
}

export default RulReg;