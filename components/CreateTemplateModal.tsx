
import React, { useState, useEffect } from 'react';
import { Language, Category, Template } from '../types';

interface CreateTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: Template) => void;
  language: Language;
  existingCategories: string[];
  templateToEdit?: Template | null;
}

const CreateTemplateModal: React.FC<CreateTemplateModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave, 
  language, 
  existingCategories,
  templateToEdit
}) => {
  const [step, setStep] = useState(1);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [formData, setFormData] = useState({
    titleEn: '',
    titleAr: '',
    contentEn: '',
    contentAr: '',
    category: Category.Greetings as string,
    customCategory: '',
    tags: ''
  });

  // Populate form if editing
  useEffect(() => {
    if (templateToEdit && isOpen) {
      setFormData({
        titleEn: templateToEdit.title.en,
        titleAr: templateToEdit.title.ar,
        contentEn: templateToEdit.content.en,
        contentAr: templateToEdit.content.ar,
        category: templateToEdit.category,
        customCategory: '',
        tags: templateToEdit.tags.join(', ')
      });
      setIsCustomCategory(false);
      setStep(1);
    } else if (!templateToEdit && isOpen) {
      // Reset for new template
      setFormData({
        titleEn: '',
        titleAr: '',
        contentEn: '',
        contentAr: '',
        category: Category.Greetings as string,
        customCategory: '',
        tags: ''
      });
      setIsCustomCategory(false);
      setStep(1);
    }
  }, [templateToEdit, isOpen]);

  if (!isOpen) return null;

  const totalSteps = 3;

  const handleNext = () => {
    if (step === 1) {
      if (!formData.titleAr) return;
      if (isCustomCategory && !formData.customCategory.trim()) return;
    }
    if (step === 2 && !formData.contentAr) return;
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleAr || !formData.contentAr || !formData.tags.trim()) return;

    const finalCategory = isCustomCategory ? formData.customCategory.trim() : formData.category;

    const newTemplate: Template = {
      id: templateToEdit ? templateToEdit.id : `custom_${Date.now()}`,
      category: finalCategory,
      title: {
        en: formData.titleEn.trim() || formData.titleAr,
        ar: formData.titleAr
      },
      content: {
        en: formData.contentEn.trim() || formData.contentAr,
        ar: formData.contentAr
      },
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    onSave(newTemplate);
    onClose();
  };

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      [Category.Greetings]: 'الترحيب',
      [Category.Query]: 'الاستفسارات',
      [Category.Technical]: 'الدعم التقني',
      [Category.SIM]: 'الشرائح والخدمات',
      [Category.Roaming]: 'التجوال',
      [Category.Closing]: 'الخاتمة'
    };
    return labels[cat] || cat;
  };

  const canGoNext = () => {
    if (step === 1) {
        const titleValid = formData.titleAr.trim().length > 0;
        const catValid = isCustomCategory ? formData.customCategory.trim().length > 0 : true;
        return titleValid && catValid;
    }
    if (step === 2) return formData.contentAr.trim().length > 0;
    if (step === 3) return formData.tags.trim().length > 0;
    return false;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom md:zoom-in-95 duration-300">
        
        <div className="p-5 md:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              {templateToEdit ? 'تعديل القالب' : 'إضافة قالب جديد'}
            </h2>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'}`}></div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-6">
          
          {step === 1 && (
            <div className="space-y-4 animate-in slide-in-from-left-4 duration-300">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">الفئة</label>
                <select
                  value={isCustomCategory ? "custom" : formData.category}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "custom") {
                      setIsCustomCategory(true);
                    } else {
                      setIsCustomCategory(false);
                      setFormData(prev => ({ ...prev, category: val }));
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-semibold"
                >
                  {existingCategories.map(cat => (
                    <option key={cat} value={cat}>{getCategoryLabel(cat)}</option>
                  ))}
                  <option value="custom" className="text-blue-600 font-bold">+ إضافة فئة جديدة...</option>
                </select>
              </div>

              {isCustomCategory && (
                <div className="space-y-1.5 animate-in zoom-in-95 duration-200">
                  <label className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">اسم الفئة الجديدة *</label>
                  <input
                    required
                    type="text"
                    value={formData.customCategory}
                    onChange={(e) => setFormData(prev => ({ ...prev, customCategory: e.target.value }))}
                    placeholder="مثلاً: باقات كاس العالم"
                    className="w-full py-3 px-4 rounded-xl border-2 border-blue-500/30 dark:border-blue-500/20 bg-blue-50/30 dark:bg-blue-900/10 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">عنوان القالب (بالعربي) *</label>
                  <input
                    required
                    dir="rtl"
                    type="text"
                    value={formData.titleAr}
                    onChange={(e) => setFormData(prev => ({ ...prev, titleAr: e.target.value }))}
                    placeholder="مثلاً: تحية افتتاحية"
                    className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Template Title (EN) - اختياري</label>
                  <input
                    dir="ltr"
                    type="text"
                    value={formData.titleEn}
                    onChange={(e) => setFormData(prev => ({ ...prev, titleEn: e.target.value }))}
                    placeholder="e.g. Opening Greeting"
                    className="w-full py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in slide-in-from-left-4 duration-300">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">نص الرد (بالعربي) *</label>
                <textarea
                  required
                  dir="rtl"
                  rows={4}
                  value={formData.contentAr}
                  onChange={(e) => setFormData(prev => ({ ...prev, contentAr: e.target.value }))}
                  placeholder="اكتب نص الرد هنا..."
                  className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium resize-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Response Text (EN) - اختياري</label>
                <textarea
                  dir="ltr"
                  rows={3}
                  value={formData.contentEn}
                  onChange={(e) => setFormData(prev => ({ ...prev, contentEn: e.target.value }))}
                  placeholder="Type English response here..."
                  className="w-full py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium resize-none"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in slide-in-from-left-4 duration-300">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">الوسوم / Tags *</label>
                <input
                  required
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="مثال: تحية، ترحيب، عملاء"
                  className="w-full py-4 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-lg"
                />
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2 pb-4 md:pb-0">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 py-4 px-6 rounded-2xl font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                السابق
              </button>
            )}
            
            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canGoNext()}
                className={`flex-[2] py-4 px-6 rounded-2xl font-bold text-white transition-all active:scale-95 ${
                  canGoNext() ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                }`}
              >
                التالي
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canGoNext()}
                className={`flex-[2] py-4 px-6 rounded-2xl font-bold text-white transition-all active:scale-95 ${
                  canGoNext() ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20' : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed'
                }`}
              >
                {templateToEdit ? 'تعديل وحفظ' : 'حفظ القالب'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTemplateModal;
