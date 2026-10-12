import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Divisions from './components/Divisions';
import Work from './components/Work';
import Studio from './components/Studio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
 useEffect(() => {
  const elements = document.querySelectorAll('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.remove('awaiting-reveal'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
  elements.forEach(el => { el.classList.add('awaiting-reveal'); observer.observe(el); });
  return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('awaiting-reveal')); };
 }, []);
 return <><a className="skip-link" href="#main">تجاوز إلى المحتوى</a><Header /><main id="main"><Hero /><Marquee /><Divisions /><Work /><Studio /><Team /><Contact /></main><Footer /></>;
}
