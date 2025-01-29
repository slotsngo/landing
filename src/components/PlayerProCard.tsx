interface PlayerProCardProps {
	title: string;
	description: string;
	image: string;
}

export const PlayerProCard = ({ title, description, image }: PlayerProCardProps) => {
	return (
		<div
			className='w-[934px] h-[420px] flex items-end flex-shrink-0'
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='flex px-16 h-[118px] items-center bg-[rgba(32,_41,_53,_0.74)] backdrop-blur-xl gap-10 w-full justify-between'>
				<p
					className='text-white text-xl font-semibold uppercase max-w-[320px] shrink-0'
					style={{
						letterSpacing: '1px',
					}}
				>
					{title}
				</p>
				<p className='text-white text-sm font-normal font-[Inter]'>{description}</p>
			</div>
		</div>
	);
};
