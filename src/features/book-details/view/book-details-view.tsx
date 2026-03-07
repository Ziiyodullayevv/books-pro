import { Bookmark, Share2 } from "lucide-react";

export function BookDetailsView() {
	return (
		<div className="max-w-360 mx-auto px-10 py-20">
			<div className="flex gap-10">
				<div className="w-[300px] shrink-0 h-[450px] shadow-2xl overflow-hidden rounded-2xl">
					<img
						className="w-full h-full object-cover"
						src="https://i.pinimg.com/736x/ae/7a/cf/ae7acf71650adaab669c67e1c27575db.jpg"
						alt="book poster"
					/>
				</div>
				<div>
					<div className="inline-flex gap-2 items-center">
						<span className="border-r border-white pr-3">Movie</span>
						<span className="text-red-500">Cinema Threler Drama</span>
					</div>

					<h1 className="text-4xl font-bold text-white text-shadow-sm my-4">Joker (2019)</h1>

					<div className="my-5">
						<h4 className="text-white my-2 text-shadow-sm">
							<span className="opacity-75">Director:</span> Todd Phillips
						</h4>
						<h4 className="text-white my-2 text-shadow-sm">
							<span className="opacity-75">Writer:</span> Todd Phillips, Scott Silver
						</h4>
					</div>

					<p className="leading-8 text-white text-shadow-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, provident illum labore
						unde, harum reiciendis sunt aut error recusandae amet nesciunt dicta, natus doloribus
						laudantium porro id eveniet totam sapiente repellat tenetur alias. Hic beatae aspernatur
						et enim odit est illum, temporibus voluptatem, aliquam quidem laudantium perferendis
						magnam asperiores voluptas odio libero architecto, doloribus fuga non ut totam. Repellat
						sit cumque voluptatem corporis, vero quae labore nostrum? Ea at aliquid fugiat,
						voluptate enim molestiae, architecto dignissimos omnis sapiente ipsa ut animi error
						minus sequi est quod possimus adipisci repellendus nihil hic autem! Voluptates hic
						maiores, atque accusamus eos nostrum eligendi?
					</p>

					<div className="flex my-5 justify-between">
						<div>
							<h5>Nominations:</h5>
							<h5 className="mt-2 text-orange-400">Academy Award for Best Pecture</h5>
						</div>

						<div className="inline-flex gap-2">
							<button className="bg-white/20 backdrop-blur-3xl shadow-lg size-12 rounded-full flex items-center justify-center">
								<Bookmark />
							</button>
							<button className="bg-white/20 backdrop-blur-3xl shadow-lg size-12 rounded-full flex items-center justify-center">
								<Share2 />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-between items-center mt-15">
				<div className="h-20 flex gap-7 items-center px-3 flex-row-reverse bg-white rounded-r-full min-w-80">
					{[1, 2, 3, 4].map((_, index) => (
						<img
							className="size-14 rounded-full"
							src="https://i.guim.co.uk/img/media/a4eea3f7b5f6df1b96099e5e923ad1c8ae784aa0/128_0_1922_1153/master/1922.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1ed2e4b6e1d307628d137da42e112480"
							alt=""
						/>
					))}
				</div>
				<button className="uppercase text-lg leading-0 bg-red-500 hover:bg-red-600 text-white py-7 px-8 rounded-full shadow-lg shadow-red-500/50">
					Watch Now
				</button>
			</div>
		</div>
	);
}
