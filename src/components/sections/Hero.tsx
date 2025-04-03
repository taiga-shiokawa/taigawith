'use client';

import { useEffect, useRef } from 'react';
import Container from '../common/Container';

const Hero = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // グリッドの移動（視差効果）
      const moveX = (clientX - innerWidth / 2) * 0.02;
      const moveY = (clientY - innerHeight / 2) * 0.02;
      gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 64; // ヘッダーの高さ
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center bg-primary relative overflow-hidden">
      {/* グリッドパターン */}
      <div 
        ref={gridRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        {/* スキャンライン */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="w-full h-[2px] bg-accent/20 absolute top-0 animate-scan"
          />
        </div>

        {/* グリッドのオーバーレイ効果 */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0" />
      </div>

      {/* メインコンテンツ */}
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glitch-text">
            Taiga With...
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            AI駆動で圧倒的な価値を届ける。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:taiga.hr12@gmail.com"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors relative group overflow-hidden"
            >
              <span className="relative z-10">お問い合わせ</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors relative group overflow-hidden"
            >
              <span className="relative z-10">プロジェクトを見る</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 