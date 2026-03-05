import { Outlet } from "react-router";

export function Layout() {
	return (
		<div className="backdrop-blur-3xl py-8">
			<Outlet />
		</div>
	);
}
