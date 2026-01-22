import React, { useState } from 'react';
import Marquee from '../components/Marquee';

const offerings = [
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service2.jpeg',
		title: 'Strategic Tourism Planning',
		description: 'We help design tourism strategies and roadmaps that align stakeholder goals with market opportunities, focusing on long-term sustainability, resilience and visitor experience excellence.'
	},
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service6.jpeg',
		title: 'Destination Management & Activation',
		description: 'Our destination management frameworks strengthen the performance of regions by integrating branding, product development, stakeholder engagement and infrastructure planning.'
	},
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.1 0-2 .9-2 2v4a2 2 0 002 2c1.1 0 2-.9 2-2v-4a2 2 0 00-2-2zm0 0V6m0 8v2m6-6a6 6 0 11-12 0 6 6 0 0112 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service3.jpeg',
		title: 'Market Research & Insights',
		description: 'Robust data analysis and targeted research inform demand forecasting, market segmentation, competitor benchmarking and product positioning.'
	},
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service4.jpeg',
		title: 'Business Case Development & Feasibility Studies',
		description: 'We prepare compelling, evidence-backed business cases and feasibility reports for new tourism products, experiences, events and infrastructure investments.'
	},
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service5.jpeg',
		title: 'Governance, Policy & Compliance Support',
		description: 'We assist organisations in building governance structures, compliance frameworks and operational processes that support sustainable growth and risk management.'
	},
	{
		icon: (
			<svg className="w-10 h-10 text-[#2d4a3e] mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 3v4M8 3v4M3 9h18" strokeLinecap="round" strokeLinejoin="round"/></svg>
		),
		img: '/images/service1.jpeg',
		title: 'Capacity Building & Training',
		description: 'Workshops and tailored training strengthen local capabilities in areas such as digital marketing, sustainability practices, stakeholder engagement and visitor servicing.'
	},
];


