import { HomeBrand } from "./home-brand";
import { HomeNavPill } from "./home-nav-pill";
import { HomeUserMenu } from "./home-user-menu";

export function HomeTopBarView() {
	return (
		<div className="flex items-center justify-between px-10">
			<HomeBrand />

			<HomeNavPill />

			<HomeUserMenu />
		</div>
	);
}
