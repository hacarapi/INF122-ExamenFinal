import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
            <h1 className="Display-1 mt-2">Centro de Reparación de Computadoras</h1>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						Examen Final
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									to="/componente1"
                                    className="nav-link"
								>
									Componente 1
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									to="/componente2"
									className= "nav-link"
								>
									Componente 2
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
