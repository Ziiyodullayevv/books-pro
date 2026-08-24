import { Outlet } from "react-router";

import ScrollToTop from "@/components/scroll-to-top";
import { HomeTopBarView } from "@/features/home/home-top-bar";

export function Layout() {
	return (
		<div className="relative z-10 min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,#173a62_0%,#0d263f_34%,#071426_72%)] pb-6 backdrop-blur-3xl sm:pb-8">
			<ScrollToTop />

			<HomeTopBarView />

			<Outlet />
		</div>
	);
}
