function Uniform() {
    const houseColors = [
        {
            name: "Ashoka",
            color: "Red",
            className: "text-danger",
        },
        {
            name: "Buddha",
            color: "Yellow",
            className: "text-warning",
        },
        {
            name: "Chanakya",
            color: "Green",
            className: "text-success",
        },
        {
            name: "Dronacharya",
            color: "Blue",
            className: "text-primary",
        },
    ];

    const boysUniform = {
        summer: {
            mwf: [
                "Gray Terrycot Full Pants",
                "White Shirt (Half Sleeved)",
                "Black Gola Shoes",
                "White School Socks",
            ],
            tts: [
                "White Full Pants",
                "House Shirt",
                "White Shoes",
                "House Socks",
            ],
        },
        winter: {
            mwf: [
                "Black Terrycot Full Pants",
                "White Shirt (Full Sleeved)",
                "Black Gola Shoes",
                "Black School Socks",
                "Sweater (Half/Full)",
            ],
            tts: [
                "Navy Blue Track Pants",
                "House Shirt",
                "Navy Blue Track Jacket",
                "House Socks",
            ],
        },
    };

    const girlsUniform = {
        summer: {
            mwf: [
                "Gray Terrycot Skirt",
                "White Shirt (Half Sleeved)",
                "Black Gola Shoes",
                "White School Socks",
            ],
            tts: [
                "White Skirt",
                "House Shirt",
                "White Shoes",
                "House Socks",
            ],
        },
        winter: {
            mwf: [
                "Black Terrycot Skirt",
                "White Shirt (Full Sleeved)",
                "Black Gola Shoes",
                "Black School Stockings",
                "Sweater (Half/Full)",
            ],
            tts: [
                "Navy Blue Track Pants",
                "House Shirt",
                "Navy Blue Track Jacket",
                "House Socks",
            ],
        },
    };

    const UniformSection = ({ title, icon, data }) => (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">

            {/* Section Header */}
            <div className="card-header bg-success text-white border-0 p-4">
                <h3 className="fw-bold mb-0">
                    {icon} {title}
                </h3>
            </div>

            <div className="card-body p-4">

                <div className="row g-4">

                    {/* Summer */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-warning shadow-sm rounded-4">

                            <div className="card-header bg-warning-subtle border-0 p-3">
                                <h5 className="fw-bold mb-0 text-warning-emphasis">
                                    ☀️ Summer Uniform
                                </h5>
                            </div>

                            <div className="card-body">

                                {/* MWF */}
                                <div className="mb-4">
                                    <h6 className="fw-bold text-success">
                                        MWF
                                    </h6>

                                    <ul className="list-group list-group-flush">
                                        {data.summer.mwf.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="list-group-item px-0 d-flex align-items-center gap-2"
                                                >
                                                    <span className="text-success">
                                                        ✓
                                                    </span>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* TTS */}
                                <div>
                                    <h6 className="fw-bold text-primary">
                                        TTS
                                    </h6>

                                    <ul className="list-group list-group-flush">
                                        {data.summer.tts.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="list-group-item px-0 d-flex align-items-center gap-2"
                                                >
                                                    <span className="text-primary">
                                                        ✓
                                                    </span>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* House Colors */}
                                    <div className="mt-3">
                                        <small className="fw-semibold text-muted">
                                            House Shirt Colors
                                        </small>

                                        <div className="d-flex flex-wrap gap-2 mt-2">
                                            {houseColors.map((house) => (
                                                <span
                                                    key={house.name}
                                                    className={`badge bg-light border ${house.className}`}
                                                >
                                                    {house.name} - {house.color}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Winter */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-primary shadow-sm rounded-4">

                            <div className="card-header bg-primary-subtle border-0 p-3">
                                <h5 className="fw-bold mb-0 text-primary">
                                    ❄️ Winter Uniform
                                </h5>
                            </div>

                            <div className="card-body">

                                {/* MWF */}
                                <div className="mb-4">
                                    <h6 className="fw-bold text-success">
                                        MWF
                                    </h6>

                                    <ul className="list-group list-group-flush">
                                        {data.winter.mwf.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="list-group-item px-0 d-flex align-items-center gap-2"
                                                >
                                                    <span className="text-success">
                                                        ✓
                                                    </span>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                {/* TTS */}
                                <div>
                                    <h6 className="fw-bold text-primary">
                                        TTS
                                    </h6>

                                    <ul className="list-group list-group-flush">
                                        {data.winter.tts.map(
                                            (item, index) => (
                                                <li
                                                    key={index}
                                                    className="list-group-item px-0 d-flex align-items-center gap-2"
                                                >
                                                    <span className="text-primary">
                                                        ✓
                                                    </span>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    {/* House Colors */}
                                    <div className="mt-3">
                                        <small className="fw-semibold text-muted">
                                            House Shirt Colors
                                        </small>

                                        <div className="d-flex flex-wrap gap-2 mt-2">
                                            {houseColors.map((house) => (
                                                <span
                                                    key={house.name}
                                                    className={`badge bg-light border ${house.className}`}
                                                >
                                                    {house.name} - {house.color}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="container">

                {/* Page Header */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-dark mb-2">
                        👔 School Uniform
                    </h1>

                    <p className="text-muted mb-0">
                        Uniform guidelines for students
                    </p>
                </div>

                {/* Boys */}
                <UniformSection
                    title="Boys"
                    icon="👦"
                    data={boysUniform}
                />

                {/* Girls */}
                <UniformSection
                    title="Girls"
                    icon="👧"
                    data={girlsUniform}
                />

                {/* House Colors */}
                <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

                    <div className="card-header bg-dark text-white border-0 p-4">
                        <h4 className="fw-bold mb-1">
                            🏫 House Shirt Colors
                        </h4>

                        <p className="mb-0 opacity-75">
                            House colors applicable to TTS uniform
                        </p>
                    </div>

                    <div className="card-body p-4">

                        <div className="row g-3">
                            {houseColors.map((house) => (
                                <div
                                    className="col-6 col-md-3"
                                    key={house.name}
                                >
                                    <div className="border rounded-3 p-3 text-center bg-light">
                                        <div
                                            className={`fw-bold ${house.className}`}
                                        >
                                            {house.name}
                                        </div>

                                        <small className="text-muted">
                                            {house.color}
                                        </small>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-muted small mt-4 mb-0">
                    Students are expected to wear the correct uniform according
                    to the season and schedule.
                </p>

            </div>
        </div>
    );
}

export default Uniform;