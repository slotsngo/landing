import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FaqItemProps {
	question: string;
	answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			className='flex flex-col gap-2 w-full'
			initial={false}
		>
			<motion.div
				className={`flex justify-between items-center p-4 rounded-lg bg-[rgba(255,_255,_255,_0.04)] w-full cursor-pointer
          ${isOpen ? 'bg-[rgba(255,_255,_255,_0.08)]' : ''}`}
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.01 }}
				transition={{ duration: 0.2 }}
			>
				<p className='text-white text-lg font-bold font-[Inter]'>{question}</p>
				<motion.div
					initial={false}
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M19 8.5L12 15.5L5 8.5'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</motion.div>
			</motion.div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='overflow-hidden'
					>
						<div className='p-4 rounded-lg bg-[rgba(255,_255,_255,_0.02)] text-[#B6C4E7]'>
							<p className='text-base font-normal font-[Inter]'>{answer}</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};
