
import { Category, Template } from './types';

export const TEMPLATES: Template[] = [
  // --- GREETINGS & OPENINGS (1.x & 2.x) ---
  {
    id: 'g_1',
    category: Category.Greetings,
    title: { en: 'Standard Opening', ar: '1.0 تحية افتتاحية' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us your name and how may I assist you?",
      ar: "حياك الله 🤝 في جوّي من stc، شرفنا باسمك و كيف أقدر أساعدك؟"
    },
    tags: ['greeting', 'opening']
  },
  {
    id: 'g_2',
    category: Category.Greetings,
    title: { en: 'Salam Greeting', ar: '1.1 تحية السلام' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc, Kindly provide us your name and how may I assist you?",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، شرفنا باسمك و كيف أقدر أساعدك؟"
    },
    tags: ['salam', 'greeting']
  },
  {
    id: 'g_3',
    category: Category.Greetings,
    title: { en: 'Opening + Phone', ar: '1.2 سلام ورقم الجوال' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc. Rest assured that I will do my best to resolve the issue. 👍🏼 Kindly provide us your phone number (preferably starting with 966).",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 مرحباً يا الغالي، وشكراً لتواصلك مع جوّي من stc. نعتذر منك على اللي صار معك 🙏 راح نسوي أفضل ما عندنا لمساعدتك، من فضلك يا ليت تزودنا بالرقم اللي تواجهك إشكالية فيه (يفضل يبدأ بـ 966)."
    },
    tags: ['phone', 'opening']
  },
  {
    id: 'g_4',
    category: Category.Greetings,
    title: { en: 'Opening + Validation', ar: '1.4 سلام وتحقق الهوية' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc. Kindly provide us owner name and last 4 digit of ID/Iqama.",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، ولا عليك امر تزودنا بالاسم وآخر اربعة أرقام من الهوية او الاقامة لمالك الرقم."
    },
    tags: ['validation', 'identity']
  },
  {
    id: 'g_5',
    category: Category.Greetings,
    title: { en: 'Opening + Order No.', ar: '1.7 سلام ورقم الطلب' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc. Kindly provide us your order number.",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، ولا عليك أمر زودنا برقم الطلب يا غالي."
    },
    tags: ['order', 'opening']
  },
  {
    id: 'g_6',
    category: Category.Greetings,
    title: { en: 'Opening + Screenshot', ar: '1.8 سلام وصورة المشكلة' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc. Rest assured that I will do my best to resolve the issue. 👍🏼 Kindly provide us a screenshot of the problem.",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، نعتذر منك على اللي صار معك 🙏 راح نسوي أفضل ما عندنا لمساعدتك، زودنا بصورة شاشة توضح المشكلة يا غالي."
    },
    tags: ['problem', 'screenshot']
  },
  {
    id: 'g_7',
    category: Category.Greetings,
    title: { en: 'Opening + Join/Add', ar: '1.9 سلام وطلب إضافة' },
    content: {
      en: "Hi 🤝, welcome to Jawwy from stc. Please provide us with the following information by copying and filling out the message:\n\nPrimary number:\nNumber you wish to add:",
      ar: "وعليكم السلام ورحمة الله وبركاته🤝 في جوّي من stc، أرجو تزويدنا بالمعلومات عن طريق نسخ الرسالة وتعبأتها:\n\nالرقم الأساسي:\nالرقم إلي حاب تضيفه:"
    },
    tags: ['join', 'add_number']
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
    title: { en: 'eSIM Profile (App)', ar: 'الشريحة المدمجة من التطبيق' },
    content: {
      en: "To get your eSIM barcode: Open App > Tap number (top right) > Profile > View eSIM Profile.",
      ar: "عزيزي تقدر تحمل الباركود الخاص بشريحتك من خلال التطبيق: افتح التطبيق > اضغط على رقمك (أعلى اليمين) > الملف الشخصي > عرض ملف تعريف الشريحة eSIM."
    },
    tags: ['esim', 'barcode']
  },
  {
    id: 'sim_3',
    category: Category.SIM,
    title: { en: 'eSIM vs Regular', ar: 'الفرق بين العادية والمدمجة' },
    content: {
      en: "Regular SIM is physical. eSIM is a digital code added to your device.",
      ar: "عزيزي الشريحة العادية هي الشريحة البلاستيكية الملموسة، أما الشريحة المدمجة عبارة عن رمز وكود يتم إضافته إلى الجهاز."
    },
    tags: ['esim', 'info']
  },
  {
    id: 'sim_4',
    category: Category.SIM,
    title: { en: 'Mawjood Service', ar: 'خدمة موجود' },
    content: {
      en: "To activate Mawjood (free): Dial *62*4000#. To cancel: Dial #62#.",
      ar: "تبي تفعل خدمة موجود المجانية؟ كل اللي عليك تتصل☎️ على الكود: *62*4000# ولو حبيت تلغيها في أي وقت، استخدم الكود: #62#"
    },
    tags: ['service', 'mawjood']
  },
  {
    id: 'sim_5',
    category: Category.SIM,
    title: { en: 'Call Waiting', ar: 'انتظار المكالمات' },
    content: {
      en: "To activate: Dial *43#. To cancel: Dial #43#.",
      ar: "تقدر تفعّل خدمة انتظار المكالمات المجانية بالاتصال☎️ على الكود: *#43 ولو حبيت تلغي الخدمة، استخدم الكود: #43#"
    },
    tags: ['service', 'waiting']
  },
  {
    id: 'sim_6',
    category: Category.SIM,
    title: { en: 'Replacement SIM 2.0', ar: 'بديلة 2.0' },
    content: {
      en: "App > Log out > Get new SIM > Replace SIM. Price: 28.75 SAR (inc. VAT). Verification required via ID/Iqama.",
      ar: "بإمكانك الحصول على شريحة بديلة من تطبيق جوّي 2.0: سجل خروج > الحصول على شريحة جديدة > استبدال الشريحة. السعر 28.75 ريال شامل الضريبة ويجب التوثيق بالهوية."
    },
    tags: ['replacement', 'sim']
  },
  {
    id: 'sim_7',
    category: Category.SIM,
    title: { en: 'Ownership Transfer 2.0', ar: 'نقل الملكية 2.0' },
    content: {
      en: "App > Manage Account > More Options > Transfer Ownership. Note: New owner needs another registered number or visit stc branch.",
      ar: "لنقل الملكية: تطبيق جوي 2.0 > إدارة الحساب > المزيد > نقل الملكية. ملاحظة: المالك الجديد يحتاج رقم مسجل بهويته، أو زيارة فرع stc مع الهوية."
    },
    tags: ['ownership', 'transfer']
  },
  {
    id: 'sim_8',
    category: Category.SIM,
    title: { en: 'Social Media Apps', ar: 'تطبيقات السوشال ميديا' },
    content: {
      en: "Social media includes: [YouTube, Facebook, Snapchat, Telegram, WhatsApp, Jaco] only. Other apps like TikTok or Google require general data.",
      ar: "أحب أوضح لك أن السوشال ميديا تشمل: [يوتيوب، فيسبوك، سناب شات، تيلجرام، واتساب، جاكو] فقط. البرامج الأخرى مثل تيك توك وبثوث قوقل تحتاج قيقا عام."
    },
    tags: ['social', 'data']
  },
  {
    id: 'sim_9',
    category: Category.SIM,
    title: { en: 'Delivery Times', ar: 'أوقات توصيل الشرائح' },
    content: {
      en: "Delivery within 48h.\nSun-Thu: 9 AM - 12 AM\nFri: 2 PM - 12 AM\nSat: 11 AM - 12 AM",
      ar: "توصيل الشرائح العادية يكون خلال 48 ساعة.\nأوقات التوصيل:\nالأحد - الخميس (9ص - 12م)\nالجمعة (2ظ - 12م)\nالسبت (11ص - 12م)"
    },
    tags: ['delivery', 'time']
  },
  {
    id: 'sim_10',
    category: Category.SIM,
    title: { en: '1.0 to 2.0 Migration', ar: 'الانتقال من 1.0 إلى 2.0' },
    content: {
      en: "The Jawwy team is currently migrating all numbers to version 2.0. You will be notified soon. You can also move to Sawa then back to Jawwy to get 2.0 immediately with compensation.",
      ar: "فريق جوّي يعمل حاليًا على نقل جميع الأرقام إلى الإصدار الجديد 2.0، وسيتم نقل رقمك قريبًا. يمكنك تغيير باقتك إلى سوا ثم العودة لجوّي لتصبح 2.0 فوراً وسيتم تعويضك."
    },
    tags: ['migration', 'update']
  },

  // --- QUERY & BILLING ---
  {
    id: 'q_1',
    category: Category.Query,
    title: { en: 'Usage/Consumption', ar: 'الاستهلاك طبيعي' },
    content: {
      en: "Based on review, your consumption is normal (100% accurate based on your usage).",
      ar: "اعتذر منك عزيزي وفقاً للمراجعة، الاستهلاك الخاص بالباقة طبيعي 100% حسب استخدامك له ولا توجد ملاحظات."
    },
    tags: ['usage', 'billing']
  },
  {
    id: 'q_2',
    category: Category.Query,
    title: { en: 'International Calls 2.0', ar: 'مكالمات دولية 2.0' },
    content: {
      en: "App > Top-up > Balance Control > Access local usage balance.",
      ar: "لإجراء المكالمات الدولية: تطبيق جوي 2.0 > شحن الرصيد > التحكم بالرصيد > الوصول إلى رصيد الاستخدام المحلي."
    },
    tags: ['intl', 'calls']
  },
  {
    id: 'q_3',
    category: Category.Query,
    title: { en: 'No Credit Calls', ar: 'مكالمات عبر الرصيد' },
    content: {
      en: "In Jawwy, you cannot call directly using credit. You must have an active bundle/add-on with local minutes.",
      ar: "نعتذر منك، لا يمكن في جوّي إجراء المكالمات باستخدام الرصيد مباشرة. يجب أن يتوفر لديك باقة أو إضافة تحتوي على دقائق اتصال محلية."
    },
    tags: ['credit', 'calls']
  },
  {
    id: 'q_4',
    category: Category.Query,
    title: { en: 'Bundle Cancellation', ar: 'شروط إلغاء الباقة' },
    content: {
      en: "Cancellation Rules: Within 48h, no usage. Credit returns to Jawwy wallet. Agree?",
      ar: "شروط إلغاء الباقة:\n- مامر عليها 48 ساعة.\n- ماعليها اي استهلاك.\nعلماً بأن الرصيد يرجع لمحفظة جوي. موافق؟"
    },
    tags: ['cancel', 'refund']
  },
  {
    id: 'q_5',
    category: Category.Query,
    title: { en: 'Buy Bundle 2.0', ar: 'شراء باقة 2.0' },
    content: {
      en: "App > Store > Choose (Bundles/Offers) > Select Bundle > Buy Now.",
      ar: "لشراء باقة: المتجر > اختر القسم (باقات - عروض) > حدد الباقة > شراء الآن."
    },
    tags: ['store', 'buy']
  },

  // --- TECHNICAL ---
  {
    id: 'tech_1',
    category: Category.Technical,
    title: { en: 'System Update', ar: 'تحديث على النظام' },
    content: {
      en: "Apologies, system updates are currently in progress. Please try again later. We appreciate your patience.🧡🙏",
      ar: "نعتذر منك، في الوقت الحالي يوجد تحديث على النظام. نرجو منك المحاولة لاحقًا، فريقنا يعمل بجهد لحل المشكلة.🧡🙏"
    },
    tags: ['tech', 'update']
  },
  {
    id: 'tech_2',
    category: Category.Technical,
    title: { en: 'Coverage Check', ar: 'التغطية والشبكة' },
    content: {
      en: "Check coverage: stc.sa. Provide location coordinates (found in brackets in Google Maps).",
      ar: "تأكد من التغطية عبر الرابط: stc.sa وزودنا بإحداثيات الموقع (تحصلها في قوقل ماب مكتوبة بين قوسين)."
    },
    tags: ['coverage', 'signal']
  },
  {
    id: 'tech_3',
    category: Category.Technical,
    title: { en: 'Enable SMS 2.0', ar: 'تفعيل الرسائل النصية' },
    content: {
      en: "App > Balance > Balance Control > Allow local usage balance.",
      ar: "لارسال رسائل: تطبيق جوي 2.0 > الرصيد > التحكم بالرصيد > السماح لرصيد الاستخدام محلياً."
    },
    tags: ['sms', 'settings']
  },
  {
    id: 'tech_4',
    category: Category.Technical,
    title: { en: 'WiFi Toggle', ar: 'قفل واي فاي' },
    content: {
      en: "Close WiFi and use Jawwy data only when using the app.",
      ar: "تأكد من إغلاق الواي فاي واستخدام بيانات جوي فقط أثناء استخدام التطبيق."
    },
    tags: ['wifi', 'app']
  },
  {
    id: 'tech_5',
    category: Category.Technical,
    title: { en: 'High Consumption Reason', ar: 'سبب الاستهلاك العالي' },
    content: {
      en: "High-quality video, OS updates, and 5G consume data significantly. Data is calculated per 1MB.",
      ar: "للتوضيح: الفيديوهات عالية الجودة، تحديثات النظام، والـ 5G يستهلكون البيانات بشكل كبير. طريقة الاحتساب تكون بالـ 1 ميجابايت."
    },
    tags: ['usage', 'data']
  },

  // --- CLOSING ---
  {
    id: 'c_1',
    category: Category.Closing,
    title: { en: 'Task Completed', ar: 'تم تنفيذ الطلب' },
    content: {
      en: "Request executed. Is there anything else I can help you with?",
      ar: "تم التنفيذ يا غالي، هل أقدر أساعدك بشي آخر؟"
    },
    tags: ['done', 'closing']
  },
  {
    id: 'c_2',
    category: Category.Closing,
    title: { en: 'Final Closing', ar: 'إنهاء المحادثة' },
    content: {
      en: "Thank you for contacting the Jawwy Care team today.🧡🙏",
      ar: "😊 شكراً لتواصلك معنا وتشرفنا بخدمتك، وتسعدنا مشاركتك بالتقييم🙏"
    },
    tags: ['feedback', 'end']
  }
];
