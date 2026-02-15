
import React from 'react';

interface GuidePageProps {
  onBack: () => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">دليل الاستخدام</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">كل ما تحتاج معرفته لاستخدام منصة القوالب باحترافية</p>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5m7 7l-7-7 7-7" />
          </svg>
          العودة للقوالب
        </button>
      </div>

      <div className="grid gap-8">
        {/* Section 1: Basics */}
        <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">الأساسيات والنسخ السريع</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold shrink-0 mt-1">1</span>
                <p>اضغط على زر <strong className="text-blue-600">"نسخ"</strong> لنسخ النص العربي فوراً.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold shrink-0 mt-1">2</span>
                <p>اضغط على زر <strong className="text-slate-900 dark:text-white">"EN"</strong> لنسخ النسخة الإنجليزية من القالب.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold shrink-0 mt-1">3</span>
                <p>استخدم <strong className="text-slate-900 dark:text-white">شريط البحث</strong> في الأسفل للوصول السريع لأي قالب بالاسم أو الوسم.</p>
              </div>
              <div className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold shrink-0 mt-1">4</span>
                <p>استخدم <strong className="text-slate-900 dark:text-white">مصفّي الفئات</strong> في الأعلى لعرض قوالب قسم معين فقط.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Backup & Customization */}
        <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">إدارة القوالب والنسخ الاحتياطي</h3>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/20">
              <h4 className="font-black text-indigo-700 dark:text-indigo-400 mb-2">كيف تحفظ قوالبك المخصصة؟</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">القوالب التي تضيفها تُحفظ في متصفحك فقط. لتجنب ضياعها عند مسح بيانات المتصفح، اتبع الآتي:</p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span>اضغط على أيقونة <strong className="text-indigo-600">التصدير (السهم للأسفل)</strong> في أعلى الصفحة لتحميل ملف القوالب.</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span>لاستعادة قوالبك، استخدم أيقونة <strong className="text-indigo-600">الاستيراد (السهم للأعلى)</strong> واختر الملف الذي قمت بحفظه سابقاً.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Browser Extension */}
        <section className="bg-slate-100 dark:bg-slate-900 rounded-[32px] p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] pointer-events-none"></div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">تثبيت التطبيق كإضافة جانبية (Side Panel)</h3>
          </div>
          
          {/* Download Step */}
          <div className="mb-8 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="shrink-0">
               <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               </div>
            </div>
            <div className="text-center md:text-right flex-1">
              <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1">الخطوة الأولى: تحميل الملف</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">قم بتحميل الكود المصدري للمشروع أولاً ليتم تثبيته في المتصفح.</p>
              <a 
                href="https://www.hostize.com/s/1C7QeaQwWy" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
                تحميل ملف المشروع (ZIP)
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center">
              <div className="text-2xl font-black mb-2 text-blue-600 dark:text-blue-400">01</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">افتح صفحة الإضافات في متصفح كروم عبر الرابط <code className="bg-slate-100 dark:bg-white/10 px-1 rounded text-xs text-blue-600 dark:text-blue-300 font-mono">chrome://extensions</code></p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center">
              <div className="text-2xl font-black mb-2 text-blue-600 dark:text-blue-400">02</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">قم بتفعيل <strong className="text-slate-900 dark:text-white">"وضع المطور - Developer Mode"</strong> في أعلى يمين الصفحة.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center">
              <div className="text-2xl font-black mb-2 text-blue-600 dark:text-blue-400">03</div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="block font-black text-red-500 dark:text-red-400 mb-1">مهم جداً:</span>
                قم بفك الضغط (Unzip) عن الملف المحمل، ثم اضغط على <strong className="text-slate-900 dark:text-white">Load Unpacked</strong> واختر مجلد المشروع.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-600/20 border border-blue-100 dark:border-blue-500/30 rounded-2xl text-center">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-300">بعد التثبيت، يمكنك فتح التطبيق في أي وقت من قائمة الإضافات بجانب شريط العنوان ليظهر كلوحة جانبية أثناء عملك!</p>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center pb-8">
        <p className="text-slate-400 text-sm">تم التطوير لتسهيل عمل فريق الدعم 🚀</p>
      </div>
    </div>
  );
};

export default GuidePage;
