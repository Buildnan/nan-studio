# NAN STUDIO

موقع عربي لاستوديو تقني إبداعي، مبني داخل المستودع باستخدام React 19 وTypeScript وVite وTailwind CSS 4. الويب هو الخدمة الأساسية، مع قسمي UI/UX والبيانات.

## التشغيل

يتطلب Node.js 22.12+ (تم التحقق باستخدام Node.js 24).

```bash
npm ci
npm run dev
```

## البناء والنشر

```bash
npm run build
npm run preview
```

انشر محتويات `dist/` على استضافة ملفات ثابتة مثل Cloudflare Pages أو Netlify أو Vercel. أمر البناء `npm run build` ومجلد الإخراج `dist`. لا توجد خدمات خلفية أو مفاتيح API مطلوبة. عند النشر ضمن مسار فرعي، اضبط `base` في `vite.config.ts`.

قبل النشر العام أضف رابط الدومين النهائي إلى canonical و`og:url` في `index.html`، واجعل `og:image` رابطًا مطلقًا لصورة `public/og-image.png`. لا توجد روابط نطاق وهمية في النسخة الحالية.

## الإعدادات والمحتوى

الملف `src/data/studioContent.ts` يحوي التواصل، الروابط، الخبرات، الأعمال، والفريق.

- Snapchat مفعل: `https://www.snapchat.com/add/nanstudio`.
- البريد `hello@nanstudio.sa` مؤقت. لا يظهر رابط mailto ما دام `emailIsPlaceholder` يساوي `true`. بعد اعتماد البريد، عدّل العنوان وغيّر العلم إلى `false`.
- Instagram وTikTok قيمهما `null`، ويظهران كقنوات قادمة دون روابط. أضف الرابط الحقيقي إلى `url` لتفعيلهما.
- جميع بطاقات الأعمال موسومة Concept Work، وليست ادعاءات بمشاريع عملاء.
- الخط العربي Noto Sans Arabic مستضاف محليًا. رخصته في `public/fonts/OFL.txt`.

## بنية المشروع

```text
src/
  App.tsx
  main.tsx
  components/
    Header.tsx
    Hero.tsx
    Marquee.tsx
    Divisions.tsx
    Work.tsx
    Studio.tsx
    Team.tsx
    Contact.tsx
    Footer.tsx
    Shared.tsx
  data/studioContent.ts
  styles/globals.css
public/
  fonts/arabic.woff2
  fonts/OFL.txt
  favicon.svg
  og-image.svg
  og-image.png
tests/site.test.mjs
```

## اختبارات المتصفح

شغّل خادم التطوير في نافذة ثم الاختبارات في أخرى:

```bash
npm run dev -- --port 5173
npm test
```

الاختبارات تستخدم Chromium في `/usr/bin/chromium`. لتغيير عنوان الخادم استخدم `TEST_BASE_URL`. تفحص RTL، الأقسام، التنقل، قائمة الجوال، تفاصيل الأعمال وإغلاقها بـEscape، رابط Snapchat، تعطيل البريد المؤقت، دعم reduced-motion، أخطاء console، وعدم تجاوز عرض الشاشة عند 360 و390 و768 و1024 و1920 بكسل. فتح صفحة Snapchat الخارجية يخضع لاتصال الشبكة ولا تثبته اختبارات الرابط الداخلية.

## المرحلة التالية

اعتماد الدومين والبريد وروابط التواصل، استبدال الأعمال التصورية بدراسات حالة مصرح بها عند توفرها، وإضافة نموذج طلب مشروع مع خدمة خلفية بعد تحديد طريقة استقبال الطلبات وسياسة الخصوصية. لا يرسل الموقع الحالي بيانات الزوار ولا يوهم بنجاح إرسال نموذج.
