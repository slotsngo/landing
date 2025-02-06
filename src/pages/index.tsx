/* eslint-disable react/no-unescaped-entities */

import Head from 'next/head';
import { FaqItem } from '@/components/FaqItem';
import { faqData } from '@/data/faq';
import { AdvantagesSlider } from '@/components/AdvantagesSlider';
import { PlayerProsSlider } from '@/components/PlayerProsSlider';
import Link from 'next/link';

export default function Home() {
	const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
		e.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	return (
		<>
			<Head>
				<title>Slots&apos;n&apos;Go</title>
			</Head>
			<header className='flex items-center bg-[rgba(255,_255,_255,_0.04)] backdrop-filter backdrop-blur-xl py-6 px-4'>
				<div className='flex justify-between items-center max-w-[1406px] w-full mx-auto'>
					<img
						src='assets/logo.svg'
						alt='logo'
					/>
					<div className='flex gap-5 font-[Inter] max-md:hidden'>
						<a
							onClick={(e) => smoothScroll(e, 'partners')}
							href='#partners'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer'
						>
							Slots'n'go Partners
						</a>
						<a
							onClick={(e) => smoothScroll(e, 'benefits')}
							href='#benefits'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors'
						>
							Benefits
						</a>
						<a
							onClick={(e) => smoothScroll(e, 'cooperation-models')}
							href='#cooperation-models'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors'
						>
							Cooperation Models
						</a>
						<a
							onClick={(e) => smoothScroll(e, 'about-us')}
							href='#about-us'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors'
						>
							About Us
						</a>
						<a
							onClick={(e) => smoothScroll(e, 'faq')}
							href='#faq'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors'
						>
							FAQ
						</a>
						<a
							onClick={(e) => smoothScroll(e, 'contacts')}
							href='#contacts'
							className='text-[#B6C4E7] text-sm font-semibold leading-[22px] uppercase cursor-pointer hover:text-white transition-colors'
						>
							Contacts
						</a>
					</div>
					<div className='max-md:hidden'>
						<a className='button'>My Account</a>
					</div>
					<div className='max-md:block hidden'>
						<a className='button-mobile'>
							<img
								src='assets/account.svg'
								alt='account'
							/>
						</a>
					</div>
				</div>
			</header>

			<main className='flex flex-col gap-[150px] max-md:gap-8 font-[Unbounded] items-center'>
				<section
					className='flex flex-col max-w-[1920px] w-full h-[865px] max-md:h-[530px] items-center justify-center max-md:justify-start'
					id='partners'
				>
					<div className='bg-[url(/assets/bg-section.png)] max-md:bg-[url(/assets/bg-section-mobile.png)] bg-cover max-md:bg-contain bg-center max-md:bg-top bg-no-repeat w-full flex justify-center items-end h-full max-md:-mt-12'>
						<div className='flex flex-col gap-12 max-md:gap-0 py-12 px-16 max-md:px-4 max-md:py-4 max-md:mx-4 items-center rounded-2xl bg-[rgba(0,0,0,_0.08)] backdrop-blur-[32px] shadow-[0px_0px_48px_0px_rgba(181,_194,_227,_0.16)_inset] border-2 border-white max-w-[936px] w-full relative'>
							<p className='text-[50px] font-semibold uppercase text-white text-center max-md:text-[17px]'>
								MAXIMIZE YOUR PROFIT WITH SLOTS'N'GO
							</p>
							<div className='flex flex-col justify-center items-center'>
								<p className='text-2xl/[72px] max-md:text-[11px]/[50px] font-semibold uppercase text-[#E7D6B6] text-center font-[Inter]'>
									Become an Affiliate Partner Today!
								</p>
								<a className='button'>My Account</a>
							</div>
							<img
								className='absolute -right-44 max-md:w-[40%] max-md:-right-8 max-md:-bottom-17'
								src='assets/777-1.png'
								alt='777-1'
							/>
							<img
								className='absolute -bottom-20 -left-48 max-md:w-[40%] max-md:-bottom-12 max-md:-left-11'
								src='assets/777-2.png'
								alt='777-2'
							/>
						</div>
					</div>
				</section>

				<section
					className='flex flex-col gap-10 max-w-[1448px] w-full px-4'
					id='benefits'
				>
					<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-white text-center'>
						Slots'n'go benefits
					</h2>
					<div className='flex gap-6 flex-wrap'>
						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-1.png'
									className='mx-auto'
									alt='benefits-1'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								HIGH CONVERSION
								<br />
								RATE
							</p>
						</div>

						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-2.png'
									className='mx-auto'
									alt='benefits-2'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								COMMISSIONS TYPES
								<br />
								FOR EVERY PARTNER
							</p>
						</div>

						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-3.png'
									className='mx-auto'
									alt='benefits-3'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								PERSONALIZEd
								<br />
								DASHBOARD
							</p>
						</div>

						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-4.png'
									className='mx-auto'
									alt='benefits-4'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								FLEXIBLE
								<br />
								PAYMENTS
							</p>
						</div>

						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-5.png'
									className='mx-auto'
									alt='benefits-5'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								MARKETING
								<br />
								MATERIALS
							</p>
						</div>

						<div className='flex flex-col gap-8 justify-center items-center pb-8 max-w-[453px] rounded-2xl bg-[#25284E] w-full'>
							<div className='bg-[url(/assets/bg-benefits.png)] bg-cover bg-center bg-no-repeat rounded-2xl max-h-[220px] w-full'>
								<img
									src='assets/benefits-6.png'
									className='mx-auto'
									alt='benefits-6'
								/>
							</div>
							<p className='text-xl/8 font-semibold uppercase text-white text-center'>
								24/7
								<br />
								SUPPORT
							</p>
						</div>
					</div>
				</section>

				<section
					className='flex max-md:flex-col gap-16 pl-4 overflow-hidden max-w-[1448px] w-full items-center'
					id='about-us'
				>
					<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-white text-start max-md:text-center'>
						UNIQUE
						<br />
						Advantages
						<br />
						for webmasters
					</h2>
					<AdvantagesSlider />
				</section>

				<section className='flex flex-col gap-8'>
					<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-white text-center'>
						Pros for players
					</h2>
					<PlayerProsSlider />
				</section>

				<section
					className='flex flex-col gap-8 px-4'
					id='cooperation-models'
				>
					<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-white text-center'>
						Cooperation Models
					</h2>
					<div className='flex gap-6 flex-row max-md:flex-col items-start'>
						<div className='flex flex-col items-center justify-center gap-6 pb-8 rounded-2xl bg-[rgba(0,0,0,0.08)] max-w-[454px] w-full'>
							<img
								className='rounded-t-2xl'
								src='assets/card-1.png'
								alt='card-1'
							/>
							<div className='px-8 flex flex-col gap-6'>
								<p className='text-[#E7D6B6] text-xl font-semibold uppercase text-center'>Dynamic Revenue Share</p>
								<p className='text-[#B6C4E7] text-sm font-normal font-[Inter] text-center'>
									Earn
									<span className='text-[#F6CA78]'>up to 45%</span>
									based on the Net Gaming Revenue (NGR) generated by players and the number of First-Time Depositors
									(FTDs) you attract.
								</p>
							</div>
						</div>

						<div className='flex flex-col items-center justify-center gap-6 pb-8 rounded-2xl bg-[rgba(0,0,0,0.08)] max-w-[454px] w-full h-full'>
							<img
								className='rounded-t-2xl'
								src='assets/card-2.png'
								alt='card-2'
							/>
							<div className='px-8 flex flex-col gap-6'>
								<p className='text-[#E7D6B6] text-xl font-semibold uppercase text-center'>Hybrid Model</p>
								<p className='text-[#B6C4E7] text-sm font-normal font-[Inter] text-center'>
									Combine CPA + RevShare.
									<br />
									Contact your manager for exclusive offers
								</p>
							</div>
						</div>

						<div className='flex flex-col items-center justify-center gap-6 pb-8 rounded-2xl bg-[rgba(0,0,0,0.08)] max-w-[454px] w-full'>
							<img
								className='rounded-t-2xl'
								src='assets/card-3.png'
								alt='card-3'
							/>
							<div className='px-8 flex flex-col gap-6'>
								<p className='text-[#E7D6B6] text-xl font-semibold uppercase text-center'>Cost Per Acquisition (CPA)</p>
								<p className='text-[#B6C4E7] text-sm font-normal font-[Inter] text-center'>
									Start earning
									<span className='text-[#F6CA78]'>up to 50%</span>
									per single acquisition.
									<br />
									Reach out to your manager for exclusive deals.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='flex justify-center items-center w-full px-14 max-md:hidden'>
					<div className='flex flex-row max-w-[1170px] w-full items-start gap-6 rounded-2xl bg-[rgba(255,_255,_255,_0.04)] pl-14 py-14 relative bg-[url(/assets/bg-banner.png)] bg-cover bg-center bg-no-repeat'>
						<div className='flex flex-col gap-6 max-w-[530px]'>
							<div className='flex gap-4 flex-col items-start'>
								<p className='text-white text-[32px] font-semibold uppercase'>
									START EARNING <br />
									WITH US TODAY!
								</p>
								<p className='text-[#B6C4E7] text-lg font-normal font-[Inter]'>
									Once you sign up, our manager will reach out to answer any questions you may have and help you get
									started on your journey to profit!
								</p>
							</div>
							<a className='button'>My Account</a>
						</div>
						<div className='min-w-[438px] h-[1px]'>
							<img
								className='absolute bottom-0 right-0'
								src='assets/woman.png'
								alt='woman'
							/>
						</div>
						<img
							className='absolute -top-16 right-[45%]'
							src='assets/coin-1.png'
							alt='coin'
						/>
						<img
							className='absolute -bottom-16 -left-18'
							src='assets/coin-2.png'
							alt='coin'
						/>
						<img
							className='absolute -bottom-22 right-[31%]'
							src='assets/heart.png'
							alt='heart'
						/>
					</div>
				</section>

				<section className='flex-col gap-8 hidden max-md:flex'>
					<div className='flex flex-col relative'>
						<img
							className='absolute top-0 z-10 w-[25%]'
							src='assets/coin-1.png'
							alt='coin'
						/>
						<img
							className='absolute -bottom-10 -left-5 z-10 w-[25%]'
							src='assets/coin-2.png'
							alt='coin'
						/>
						<div className='relative overflow-hidden'>
							<img
								className='absolute -right-10 bottom-0 z-10 w-[25%]'
								src='assets/heart.png'
								alt='heart'
							/>
							<img
								className='w-full'
								src='assets/woman-mobile.png'
								alt='woman-mobile'
							/>
						</div>
						<div className='px-4 -mt-7'>
							<div className='flex flex-col gap-4 pt-4 pb-8 px-5 items-center rounded-2xl bg-[rgba(0,0,0,_0.08)] backdrop-blur-[32px] shadow-[0px_0px_48px_0px_rgba(181,_194,_227,_0.16)_inset] border-2 border-white w-full relative'>
								<p className='font-semibold uppercase text-white text-center text-[17px]'>
									START EARNING WITH US TODAY!
								</p>
								<div className='flex flex-col justify-center items-center '>
									<p className='text-[11px] font-semibold uppercase text-[#E7D6B6] text-center font-[Inter]'>
										Once you sign up, our manager will reach out to answer any questions you may have and help you get
										started on your journey to profit!
									</p>
								</div>
								<a className='button'>My Account</a>
							</div>
						</div>
					</div>
				</section>

				<section
					className='flex flex-col gap-8 px-4'
					id='faq'
				>
					<h2 className='text-[41px] max-md:text-[21px] font-semibold uppercase text-white text-center'>
						Frequently Asked Questions
					</h2>
					<div className='flex flex-col max-w-[1400px] mx-auto w-full'>
						{faqData.map((section, sectionIndex) => (
							<div
								key={section.title}
								className='flex flex-col'
							>
								<div className='flex flex-row gap-8 items-center justify-center h-[72px]'>
									<p
										className='text-sm font-semibold font-[Inter] uppercase text-start'
										style={{ color: section.titleColor }}
									>
										{section.title}
									</p>
									<div className='w-full h-[1px] bg-[rgba(255,_255,_255,_0.16)]'></div>
								</div>
								<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-20 gap-y-2 mb-8'>
									{section.items.map((item, index) => (
										<FaqItem
											key={`${sectionIndex}-${index}`}
											question={item.question}
											answer={item.answer}
										/>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>

			<footer
				className='bg-[url(/assets/bg-footer.svg)] h-[500px] flex items-end px-4'
				id='contacts'
			>
				<div className='w-full max-w-[1114px] mx-auto mb-16 max-md:mb-8'>
					<p className='text-[32px]/[74px] font-semibold uppercase text-white font-[Unbounded] max-md:text-center'>
						CONTACTS
					</p>
					<div className='flex gap-[88px] max-md:gap-6 mt-[33px] max-md:mt-6 mb-[86px] max-md:mb-11 flex-wrap max-md:flex-col'>
						<div className='flex flex-col gap-4 max-md:gap-1 items-start max-md:items-center'>
							<p className='text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]'>
								Email address for additional information
							</p>
							<p className='text-white text-[26px] max-md:text-[16px] font-semibold uppercase font-[Unbounded]'>
								partner.support@slotsngo.io
							</p>
						</div>
						<div className='flex flex-col gap-4 max-md:gap-1 items-start max-md:items-center'>
							<p className='text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter]'>telegram</p>
							<p className='text-white text-[26px] max-md:text-[16px] font-semibold uppercase font-[Unbounded]'>
								@slotsngo_support
							</p>
						</div>
					</div>
					<div className='flex flex-row gap-10 max-md:flex-col-reverse max-md:items-center'>
						<p className='text-[#B6C4E7] text-sm font-semibold uppercase font-[Inter] max-md:text-center'>
							ALL RIGHTS RESERVED ©2024 — partners.slotsngo.io
						</p>
						<Link
							className='text-[#E7D6B6] text-sm font-semibold uppercase font-[Inter] max-md:text-center'
							href='/terms.html'
						>
							terms and conditions
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
