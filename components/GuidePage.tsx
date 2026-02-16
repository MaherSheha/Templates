
import React from 'react';

interface GuidePageProps {
  onBack: () => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">دليل الاستخدام</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">تعلم كيفية تخصيص وإدارة قوالبك باحترافية</p>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-sm"
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
          <div className="grid md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
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
            </div>
          </div>
        </section>

        {/* Section 2: Custom Templates Management */}
        <section className="bg-white dark:bg-slate-900 rounded-[32px] p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">إدارة قوالبك المخصصة</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4 shadow-md">+</div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">إضافة قالب</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                اضغط على زر الزائد <strong className="text-blue-600">(+)</strong> في الشريط السفلي. اتبع الخطوات الثلاث لتحديد الفئة، العنوان، والمحتوى.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="w-8 h-8 bg-white dark:bg-slate-700 text-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-sm border border-slate-200 dark:border-slate-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">تعديل القالب</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                مرر الفأرة فوق أي قالب قمت بإنشائه، ستظهر أيقونة <strong className="text-slate-900 dark:text-white">القلم</strong> في الزاوية العلوية اليسرى. اضغط عليها لتحديث البيانات.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="w-8 h-8 bg-white dark:bg-slate-700 text-red-500 rounded-lg flex items-center justify-center mb-4 shadow-sm border border-slate-200 dark:border-slate-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">حذف القالب</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                استخدم أيقونة <strong className="text-red-500">السلة</strong> التي تظهر عند تمرير الفأرة فوق قوالبك الخاصة لحذفها نهائياً.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Backup, Import & Export - Improved Light Mode Colors */}
        <section className="bg-slate-50 dark:bg-slate-900 rounded-[32px] p-6 md:p-8 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] pointer-events-none"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white dark:bg-white/10 text-blue-600 dark:text-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-white/10">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
            </div>
            <h3 className="text-xl font-bold">النسخ الاحتياطي ونقل البيانات</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900 dark:text-white">تصدير القوالب (Download)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    اضغط على أيقونة <strong className="text-blue-600 dark:text-white">السهم للأسفل</strong> في شريط التنقل العلوي لتحميل ملف <code className="bg-slate-100 dark:bg-white/10 px-1 rounded text-slate-900 dark:text-white">.json</code> يحتوي على كل قوالبك المخصصة.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="p-2 bg-indigo-600 rounded-lg text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-slate-900 dark:text-white">استيراد القوالب (Upload)</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    اضغط على أيقونة <strong className="text-indigo-600 dark:text-white">السهم للأعلى</strong> واختر ملف النسخة الاحتياطية. سيقوم التطبيق بدمج القوالب الجديدة مع قوالبك الحالية.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center shadow-sm">
              <h4 className="font-black text-blue-600 dark:text-blue-400 mb-3 text-lg">ملاحظة هامة جداً ⚠️</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                يتم تخزين قوالبك المخصصة داخل <strong className="text-slate-900 dark:text-white">ذاكرة المتصفح (LocalStorage)</strong> فقط. 
                <br/><br/>
                هذا يعني أنها قد تُحذف في حالات مسح البيانات أو استخدام جهاز آخر.
                لذلك، نوصي بشدة بـ <strong className="text-blue-600 dark:text-blue-400">تصدير نسخة احتياطية</strong> بشكل دوري.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Browser Extension */}
        <section className="bg-slate-100 dark:bg-slate-900 rounded-[32px] p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">استخدام التطبيق كإضافة جانبية</h3>
          </div>
          
          <div className="mb-8 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
            <div className="shrink-0">
               <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center">
                 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
               </div>
            </div>
            <div className="text-center md:text-right flex-1">
              <h4 className="font-black text-lg text-slate-900 dark:text-white mb-1">تثبيت ملف المشروع</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">للحصول على تجربة الـ Side Panel، يجب تحميل وتثبيت الملف في كروم.</p>
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
              <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-300">افتح <code className="bg-slate-100 dark:bg-white/10 px-1 rounded text-blue-600 dark:text-blue-300 font-mono">chrome://extensions</code></p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center">
              <div className="text-2xl font-black mb-2 text-blue-600 dark:text-blue-400">02</div>
              <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-300">فعل <strong className="text-slate-900 dark:text-white">وضع المطور - Developer Mode</strong>.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col items-center">
              <div className="text-2xl font-black mb-2 text-blue-600 dark:text-blue-400">03</div>
              <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-300">فك الضغط عن الملف المحمل، ثم اضغط <strong className="text-slate-900 dark:text-white">Load Unpacked</strong> واختر المجلد.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center pb-8 border-t border-slate-100 dark:border-slate-800 pt-8">
        <p className="text-slate-400 text-sm">تم التطوير لتسهيل عمل فريق الدعم وتمكينهم من تخصيص أدواتهم 🚀</p>
      </div>
    </div>
  );
};

export default GuidePage;
