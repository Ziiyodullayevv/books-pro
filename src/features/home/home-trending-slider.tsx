import { Funnel, SlidersHorizontal, Star } from "lucide-react";

const trendingMovies = [
	{
		id: "loetoeng",
		title: "Loetoeng Kasarung",
		rating: 7.8,
		year: 2023,
		image: "https://cdn.europosters.eu/image/1300/229630.jpg",
	},
	{
		id: "gajah",
		title: "Gajah Langka",
		rating: 6.0,
		year: 2023,
		image: "https://i.ebayimg.com/images/g/eeQAAOSwBkVkt1it/s-l1200.jpg",
	},
	{
		id: "kang-satay",
		title: "Si Kang Satay",
		rating: 7.1,
		year: 2023,
		image:
			"https://imgc.allpostersimages.com/img/posters/disney-zootopia-2-2025-nick-judy_u-l-q1ttdfg0.jpg?artHeight=550&artPerspective=y&artWidth=550&background=ffffff",
	},
	{ id: "mommy-cat", title: "Mommy Cat", rating: 7.8, year: 2023, image: "/background-7.webp" },
	{
		id: "hijaber-cantik",
		title: "Hijaber Cantig",
		rating: 6.1,
		year: 2023,
		image: "/background-3.webp",
	},
	{ id: "xatra-x", title: "Xatra- X", rating: 6.5, year: 2022, image: "/background-6.webp" },
];

export function HomeTrendingSlider() {
	return (
		<section className="px-10">
			<header className="mb-5 flex items-center justify-between gap-4">
				<h2 className="text-2xl font-normal tracking-tight text-white md:text-3xl">
					Trending in Animation
				</h2>

				<div className="inline-flex h-10 items-center rounded-full border border-white/10 bg-[#011B36] px-1 shadow-[0_12px_28px_-16px_rgba(1,10,22,0.8)]">
					<button
						type="button"
						className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/12 hover:text-white"
					>
						<SlidersHorizontal className="size-3.5" />
					</button>

					<span className="mx-2 h-5 w-px bg-white/18" />

					<button
						type="button"
						className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/12 hover:text-white"
					>
						<Funnel className="size-3.5" />
					</button>
				</div>
			</header>

			<div>
				<div className="grid grid-cols-6 gap-4">
					{trendingMovies.map((movie) => (
						<article key={movie.id} className="space-y-2.5">
							<div className="aspect-3/4 overflow-hidden rounded-[24px] bg-white/8 shadow-[0_24px_40px_-18px_rgba(8,16,32,0.75)]">
								<img
									src={movie.image}
									alt={movie.title}
									className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
								/>
							</div>

							<div className="space-y-1.5">
								<h3 className="truncate text-base font-semibold leading-tight text-white">
									{movie.title}
								</h3>

								<div className="flex items-center gap-3 text-sm text-white/78 md:text-base">
									<span className="inline-flex items-center gap-1.5">
										<Star className="size-3.5 fill-[#FF9F1A] text-[#FF9F1A]" />
										{movie.rating.toFixed(1)}
									</span>

									<span className="h-4 w-px bg-white/30" />

									<span>{movie.year}</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
