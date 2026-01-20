import React, { useState } from 'react';
import Marquee from '../components/Marquee';

const offerings = [
	{
		title: 'Service One',
		description: 'A brief description of the first service offered.',
		image: '/images/offering-1.jpg',
	},
	{
		title: 'Service Two',
		description: 'A brief description of the second service offered.',
		image: '/images/offering-2.jpg',
	},
	{
		title: 'Service Three',
		description: 'A brief description of the third service offered.',
		image: '/images/offering-3.jpg',
	},
	{
		title: 'Service Four',
		description: 'A brief description of the fourth service offered.',
		image: '/images/offering-4.jpg',
	},
	{
		title: 'Service Five',
		description: 'A brief description of the fifth service offered.',
		image: '/images/offering-5.jpg',
	},
	{
		title: 'Service Six',
		description: 'A brief description of the sixth service offered.',
		image: '/images/offering-6.jpg',
	},
	{
		title: 'Service Seven',
		description: 'A brief description of the seventh service offered.',
		image: '/images/offering-7.jpg',
	},
	{
		title: 'Service Eight',
		description: 'A brief description of the eighth service offered.',
		image: '/images/offering-8.jpg',
	},
];

const HomePage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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
									CUP <span className="italic font-light">of</span> TEA
								</h1>
								<p className="text-[#2d4a3e]/60 text-[8px] uppercase tracking-[0.4em] mt-1">
									Psychotherapy
								</p>
							</div>
						</div>

						<div className="hidden md:flex items-center gap-8">
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
								Blog
							</a>
							<a
								href="#contact"
								className="text-[#2d4a3e] text-[10px] uppercase tracking-widest"
							>
								Contact
							</a>
							<button className="bg-[#8fa49b] hover:bg-[#7d9289] text-white px-6 py-2.5 text-[10px] uppercase tracking-widest">
								Book Session
							</button>
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
							href="#about"
							className="block text-xs uppercase"
						>
							About
						</a>
						<a
							href="#blog"
							className="block text-xs uppercase"
						>
							Blog
						</a>
						<a
							href="#contact"
							className="block text-xs uppercase"
						>
							Contact
						</a>
					</div>
				)}
			</nav>

			{/* ================= HERO ================= */}
			<section className="relative bg-[#f4f5f2] overflow-hidden min-h-[560px]">
				{/* Background image — FLUSH LEFT */}
				<div className="absolute inset-y-0 left-0 w-[460px] z-0">
					<img
						src="/images/hero.png"
						alt="Background"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Content container */}
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
					<div className="grid md:grid-cols-2 items-center min-h-[560px]">
						{/* LEFT : Foreground image */}
						<div className="relative hidden md:block h-full">
							{/* HALF sticking out */}
							<div className="absolute top-1/2 left-[100px] -translate-y-1/2 w-[380px]">
								<div className="relative bg-white p-2 shadow-2xl">
									<img
										src="/images/hero-bg.png"
										alt="Tea moment"
										className="w-full h-[240px] object-cover"
									/>
									<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
								</div>
							</div>
						</div>

						{/* RIGHT : Text */}
						<div className="py-20 md:py-24 text-center md:text-left md:pl-8">
							<span className="block font-script text-4xl text-[#2d4a3e]/70 mb-2">
								welcome
							</span>

							<h1 className="text-3xl md:text-[34px] font-serif text-[#2d4a3e] leading-snug mb-6 uppercase tracking-wide">
								Nourish your mind, body, and soul with a cup of tea.
							</h1>

							<button className="bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
								Book Your Therapy Session
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ================= ABOUT ================= */}
			<section
				id="about"
				className="relative py-20 px-4 bg-gradient-to-b from-[#3a5d4a] via-[#5e8574] to-[#8fa49b]"
			>
				<div className="max-w-3xl mx-auto text-center text-white">
					<h2 className="text-2xl md:text-3xl font-serif mb-8 uppercase tracking-widest">
						Are you feeling overwhelmed, stressed & anxious?
					</h2>

					<div className="space-y-6 text-sm leading-relaxed mb-10">
						<p>
							Are you stuck in patterns that you just can't shift? Trying to improve
							your
							relationships? Do you feel held back in life like you are carrying a
							heavy
							backpack of old wounds & trauma?
						</p>

						<p>
							Therapy could help you finally make real progress by gaining insight &
							improving coping skills. Developing a kind & compassionate mind makes
							it easier
							to make decisions that improve your wellbeing.
						</p>
					</div>

					<button className="border-2 border-white px-10 py-3 text-xs uppercase tracking-widest">
						Explore Our Services
					</button>
				</div>
			</section>

			{/* ================= OTHER OFFERINGS ================= */}
			<section className="bg-[#8fa49b] py-20">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-serif text-white uppercase tracking-widest">
						Other Offerings
					</h2>
				</div>
				<Marquee speed={40}>
					{offerings.map((offering, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-80 mx-4 bg-white/10 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden"
						>
							<img
								src={offering.image}
								alt={offering.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-serif text-white mb-2">
									{offering.title}
								</h3>
								<p className="text-white/80 text-sm">
									{offering.description}
								</p>
							</div>
						</div>
					))}
				</Marquee>
			</section>

			{/* ================= INTRODUCTION ================= */}
			<section className="bg-white py-24 px-4 relative overflow-hidden">
				{/* Decorative background */}
				<div className="absolute top-0 left-0 w-1/4 h-full z-0">
					<img
						src="/images/chantal-bg.jpg"
						alt=""
						className="w-full h-full object-cover opacity-20"
					/>
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
					{/* Image */}
					<div className="relative w-[380px] mx-auto">
						<div className="relative bg-white p-2 shadow-2xl">
							<img
								src="/images/chantal.jpg"
								alt="Chantal"
								className="w-full h-[460px] object-cover"
							/>
							<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
						</div>
					</div>

					{/* Text */}
					<div className="text-center md:text-left">
						<h2 className="font-script text-5xl text-[#2d4a3e]/70 mb-4">
							Hi! I'm Chantal
						</h2>
						<p className="text-xs text-[#2d4a3e] uppercase tracking-widest mb-6">
							I'm a Psychotherapist in Ottawa, Ontario
						</p>
						<div className="text-sm text-gray-600 space-y-4 leading-relaxed">
							<p>
								I use a holistic approach to help clients of various age, culture, and
								spirituality/religion overcome anxiety, depression, personality
								disorders,
								interpersonal issues, burnout, and work-related stress.
							</p>
							<p>
								If you've been thinking about starting therapy but that first step feels
								too
								scary... I get it! Let's start with a free 15-mins consultation to see
								if
								we are a good fit, no strings attached.
							</p>
						</div>
						<button className="mt-8 bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
							More About My Approach
						</button>
					</div>
				</div>
			</section>

			{/* ================= PSYCHOTHERAPY ================= */}
			<section className="bg-white pb-24 px-4 relative overflow-hidden">
				{/* Decorative background */}
				<div className="absolute top-0 right-0 w-1/4 h-full z-0">
					<img
						src="/images/psychotherapy-bg.jpg"
						alt=""
						className="w-full h-full object-cover opacity-20"
					/>
				</div>

				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
					{/* Text */}
					<div className="text-center md:text-left">
						<h2 className="text-3xl font-serif text-[#2d4a3e] uppercase tracking-wider mb-6">
							Individual Psychotherapy
						</h2>
						<div className="text-sm text-gray-600 space-y-4 leading-relaxed">
							<p>
								Therapy is a collaborative process between you and I. It’s a warm and
								compassionate space in which you can receive support and guidance as you
								move through life’s journey.
							</p>
							<p>
								Through effective communication and evidence-based techniques, therapy
								aims
								to promote personal growth, improve mental well-being, and enhance
								overall
								quality of life.
							</p>
						</div>
						<button className="mt-8 bg-[#8fa49b] hover:bg-[#7d9289] transition-colors text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em]">
							Learn More
						</button>
					</div>

					{/* Image */}
					<div className="relative w-[380px] mx-auto">
						<div className="relative bg-white p-2 shadow-2xl">
							<img
								src="/images/psychotherapy.jpg"
								alt="Psychotherapy"
								className="w-full h-[300px] object-cover"
							/>
							<div className="absolute -bottom-2 -right-2 w-full h-full border border-gray-300"></div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= OUR APPROACHES ================= */}
			<section className="bg-gradient-to-b from-[#3a5d4a] via-[#5e8574] to-[#8fa49b] py-24 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl font-serif text-white text-center uppercase tracking-wider mb-20">
						Our Approaches
					</h2>
					<div className="flex flex-wrap justify-center items-center gap-4">
						{/* Top row */}
						<div className="flex justify-center gap-4 w-full">
							<div className="hexagon-card bg-emerald-50/80">
								<h3 className="text-xl font-serif text-[#2d4a3e] mb-3">
									Mindfulness-Based
								</h3>
								<p className="text-sm text-[#2d4a3e]/80 px-4">
									Cultivating present-moment awareness to foster calm and clarity.
								</p>
							</div>
							<div className="hexagon-card bg-emerald-50/80 mt-16">
								<h3 className="text-xl font-serif text-[#2d4a3e] mb-3">
									Somatic Experiencing
								</h3>
								<p className="text-sm text-[#2d4a3e]/80 px-4">
									Healing trauma by focusing on the body's felt sense.
								</p>
							</div>
							<div className="hexagon-card bg-emerald-50/80">
								<h3 className="text-xl font-serif text-[#2d4a3e] mb-3">
									Narrative Therapy
								</h3>
								<p className="text-sm text-[#2d4a3e]/80 px-4">
									Reshaping personal stories to empower and create new possibilities.
								</p>
							</div>
						</div>
						{/* Bottom row */}
						<div className="flex justify-center gap-4 w-full -mt-8">
							<div className="hexagon-card bg-emerald-50/80">
								<h3 className="text-xl font-serif text-[#2d4a3e] mb-3">
									Cognitive Behavioral
								</h3>
								<p className="text-sm text-[#2d4a3e]/80 px-4">
									Changing negative thought patterns and behaviors.
								</p>
							</div>
							<div className="hexagon-card bg-emerald-50/80 mt-16">
								<h3 className="text-xl font-serif text-[#2d4a3e] mb-3">
									Humanistic Psychology
								</h3>
								<p className="text-sm text-[#2d4a3e]/80 px-4">
									Focusing on personal growth and self-actualization.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
