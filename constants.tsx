
import { Category, Template } from './types';

export const TEMPLATES: Template[] = [
  // --- GREETINGS ---
  {
    id: 'g_1',
    category: Category.Greetings,
    title: { en: '2.0 Opening', ar: '1.0 تحية' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us your name and how may I assist you?",
      ar: "حياك الله 🤝 في جوّي من stc، شرفنا باسمك و كيف أقدر أساعدك؟"
    },
    tags: ['greeting', 'opening']
  },
  {
    id: 'g_2',
    category: Category.Greetings,
    title: { en: 'Salam Greeting', ar: '1.1 سلام' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us your name and how may I assist you?",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، شرفنا باسمك و كيف أقدر أساعدك؟"
    },
    tags: ['greeting', 'salam']
  },
  {
    id: 'g_3',
    category: Category.Greetings,
    title: { en: 'Opening + Number', ar: '1.2 سلام وجوال' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us your phone number.",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، ولا عليك امر تزودنا برقم الجوال ."
    },
    tags: ['greeting', 'phone']
  },
  {
    id: 'g_4',
    category: Category.Greetings,
    title: { en: 'Opening + Validation', ar: '1.4 سلام وهوية' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us name and last 4 digit of ID/IQAMA.",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، ولا عليك امر تزودنا بالاسم وآخر اربعة أرقام من الهوية او الاقامة"
    },
    tags: ['greeting', 'validation']
  },

  // --- SIM & SERVICES ---
  {
    id: 'sim_1',
    category: Category.SIM,
    title: { en: 'SIM Activation 2.0', ar: 'تفعيل شريحة 2.0' },
    content: {
      en: "Your request was successful! Once the SIM is in your device and signal appears, log in to the Jawwy 2.0 app to activate. You'll then be able to make calls and use the internet.",
      ar: "تم اكمال طلبكم بنجاح كل اللي عليك الان بعد اضافة الشريحة للجهاز وظهور ابراج الخدمة انك تسجل دخول في تطبيق جوي 2.0 ليتم تنشيط الرقم والباقة وستتمكن من اجراء المكالمات واستخدام الانترنت بنجاح."
    },
    tags: ['activation', 'j2.0']
  },
  {
    id: 'sim_2',
    category: Category.SIM,
    title: { en: 'Number Transfer 2.0', ar: 'نقل رقم 2.0' },
    content: {
      en: "To transfer your number or create a separate account: In the app, tap your number (top right) > Manage Account > Choose option. Note: All features will be lost upon transfer.",
      ar: "لنقل رقمك إلى حساب آخر أو إنشاء حساب مستقل: من التطبيق، اضغط على رقمك (أعلى اليمين) > إدارة الحساب > الخيار المناسب. الرقم سيخسر كافة المميزات عند الانتقال."
    },
    tags: ['transfer', 'account']
  },
  {
    id: 'sim_3',
    category: Category.SIM,
    title: { en: 'eSIM Profile Retrieval', ar: 'الشريحة المدمجة 2.0' },
    content: {
      en: "To get your eSIM barcode: Open App > Tap number (top right) > Profile > View eSIM Profile.",
      ar: "تقدر تحمل الباركود الخاص بشريحتك من التطبيق: افتح التطبيق > رقمك (أعلى اليمين) > الملف الشخصي > عرض ملف تعريف الشريحة eSIM."
    },
    tags: ['esim', 'barcode']
  },
  {
    id: 'sim_4',
    category: Category.SIM,
    title: { en: 'Mawjood Service', ar: 'موجود' },
    content: {
      en: "To activate Mawjood (free): Dial *62*4000#. To cancel: Dial #62#.",
      ar: "تبي تفعل خدمة موجود المجانية؟ اتصل☎️ على الكود: *62*4000# وللإلغاء استخدم الكود: #62#"
    },
    tags: ['service', 'mawjood']
  },
  {
    id: 'sim_5',
    category: Category.SIM,
    title: { en: 'Call Waiting', ar: 'انتظار مكالمات' },
    content: {
      en: "To activate Call Waiting: Dial *43#. To cancel: Dial #43#.",
      ar: "تقدر تفعّل خدمة انتظار المكالمات المجانية بالاتصال☎️ على الكود: *#43 وللإلغاء: #43#"
    },
    tags: ['service', 'waiting']
  },
  {
    id: 'sim_6',
    category: Category.SIM,
    title: { en: 'Replacement SIM 2.0', ar: 'بديلة 2.0' },
    content: {
      en: "Get a replacement via app: Log out > Get new SIM > Replace SIM. Price: 28.75 SAR (inc. VAT). Verification required via ID/Iqama.",
      ar: "بإمكانك الحصول على شريحة بديلة من تطبيق جوّي 2.0: سجل خروج > الحصول على شريحة جديدة > استبدال الشريحة. السعر 28.75 ريال شامل الضريبة."
    },
    tags: ['replacement', 'sim']
  },
  {
    id: 'sim_7',
    category: Category.SIM,
    title: { en: 'Ownership Transfer 2.0', ar: 'نقل الملكية 2.0' },
    content: {
      en: "Steps: App > Manage Account > More Options > Transfer Ownership. Note: New owner needs another registered number. Or both visit an stc branch with IDs.",
      ar: "لنقل الملكية: تطبيق جوي 2.0 > إدارة الحساب > المزيد > نقل الملكية. ملاحظة: المالك الجديد يحتاج رقم مسجل بهويته، أو زيارة فرع stc مع الهوية."
    },
    tags: ['ownership', 'transfer']
  },
  {
    id: 'sim_8',
    category: Category.SIM,
    title: { en: 'Social Media List', ar: 'تطبيقات السوشال' },
    content: {
      en: "Social media includes: YouTube, Facebook, Snapchat, Telegram, WhatsApp, Jaco. Other apps (Google, TikTok, etc.) require general data.",
      ar: "السوشال ميديا تشمل: [يوتيوب، فيسبوك، سناب شات، تيلجرام، واتساب، جاكو] فقط. البرامج الأخرى تحتاج قيقا عام."
    },
    tags: ['social', 'data']
  },
  {
    id: 'sim_9',
    category: Category.SIM,
    title: { en: 'Delivery Schedule', ar: 'توصيل الشرائح' },
    content: {
      en: "Delivery in 48h. Sun-Thu: 9 AM-12 AM. Fri: 2 PM-12 AM. Sat: 11 AM-12 AM.",
      ar: "توصيل الشرائح العادية خلال 48 ساعة. الأحد-الخميس (9ص-12م)، الجمعة (2ظ-12م)، السبت (11ص-12م)."
    },
    tags: ['delivery', 'time']
  },

  // --- QUERY (FORMERLY BILLING) ---
  {
    id: 'bill_1',
    category: Category.Query,
    title: { en: 'International Calls 2.0', ar: 'مكالمات دولية 2.0' },
    content: {
      en: "To make international calls: App > Top-up > Balance Control > Access local usage balance.",
      ar: "لإجراء المكالمات الدولية: تطبيق جوي 2.0 > شحن الرصيد > التحكم بالرصيد > الوصول إلى رصيد الاستخدام المحلي."
    },
    tags: ['query', 'intl']
  },
  {
    id: 'bill_2',
    category: Category.Query,
    title: { en: 'No Credit Calls', ar: 'مكالمات عبر الرصيد' },
    content: {
      en: "In Jawwy, you cannot call directly using credit. You must have an active bundle/add-on with local minutes.",
      ar: "نعتذر منك، لا يمكن إجراء المكالمات باستخدام الرصيد مباشرة. يجب توفر باقة أو إضافة تحتوي على دقائق اتصال."
    },
    tags: ['query', 'credit']
  },
  {
    id: 'bill_3',
    category: Category.Query,
    title: { en: 'Buy Bundle 2.0', ar: 'شراء باقة 2.0' },
    content: {
      en: "App > Store > Choose (Bundles/Offers) > Select Bundle > Buy Now.",
      ar: "لشراء باقة: المتجر > اختر القسم (باقات - عروض) > حدد الباقة > شراء الآن."
    },
    tags: ['store', 'bundle']
  },
  {
    id: 'bill_4',
    category: Category.Query,
    title: { en: 'Normal Consumption', ar: 'استهلاك طبيعي' },
    content: {
      en: "Consumption is reviewed and normal (100% accurate based on usage).",
      ar: "اعتذر منك، الاستهلاك الخاص بالباقة طبيعي 100% حسب استخدامك ولا توجد ملاحظات."
    },
    tags: ['query', 'usage']
  },
  {
    id: 'bill_5',
    category: Category.Query,
    title: { en: 'Cancellation Rules', ar: 'الغاء باقة' },
    content: {
      en: "Rules: Within 48h, no usage. Balance returns to Jawwy wallet. Agree?",
      ar: "شروط الإلغاء: مامر عليها 48 ساعة، ماعليها استهلاك. الرصيد يرجع لمحفظة جوي. موافق؟"
    },
    tags: ['query', 'cancel']
  },

  // --- TECHNICAL ---
  {
    id: 'tech_1',
    category: Category.Technical,
    title: { en: 'System Update Info', ar: 'تحديث على النظام' },
    content: {
      en: "Apologies, system updates are currently in progress. Please try again later. We appreciate your patience.🧡🙏",
      ar: "نعتذر منك، في الوقت الحالي يوجد تحديث على النظام. نرجو منك المحاولة لاحقًا، شكرًا لتفهمك.🧡🙏"
    },
    tags: ['tech', 'update']
  },
  {
    id: 'tech_2',
    category: Category.Technical,
    title: { en: 'Coverage Map 1', ar: 'تغطية 1' },
    content: {
      en: "Check coverage: stc.sa. Provide location coordinates (from Google Maps brackets).",
      ar: "تأكد من التغطية عبر رابط stc. وزودنا بإحداثيات الموقع (بين القوسين في قوقل ماب)."
    },
    tags: ['tech', 'coverage']
  },
  {
    id: 'tech_3',
    category: Category.Technical,
    title: { en: 'Enable SMS 2.0', ar: 'رسائل نصية 2.0' },
    content: {
      en: "App > Balance > Balance Control > Allow local usage balance.",
      ar: "لارسال رسائل: تطبيق جوي 2.0 > الرصيد > التحكم بالرصيد > السماح لرصيد الاستخدام."
    },
    tags: ['tech', 'sms']
  },
  {
    id: 'tech_4',
    category: Category.Technical,
    title: { en: 'WiFi Toggle', ar: 'قفل واي فاي' },
    content: {
      en: "Close WiFi and use Jawwy data only when using the app.",
      ar: "تأكد من إغلاق الواي فاي واستخدام بيانات جوي فقط أثناء استخدام التطبيق."
    },
    tags: ['tech', 'wifi']
  },
  {
    id: 'tech_5',
    category: Category.Technical,
    title: { en: 'High Consumption Reason', ar: 'استهلاك عالي' },
    content: {
      en: "High-quality video, OS updates, and 5G consume data significantly. Calculated per 1MB.",
      ar: "للتوضيح: الفيديوهات عالية الجودة، تحديثات النظام، وقوقل ماب تستهلك البيانات بشكل كبير. الـ 5G يستهلك أكثر من الـ 4G."
    },
    tags: ['tech', 'usage']
  },

  // --- CLOSING ---
  {
    id: 'c_1',
    category: Category.Closing,
    title: { en: 'Task Completed', ar: 'تم تنفيذ طلبك' },
    content: {
      en: "Request executed. Is there anything else I can help you with?",
      ar: "تم التنفيذ يا غالي ، هل أقدر أساعدك بشي آخر؟"
    },
    tags: ['closing', 'done']
  },
  {
    id: 'c_2',
    category: Category.Closing,
    title: { en: 'Final Closing', ar: 'إنهاء المحادثة' },
    content: {
      en: "Thank you for contacting Jawwy Care today.🧡🙏",
      ar: "😊 شكراً لتواصلك معنا وتشرفنا بخدمتك، وتسعدنا مشاركتك بالتقييم🙏"
    },
    tags: ['closing', 'feedback']
  }
];
