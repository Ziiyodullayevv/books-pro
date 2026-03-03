import { Outlet } from "react-router";

export default function Layout() {
	return (
		<div className="bg-[url('/background-3.webp')] w-full fixed bg-no-repeat bg-cover h-screen">
			<div className="absolute top-0 right-0 backdrop-blur-3xl bottom-0 left-0 "></div>

			<main className="bg-white/20 border border-white/30 backdrop-blur-xl rounded-4xl p-8 relative m-20 z-10">
				<Outlet />
			</main>
		</div>
	);
}
