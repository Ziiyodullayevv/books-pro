interface HeroCardProps {
	className?: string;
	title: string;
}

export default function HeroCard({ className, title }: HeroCardProps) {
	return (
		<div className={[className, ""].join(" ")}>
			<h3 className="text-white font-bold text-2xl">{title}</h3>
		</div>
	);
}
