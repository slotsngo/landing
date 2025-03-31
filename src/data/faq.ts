interface FaqSection {
	title: string;
	titleColor: string;
	items: {
		question: string;
		answer: string;
		link?: string;
	}[];
}

export const faqData: FaqSection[] = [
	{
		title: 'General',
		titleColor: '#E5AF78',
		items: [
			{
				question: "How to become a Partner of the Slots'n'go Affiliate Program?",
				answer: `
				To become a partner of the Slots'n'go Affiliate Program, start by identifying your specific traffic sources, such as your website, social media groups, or advertisement networks. It's important to note that vague sources like "the internet" or "my friend" are unacceptable; clarity and specificity are essential.
				Once you've determined your traffic sources, visit the Slots'n'go Partners registration page. After registration, you must create a referral link to invite players to the casino. Remember that it's strictly prohibited for partners to register friends or family using their referral links. By following these steps, you'll be well on your way to becoming a successful partner in the Slots'n'go Affiliate Program! If you have further questions or need assistance, our support team is here to help.
				`,
			},
			{
				question: 'How to create a referral link?',
				answer: `
				Creating a referral link in the Slots'n'go Affiliate Program is straightforward. First, navigate to the "Invitation Links" section by clicking on "Affiliates" and then selecting "Invitation Links" from the navigation panel. Here, you can search for existing invitation links using the provided search field, looking for affiliates by ID, name, or even by the manager who created or modified the link.
				To generate a new invitation link, click on "Add Link." A modal window will open, prompting you to fill out several link parameters. Start by entering a name for your link in the "Link Name" field. Next, select the landing page where the link will be used in the "Landing Page" field. When it comes to the "Referral Code," it's essential to input a unique code; you can use the "Generate Random Code" feature to ensure its validity. Finally, save your new link by clicking the "Save" button. By following these steps, you'll have your referral link ready to invite players effectively! If you have any questions or need assistance, don't hesitate to contact our support team.
				`,
			},
			{
				question: 'How is Partner RevShare commission сalculated?',
				answer: `
				The Partner RevShare commission is determined by the percentage of revenue generated by players you refer to the Slots'n'go platform. For instance, if you have a revenue share agreement of 30% and your referred players incur losses of 10,000 multiplied by 30%, which equals $3,000.
				This transparent commission structure allows you to earn based on the revenue created by your referrals, making it an effective way to profit from your marketing efforts. If you have any questions about how this works or need more details, please don't hesitate to contact our support team!
				`,
			},
			{
				question: 'What kinds of commission plans are available?',
				answer: `
				We offer three commission plans to suit different preferences and strategies:
Revenue Share: With this plan, you earn a percentage of the revenue generated by your players. For example, if you have a Revenue Share deal set at 30% and your players lose $10,000 on sports bets, your commission would be calculated as follows: $10,000 * 30% = $3,000.
CPA (Cost Per Action): This plan allows you to earn a fixed amount for specific player actions outlined in the agreement, such as registrations or deposits exceeding a certain amount. For instance, if your CPA deal pays $20 for every deposit greater than $6 and your players make deposits of $10, $25, $5, $40, and $100, you would earn a total CPA commission of $80 (from the deposits of $10, $25, $40, and $100).
Hybrid: This is a combination of the Revenue Share and CPA plans. For example, if you have a Hybrid deal with a Revenue Share of 30% and a CPA of $10 for each deposit greater than $5, your earnings would vary based on player activity. So, if your players make one deposit over $5 and lose $300, you earn $100.
Choose the plan that best aligns with your goals and player engagement strategy!
				`,
			},
			{
				question: 'What are the time limits within which invited players bring revenue?',
				answer: `
				There are no time limits associated with the RevShare program. Invited players will generate monthly revenue for you as long as they remain active and continue to make deposits. However, please be aware that any fraudulent activity by partners can result in the suspension of earnings.
				`,
			},
			{
				question: `Can I trust the Slots'n'go Affiliate Program?`,
				answer: `
				Yes, you can trust the Slots'n'go Affiliate Program. We have built a solid reputation based on providing fair and transparent services. Our commitment to honesty and trustworthiness is reflected in the positive reviews we receive and our prompt payment processing. We prioritize the relationship with our partners and assure you that our services are reliable and trustworthy. Your success is important to us, and we're here to support you every step of the way.
				`,
			},
			{
				question: 'How can I get promo materials for advertisements?',
				answer: `
				You can access various promotional materials for your advertising campaigns directly from your partner account. We offer multiple resources, including static and GIF banners, native landing pages, and demo games, to help you create a successful campaign.
The quality of these materials is very high, and we continuously add new graphic and text resources to make your advertising efforts more effective. To stay updated on the latest promotional materials, be sure to follow the news section of the Bons Affiliate Program. This section will also inform you about upcoming events, promotions, significant tournaments, and other initiatives to attract new players and help you maximize your earnings. 
				`,
			},
			{
				question: `How can I become a successful webmaster with Slots'n'go?`,
				answer: `
				Being a webmaster can be challenging today, but it's also a lucrative opportunity. You must take the initiative to achieve success and maximize your earnings with the Slots'n'go Affiliate Program. Start by creating your website and focus on its ongoing development. Explore various advertising options to enhance your profitability. The Slots'n'go Affiliate Program offers unique chances to earn money by inviting gambling players, so take advantage of this potential. Remember, we're here to provide support and assistance whenever needed.
				`,
			},
			{
				question: `How can I get support at Slots'n'go?`,
				answer: `
				You can get support at Slots'n'go through two main channels: 
Visit our support page at https://slotsngo.io/support, where you'll find helpful resources and answers to common questions.
You can also email our support team at support@slotsngo.io. We offer 24/7 support to assist you with any inquiries or issues.
Don't hesitate to contact us – we're here to help!
				`,
			},
			{
				question: `Is Slots'n'go a safe site?`,
				answer: `
				Yes, Slots'n'go is a safe and secure online gaming destination. Established in 2023, we are a fully licensed platform dedicated to providing excitement and entertainment at your fingertips. With an impressive library featuring over 9,000 games and slots, we cater to various tastes and preferences. Our commitment to safety includes robust security measures to protect your personal information and ensure a fair gaming experience. Play with confidence, knowing that your gaming experience is our top priority!
				`,
			},
		],
	},
	{
		title: 'Financial',
		titleColor: '#54C85C',
		items: [
			{
				question: 'Where can I check my monthly income?',
				answer: `
You can quickly check your monthly income through our reporting system. Follow these steps:
Access the Report: Navigate to Reports in the menu. Click on the Player Commission Report.
Select the Time Period: Choose the period you want to review, such as the current month. Click on Generate report.
View Your Report: The system will generate a detailed report displaying player activity and revenue for the selected period. The table is quite wide, so scroll to the right to see the commission columns.
Report Columns Explained: RS Commission ($): Revenue share commission from all your deals. CPA Count: The number of actions players qualify for during the selected period based on conditions set by your manager. CPA Commission ($): Total commission earned from all your deals. CPA Count on Hold: Number of qualifications considered fraudulent and temporarily suspended for commissioning. Profit ($): Total income for the selected period.
You can generate reports based on individual trackers, currencies, or players for a more granular view. Before generating the report, enable grouping by the desired parameter. You can add or remove options as needed.
				`,
			},
			{
				question: "How much can I earn with the Slots'n'go Affiliate Program?",
				answer: `
Your earnings with the Slots'n'go Affiliate Program primarily depend on the number of players you refer to and the total profits those players generate for the platform you are promoting. The more active and profitable players you bring in, the higher your commission will be.
				`,
			},
			{
				question: "How can I withdraw my earnings from the Slots'n'go Affiliate Program?",
				answer: `
We strive to provide our clients with a seamless and convenient financial experience. To facilitate this, we offer various withdrawal options tailored to your needs. You can choose from the following payment methods to withdraw your earnings: 

Bank Transfer (USD and EUR)
USDT (TRC-20 and ERC-20)
Cryptocurrency (Bitcoin and Ethereum)
Additional Options

We are committed to ensuring your satisfaction, so feel free to reach out if you have any questions or require assistance with the withdrawal process. Your journey to financial success starts here!
				`,
			},
			{
				question: 'How often can I withdraw money?',
				answer: `
You can withdraw your earnings up to twice a month unless other arrangements have been made. At Slots'n'go, we pride ourselves on our flexibility and are always willing to work with our partners to accommodate individual needs. Don't hesitate to reach out if you have specific requirements or require adjustments! We're here to support you on your journey to success. 
				`,
			},
			{
				question: 'How can I apply for CPA programs?',
				answer: `
To apply for our CPA programs, simply reach out to the managers of the Slots'n'go Affiliate Program and share relevant details about your traffic sources. Our experienced team will review your information and present you with suitable CPA plans tailored to your qualifications. We look forward to collaborating with you and helping you succeed!
				`,
			},
		],
	},
	{
		title: 'Technical',
		titleColor: '#73B4FF',
		items: [
			{
				question: 'What are the leading statistical indicators?',
				answer: `
Understanding our key statistical indicators is crucial for tracking your performance. Here's a breakdown of the primary metrics you'll encounter: 
Hits: The number of clicks on your referral links. It's important to note that hits are only counted when a web page is fully loaded after the click. That hit will not be counted if a user exits the site before fully loading the page. This can lead to discrepancies, as third-party systems may report a higher click count since they include all clicks, regardless of page loads.
Visits: The number of unique visitors or users to the site.
Regs: The total number of player registrations.
Gamers: The number of active players on a given day.
Rounds: The total number of spins or rotations played.
Deposits: The total amount of player deposits in US dollars.
Withdraws: The total amount of money withdrawn by players from the project.
Qualified Players: Relevant only for CPA programs; this indicates the number of players who have qualified by meeting the specific conditions for CPA eligibility.
Net Gaming: The casino's net income, excluding commissions and promotional expenses.
Betting: This column pertains to the sports betting section of the project, displaying net gaming specific to betting activities.
Casino Promo: Bonuses or promotions that players receive within the project.
NGR (Net Gaming Revenue): Represents the project's overall income.
Partner Income: Your earnings as an affiliate.

By keeping track of these indicators, you can gain valuable insights into your performance and optimize your strategies accordingly. If you have any questions or need further clarification on any of these metrics, feel free to reach out!
				`,
			},
			{
				question: 'How can I use promotional materials?',
				answer: `
The Slots'n'go Affiliate Program is dedicated to continuously enhancing our promotional materials to empower our partners and maximize their traffic efficiency. Currently, you can access a variety of resources, including:

Landing Pages: Tailored pages designed to convert visitors.
Banners: Eye-catching banners suitable for your website.
Text and Reviews: Custom-written content available for website owners.
Demo Games: Interactive demo games that you can integrate into the 'Slots' section of your site.

You can locate these promotional materials in the "Create Tracking Link" section. Additionally, if our existing catalog doesn't meet your needs, we are happy to provide unique advertising materials tailored specifically for your audience. 
				`,
			},
			{
				question: 'How can I send traffic to a specific page?',
				answer: `
You can create a referral link that directs traffic to nearly any page within the project. By utilizing demo games, special sections, or engaging descriptions, you can increase your traffic's conversion rates. 

To create a link to a demo game, simply copy its name and insert it into your referral link. This straightforward method allows you to target specific pages and enhance your promotional efforts effectively. If you need further assistance, feel free to reach out!
				`,
			},
			{
				question: 'What is a Postback?',
				answer: `
A postback (also known as a pingback or cookie-less tracking) is a specialized mechanism used to transmit conversion data for comprehensive analytics. This allows for accurate tracking of user actions without relying on cookies, facilitating more effective performance analysis and reporting.
				`,
			},
			{
				question: 'How long do you store cookies?',
				answer: `
We store cookies for a period of 30 days. This duration allows us to effectively track user activity while ensuring compliance with standard privacy practices.
				`,
			},
		],
	},
];
