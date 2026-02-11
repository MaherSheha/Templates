
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Language, Category, Template } from './types';
import { TEMPLATES } from './constants';
import TemplateCard from './components/TemplateCard';
import CreateTemplateModal from './components/CreateTemplateModal';
import PhoneProcessorModal from './components/PhoneProcessorModal';

// Enhanced Storage Utility
const storage = {
  get: <T,>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return defaultValue;
      return JSON.parse(item) as T;
    } catch (e) {
      console.error(`Error loading ${key} from storage:`, e);
      return defaultValue;
    }
  },
  set: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
    }
  }
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return storage.get('theme', 'dark');
  });

  const isDark = theme === 'dark';

  const [customTemplates, setCustomTemplates] = useState<Template[]>(() => {
    return storage.get<Template[]>('custom_templates', []);
  });

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const language: Language = 'ar';
  const [activeCategory, setActiveCategory] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set RTL and Theme
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  useEffect(() => {
    storage.set('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync custom templates to storage whenever they change
  useEffect(() => {
    storage.set('custom_templates', customTemplates);
  }, [customTemplates]);

  const allTemplates = useMemo(() => [...TEMPLATES, ...customTemplates], [customTemplates]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allTemplates.forEach(t => cats.add(t.category));
    return Array.from(cats);
  }, [allTemplates]);

  const filteredTemplates = useMemo(() => {
    return allTemplates.filter(t => {
      const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
      const matchesSearch = t.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.content[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [allTemplates, activeCategory, searchQuery, language]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const handleAddTemplate = (newTemplate: Template) => {
    const updated = [newTemplate, ...customTemplates];
    setCustomTemplates(updated);
    storage.set('custom_templates', updated); // Instant save
    showToast('تم حفظ القالب بنجاح ✨');
  };

  const handleDeleteTemplate = (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا القالب؟ سيتم حذفه نهائياً.')) {
      const updated = customTemplates.filter(t => t.id !== id);
      setCustomTemplates(updated);
      storage.set('custom_templates', updated); // Instant save
      showToast('تم حذف القالب');
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customTemplates));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "قوالبي_الاحتياطية.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    showToast('تم تصدير النسخة الاحتياطية');
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (Array.isArray(imported)) {
          setCustomTemplates(prev => {
            const existingIds = new Set(prev.map(t => t.id));
            const news = imported.filter(t => !existingIds.has(t.id));
            const merged = [...news, ...prev];
            storage.set('custom_templates', merged);
            return merged;
          });
          showToast('تم استيراد القوالب بنجاح! ✅');
        }
      } catch (err) {
        showToast('خطأ: الملف غير صالح', 'error');
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return 'كل الفئات';
    const labels: Record<string, string> = {
      [Category.Greetings]: 'الترحيب',
      [Category.Query]: 'الاستفسارات',
      [Category.Technical]: 'الدعم التقني',
      [Category.SIM]: 'الشرائح والخدمات',
      [Category.Roaming]: 'التجوال',
      [Category.Closing]: 'الخاتمة',
    };
    return labels[cat] || cat;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-['Noto_Sans_Arabic'] pb-24 md:pb-32">
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 rounded-2xl shadow-2xl font-bold animate-in slide-in-from-top-4 duration-300 ${
          toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`}>
          {toast.message}
        </div>
      )}

      {/* Navigation Header */}
      <nav id="navbar" className="sticky top-0 z-[60] h-[64px] md:h-[72px] bg-white dark:bg-[#1e293b] border-b border-slate-100 dark:border-slate-800 px-4 flex items-center shadow-sm">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 text-xl">ق</div>
            <div>
              <h1 className="text-lg md:text-xl font-black bg-clip-text text-transparent bg-gradient-r from-blue-700 to-indigo-700 dark:from-blue-400 dark:to-indigo-400">
                قوالب الدعم
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 md:gap-3">
            <button 
                onClick={() => setIsPhoneModalOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold text-sm transition-all hover:bg-blue-100 dark:hover:bg-blue-900/40 active:scale-95"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span className="hidden xs:inline">الأدوات</span>
            </button>

            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <button onClick={handleExport} className="p-2 text-slate-500 hover:text-blue-600 transition-colors" title="تصدير نسخة احتياطية">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </button>
              <label className="p-2 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer" title="استيراد نسخة احتياطية">
                <input type="file" accept=".json" onChange={handleImport} className="hidden" />
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </label>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto w-full px-3 md:px-8 pb-3 md:pb-8 flex flex-col">
        
        {/* Category Selector Bar */}
        <div className="sticky top-[64px] md:top-[72px] z-50 bg-slate-50 dark:bg-[#0f172a] pt-0 pb-4">
          <div className="relative group max-w-md pt-3">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full h-12 pr-11 pl-4 rounded-2xl appearance-none bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm md:text-base focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all cursor-pointer shadow-sm"
            >
              <option value="All">كل الفئات</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {getCategoryLabel(cat)}
                </option>
              ))}
            </select>
            <div className="absolute top-[calc(50%+6px)] -translate-y-1/2 right-4 text-slate-400 pointer-events-none group-focus-within:text-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-2">
          {filteredTemplates.length > 0 ? (
            filteredTemplates.map(template => (
              <TemplateCard 
                key={template.id} 
                template={template} 
                language={language} 
                onDelete={customTemplates.some(ct => ct.id === template.id) ? () => handleDeleteTemplate(template.id) : undefined}
              />
            ))
          ) : (
            <div className="col-span-full py-24 text-center bg-white dark:bg-slate-900/50 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-300 mb-4">
                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <p className="text-slate-400 text-lg font-medium">لا توجد قوالب تطابق بحثك</p>
            </div>
          )}
        </div>
      </main>

      {/* Move to Top Button - Positioned left and above bottom bar */}
      <button 
        onClick={scrollToTop}
        className={`fixed left-6 bottom-[100px] md:bottom-[120px] z-[80] w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-90 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="العودة للأعلى"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Fixed Action Bar at the Bottom */}
      <div className="fixed bottom-0 inset-x-0 z-[70] px-4 pb-6 md:pb-8">
        <div className="max-w-2xl mx-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-3xl p-2 shadow-2xl flex items-center gap-2">
          <button onClick={toggleTheme} className="w-12 h-12 flex items-center justify-center shrink-0 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-600 transition-all active:scale-90" aria-label="تبديل الوضع الليلي">
            {isDark ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <div className="relative flex-1">
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="بحث سريع..." className="w-full h-12 pr-10 pl-4 rounded-2xl border-0 bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 outline-none font-medium text-sm transition-all" />
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-slate-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          <button onClick={() => setIsCreateModalOpen(true)} className="w-12 h-12 flex items-center justify-center shrink-0 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-90" aria-label="إضافة قالب">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>

      <CreateTemplateModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
        onSave={handleAddTemplate} 
        language={language}
        existingCategories={categories}
      />

      <PhoneProcessorModal 
        isOpen={isPhoneModalOpen} 
        onClose={() => setIsPhoneModalOpen(false)} 
      />
    </div>
  );
};

export default App;
