export const contact = {
  email: 'hello@nanstudio.sa',
  emailIsPlaceholder: true,
};
export const socialLinks = {
  snapchat: { label: 'Snapchat', handle: '@nanstudio', url: 'https://www.snapchat.com/add/nanstudio' },
  instagram: { label: 'Instagram', url: null as string | null },
  tiktok: { label: 'TikTok', url: null as string | null },
};
export const navigation = [
  { label: 'الرئيسية', id: 'home' }, { label: 'الخبرات', id: 'expertise' },
  { label: 'الأعمال', id: 'work' }, { label: 'الاستوديو', id: 'studio' }, { label: 'تواصل', id: 'contact' },
];
export type Division = { id: string; title: string; tagline: string; intro?: string; text: string; services: string[] };
export const divisions: Division[] = [
  { id: 'web', title: 'NAN WEB', tagline: 'Build the experience.', intro: 'الويب عندنا مو مجرد خدمة، هو المكان اللي تبدأ منه NAN.', text: 'نصمم ونطوّر مواقع ويب احترافية تجمع بين الجمال، الأداء، والوضوح. من صفحات الهبوط إلى مواقع الشركات والواجهات التفاعلية، نبني تجارب رقمية تعبّر عن الهوية وتخدم الهدف.', services: ['مواقع الشركات', 'Landing Pages', 'Portfolio Websites', 'مواقع تعريفية احترافية', 'واجهات ويب تفاعلية', 'Front-end Development', 'AI-Assisted Web Building'] },
  { id: 'interface', title: 'NAN INTERFACE', tagline: 'Shape the interaction.', text: 'نصمم واجهات وتجارب استخدام تجمع بين البساطة، الجاذبية، والوضوح. من الفكرة الأولى إلى الـPrototype النهائي، نهتم بكل تفصيلة تصنع تجربة أفضل للمستخدم.', services: ['UI/UX Design', 'Wireframes', 'User Flows', 'Design Systems', 'Prototypes', 'واجهات المواقع والتطبيقات'] },
  { id: 'data', title: 'NAN DATA', tagline: 'Understand the impact.', text: 'نحوّل البيانات إلى رؤى واضحة تساعد على اتخاذ قرارات أفضل. نبني تقارير ولوحات معلومات تساعد المشاريع على فهم الأداء، قياس النتائج، ورؤية الصورة بشكل أذكى.', services: ['Data Analysis', 'Dashboards', 'KPI Tracking', 'Excel Reports', 'Power BI', 'Data Visualization'] },
];
export const projects = [
  { id: 'web', name: 'تجربة ويب رقمية', title: 'Web Experience Concept', category: 'WEB EXPERIENCE', description: 'تصور لموقع استوديو معماري؛ مساحات واسعة، سرد بصري، وتجربة تصفح تركّز على المشاريع.', details: ['تصميم متجاوب', 'تجربة ويب تفاعلية', 'هوية بصرية رقمية'] },
  { id: 'interface', name: 'نظام واجهات رقمية', title: 'Interface System Concept', category: 'UI / UX DESIGN', description: 'تصور لنظام واجهات متكامل؛ مكونات قابلة لإعادة الاستخدام ومسارات واضحة تنقل المستخدم من الفكرة إلى الإنجاز.', details: ['Design System', 'User Flows', 'Interactive Prototype'] },
  { id: 'data', name: 'لوحة مؤشرات ذكية', title: 'Data Dashboard Concept', category: 'DATA VISUALIZATION', description: 'تصور للوحة معلومات تجمع المؤشرات في تجربة واضحة، وتحوّل الأرقام إلى قراءة بصرية سهلة.', details: ['KPI Tracking', 'Data Visualization', 'Dashboard Design'] },
];
export const team = [
  { name: 'NAN', role: 'Founder & Web Lead', division: 'NAN WEB', number: '01' },
  { name: 'Rinas', role: 'UI/UX Designer', division: 'NAN INTERFACE', number: '02' },
  { name: 'Amal', role: 'Data Analyst', division: 'NAN DATA', number: '03' },
];
