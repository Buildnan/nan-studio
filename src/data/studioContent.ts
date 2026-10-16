export const contact = { email: 'hello@nanstudio.sa', emailIsPlaceholder: true };
export const socialLinks = { snapchat: { label: 'Snapchat', handle: '@nanstudio', url: 'https://www.snapchat.com/add/nanstudio' }, instagram: { label: 'Instagram', url: null as string | null }, tiktok: { label: 'TikTok', url: null as string | null } };
export const navigation = [{ label: 'الرئيسية', id: 'home' }, { label: 'الخدمات', id: 'expertise' }, { label: 'الأعمال', id: 'work' }, { label: 'الاستوديو', id: 'studio' }, { label: 'تواصل', id: 'contact' }];
export type Division = { id: string; title: string; tagline: string; intro?: string; text: string; services: string[] };
export const divisions: Division[] = [
{id:'web',title:'تصميم وإنشاء وتطوير المواقع',tagline:'WEB DESIGN & DEVELOPMENT',text:'مواقع تترك انطباعًا من أول زيارة. نصمم وننشئ ونطوّر تجارب ويب متجاوبة تجمع بين الجمال والسرعة والوضوح.',services:['Landing Pages','مواقع الشركات','Portfolio Websites','تطوير الواجهات']},
{id:'brand',title:'التصميم والهوية البصرية',tagline:'VISUAL IDENTITY & DESIGN',text:'نصنع هوية تعكس شخصيتك وتخلي علامتك تنحفظ في الذاكرة؛ من الفكرة البصرية إلى تطبيقاتها الرقمية.',services:['Visual Identity','Brand Direction','Social Design','Brand Assets']},
{id:'interface',title:'تصميم واجهات وتجربة المستخدم',tagline:'UI / UX DESIGN',text:'واجهات جميلة وسهلة الاستخدام؛ نرتب الرحلة من أول تفاعل إلى آخر نقرة بعناية.',services:['UI/UX','Wireframes','Design Systems','Prototypes']},
{id:'data',title:'تحليل البيانات',tagline:'DATA ANALYTICS',text:'نحوّل الأرقام إلى معلومات واضحة وتقارير ولوحات تفاعلية تساعدك تفهم أداء مشروعك.',services:['Excel','Power BI','Dashboards','Data Visualization']}
];
export const projects = [
{id:'web',name:'تجربة ويب رقمية',title:'Web Experience Concept',category:'WEB EXPERIENCE',description:'تصور لموقع استوديو معماري؛ مساحات واسعة، سرد بصري، وتجربة تصفح تركّز على المشاريع.',details:['تصميم متجاوب','تجربة ويب تفاعلية','هوية بصرية رقمية']},
{id:'interface',name:'نظام واجهات رقمية',title:'Interface System Concept',category:'UI / UX DESIGN',description:'تصور لنظام واجهات متكامل؛ مكونات قابلة لإعادة الاستخدام ومسارات واضحة.',details:['Design System','User Flows','Interactive Prototype']},
{id:'data',name:'لوحة مؤشرات ذكية',title:'Data Dashboard Concept',category:'DATA VISUALIZATION',description:'تصور للوحة معلومات تجمع المؤشرات في تجربة واضحة.',details:['KPI Tracking','Data Visualization','Dashboard Design']}
];
export const team = [{name:'NAN',role:'Founder & Web Lead',division:'NAN WEB',number:'01'},{name:'Rinas',role:'UI/UX Designer',division:'NAN INTERFACE',number:'02'},{name:'Amal',role:'Data Analyst',division:'NAN DATA',number:'03'}];