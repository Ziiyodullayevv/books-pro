import { HomeCards } from "../home-cards";
import { HomeCategories } from "../home-categories";
import { HomeTopBarView } from "../home-top-bar";
import { HomeTrendingSlider } from "../home-trending-slider";

export function HomeView() {
	return (
		<>
			<HomeTopBarView />

			<HomeCards />

			<HomeCategories />

			<HomeTrendingSlider />
		</>
	);
}
