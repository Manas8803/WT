import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			<header className="navbar">
				<Link className="site-logo" to="/">
					#VanLife
				</Link>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					About
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => (isActive ? "nav-selected" : null)}
				>
					Vans
				</NavLink>
			</header>
		</>
	);
}