const HomePage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [openFaq, setOpenFaq] = useState(0);

	const faqs = [
		{
			question: 'What services do you provide?',
			answer: 'We offer strategic tourism planning, destination management, market research, feasibility studies, governance support, and capacity-building workshops tailored for the Australian tourism industry.',
		},
		{
			question: 'Who can benefit from your services?',
			answer: 'Our clients include government agencies, regional tourism organisations, tourism operators, investors, Indigenous enterprises, and community-led tourism initiatives.',
		},
		{
			question: 'How do you develop your strategies?',
			answer: 'We follow a structured approach: diagnostic research, stakeholder engagement, strategic framework development, implementation guidance, and continuous review for improvement.',
		},
		{
			question: 'Do you focus on sustainability?',
			answer: 'Yes, sustainability is a core focus of our work. We integrate sustainable practices and principles into all aspects of tourism planning and development to ensure long-term positive impacts on communities and the environment.',
		},
		{
			question: 'How can we get started with your consulting?',
			answer: 'You can contact us directly via email or phone to schedule a consultation, after which we’ll assess your needs and propose a tailored advisory plan.',
		},
	];

	return (
		<div className="min-h-screen bg-white font-sans selection:bg-emerald-100">
			{/* ================= NAVBAR ================= */}
			<nav className="bg-white border-b border-gray-50 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
								<span className="text-2xl">🌱</span>
							</div>
							<div>
								<h1 className="text-[#2d4a3e] font-serif text-xl leading-none">
									NT <span className="italic font-light">Australian</span> Tourism
								</h1>
								<p className="text-[#2d4a3e]/60 text-[8px] uppercase tracking-[0.4em] mt-1">
									Consultants
								</p>
							</div>
						</div>

						<div className="hidden md:flex items-center gap-8">
							<a
								href="#Home"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								HOME
							</a>
							<a
								href="#about"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								About
							</a>
							<a
								href="#services"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Services
							</a>
							<a
								href="#reviews"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Reviews
							</a>
							<a href="#contact">
								<button className="bg-[#8fa49b] hover:bg-[#7d9289] text-white px-6 py-2.5 text-[10px] uppercase tracking-widest">
									Contact Us
								</button>
							</a>
						</div>

						<button
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							☰
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<div className="md:hidden bg-white border-t p-4 space-y-3">
						<a
								href="#Home"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								HOME
							</a>
							<a
								href="#about"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								About
							</a>
							<a
								href="#blog"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Services
							</a>
							<a
								href="#contact"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Reviews
							</a>
							<a
								href="#contact"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Contact
							</a>
					</div>
				)}
			</nav>

			{/* ================= HERO ================= */}
			<section
			id='Home'
			 className="relative bg-[#f4f5f2] overflow-hidden min-h-[560px]">
				{/* Background image — with padding */}
				<div className="absolute inset-y-0 left-0 w-[460px] z-0 pl-8 md:pl-12">
					<img
						src="/images/hero.png"
						alt="Background"
						className="w-full h-full object-cover opacity-25"
					/>
				</div>

				{/* Content container */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
					<div className="grid md:grid-cols-2 items-center min-h-[560px]">
						{/* LEFT : Foreground image */}
						<div className="relative hidden md:block h-full">
							{/* HALF sticking out */}
							<div className="absolute top-1/2 left-[100px] -translate-y-1/2 w-[420px] ">
								<div className="relative bg-white p-2 shadow-2xl">
									<img
										src="/images/one.jpeg"
										alt="Tea moment"
										className="w-full h-[240px] object-cover"
									/>
									<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
								</div>
							</div>
						</div>

						{/* RIGHT : Text */}
						<div className="py-20 md:py-24 text-center md:text-left md:pl-8 relative flex flex-col md:items-start items-center justify-center h-full">
							<span 
								className="font-script text-4xl text-[#2d4a3e]/70 mb-2 md:text-6xl md:mb-0"
								style={{
								  position: 'absolute',
								  top: '32%',
								  left: '-10%',
								  transform: 'translateY(-50%) rotate(-13deg)',
								  zIndex: 10,
								  whiteSpace: 'nowrap',
								  pointerEvents: 'none',
								}}
							>
								welcome
							</span>
							<h1 className="text-3xl md:text-[34px] font-serif text-[#2d4a3e] leading-snug mb-6 uppercase tracking-wide z-10">
								NT Australian Tourism Management Consultants
							</h1>
							<a href="#services" >
							<button className="bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em] z-10">
								Explore Our Services
							</button>
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ================= ABOUT ================= */}
			<section
				id="about"
				className="relative py-20 px-4 bg-gradient-to-b from-[#2d4a3e] via-[#3d7958] to-[#4c9970]"
			>
				<div className="max-w-3xl mx-auto text-center text-white">
						<h2 className="font-script text-5xl text-white mb-4">
							About Us
						</h2>
					<h2 className="text-2xl md:text-3xl font-serif mb-8 uppercase tracking-widest">
						Local Insight, Strategic Expertise
					</h2>

					<div className="space-y-6 text-sm leading-relaxed mb-10">
						<p>
							At NT Australian Tourism Management Consultants, we are specialists in tourism strategy, 
							destination development and visitor economy management with deep knowledge of the Northern Territory 
							and broader Australian market. Our mission is to assist governments, regional organisations, 
							tourism businesses and stakeholders to turn opportunities into actionable, measurable outcomes.
						</p>

						<p>
							We understand the complexity of the tourism industry from planning and product development to governance, marketing and sustainability. With a collaborative, 
							evidence-based approach, we deliver solutions that address your unique goals, challenges and community aspirations.
						</p>
					</div>
