import { useState } from 'react';
import { navigation } from '../data/studioContent';
import { Arrow, Wordmark } from './Shared';
export default function Header() {
 const [open, setOpen] = useState(false);
 const close = () => setOpen(false);
 return <header className="site-header"><div className="header-inner"><a href="#home" onClick={close} className="brand-link" aria-label="NAN STUDIO — الرئيسية"><Wordmark /></a><button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} onClick={() => setOpen(!open)}><span /><span /></button><nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="القائمة الرئيسية" onKeyDown={e => { if (e.key === 'Escape') { close(); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>{navigation.map(item => <a key={item.id} href={`#${item.id}`} onClick={close}>{item.label}</a>)}</nav><a className="header-cta" href="#contact">ابدئي مشروعك <Arrow /></a></div></header>;
}
