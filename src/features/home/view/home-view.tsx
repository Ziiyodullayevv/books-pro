import { HomeCards } from "../home-cards";
import { HomeCategories } from "../home-categories";
import { HomeTopBarView } from "../home-top-bar";
import { HomeTrendingGrid } from "../home-trending-grid";

export function HomeView() {
	return (
		<>
			<HomeTopBarView />

			<HomeCards />

			<HomeCategories />

			<HomeTrendingGrid />
		</>
	);
}
