
import React, { useState } from 'react';
import { Template, Language } from '../types';

interface TemplateCardProps {
  template: Template;
  language: Language;
  onDelete?: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, language, onDelete }) => {
  const [copiedAr, setCopiedAr] = useState(false);
  const [copiedEn, setCopiedEn] = useState(false);

  const handleCopy = (lang: Language) => {
    const text = template.content[lang];
    navigator.clipboard.writeText(text);
    if (lang === 'ar') {
      setCopiedAr(true);
      setTimeout(() => setCopiedAr(false), 2000);
    } else {
      setCopiedEn(true);
      setTimeout(() => setCopiedEn(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl md:rounded-3xl p-3 md:p-5 shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 group flex flex-col justify-between text-right relative overflow-hidden min-h-[160px] md:min-h-[180px] h-full">
      
      {/* 1. Header: Title & Category */}
      <div className="z-10 flex flex-col gap-0.5 md:gap-1">
        <div className="flex justify-between items-start gap-1">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {template.title.ar}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[7px] md:text-[8px] uppercase font-black px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
            {template.category}
          </span>
          <div className="hidden xs:flex flex-wrap gap-1 mt-0.5 group-hover:opacity-20 transition-opacity duration-300">
            {template.tags.slice(0, 1).map(tag => (
              <span key={tag} className="text-[9px] font-bold text-slate-400 dark:text-slate-500">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Delete Button: Always visible for custom templates but with low opacity by default */}
      {onDelete && (
        <button 
          onClick={(e) => { 
            e.preventDefault();
            e.stopPropagation(); 
            onDelete(); 
          }}
          className="absolute top-2 left-2 z-[50] p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/40 rounded-xl transition-all opacity-40 group-hover:opacity-100 border border-slate-200 dark:border-slate-700 shadow-sm active:scale-90"
          title="حذف القالب"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      )}

      {/* 2. Hover Content Overlay */}
      <div className="absolute inset-x-0 top-0 h-[calc(100%-60px)] md:h-[calc(100%-70px)] bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 flex items-center justify-center p-3 md:p-4 pointer-events-none group-hover:pointer-events-auto">
        <p className="text-slate-700 dark:text-slate-200 text-[10px] md:text-sm leading-relaxed whitespace-pre-wrap font-medium text-center overflow-hidden max-h-full">
          {template.content.ar}
        </p>
      </div>

      {/* 3. Footer Buttons: z-30 */}
      <div className="flex gap-1.5 mt-3 pt-2.5 border-t border-slate-50 dark:border-slate-800 z-30">
        <button
          onClick={() => handleCopy('ar')}
          className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-xl font-bold transition-all text-[10px] md:text-sm active:scale-95 ${
            copiedAr 
              ? 'bg-green-500 text-white shadow-lg shadow-green-200 dark:shadow-none' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
          }`}
        >
          {copiedAr ? (
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
          )}
          <span>{copiedAr ? 'تم' : 'نسخ'}</span>
        </button>

        <button
          onClick={() => handleCopy('en')}
          className={`px-2 py-2 rounded-xl font-black transition-all text-[9px] md:text-[10px] border-2 active:scale-95 ${
            copiedEn 
              ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400' 
              : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 text-slate-400 dark:text-slate-500'
          }`}
          title="Copy English Version"
        >
          {copiedEn ? '✓' : 'EN'}
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