<a href='#services'>
					<button className="border-2 border-white px-10 py-3 text-xs uppercase tracking-widest">
						Explore Our Services
					</button>
					</a>
				</div>
			</section>

			{/* ================= OTHER OFFERINGS ================= */}
			<section
			id='services'
			 className="bg-[#3d7958] py-20">
				<div className="text-center mb-12">
					<h2 className="font-script text-5xl text-white mb-4">
							Services We Offer
						</h2>
				</div>
				<Marquee speed={15}>
					{offerings.map((offering, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-80 mx-4 bg-white/10 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden flex flex-col items-center p-8 relative"
						>
							{/* Wavy profile image in the top left corner */}
							<div className="absolute left-4 top-4 z-10" style={{ width: 72, height: 72 }}>
								<svg width="72" height="72" viewBox="0 0 100 100" className="drop-shadow-xl">
									<defs>
										<clipPath id={`wavyClip-offering-${index}`}>
											<path d="M50,2 C55,2 60,8 65,8 C70,8 75,2 80,5 C85,8 85,15 88,20 C91,25 98,28 98,35 C98,42 92,45 92,50 C92,55 98,58 98,65 C98,72 91,75 88,80 C85,85 85,92 80,95 C75,98 70,92 65,92 C60,92 55,98 50,98 C45,98 40,92 35,92 C30,92 25,98 20,95 C15,92 15,85 12,80 C9,75 2,72 2,65 C2,58 8,55 8,50 C8,45 2,42 2,35 C2,28 9,25 12,20 C15,15 15,8 20,5 C25,2 30,8 35,8 C40,8 45,2 50,2 Z" />
										</clipPath>
									</defs>
									{/* Outer wavy border */}
									<path
										d="M50,2 C55,2 60,8 65,8 C70,8 75,2 80,5 C85,8 85,15 88,20 C91,25 98,28 98,35 C98,42 92,45 92,50 C92,55 98,58 98,65 C98,72 91,75 88,80 C85,85 85,92 80,95 C75,98 70,92 65,92 C60,92 55,98 50,98 C45,98 40,92 35,92 C30,92 25,98 20,95 C15,92 15,85 12,80 C9,75 2,72 2,65 C2,58 8,55 8,50 C8,45 2,42 2,35 C2,28 9,25 12,20 C15,15 15,8 20,5 C25,2 30,8 35,8 C40,8 45,2 50,2 Z"
										fill="#c7eedd"
									/>
									{/* Inner image (replace src as needed) */}
									<image
										href={offering.img}
										x="8" y="8" width="84" height="84"
										clipPath={`url(#wavyClip-offering-${index})`}
										preserveAspectRatio="xMidYMid slice"
										style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}
									/>
								</svg>
							</div>
							{/* Card content with gap from image */}
							<div className="flex flex-col items-center" style={{ marginTop: 56 }}>
								<h3 className="text-xl font-serif text-white mb-2 text-center">{offering.title}</h3>
								<p className="text-white/80 text-sm text-center">{offering.description}</p>
							</div>
						</div>
					))}
				</Marquee>
			</section>

			{/* ================= INTRODUCTION ================= */}
			<section className="bg-white py-24 px-4 relative overflow-hidden">
				{/* Decorative background */}
				{/* <div className="absolute top-0 left-0 w-1/4 h-full z-0">
					<img
						src="/images/chantal-bg.jpg"
						alt=""
						className="w-full h-full object-cover opacity-20"
					/>
				</div> */}

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
					{/* Image */}
					<div className="relative w-full mx-auto">
						<div className="relative bg-white p-2 shadow-2xl">
							<img
								src="/images/partner.jpeg"
								alt="Chantal"
								className="w-full h-[460px] object-cover"
							/>
							<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
						</div>
					</div>

					{/* Text */}
					<div className="text-center md:text-left">
						<h2 className="font-script text-5xl text-[#2d4a3e]/70 mb-4">
							Why Partner With Us
						</h2>
						{/* <p className="text-xs text-[#2d4a3e] uppercase tracking-widest mb-6">
							I'm a Psychotherapist in Ottawa, Ontario
						</p> */}
						<div className="text-sm text-gray-600 space-y-4 leading-relaxed">
							<p>
								We bring a deep understanding of the Australian tourism landscape, supported by strategic insight, analytical capability and practical advisory experience. Our approach is evidence-based and outcomes-focused, ensuring that every recommendation is grounded in data, market realities and stakeholder needs.
							</p>
							<p>
								We work collaboratively with clients to deliver tailored solutions rather than generic frameworks. By combining local knowledge, transparent processes and a strong commitment to sustainable and responsible tourism, we help organisations build resilience, strengthen performance and achieve long-term value.
							</p>
						</div>
						<a href="#approach">	
						<button className="mt-8 bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
							More About Our Approach
						</button>
						</a>
					</div>
				</div>
			</section>

			{/* ================= PSYCHOTHERAPY ================= */}
			<section className="bg-white pb-24 px-4 relative overflow-hidden">
				{/* Decorative background */}
				{/* <div className="absolute top-0 right-0 w-1/4 h-full z-0">
					<img
						src="/images/psychotherapy-bg.jpg"
						alt=""
						className="w-full h-full object-cover opacity-20"
					/>
				</div> */}

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
					{/* Text */}
					<div className="text-center md:text-left">
						<h2 className="font-script text-5xl text-[#2d4a3e]/70 mb-4">
							Industry Insight & Thought Leadership
						</h2>
						<div className="text-sm text-gray-600 space-y-4 leading-relaxed">
							<p>
								We actively monitor trends, policy changes and emerging challenges shaping Australia’s visitor economy. By combining industry research with practical consulting experience, we provide clients with forward-looking insights that support informed decision-making and strategic positioning.
							</p>
							<p>
								Our advisory work reflects an understanding of evolving visitor expectations, digital transformation and sustainability requirements. This ensures our clients remain competitive, adaptable and aligned with best practice across the tourism sector.
							</p>
						</div>
						<a href="#contact">	
						<button className="mt-8 bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
							Contact Us
						</button>
						</a>
					</div>

					{/* Image */}
					<div className="relative w-full mx-auto">
						<div className="relative bg-white p-2 shadow-2xl">
							<img
								src="/images/partner2.jpeg"
								alt="Psychotherapy"
								className="w-full h-[300px] object-cover"
							/>
							<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
						</div>
					</div>
				</div>
			</section>
			{/* ================= VIDEO SHOWCASE ================= */}
			<section 
			id='approach'
			className="bg-[#4c9970] py-24 px-4 relative overflow-hidden">
				<div className="max-w-7xl mx-auto">
					{/* Heading */}
					<div className="text-center mb-16 relative">
						<h2 className="font-script text-5xl text-white mb-4">
							Our Approach
						</h2>
						{/* <p className="text-sm text-gray-700 max-w-2xl mx-auto leading-relaxed">
							Structured. Transparent. Effective.
						</p> */}

						
					</div>

					{/* Cards Container - Phone-style vertical cards */}
					<div className="relative flex items-end justify-center gap-8 flex-wrap px-4 min-h-[400px] max-w-full">
						{[
							{
								img: '/images/approach1.jpeg',
								title: 'Discovery & Diagnostic',
								desc: 'We analyse your organisational context, data and objectives to understand key challenges and opportunities.',
								rotation: '-rotate-6',
								offset: 'mb-12',
							},
							{
								img: '/images/approach2.jpeg',
								title: 'Strategic Framework Development',
								desc: 'We develop tailored strategies that align market demand, policy settings and operational capability. ',
								rotation: 'rotate-3',
								offset: 'mb-4',
							},
							{
								img: '/images/approach3.jpeg',
								title: 'Implementation Support',
								desc: 'We guide the execution of strategies by defining priorities, partnerships and performance measures. ',
								rotation: '-rotate-2',
								offset: 'mb-20',
							},
							{
								img: '/images/approach4.jpeg',
								title: 'Review & Adaptation',
								desc: 'We monitor outcomes and assess performance to ensure strategies remain relevant and effective. ',
								rotation: 'rotate-4',
								offset: 'mb-8',
							},
							{
								img: '/images/approach5.jpeg',
								title: 'Stakeholder Engagement',
								desc: 'We work closely with government, industry and community stakeholders to ensure shared understanding ',
								rotation: '-rotate-3',
								offset: 'mb-16',
							},
							
						].map((card, idx) => (
							<div
								key={idx}
								className={`flex flex-col items-center transform ${card.rotation} ${card.offset} transition-all hover:scale-105 hover:rotate-0 cursor-pointer relative`}
							>
								<div className="bg-[#2d4a3e] rounded-3xl shadow-2xl overflow-hidden w-56 h-80 border-4 border-white flex flex-col">
									<img
										src={card.img}
										alt={card.title}
										className="w-full h-2/4 object-cover"
									/>
									<div className="p-4 flex-1 flex flex-col justify-center items-center text-center gap-2">
										<p className="text-sm text-white leading-relaxed">
											{card.desc}
										</p>
									</div>
								</div>
								{/* Arrow and title outside the card */}
								<div className="mt-4 flex flex-col items-center">
									<svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-white rotate-12">
										<path d="M10 5 Q 40 30, 35 55" stroke="currentColor" strokeWidth="1.5" fill="none"/>
										<path d="M32 50 L 35 55 L 40 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
									</svg>
									<span className="block text-base text-white font-handwriting mt-2 text-center w-40">
										{card.title}
									</span>
								</div>
							</div>
						))}
					</div>


					{/* CTA Button */}
					<div className="text-center mt-16 relative">
						<a href="#services">	
						<button className="mt-8 bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
							Explore Our Services
						</button>
						</a>

						{/* Arrow pointing to button */}
						{/* <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 rotate-12">
							<svg width="80" height="60" viewBox="0 0 80 60" fill="none" className="text-[#2d4a3e]">
								<path d="M10 5 Q 40 30, 35 55" stroke="currentColor" strokeWidth="1.5" fill="none"/>
								<path d="M32 50 L 35 55 L 40 52" stroke="currentColor" strokeWidth="1.5" fill="none"/>
							</svg>
							<span className="block text-xs text-[#2d4a3e] font-handwriting mt-1 -ml-4">
								it's free
							</span>
						</div> */}
					</div>
				</div>
			</section>

			{/* ================= REVIEWS ================= */}
			<section
			id='reviews'
				className="py-24 px-4 bg-cover bg-center bg-no-repeat relative min-h-[800px]"
				style={{ backgroundImage: "url('/images/review.png')" }}
			>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h2 className="text-5xl font-serif text-white mb-2 tracking-widest">REVIEWS</h2>
					<p className="text-2xl font-script text-white/80 mb-16">From our clients</p>

					<div className="space-y-2 relative">
						{[
							{
								name: 'Claudia Alves',
								image: '/images/face1.jpeg',
								rating: 5,
								review: 'Thank you for the fast delivery and quality product!',
								align: 'right',
							},
							{
								name: 'Olivia Wilson',
								image: '/images/face2.jpeg',
								rating: 5,
								review: 'It is very pleasant to use the means of your brand.',
								align: 'left',
							},
							{
								name: 'Juliana Silva',
								image: '/images/face1.jpeg',
								rating: 5,
								review: 'Thank you very much! I really liked everything!',
								align: 'right',
							},
							{
								name: 'Emily White',
								image: '/images/face4.jpeg',
								rating: 5,
								review: 'A wonderful experience from start to finish. Highly recommended!',
								align: 'left',
							},
							{
								name: 'Sarah Brown',
								image: '/images/face2.jpeg',
								rating: 5,
								review: 'The best service I have ever received. Will be returning!',
								align: 'right',
							},
						].map((item, index) => (
							<div
								key={index}
								className={`flex ${item.align === 'right' ? 'justify-end' : 'justify-start'}`}
							>
								<div className={`relative ${item.align === 'right' ? 'mr-8' : 'ml-8'}`}>
									{/* Profile image with wavy scalloped circle shape - positioned at top */}
									<div className="absolute -top-8 -left-16 z-10">
										<svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-xl">
											<defs>
												<clipPath id={`wavyClip-${index}`}>
													<path d="M50,2 C55,2 60,8 65,8 C70,8 75,2 80,5 C85,8 85,15 88,20 C91,25 98,28 98,35 C98,42 92,45 92,50 C92,55 98,58 98,65 C98,72 91,75 88,80 C85,85 85,92 80,95 C75,98 70,92 65,92 C60,92 55,98 50,98 C45,98 40,92 35,92 C30,92 25,98 20,95 C15,92 15,85 12,80 C9,75 2,72 2,65 C2,58 8,55 8,50 C8,45 2,42 2,35 C2,28 9,25 12,20 C15,15 15,8 20,5 C25,2 30,8 35,8 C40,8 45,2 50,2 Z" />
												</clipPath>
											</defs>
											{/* Outer wavy border */}
											<path
												d="M50,2 C55,2 60,8 65,8 C70,8 75,2 80,5 C85,8 85,15 88,20 C91,25 98,28 98,35 C98,42 92,45 92,50 C92,55 98,58 98,65 C98,72 91,75 88,80 C85,85 85,92 80,95 C75,98 70,92 65,92 C60,92 55,98 50,98 C45,98 40,92 35,92 C30,92 25,98 20,95 C15,92 15,85 12,80 C9,75 2,72 2,65 C2,58 8,55 8,50 C8,45 2,42 2,35 C2,28 9,25 12,20 C15,15 15,8 20,5 C25,2 30,8 35,8 C40,8 45,2 50,2 Z"
												fill="#c7eedd"
											/>
											{/* Inner image */}
											<image
												href={item.image}
												x="5"
												y="5"
												width="90"
												height="90"
												clipPath={`url(#wavyClip-${index})`}
												preserveAspectRatio="xMidYMid slice"
												style={{ transform: 'scale(0.9)', transformOrigin: 'center' }}
											/>
										</svg>
									</div>

									{/* Card content */}
									<div className="bg-[#4c9970] backdrop-blur-sm rounded-2xl py-6 pl-16 pr-8 text-left w-[320px] min-h-[120px]">
										<h3 className="text-lg font-semibold text-[#c7eedd]">{item.name}</h3>
										<div className="flex my-2">
											{[...Array(5)].map((_, i) => (
												<svg
													key={i}
													className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-500'}`}
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
												</svg>
											))}
										</div>
										<p className="text-white/80 text-sm leading-relaxed">{item.review}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ================= FAQ & CONTACT ================= */}
			<section
			id='contact'
			 className="bg-[#3d7958] py-24 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-16">
						{/* Left Side - Promo & Contact */}
						<div className="space-y-8">
							{/* Combined Promo & Contact Card */}
							<div className="bg-[#2d4a3e] rounded-2xl overflow-hidden">
								{/* Image Section */}
								<div className="relative h-64">
									<img
										src="/images/contact.png"
										alt="Our team"
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#2d4a3e] to-transparent"></div>
									<div className="absolute bottom-6 left-6 right-6">
										<h3 className="text-3xl font-serif text-white leading-tight">
											We're Your<br />Moving<br />Solution.
										</h3>
									</div>
								</div>

								{/* Content Section */}
								<div className="p-8 text-white">


									{/* Contact Details */}
									<div className="border-t border-white/20 pt-6">
										<h4 className="text-xl font-serif mb-4">Contact Us</h4>
										<ul className="space-y-3 text-sm text-white/80">
											<li className="flex items-center gap-3">
												<svg className="w-5 h-5 flex-shrink-0 text-[#4c9970]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
												<span>123 Wellness Street, Ottawa, Ontario</span>
											</li>
											<li className="flex items-center gap-3">
												<svg className="w-5 h-5 flex-shrink-0 text-[#4c9970]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
												</svg>
												<span>+1 (613) 555-0123</span>
											</li>
											<li className="flex items-center gap-3">
												<svg className="w-5 h-5 flex-shrink-0 text-[#4c9970]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
												</svg>
												<span>hello@cupoftea.com</span>
											</li>
										</ul>
										<div className="text-center mt-6">
											<a href="#services">
											<button className="border-2 border-white px-10 py-3 text-xs uppercase tracking-widest">
												Explore Our Services
											</button>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Side - FAQ */}
						<div>
							<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
								<span className='font-script text-5xl text-white mb-4'>F.A.Q</span>
							</div>
							{/* <h2 className="text-4xl font-serif text-[#2d4a3e] mb-8">
								Frequently Asked Questions
							</h2> */}

							<div className="space-y-4">
								{faqs.map((faq, index) => (
									<div
										key={index}
										className="bg-white rounded-xl shadow-sm overflow-hidden"
									>
										<button
											onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
											className="w-full px-6 py-5 flex items-center justify-between text-left"
										>
											<span className={`font-medium ${openFaq === index ? 'text-[#4c9970]' : 'text-[#2d4a3e]'}`}>
												{faq.question}
											</span>
											<div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === index ? 'bg-[#4c9970]' : 'bg-gray-100'}`}>
												<svg
													className={`w-4 h-4 transition-transform ${openFaq === index ? 'rotate-180 text-white' : 'text-gray-600'}`}
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
												</svg>
											</div>
										</button>
										{openFaq === index && (
											<div className="px-6 pb-5">
												<p className="text-gray-600 text-sm leading-relaxed">
													{faq.answer}
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= FOOTER ================= */}
			<footer className="bg-[#2d4a3e] text-white">
				{/* Main Footer */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid md:grid-cols-4 gap-12">
						{/* Brand */}
						<div className="md:col-span-1">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
									<span className="text-2xl">🌱</span>
								</div>
								<div>
									<h3 className="font-serif text-xl leading-none">
										NT <span className="italic font-light">Australian</span> Tourism
									</h3>
									<p className="text-white/60 text-[8px] uppercase tracking-[0.4em] mt-1">
										Consultants
									</p>
								</div>
							</div>
							<p className="text-white/70 text-sm leading-relaxed">
								Coordinate regional tourism development.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="text-sm uppercase tracking-widest mb-6">Quick Links</h4>
							<ul className="space-y-3">
								<li><a href="#about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</a></li>
								<li><a href="#services" className="text-white/70 hover:text-white text-sm transition-colors">Services</a></li>
								<li><a href="#reviews" className="text-white/70 hover:text-white text-sm transition-colors">Reviews</a></li>
								<li><a href="#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</a></li>
							</ul>
						</div>

						{/* Services */}
						<div>
							<h4 className="text-sm uppercase tracking-widest mb-6">Services</h4>
							<ul className="space-y-3">
								<li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Tourism Strategy & Planning</a></li>
								<li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Destination Management</a></li>
								<li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Market Research & Insights</a></li>
								<li><a href="#" className="text-white/70 hover:text-white text-sm transition-colors">Training & Capacity Building</a></li>
								
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h4 className="text-sm uppercase tracking-widest mb-6">Contact Us</h4>
							<ul className="space-y-3 text-sm text-white/70">
								<li className="flex items-start gap-3">
									<svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span>123 Wellness Street<br />Australia</span>
								</li>
								<li className="flex items-center gap-3">
									<svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
									<span>hello@cupoftea.com</span>
								</li>
								<li className="flex items-center gap-3">
									<svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
									</svg>
									<span>+1 (613) 555-0123</span>
								</li>
							</ul>

							{/* Social Icons */}
							<div className="flex gap-4 mt-6">
								<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
								</a>
								<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
								</a>
								<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
								</a>
								<a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<p className="text-white/50 text-sm">
								© 2026 Cup of Tea Psychotherapy. All rights reserved.
							</p>
							<div className="flex gap-6">
								<a href="#privacy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
								<a href="#terms" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
							</div>
						</div>
					</div>
				</div>
			</footer>


		</div>
	);
}

export default HomePage;
