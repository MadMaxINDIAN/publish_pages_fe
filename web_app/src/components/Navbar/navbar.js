import React from "react";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg" style={{borderTop: "3px solid #e3324c"}}>
			<div className="container">
                <img src="/full_logo.png" className="brand-logo" />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
					<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
							<a className="nav-link pre-register-button" href="#pre-register">
								Pre-register
							</a>
						</li><li className="nav-item">
							<a className="nav-link launch-button" href="#">
								Releasing soon
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
