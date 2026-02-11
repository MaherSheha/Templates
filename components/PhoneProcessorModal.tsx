
import React, { useState, useEffect, useRef } from 'react';

interface PhoneProcessorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhoneProcessorModal: React.FC<PhoneProcessorModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [alerts, setAlerts] = useState<string[]>([]);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      processNumber(input);
    }
  }, [isOpen, input]);

  const convertArabicToEnglish = (numStr: string) => {
    const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return numStr.split('').map(ch => {
      const index = arabicNums.indexOf(ch);
      return index !== -1 ? index.toString() : ch;
    }).join('');
  };

  const processNumber = (val: string) => {
    let currentAlerts: string[] = [];
    
    // 1. Convert and Clean
    let processed = convertArabicToEnglish(val);
    processed = processed.replace(/\s+/g, '');
    
    // 2. Symbols check
    if (/[^0-9٠-٩]/.test(processed)) {
      currentAlerts.push("الرقم به رموز/حروف");
    }
    
    // 3. Keep digits only
    processed = processed.replace(/[^0-9]/g, '');
    
    // 4. Remove leading zero
    let withoutLeadingZero = processed.replace(/^(0|٠)+/, '');
    
    // 5. Add 966
    let r1 = withoutLeadingZero.startsWith("966") ? withoutLeadingZero : "966" + withoutLeadingZero;
    
    // 6. Remove zero after 966
    if (r1.startsWith("966") && (r1[3] === '0' || r1[3] === '٠')) {
      r1 = "966" + r1.slice(4);
    }
    
    // 7. Length check
    if (r1.length > 3) { // Only alert if user actually entered something
        if (r1.length < 12) currentAlerts.push("الرقم ناقص");
        else if (r1.length > 12) currentAlerts.push("الرقم زائد");
    }

    setResult1(r1);
    setResult2(r1.startsWith("966") ? r1.slice(3) : r1);
    setAlerts(currentAlerts);
  };

  const handleCopy = (text: string, isResult1: boolean) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    if (isResult1) {
      setCopied1(true);
      setTimeout(() => setCopied1(false), 2000);
    } else {
      setCopied2(true);
      setTimeout(() => setCopied2(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in slide-in-from-bottom md:zoom-in-95 duration-300">
        
        <div className="p-5 md:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white">معالج الأرقام</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-500 dark:text-slate-400">أدخل الرقم (أي صيغة)</label>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="05xxxxxx أو 966..."
              className="w-full h-14 px-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-bold text-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-center"
            />
          </div>

          <div className="grid gap-4">
            {/* Result 1 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 relative group">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">الرقم الدولي (966)</span>
              <div className="flex items-center justify-between gap-3">
                <input 
                    readOnly 
                    value={result1} 
                    className="flex-1 bg-transparent font-mono font-bold text-lg md:text-xl text-blue-600 dark:text-blue-400 outline-none"
                />
                <button
                  onClick={() => handleCopy(result1, true)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all active:scale-90 ${
                    copied1 ? 'bg-green-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {copied1 ? 'تم' : 'نسخ'}
                </button>
              </div>
            </div>

            {/* Result 2 */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 relative group">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">الرقم المحلي (بدون 966)</span>
              <div className="flex items-center justify-between gap-3">
                <input 
                    readOnly 
                    value={result2} 
                    className="flex-1 bg-transparent font-mono font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 outline-none"
                />
                <button
                  onClick={() => handleCopy(result2, false)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all active:scale-90 ${
                    copied2 ? 'bg-green-500 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {copied2 ? 'تم' : 'نسخ'}
                </button>
              </div>
            </div>
          </div>

          {alerts.length > 0 && (
            <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl flex items-center gap-2 text-amber-700 dark:text-amber-400 text-sm font-bold animate-pulse">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {alerts.join(' - ')}
            </div>
          )}

          <div className="pt-2">
             <button
              onClick={() => { setInput(''); inputRef.current?.focus(); }}
              className="w-full py-3 rounded-xl font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              مسح الكل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneProcessorModal;
