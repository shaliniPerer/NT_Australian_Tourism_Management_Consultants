import React, { useState } from 'react';

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
              <a href="#about" className="text-[#2d4a3e] text-[10px] uppercase tracking-widest">About</a>
              <a href="#blog" className="text-[#2d4a3e] text-[10px] uppercase tracking-widest">Blog</a>
              <a href="#contact" className="text-[#2d4a3e] text-[10px] uppercase tracking-widest">Contact</a>
              <button className="bg-[#8fa49b] hover:bg-[#7d9289] text-white px-6 py-2.5 text-[10px] uppercase tracking-widest">
                Book Session
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-3">
            <a href="#about" className="block text-xs uppercase">About</a>
            <a href="#blog" className="block text-xs uppercase">Blog</a>
            <a href="#contact" className="block text-xs uppercase">Contact</a>
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
              Are you stuck in patterns that you just can't shift? Trying to improve your
              relationships? Do you feel held back in life like you are carrying a heavy
              backpack of old wounds & trauma?
            </p>

            <p>
              Therapy could help you finally make real progress by gaining insight &
              improving coping skills. Developing a kind & compassionate mind makes it easier
              to make decisions that improve your wellbeing.
            </p>
          </div>

          <button className="border-2 border-white px-10 py-3 text-xs uppercase tracking-widest">
            Explore Our Services
          </button>

        </div>
      </section>

    </div>
  );
};

export default HomePage;
