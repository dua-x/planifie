export type Language = 'ar' | 'fr' | 'en';

export const translations = {
  ar: {
    common: {
      demo: "عرض تجريبي مباشر",
      clientPortal: "بوابة العملاء",
      enterprise: "المؤسسات",
      methodology: "المنهجية",
      solutions: "الحلول",
      industries: "القطاعات",
      resources: "المصادر",
      contact: "اتصل بنا",
      bookDemo: "حجز موعد",
      getStarted: "ابدأ الآن"
    },
    hero: {
      tag: "بنية تحتية جاهزة للمؤسسات",
      title1: "التميز",
      title2: "التشغيلي",
      desc: "منصة متقدمة لإدارة الموارد البشرية، تحسين ذكي للمناوبات وتنسيق لوجستي في الوقت الفعلي.",
      ctaPortal: "الدخول إلى البوابة",
      ctaDemo: "شاهد العرض المباشر"
    },
    story: {
      tag: "بلانيفي، ببساطة",
      title: "كيف تقدم بلانيفي لمبتدئ؟",
      steps: [
        {
          tag: "الافتتاحية",
          title: "اللغز العملاق",
          desc: "تخيل إدارة مركز عمليات يعمل على مدار الساعة بـ 100 موظف. سارة لا يمكنها العمل ليلاً، أحمد يحتاج إلى راحة 48 ساعة، وتحتاج إلى 5 مشغلين معتمدين كل صباح. موازنة هذا الجدول يدوياً هو كابوس مع خطر دائم لنقص العمالة.",
          sub: "في الشركات الكبرى، هذا هو اللغز الذي نحله... كل صباح."
        },
        {
          tag: "المعاناة",
          title: "جحيم جداول إكسل",
          desc: "اليوم، يضيع المديرون أياماً في ملفات إكسل ضخمة. يجب عليهم التوفيق بين الإجازات، والمناوبات الليلية، والحصص القانونية. خطأ واحد صغير، وقد ينهار التنظيم بالكامل (ويخالف القانون).",
          sub: "إنه ضغط للمديرين وإحباط للموظفين."
        },
        {
          tag: "الحل",
          title: "الزر السحري",
          desc: "بلانيفي هو مساعدك الخارق. الموظفون يحددون تفضيلاتهم عبر المنصة، المدير يحدد احتياجاته، و... كليك. عقلنا الرياضي يحسب ملايين الاحتمالات لإنشاء الجدول المثالي.",
          sub: "الجميع سعداء، والقواعد محترمة بنسبة 100%."
        },
        {
          tag: "الميزة الإضافية",
          title: "الحافلة الآلية",
          desc: "بمجرد إنشاء الجدول، يعرف التطبيق بالضبط من يعمل وأين. لذا يقوم تلقائياً بتنظيم حافلات الشركة لنقل كل موظف من بيته. لا داعي لإضاعة الساعات في الاتصال بالسائقين.",
          sub: "إنه ضغط للمديرين وإحباط للموظفين."
        }
      ],
      summaryTitle: "باختصار",
      summaryDesc: "بلانيفي يوفر أياماً من العمل للمديرين، يسعد الموظفين لأننا نستمع لتفضيلاتهم، ويؤمن الشركة بتجنب الأخطاء.",
      perks: ["راحة بال أكثر", "وقت أكثر", "صفر أخطاء"]
    },
    showcase: {
      title1: "منصة واحدة،",
      title2: "ثلاث تجارب.",
      desc: "اكتشف كيف يتكيف بلانيفي مع كل عضو في مؤسستك لزيادة الكفاءة الجماعية.",
      roles: {
        admin: "مدير النظام",
        supervisor: "مشرف",
        employee: "موظف"
      }
    },
    industries: {
      tag: "لمن بلانيفي؟",
      title: "مصمم للقطاعات المتطلبة.",
      items: [
        { title: "الرعاية الصحية", desc: "المستشفيات والعيادات ذات المناوبات على مدار الساعة.", icon: "Activity" },
        { title: "اللوجستيات", desc: "إدارة السائقين ومراكز التوزيع والمستودعات.", icon: "Truck" },
        { title: "الصناعة", desc: "المصانع وخطوط الإنتاج التي تعمل بلا توقف.", icon: "Factory" },
        { title: "مراكز الاتصال", desc: "تغطية مكثفة للدعم الفني وخدمة العملاء.", icon: "Headphones" },
        { title: "التجزئة", desc: "الأسواق الكبرى وإدارة الموظفين الموسميين.", icon: "Store" }
      ]
    },
    solver: {
      title: "محرك الذكاء الاصطناعي",
      tag: "تحليل في الوقت الفعلي",
      btnRun: "بدء التحليل",
      btnRecalculate: "إعادة حساب التدفق",
      staff: "الموظفون",
      adequacy: "التوافق",
      flux: "التدفق",
      kpis: ["تغطية الاحتياجات", "صفر عجز حرج", "مؤشر الفائض المتوسط"],
      footer: "تحليل تنبؤي يعتمد على التدفقات التاريخية.",
      shifts: { m: "صباح", s: "مساء", n: "ليل", off: "راحة" }
    },
    features: {
      tag: "وحدات متكاملة",
      title1: "هيكل تشغيلي",
      title2: "عالي الكثافة.",
      desc: "بلانيفي يلبي متطلبات البيئات المعقدة التي تحتاج لتنسيق مثالي.",
      items: [
        { title: "محرك الذكاء الاصطناعي", desc: "تحسين تحت القيود عبر Google OR-Tools لتوازن مثالي بين العمل والراحة." },
        { title: "متعدد الكيانات", desc: "إدارة هرمية: أقسام، منظمات وفرق مع فصل تام للبيانات." },
        { title: "الموارد البشرية", desc: "إدارة ذاتية للتوافر، الإجازات ونظام تبادل المناوبات المعتمد." },
        { title: "اللوجستيات", desc: "حساب تلقائي لاحتياجات النقل وتخصيص ذكي لخطوط الحافلات." }
      ]
    },
    technologies: {
      tag: "التقنيات الحديثة",
      title: "بنية تكنولوجية",
      title2: "عالية الأداء.",
      desc: "نعتمد على نظام بيئي تكنولوجي متطور يجمع بين قوة الذكاء الاصطناعي ومرونة الواجهات الحديثة.",
      frontend: "واجهة المستخدم",
      backend: "الخادم والبيانات",
      engine: "محرك التحسين",
      infra: "البنية التحتية"
    },
    testimonials: {
      tag: "كلمات الخبراء",
      title: "التأثير الحقيقي على عملياتكم.",
      items: [
        {
          quote: "منذ تطبيق بلانيفي، خفضنا بنسبة 40% الوقت المستغرق في إنشاء الجداول. مركزية البيانات تسمح لنا باستجابة غير مسبوقة.",
          author: "سارة ك.",
          role: "مديرة الموارد البشرية",
          company: "ترانس-مغرب لوجستيك"
        },
        {
          quote: "محرك التحسين هو تغيير جذري. يدير القيود المعقدة لفرقنا 24/7 مع الاحترام التام لراحة موظفينا.",
          author: "كريم م.",
          role: "مدير العمليات",
          company: "غلوبال تيك سيرفيسز"
        }
      ]
    },
    enterprise: {
      title1: "بلانيفي",
      title2: "للمؤسسات.",
      desc: "حلول مخصصة للمنظمات المتطلبة. نشر سحابي آمن أو بنية تحتية محلية.",
      cards: [
        {
          title: "سحابة قياسية",
          features: ["استضافة عالية التوفر", "تحديثات تلقائية", "دعم فني", "حتى 500 موظف"],
          cta: "عرض الأسعار"
        },
        {
          tag: "موصى به",
          title: "محلي / مخصص",
          features: ["تثبيت على الخوادم", "عزل تام للبيانات", "تكامل SSO / AD", "مرافقة و SLA"],
          cta: "طلب عرض سعر"
        }
      ]
    },
    pricing: {
      tag: "الأسعار والاشتراكات",
      title1: "خطط مرنة",
      title2: "لجميع الشركات.",
      desc: "اختر الخطة التي تناسب حجم مؤسستك. حلول متكاملة بالدينار الجزائري تضمن لك الكفاءة التشغيلية.",
      currency: "د.ج",
      period: "/ شهر",
      customPrice: "حسب المقاس",
      cards: [
        {
          title: "Starter (الرقمنة)",
          price: "35,000",
          features: [
            "حتى 100 موظف - مثالية للمؤسسات الناشئة",
            "ملفات الموظفين الرقمية (العقود، الوثائق، الشهادات)",
            "نظام آلي لطلبات الإجازات والغيابات",
            "تنبيهات انتهاء صلاحية الوثائق (تأشيرات، فحوصات)",
            "بوابة موظفين للخدمة الذاتية (ويب وهاتف)",
            "جدولة مناوبات يدوية مع كشف التعارض",
            "استضافة سيادية داخل الجزائر (حماية البيانات)",
            "رسوم التثبيت: 80,000 د.ج (تدفع مرة واحدة)"
          ],
          cta: "ابدأ الرقمنة"
        },
        {
          tag: "الأكثر طلباً",
          title: "باقة Pro (الذكاء الاصطناعي)",
          price: "75,000",
          features: [
            "حتى 500 موظف - للمؤسسات المتنامية",
            "كل ما في باقة Starter بالإضافة إلى:",
            "محرك الذكاء الاصطناعي لتوليد الجداول تلقائياً",
            "الامتثال القانوني الآلي (ساعات العمل، الراحة الإجبارية)",
            "توزيع المناوبات بناءً على المهارات والشهادات",
            "تحليلات إنتاجية وتكاليف العمالة في الوقت الفعلي",
            "نظام تبادل المناوبات المعتمد بين الموظفين",
            "رسوم التثبيت: 150,000 د.ج (تشمل نمذجة القواعد)",
            "دعم فني هاتفي ذو أولوية 5/7"
          ],
          cta: "انتقل للذكاء الاصطناعي"
        },
        {
          title: "باقة Corporate (العمليات)",
          price: "150,000",
          features: [
            "عدد موظفين غير محدود - للمجموعات الكبرى",
            "كل ما في باقة Pro بالإضافة إلى:",
            "وحدة النقل اللوجستي وتخطيط الحافلات الآلي",
            "التخطيط المتقاطع بين الأقسام والمواقع المتعددة",
            "إمكانية التثبيت المحلي (On-Premise) على خوادمكم",
            "ربط مباشر مع أنظمة ERP (Odoo, SAP, Sage)",
            "دخول موحد (SSO) وتكامل مع Active Directory",
            "اتفاقية مستوى خدمة (SLA) ودعم 24/7",
            "مدير حساب مخصص للمرافقة والنجاح"
          ],
          cta: "طلب عرض سعر مفصل"
        }
      ],
      paymentMethod: "طرق الدفع المتاحة محلياً ودولياً",
      payments: ["Edahabia", "CIB", "Visa", "Mastercard"],
      calculator: {
        title: "احسب تكلفتك المخصصة",
        employees: "عدد الموظفين",
        planningUnits: "وحدات التخطيط المستقلة",
        unlimitedMention: "منظمات وفرق غير محدودة لكل وحدة",
        admins: "مسؤولي النظام (Admins)",
        supervisors: "المشرفين (Supervisors)",
        ia: "تفعيل الذكاء الاصطناعي",
        total: "الإجمالي الشهري",
        setup: "رسوم التثبيت والنمذجة (مرة واحدة)",
        cta: "طلب عرض سعر رسمي"
      }
    },
    booking: {
      tag: "الأجندة مفتوحة",
      title1: "انتقل إلى",
      title2: "السرعة القصوى.",
      desc: "احجز جلسة مخصصة لمدة 20 دقيقة لاكتشاف كيف يمكن لبلانيفي تحويل إدارتكم للموارد البشرية واللوجستيات.",
      cta: "تحديد موعدي",
      sub: "لا يلزم وجود بطاقة"
    },
    navbar: {
      pilotage: "إدارة الموارد البشرية",
      optimization: "التحسين الذكي",
      logistique: "اللوجستيات",
      services: "الخدمات والصحة",
      informer: "ابق على اطلاع",
      support: "الدعم الفني",
      explore: "استكشف المنصة",
      clientsCount: "+0 مؤسسة تحسن وقتها",
      startProject: "ابدأ مشروعك"
    },
    resources_detail: {
      "etudes-cas": { name: "دراسات الحالة", desc: "اكتشف نجاحات عملائنا" },
      "blog": { name: "مدونة الخبراء", desc: "نصائح في التخطيط" },
      "centre-aide": { name: "مركز المساعدة", desc: "أدلة توضيحية" },
      "webinaires": { name: "ندوات عبر الويب", desc: "عروض مباشرة" }
    },
    help_center: {
      title: "مركز المساعدة",
      subtitle: "اعثر على الأجوبة والأدلة لإتقان استخدام بلانيفي.",
      searchPlaceholder: "ابحث عن دليل، قاعدة عمل...",
      categories: [
        { id: "start", title: "الرقمنة الشاملة", desc: "اكتشف مفهوم الملفات الرقمية المركزية لجميع موظفيك.", icon: "Zap", slug: "dossiers-collaborateurs" },
        { id: "admin", title: "الحوكمة والقيادة", desc: "تعلم كيفية إدارة الكيانات المتعددة والصلاحيات المتقدمة.", icon: "Shield", slug: "multi-entites" },
        { id: "ia", title: "ذكاء العمليات", desc: "استكشف مفهوم التحسين الرياضي لإنتاج جداول مثالية.", icon: "Bot", slug: "planning-intelligent" },
        { id: "mobile", title: "استقلالية الموظف", desc: "فهم تجربة الموظف الذاتية عبر منصة الخدمة الشاملة.", icon: "Smartphone", slug: "portail-self-service" }
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "كيف يعمل تحسين الذكاء الاصطناعي؟", a: "يستخدم محركنا Google OR-Tools لتحليل ملايين الاحتمالات مع احترام قيودك (الراحة القانونية، المهارات، الرغبات) لإيجاد الجدول الأمثل رياضياً." },
        { q: "كيف يتم تأمين بياناتنا؟", a: "يتم استضافة جميع البيانات على خوادم سيادية داخل الجزائر مع تشفير كامل وفصل تام بين الشركات لضمان أقصى درجات الخصوصية والأمان." },
        { q: "هل يدعم النظام الربط مع أنظمة أخرى؟", a: "نعم، يوفر بلانيفي واجهات برمجة تطبيقات (API) وموصلات مباشرة لأنظمة ERP المشهورة مثل Odoo وSAP لمزامنة بيانات الموظفين والأجور." },
        { q: "هل يمكنني تعديل الجدول بعد توليده؟", a: "نعم، يسمح لك وضع 'التعديل اليدوي' بضبط أي مناوبة. ينبهك النظام فوراً إذا كان تعديلك ينتهك قاعدة عمل." }
      ],
      ctaTitle: "هل ما زلت بحاجة للمساعدة؟",
      ctaDesc: "خبراؤنا متاحون لمرافقتك في إعداداتك الخاصة.",
      ctaBtn: "اتصل بالدعم الفني"
    },
    footer: {
      desc: "حلول برمجية متقدمة للإدارة التشغيلية وتخطيط الموارد البشرية.",
      product: "المنتج",
      legal: "قانوني",
      rights: "جميع الحقوق محفوظة."
    },
    solutions_detail: {
      "dossiers-collaborateurs": {
        title: "ملفات الموظفين",
        tagline: "بنية آمنة لبيانات الموارد البشرية",
        heroDesc: "مركزية كامل دورة الحياة الإدارية لمواهبك على منصة سيادية وعالية الأمان.",
        benefits: [
          { title: "وثائق معتمدة", desc: "إدارة العقود والملحقات والشهادات مع تنبيهات الصلاحية." },
          { title: "سجل تاريخي كامل", desc: "تتبع زمني للتعيينات، الترقيات، والتطور الوظيفي." },
          { title: "الخدمة الذاتية", desc: "بوابة مخصصة تتيح للموظفين تحديث معلوماتهم الشخصية." }
        ],
        sections: [
          {
            title: "خزنة رقمية للمؤسسة",
            desc: "تخزين مشفر للمستندات الحساسة. وداعاً للملفات الورقية، مع إمكانية الوصول الفوري وتتبع كامل للعمليات.",
            capture: "نظام الأرشفة الآمن"
          },
          {
            title: "إدارة المؤهلات",
            desc: "التأكد من امتلاك كل موظف للشهادات المطلوبة لمنصبه. النظام يمنع تلقائياً التكليفات غير المتوافقة.",
            capture: "مصفوفة المهارات"
          }
        ]
      },
      "transport-logistique": {
        title: "النقل واللوجستيات",
        tagline: "النقل المؤتمت للموظفين",
        heroDesc: "تحسين تنقل فرقك بفضل إدارة ذكية لخطوط الحافلات متزامنة مع جداول العمل.",
        benefits: [
          { title: "تغطية جغرافية", desc: "إدارة دقيقة لمناطق التجمع ونقاط الاهتمام حسب الأحياء." },
          { title: "توزيع آلي", desc: "يقوم النظام تلقائياً بتخصيص كل موظف للخط المناسب حسب مناوبته." },
          { title: "لوحة تحكم السائق", desc: "قوائم ركاب محدثة في الوقت الفعلي لتنسيق مثالي." }
        ],
        sections: [
          {
            title: "إدارة الخطوط والمناطق",
            desc: "حدد مسارات النقل وسعات المركبات ومناطق التغطية. شاهد كثافة المشتركين حسب القطاع.",
            capture: "مصفوفة النقل"
          },
          {
            title: "جدولة التناوب",
            desc: "تزامن تام مع المناوبات. عند توليد الجدول، يتم حساب احتياجات النقل فوراً.",
            capture: "جدول التخصيص"
          }
        ]
      },
      "workflows-conges": {
        title: "سير عمل العطل",
        tagline: "اعتماد مؤتمت وأرصدة محدثة لحظياً",
        heroDesc: "إزالة النماذج الورقية وتسهيل التواصل بين الموظفين والمديرين لإدارة الغيابات.",
        benefits: [
          { title: "دورة اعتماد مرنة", desc: "سير عمل متعدد المستويات قابل للتخصيص (مدير مباشر > موارد بشرية > إدارة)." },
          { title: "حساب تلقائي", desc: "تحديث فوري لأرصدة العطل المتبقية بعد كل عملية اعتماد." },
          { title: "جدول مشترك", desc: "رؤية شاملة لجدول الفريق لتجنب نقص العمالة الحرج." }
        ],
        sections: [
          {
            title: "طلب مبسط",
            desc: "يقدم الموظف طلبه في 5 ثوانٍ من هاتفه. يتحقق النظام تلقائياً من التوافق مع الجدول الحالي.",
            capture: "بوابة طلبات الغياب"
          },
          {
            title: "محرك التنبيهات",
            desc: "تنبيهات تلقائية عبر البريد الإلكتروني والرسائل القصيرة لكل مرحلة من مراحل سير العمل.",
            capture: "مركز التنبيهات"
          }
        ]
      },
      "portail-self-service": {
        title: "بوابة الخدمة الذاتية",
        tagline: "استقلالية ومرونة الموظف",
        heroDesc: "امنح فرقك الأدوات اللازمة لإدارة حياتهم المهنية بشكل مستقل: جداول العمل، العطل، وتبادل المناوبات.",
        benefits: [
          { title: "مركز التحكم الشخصي", desc: "لوحة تحكم موحدة لكل موظف لمتابعة جداوله، أرصدته، ومهامه." },
          { title: "سوق التبادل", desc: "إمكانية اقتراح تبادل المناوبات مع الزملاء المؤهلين بكل سهولة." },
          { title: "شفافية مطلقة", desc: "وصول فوري لكشوف الأجور والشهادات الإدارية في أي وقت." }
        ],
        sections: [
          {
            title: "التبادلات والتحويلات",
            desc: "نظام تفاعلي يتيح للموظفين طلب تبادل المناوبات. يقوم المحرك تلقائياً بالتحقق من الامتثال القانوني قبل موافقة المدير.",
            capture: "واجهة تبادل المناوبات"
          },
          {
            title: "إدارة التفضيلات",
            desc: "يحدد الموظفون تفضيلاتهم للراحة وتوافرهم مباشرة من هواتفهم الذكية للتأثير على الجداول القادمة.",
            capture: "مركز الرغبات المحمول"
          }
        ]
      },
      "planning-intelligent": {
        title: "التخطيط الذكي",
        tagline: "محرك التحسين الرياضي",
        heroDesc: "تحويل القيود المعقدة إلى جداول مثالية بفضل محرك الحلول المعتمد على الذكاء الاصطناعي.",
        benefits: [
          { title: "الامتثال القانوني", desc: "ضمان الالتزام الصارم بقانون العمل والاتفاقيات الداخلية للمؤسسة." },
          { title: "العدالة الاجتماعية", desc: "خوارزمية تضمن توزيعاً عادلاً للمناوبات الصعبة وأيام الراحة." },
          { title: "تصدير موحد", desc: "توليد فوري للجداول بصيغ PDF أو Excel مع مزامنة تلقائية للتطبيقات." }
        ],
        sections: [
          {
            title: "التخطيط المسبق الاستراتيجي",
            desc: "قم بإعداد دورات العمل مسبقاً. حدد المناوبات النموذجية والمهام الثابتة قبل تشغيل تحسين الذكاء الاصطناعي.",
            capture: "واجهة الإعداد المسبق"
          },
          {
            title: "حل تحت القيود",
            desc: "يحلل ذكاؤنا الاصطناعي احتياجات العمالة والمهارات المطلوبة وتفضيلات الموظفين في وقت واحد.",
            capture: "مصور حلول الذكاء الاصطناعي"
          },
          {
            title: "التعديل اليدوي المدعوم",
            desc: "حافظ على السيطرة الكاملة. قم بتعديل أي مهمة بعد التوليد. ينبهك النظام في الوقت الفعلي إذا انتهك التغيير قاعدة عمل.",
            capture: "محرر الجدول التفاعلي"
          },
          {
            title: "تعديل ديناميكي",
            desc: "حدث طارئ؟ يسمح النظام بإعادة حساب جزء من الجدول فوراً لمواجهة الغيابات المفاجئة.",
            capture: "وضع التعديل السريع"
          }
        ]
      },
      "equite-contraintes": {
        title: "العدالة والقيود",
        tagline: "موازنة ذكية لظروف العمل",
        heroDesc: "نظام متقدم لإدارة قواعد العمل المعقدة يضمن توزيعاً عادلاً للمهام مع الاحترام الصارم للقوانين.",
        benefits: [
          { title: "محرك القواعد", desc: "تطبيق تلقائي لقوانين العمل والاتفاقيات الجماعية للمؤسسة." },
          { title: "مؤشر العدالة", desc: "خوارزمية تمنع تراكم الساعات الإضافية أو المناوبات المتتالية المرهقة لنفس الشخص." },
          { title: "إدارة الكفاءات", desc: "ربط كل مناوبة بالمهارات المطلوبة لضمان جودة الخدمة." }
        ],
        sections: [
          {
            title: "نمذجة القيود",
            desc: "حدد فترات الراحة الإجبارية، الحد الأقصى لساعات العمل، والمهارات الحرجة. يقوم النظام بدمجها في كل عملية حسابية.",
            capture: "محرر قواعد العمل"
          },
          {
            title: "تحليل التوازن",
            desc: "راقب توزيع ضغط العمل بين الفرق لضمان بيئة عمل صحية ومنصفة للجميع.",
            capture: "تقرير توزيع المهام"
          }
        ]
      },
      "multi-entites": {
        title: "تعدد الكيانات",
        tagline: "إدارة هرمية للمجموعات الكبرى",
        heroDesc: "بنية مرنة تسمح بإدارة عدة فروع أو منظمات تحت منصة واحدة مع فصل تام للبيانات.",
        benefits: [
          { title: "هيكلية مرنة", desc: "تقسيم المؤسسة إلى منظمات، أقسام، وفرق حسب حاجتكم." },
          { title: "عزل البيانات", desc: "خصوصية كاملة لكل فرع مع إمكانية الإشراف المركزي للإدارة العامة." },
          { title: "مستويات الوصول", desc: "نظام صلاحيات متقدم (RBAC) يحدد بدقة من يمكنه رؤية أو تعديل المعلومات." }
        ],
        sections: [
          {
            title: "شجرة التنظيم",
            desc: "بناء الهيكل التنظيمي للمؤسسة بسهولة. ربط الموظفين والمديرين بوحداتهم الإدارية بدقة.",
            capture: "محرر الهيكل التنظيمي"
          },
          {
            title: "صلاحيات المشرفين (RBAC)",
            desc: "تحكم كامل في ما يمكن لكل مشرف رؤيته أو القيام به. تعيين مسؤولين لمنظمات محددة أو أقسام معينة مع عزل تام للمعلومات الحساسة.",
            capture: "إدارة أدوار المستخدمين"
          },
          {
            title: "الإشراف المركزي",
            desc: "لوحة تحكم للمديرين العامين لمتابعة أداء جميع الفروع في وقت واحد مع إمكانية التعمق في تفاصيل كل فريق.",
            capture: "لوحة القيادة الموحدة"
          }
        ]
      },
      "analytics-kpis": {
        title: "التحليلات والمؤشرات",
        tagline: "اتخاذ القرار بناءً على البيانات",
        heroDesc: "حول بيانات الحضور والغياب إلى رؤى استراتيجية لتحسين إنتاجية مؤسستك وتقليل التكاليف.",
        benefits: [
          { title: "تقارير حية", desc: "توليد تلقائي لمؤشرات الأداء الرئيسية (KPIs) دون تدخل يدوي." },
          { title: "تتبع الغيابات", desc: "تحليل أسباب وأنماط الغياب لتحديد المشاكل التنظيمية مبكراً." },
          { title: "توقعات التكلفة", desc: "تقدير تكاليف العمالة والعمل الإضافي قبل تنفيذ الجداول." }
        ],
        sections: [
          {
            title: "مركز الإحصائيات",
            desc: "رسوم بيانية تفاعلية تعرض معدلات الإشغال، توزيع الساعات، ونسب الغياب لكل قسم.",
            capture: "لوحة المؤشرات التشغيلية"
          },
          {
            title: "تقارير التصدير",
            desc: "استخراج البيانات بصيغ احترافية (PDF, Excel) لتقديمها في اجتماعات الإدارة أو دمجها مع نظام الأجور.",
            capture: "مولد التقارير المتقدم"
          }
        ]
      }
    }
  },
  fr: {
    common: {
      demo: "Démo Live",
      clientPortal: "Portail Client",
      enterprise: "Enterprise",
      methodology: "Méthodologie",
      solutions: "Solutions",
      industries: "Secteurs",
      resources: "Ressources",
      contact: "Contact",
      bookDemo: "Réserver une démo",
      getStarted: "Accéder au portail"
    },
    hero: {
      tag: "Infrastructure Enterprise Ready",
      title1: "L'Excellence",
      title2: "Opérationnelle.",
      desc: "Plateforme avancée de gestion des ressources humaines, optimisation intelligente des shifts et coordination logistique temps-réel.",
      ctaPortal: "Accéder au portail",
      ctaDemo: "Voir la démo live"
    },
    story: {
      tag: "Planifié, Simplement",
      title: "Comment présenter Planifié à un novice ?",
      steps: [
        {
          tag: "L'ACCROCHE",
          title: "Le Puzzle Géant",
          desc: "Imaginez gérer un centre d'opérations 24/7 with 100 employés. Sarah ne peut pas travailler de nuit, David a besoin de 48h de repos, et vous devez avoir 5 opérateurs certifiés chaque matin. Équilibrer ce planning à la main est un cauchemar avec un risque constant de sous-effectif.",
          sub: "Dans les grandes entreprises, c'est ce puzzle qu'on résout... tous les matins."
        },
        {
          tag: "LA DOULEUR",
          title: "L'Enfer des Tableaux Excel",
          desc: "Aujourd'hui, les managers perdent des journées sur des fichiers Excel géants. Ils doivent jongler entre les congés, les nuits déjà travaillées et les quotas légaux. Une seule petite erreur, et c'est toute l'organisation (et la loi) qui trinque.",
          sub: "C'est du stress pour les chefs et de la frustration pour les équipes."
        },
        {
          tag: "LA SOLUTION",
          title: "Le Bouton Magique",
          desc: "Planifié est votre super-assistant. Les employés indiquent leurs préférences sur la plateforme, le patron donne ses besoins, et... CLIC. Notre cerveau mathématique calcule des millions de combinaisons pour créer l'emploi du temps parfait.",
          sub: "Tout le monde est content, et les règles sont respectées à 100%."
        },
        {
          tag: "LE PETIT PLUS",
          title: "Le Bus Automatique",
          desc: "Une fois le planning créé, l'application sait exactement qui travaille et où. Elle organise donc toute seule les navettes de l'entreprise pour aller chercher chaque employé chez lui. Plus besoin de passer des heures au téléphone avec les chauffeurs.",
          sub: "C'est de la logistique invisible et sans effort."
        }
      ],
      summaryTitle: "En résumé",
      summaryDesc: "Planifié fait gagner des jours de travail aux managers, rend les employés heureux car on écoute leurs préférences, et sécurise l'entreprise en évitant les erreurs.",
      perks: ["+ de Sérénité", "+ de Temps", "0 Erreur"]
    },
    showcase: {
      title1: "Une Plateforme,",
      title2: "Trois Expériences.",
      desc: "Découvrez comment Planifié s'adapte à chaque membre de votre organisation pour maximiser l'efficacité collective.",
      roles: {
        admin: "Administrateur",
        supervisor: "Superviseur",
        employee: "Collaborateur"
      }
    },
    industries: {
      tag: "Pour qui ?",
      title: "Conçu pour les secteurs exigeants.",
      items: [
        { title: "Santé & Hôpitaux", desc: "Gestion des gardes et rotations 24/7 du personnel médical.", icon: "Activity" },
        { title: "Logistique & Transport", desc: "Planification des chauffeurs and gestion des hubs de distribution.", icon: "Truck" },
        { title: "Industrie & Usines", desc: "Lignes de production continues nécessitant un effectif constant.", icon: "Factory" },
        { title: "Centres d'Appels", desc: "Couverture optimale pour le support technique et le service client.", icon: "Headphones" },
        { title: "Grande Distribution", desc: "Supermarchés et gestion flexible des employés en magasin.", icon: "Store" }
      ]
    },
    solver: {
      title: "Planifie IA solver",
      tag: "Analyse en temps réel",
      btnRun: "Lancer l'Analyse",
      btnRecalculate: "Recalculer le Flux",
      staff: "Effectif",
      adequacy: "Adéquation",
      flux: "Flux",
      kpis: ["Couverture des Besoins", "Zéro Déficit Critique", "Indice de Surplus Moyen"],
      footer: "Analyse prédictive basée sur les flux historiques.",
      shifts: { m: "Matin", s: "Soir", n: "Nuit", off: "Repos" }
    },
    features: {
      tag: "Modules Intégrés",
      title1: "Architecture haute",
      title2: "densité opérationnelle.",
      desc: "Planifié répond aux exigences des environnements complexes nécessitant une coordination parfaite.",
      items: [
        { title: "Moteur IA", desc: "Optimisation sous contraintes via Google OR-Tools pour un équilibre parfait charge/repos." },
        { title: "Multi-Entités", desc: "Gestion hiérarchique : Départements, Organisations et Équipes avec cloisonnement étanche." },
        { title: "RH & Social", desc: "Gestion autonome des disponibilités, congés et système de permutation certifié par responsable." },
        { title: "Logistique", desc: "Calcul automatique des besoins en transport et affectation optimisée aux lignes de navettes." }
      ]
    },
    technologies: {
      tag: "Stack Technologique",
      title: "Une architecture",
      title2: "robuste & moderne.",
      desc: "Nous utilisons les technologies les plus avancées pour garantir performance, sécurité et évolutivité.",
      frontend: "Interface Utilisateur",
      backend: "Serveur & Données",
      engine: "Moteur d'Optimisation",
      infra: "Infrastructure"
    },
    testimonials: {
      tag: "Paroles d'experts",
      title: "L'impact réel sur vos opérations.",
      items: [
        {
          quote: "Depuis l'implémentation de Planifié, nous avons réduit de 40% le temps passé sur la création des plannings. La centralisation des données nous permet une réactivité sans précédent.",
          author: "Sarah K.",
          role: "Directrice des Ressources Humaines",
          company: "Trans-Maghreb Logistics"
        },
        {
          quote: "Le moteur d'optimisation IA est un game-changer. Il gère les contraintes complexes de nos équipes 24/7 tout en respectant scrupuleusement le bien-être de nos collaborateurs.",
          author: "Karim M.",
          role: "Directeur des Opérations",
          company: "Global Tech Services"
        }
      ]
    },
    enterprise: {
      title1: "Planifié",
      title2: "Enterprise.",
      desc: "Des solutions sur-mesure pour les organisations exigeantes. Déploiement Cloud sécurisé ou infrastructure On-Premise.",
      cards: [
        {
          title: "Standard Cloud",
          features: ["Hébergement Haute Dispo", "Mises à jour automatiques", "Support technique", "Jusqu'à 500 collaborateurs"],
          cta: "Consulter les tarifs"
        },
        {
          tag: "Recommandé",
          title: "On-Premise / Dédié",
          features: ["Installation sur serveurs", "Isolation totale des données", "Intégration SSO / AD", "Accompagnement & SLA"],
          cta: "Demander un devis"
        }
      ]
    },
    pricing: {
      tag: "Abonnements & Tarifs",
      title1: "Des plans adaptés",
      title2: "à votre taille.",
      desc: "Choisissez le plan qui correspond à votre organisation. Des solutions complètes en Dinars Algériens (DZD) pour une efficacité maximale.",
      currency: "DZD",
      period: "/ mois",
      customPrice: "Sur devis",
      cards: [
        {
          title: "Starter (Digitalisation)",
          price: "35 000",
          features: [
            "Jusqu'à 100 collaborateurs - Idéal PME",
            "Dossiers RH numériques (Contrats, documents, diplômes)",
            "Workflows automatisés de congés & absences",
            "Alertes expiration documents (Visas, visites médicales)",
            "Portail employé Self-Service (Web & Mobile)",
            "Planning manuel avec détection de conflits",
            "Hébergement souverain en Algérie (Sécurité des données)",
            "Mise en service : 80 000 DZD (une fois)"
          ],
          cta: "Lancer la digitalisation"
        },
        {
          tag: "Populaire",
          title: "Pro (Intelligence Artificielle)",
          price: "75 000",
          features: [
            "Jusqu'à 500 collaborateurs - Pour entreprises en croissance",
            "Tout ce qui est dans Starter, plus :",
            "Moteur IA de génération automatique de plannings",
            "Conformité légale automatisée (Repos, quotas d'heures)",
            "Affectation par compétences et certifications",
            "Analytiques de productivité et coûts de main-d'œuvre",
            "Système de permutation de shifts entre employés",
            "Mise en service : 150 000 DZD (Inclus modélisation métier)",
            "Support téléphonique prioritaire 5j/7"
          ],
          cta: "Passer à l'IA"
        },
        {
          title: "Corporate (Opérations)",
          price: "150,000",
          features: [
            "Nombre de collaborateurs illimité - Grands Groupes",
            "Tout ce qui est dans Pro, plus :",
            "Module Logistique & Planification des navettes auto",
            "Planning croisé multi-départements et multi-sites",
            "Déploiement On-Premise (Serveurs locaux) disponible",
            "Connecteurs ERP directs (Odoo, SAP, Sage)",
            "Authentification SSO et intégration Active Directory",
            "Engagement de service (SLA) & Support 24/7",
            "Account Manager dédié pour votre succès"
          ],
          cta: "Demander un devis détaillé"
        }
      ],
      paymentMethod: "Paiements locaux et internationaux acceptés",
      payments: ["Edahabia", "CIB", "Visa", "Mastercard"],
      calculator: {
        title: "Calculez votre tarif personnalisé",
        employees: "Nombre d'employés",
        planningUnits: "Unités de Planification",
        unlimitedMention: "Organisations & Équipes illimitées par unité",
        admins: "Administrateurs (Full)",
        supervisors: "Superviseurs (Planning)",
        ia: "Activation de l'IA",
        total: "Total Mensuel",
        setup: "Mise en service (une fois)",
        cta: "Demander un devis officiel"
      }
    },
    booking: {
      tag: "Agenda Ouvert",
      title1: "Passez à la",
      title2: "vitesse supérieure.",
      desc: "Réservez une session personnalisée de 20 minutes pour découvrir comment Planifié peut transformer votre gestion RH & Logistique.",
      cta: "Planifier mon rendez-vous",
      sub: "Pas de carte requise"
    },
    navbar: {
      pilotage: "PILOTAGE RH",
      optimization: "OPTIMISATION",
      logistique: "LOGISTIQUE",
      services: "SERVICES & SANTÉ",
      informer: "S'INFORMER",
      support: "SUPPORT",
      explore: "Explorer la plateforme",
      clientsCount: "+0 entreprises optimisent leur temps",
      startProject: "Démarrer un projet"
    },
    resources_detail: {
      "etudes-cas": { name: "Études de Cas", desc: "Découvrez les succès de nos clients" },
      "blog": { name: "Blog Expert RH", desc: "Tendances et conseils en planification" },
      "centre-aide": { name: "Centre d'Aide", desc: "Guides et documentation technique" },
      "webinaires": { name: "Webinaires", desc: "Démos live et sessions de formation" }
    },
    help_center: {
      title: "Centre d'Aide",
      subtitle: "Trouvez des réponses et des guides pour maîtriser Planifié.",
      searchPlaceholder: "Rechercher un tutoriel, une règle...",
      categories: [
        { id: "start", title: "Digitalisation RH", desc: "Le concept de dossier numérique centralisé pour vos talents.", icon: "Zap", slug: "dossiers-collaborateurs" },
        { id: "admin", title: "Gouvernance", desc: "Gérer le multi-entités et les permissions avancées du groupe.", icon: "Shield", slug: "multi-entites" },
        { id: "ia", title: "Intelligence IA", desc: "L'optimisation mathématique pour des plannings sans erreur.", icon: "Bot", slug: "planning-intelligent" },
        { id: "mobile", title: "Autonomie Salarié", desc: "L'expérience self-service pour les congés et échanges.", icon: "Smartphone", slug: "portail-self-service" }
      ],
      faqTitle: "Questions Fréquentes",
      faqs: [
        { q: "Comment fonctionne l'optimisation IA ?", a: "Notre moteur utilise Google OR-Tools pour analyser des millions de combinaisons en respectant vos contraintes (repos légaux, compétences, vœux) pour trouver le planning mathématiquement optimal." },
        { q: "Comment mes données sont-elles sécurisées ?", a: "Les données sont hébergées sur des serveurs souverains en Algérie avec chiffrement complet et isolation totale entre entreprises." },
        { q: "Peut-on coupler Planifié à un ERP ?", a: "Oui, nous proposons des connecteurs API pour synchroniser Planifié avec Odoo, SAP ou vos logiciels de paie existants." },
        { q: "Puis-je modifier un planning après sa génération ?", a: "Oui, le mode 'Édition Manuelle' vous permet d'ajuster n'importe quel shift. Le système vous alerte immédiatement si votre modification enfreint une règle métier." }
      ],
      ctaTitle: "Toujours besoin d'aide ?",
      ctaDesc: "Nos experts sont disponibles pour vous accompagner dans votre configuration.",
      ctaBtn: "Contacter le support"
    },
    footer: {
      desc: "Solutions logicielles avancées pour la gestion opérationnelle et la planification de ressources humaines.",
      product: "Produit",
      legal: "Légal",
      rights: "Tous droits réservés."
    },
    solutions_detail: {
      "dossiers-collaborateurs": {
        title: "Dossiers Collaborateurs",
        tagline: "Architecture de données RH sécurisée",
        heroDesc: "Centralisez l'intégralité du cycle de vie administratif de vos talents sur une plateforme souveraine et hautement sécurisée.",
        benefits: [
          { title: "Documents Certifiés", desc: "Gestion des contrats, avenants et certifications avec alertes de validité." },
          { title: "Historique Complet", desc: "Suivi chronologique des affectations, promotions et évolutions de carrière." },
          { title: "Self-Service", desc: "Portail dédié permettant aux employés de mettre à jour leurs informations personnelles." }
        ],
        sections: [
          {
            title: "Coffre-fort numérique entreprise",
            desc: "Stockage chiffré des documents sensibles. Fini les classeurs physiques, accédez aux dossiers contractuels en un clic avec une traçabilité totale des accès.",
            capture: "Système d'Archivage Sécurisé"
          },
          {
            title: "Gestion des habilitations",
            desc: "Assurez-vous que chaque collaborateur possède les certifications requises pour son poste. Le système bloque automatiquement les affectations non conformes.",
            capture: "Matrice des Compétences"
          }
        ]
      },
      "transport-logistique": {
        title: "Transport & Logistique",
        tagline: "Ramassage automatisé du personnel",
        heroDesc: "Optimisez la mobilité de vos équipes grâce à une gestion intelligente des lignes de navettes synchronisée avec vos plannings.",
        benefits: [
          { title: "Maillage Géographique", desc: "Gestion précise des zones de ramassage et des points d'intérêt par quartier." },
          { title: "Affectation Auto", desc: "Le système assigne automatiquement chaque employé à la ligne adéquate selon son shift." },
          { title: "Dashboard Chauffeur", desc: "Listes de passagers à jour en temps réel pour une coordination sans faille." }
        ],
        sections: [
          {
            title: "Gestion des Lignes & Zones",
            desc: "Définissez vos circuits de transport, les capacités des véhicules et les zones de couverture. Visualisez la densité de vos abonnés par secteur.",
            capture: "Matrice de Transport"
          },
          {
            title: "Planning de Rotation",
            desc: "Synchronisation totale avec les shifts. Lorsqu'un planning est généré, les besoins en transport sont calculés instantanément.",
            capture: "Tableau d'Affectation"
          }
        ]
      },
      "workflows-conges": {
        title: "Workflows de Congés",
        tagline: "Validation automatisée et soldes temps-réel",
        heroDesc: "Éliminez les formulaires papier et fluidifiez la communication entre collaborateurs et managers pour la gestion des absences.",
        benefits: [
          { title: "Circuit Agile", desc: "Validation multiniveau personnalisable (Manager direct > RH > Direction)." },
          { title: "Calcul Automatique", desc: "Mise à jour instantanée des soldes de congés et reliquats après chaque approbation." },
          { title: "Calendrier Partagé", desc: "Vue d'ensemble du planning d'équipe pour éviter les sous-effectifs critiques." }
        ],
        sections: [
          {
            title: "Demande simplifiée",
            desc: "L'employé soumet sa demande en 5 secondes depuis son mobile. Le système vérifie automatiquement la compatibilité avec le planning.",
            capture: "Portail de Demande Absence"
          },
          {
            title: "Moteur de notification",
            desc: "Alertes automatiques par Email et Push pour chaque étape du workflow. Ne laissez plus aucune demande en attente.",
            capture: "Centre de Notifications"
          }
        ]
      },
      "portail-self-service": {
        title: "Portail Self-Service",
        tagline: "Autonomie & Flexibilité du collaborateur",
        heroDesc: "Donnez à vos équipes les outils pour gérer leur quotidien professionnel : plannings, congés et échanges de shifts en toute indépendance.",
        benefits: [
          { title: "Dashboard Personnel", desc: "Une vue unifiée pour chaque employé pour suivre ses plannings, soldes et missions." },
          { title: "Bourse aux Échanges", desc: "Possibilité de proposer des permutations de shifts avec des collègues qualifiés." },
          { title: "Transparence Totale", desc: "Accès instantané aux fiches de paie et attestations administratives à tout moment." }
        ],
        sections: [
          {
            title: "Permutations & Échanges",
            desc: "Un système interactif permettant aux employés de proposer des échanges de shifts. Le moteur vérifie automatiquement la conformité légale (repos, quotas) avant validation manager.",
            capture: "Interface d'Échange de Shifts"
          },
          {
            title: "Gestion des Préférences",
            desc: "Les collaborateurs indiquent leurs préférences de repos et disponibilités directement depuis leur smartphone pour influencer le prochain planning.",
            capture: "Centre de Vœux Mobile"
          }
        ]
      },
      "planning-intelligent": {
        title: "Planning Intelligent",
        tagline: "Moteur d'optimisation mathématique",
        heroDesc: "Transformez des contraintes complexes en plannings optimaux grâce à notre moteur de résolution basé sur l'IA.",
        benefits: [
          { title: "Respect Légal", desc: "Garantie de conformité stricte avec le code du travail et les conventions d'entreprise." },
          { title: "Équité Sociale", desc: "Algorithme assurant une répartition juste des shifts pénibles et des jours de repos." },
          { title: "Export Unifié", desc: "Génération instantanée des plannings aux formats PDF, Excel ou synchronisation App." }
        ],
        sections: [
          {
            title: "Pré-planning Stratégique",
            desc: "Préparez vos cycles de travail à l'avance. Définissez des roulements types et des affectations fixes avant de lancer l'optimisation IA.",
            capture: "Interface de Pré-configuration"
          },
          {
            title: "Résolution sous contraintes",
            desc: "Notre IA analyse simultanément les besoins en effectif, les compétences requises et les préférences des employés pour trouver la solution idéale.",
            capture: "Visualiseur de Résolution IA"
          },
          {
            title: "Édition Manuelle Assistée",
            desc: "Gardez le contrôle total. Modifiez n'importe quelle affectation après génération. Le système vous alerte en temps réel en cas de conflit.",
            capture: "Éditeur de Planning Interactif"
          },
          {
            title: "Ajustement Dynamique",
            desc: "Un imprévu ? Le système permet de recalculer instantanément une partie du planning pour pallier une absence de dernière minute.",
            capture: "Mode Ajustement Rapide"
          }
        ]
      },
      "equite-contraintes": {
        title: "Équité & Contraintes",
        tagline: "Équilibrage intelligent des conditions de travail",
        heroDesc: "Un système avancé de gestion des règles métier complexes garantissant une répartition juste des tâches et le respect strict des lois.",
        benefits: [
          { title: "Moteur de Règles", desc: "Application automatique du code du travail et des conventions collectives de l'entreprise." },
          { title: "Indice d'Équité", desc: "Algorithme empêchant l'accumulation d'heures sup ou de shifts pénibles pour une même personne." },
          { title: "Gestion des Aptitudes", desc: "Liaison de chaque shift aux compétences requises pour garantir la qualité de service." }
        ],
        sections: [
          {
            title: "Modélisation des Limites",
            desc: "Définissez les temps de repos obligatoires, les plafonds d'heures et les habilitations critiques. Le système les intègre à chaque calcul.",
            capture: "Éditeur de Contraintes"
          },
          {
            title: "Analyse de Charge",
            desc: "Surveillez la distribution de la pression opérationnelle entre les équipes pour un environnement de travail sain.",
            capture: "Rapport d'Équilibre Équipe"
          }
        ]
      },
      "multi-entites": {
        title: "Multi-Entités",
        tagline: "Gestion hiérarchique pour grands groupes",
        heroDesc: "Une architecture flexible permettant de gérer plusieurs filiales ou organisations sous une seule instance avec isolation totale des données.",
        benefits: [
          { title: "Structure Flexible", desc: "Découpage de l'entreprise en Organisations, Départements et Équipes selon vos besoins." },
          { title: "Étanchéité des Données", desc: "Confidentialité totale pour chaque entité avec possibilité de supervision centrale par la direction générale." },
          { title: "Niveaux d'Accès", desc: "Système de permissions avancé (RBAC) définissant précisément qui peut voir ou modifier quoi." }
        ],
        sections: [
          {
            title: "Arbre Organisationnel",
            desc: "Bâtissez la structure de votre groupe facilement. Liez employés et managers à leurs unités administratives précises.",
            capture: "Éditeur de Hiérarchie"
          },
          {
            title: "Permissions Superviseurs (RBAC)",
            desc: "Contrôle total sur ce que chaque superviseur peut voir ou faire. Assignez des responsables à des organisations ou départements spécifiques avec isolation des données sensibles.",
            capture: "Gestion des Rôles Utilisateurs"
          },
          {
            title: "Supervision Centrale",
            desc: "Dashboard pour les directeurs de groupe permettant de suivre la performance de toutes les filiales simultanément.",
            capture: "Vue Consolidée Dashboard"
          }
        ]
      },
      "analytics-kpis": {
        title: "Analytics & KPIs",
        tagline: "Décisionnel basé sur la donnée réelle",
        heroDesc: "Transformez vos données de présence et d'absence en insights stratégiques pour optimiser la productivité et réduire les coûts.",
        benefits: [
          { title: "Reporting Live", desc: "Génération automatique d'indicateurs clés de performance (KPIs) sans saisie manuelle." },
          { title: "Tracking Absentéisme", desc: "Analyse des causes et motifs de gène pour identifier les problèmes organisationnels tôt." },
          { title: "Prévision de Coût", desc: "Estimation des coûts de main d'œuvre et des heures supplémentaires avant exécution." }
        ],
        sections: [
          {
            title: "Centre de Statistiques",
            desc: "Graphiques interactifs présentant les taux de couverture, la répartition horaire et les ratios d'absentéisme par département.",
            capture: "Tableau de Bord Opérationnel"
          },
          {
            title: "Exports Professionnels",
            desc: "Extraction des données sous formats PDF ou Excel pour vos réunions de direction ou intégration paie.",
            capture: "Générateur de Rapports"
          }
        ]
      }
    }
  },
  en: {
    common: {
      demo: "Live Demo",
      clientPortal: "Client Portal",
      enterprise: "Enterprise",
      methodology: "Methodology",
      solutions: "Solutions",
      industries: "Industries",
      resources: "Resources",
      contact: "Contact",
      bookDemo: "Book a demo",
      getStarted: "Get Started"
    },
    hero: {
      tag: "Enterprise Ready Infrastructure",
      title1: "Operational",
      title2: "Excellence.",
      desc: "Advanced human resources management platform, intelligent shift optimization, and real-time logistics coordination.",
      ctaPortal: "Access Portal",
      ctaDemo: "View Live Demo"
    },
    story: {
      tag: "Planifié, Simply",
      title: "How to explain Planifié to a total novice?",
      steps: [
        {
          tag: "THE HOOK",
          title: "The Giant Puzzle",
          desc: "Imagine managing a 24/7 operations center with 100 employees. Sarah can't work night shifts, David needs his mandatory 48h rest, and you must have 5 certified operators every morning. Balancing this schedule by hand is a nightmare with a constant risk of understaffing.",
          sub: "In large companies, this is the puzzle we solve... every single morning."
        },
        {
          tag: "THE PAIN",
          title: "Excel Spreadsheet Hell",
          desc: "Today, managers waste days on giant Excel files. They have to juggle leave, night shifts already worked, and legal quotas. One small mistake, and the whole organization (and the law) suffers.",
          sub: "It's stress for bosses and frustration for teams."
        },
        {
          tag: "THE SOLUTION",
          title: "The Magic Button",
          desc: "Planifié is your super-assistant. Employees indicate their preferences on the platform, the boss gives his requirements, and... CLICK. Our mathematical brain calculates millions of combinations to create the perfect schedule.",
          sub: "Everyone is happy, and rules are 100% respected."
        },
        {
          tag: "THE CHERRY ON TOP",
          title: "The Automatic Bus",
          desc: "Once the schedule is created, the app knows exactly who works and where. So it automatically organizes company shuttles to pick up each employee at home. No more wasting hours on the phone with drivers.",
          sub: "It's invisible, effortless logistics."
        }
      ],
      summaryTitle: "In short",
      summaryDesc: "Planifié saves managers days of work, makes employees happy because we listen to their preferences, and secures the company by avoiding mistakes.",
      perks: ["More Serenity", "More Time", "Zero Errors"]
    },
    showcase: {
      title1: "One Platform,",
      title2: "Three Experiences.",
      desc: "Discover how Planifié adapts to every member of your organization to maximize collective efficiency.",
      roles: {
        admin: "Administrator",
        supervisor: "Supervisor",
        employee: "Employee"
      }
    },
    industries: {
      tag: "Who is it for?",
      title: "Built for demanding sectors.",
      items: [
        { title: "Healthcare", desc: "24/7 shift and on-call management for medical staff.", icon: "Activity" },
        { title: "Logistics", desc: "Driver scheduling and distribution hub coordination.", icon: "Truck" },
        { title: "Manufacturing", desc: "Continuous production lines requiring a constant workforce.", icon: "Factory" },
        { title: "Call Centers", desc: "Optimal coverage for technical support and customer service.", icon: "Headphones" },
        { title: "Retail", desc: "Supermarkets and flexible store employee management.", icon: "Store" }
      ]
    },
    solver: {
      title: "Planifie IA solver",
      tag: "Real-time analysis",
      btnRun: "Run Analysis",
      btnRecalculate: "Recalculate Flux",
      staff: "Staff",
      adequacy: "Adequacy",
      flux: "Flux",
      kpis: ["Requirements Coverage", "Zero Critical Deficit", "Average Surplus Index"],
      footer: "Predictive analysis based on historical flux.",
      shifts: { m: "Morning", s: "Evening", n: "Night", off: "Off" }
    },
    features: {
      tag: "Integrated Modules",
      title1: "High-density",
      title2: "operational architecture.",
      desc: "Planifié meets the requirements of complex environments needing perfect coordination.",
      items: [
        { title: "AI Engine", desc: "Constraint-based optimization via Google OR-Tools for a perfect work/rest balance." },
        { title: "Multi-Entity", desc: "Hierarchical management: Departments, Organizations, and Teams with strict data isolation." },
        { title: "HR & Social", desc: "Autonomous management of availability, leave, and certified shift swap system." },
        { title: "Logistics", desc: "Automatic calculation of transport needs and optimized assignment to shuttle lines." }
      ]
    },
    technologies: {
      tag: "Tech Stack",
      title: "Robust & Modern",
      title2: "Architecture.",
      desc: "We leverage cutting-edge technologies to ensure high performance, security, and scalability.",
      frontend: "User Interface",
      backend: "Server & Data",
      engine: "Optimization Engine",
      infra: "Infrastructure"
    },
    testimonials: {
      tag: "Expert Voices",
      title: "Real impact on your operations.",
      items: [
        {
          quote: "Since implementing Planifié, we've reduced schedule creation time by 40%. Data centralization gives us unprecedented reactivity.",
          author: "Sarah K.",
          role: "HR Director",
          company: "Trans-Maghreb Logistics"
        },
        {
          quote: "The AI optimization engine is a game-changer. It handles complex team constraints 24/7 while scrupulously respecting employee well-being.",
          author: "Karim M.",
          role: "Operations Director",
          company: "Global Tech Services"
        }
      ]
    },
    enterprise: {
      title1: "Planifié",
      title2: "Enterprise.",
      desc: "Tailor-made solutions for demanding organizations. Secure Cloud deployment or On-Premise infrastructure.",
      cards: [
        {
          title: "Standard Cloud",
          features: ["High-Availability Hosting", "Automatic Updates", "Technical Support", "Up to 500 employees"],
          cta: "Check Pricing"
        },
        {
          tag: "Recommended",
          title: "On-Premise / Dedicated",
          features: ["Server Installation", "Full Data Isolation", "SSO / AD Integration", "Onboarding & SLA"],
          cta: "Request Quote"
        }
      ]
    },
    pricing: {
      tag: "Subscriptions & Pricing",
      title1: "Plans scaled",
      title2: "for your size.",
      desc: "Choose the right plan for your organization. Complete solutions in Algerian Dinars (DZD) for maximum efficiency.",
      currency: "DZD",
      period: "/ month",
      customPrice: "Custom",
      cards: [
        {
          title: "Starter (Digitalization)",
          price: "35,000",
          features: [
            "Up to 100 employees - Ideal for SMBs",
            "Digital HR Records (Contracts, IDs, Certs)",
            "Automated Leave & Absence Workflows",
            "Document Expiry Alerts (Visas, Medical)",
            "Self-Service Employee Portal (Web & Mobile)",
            "Manual Scheduling with Conflict Detection",
            "Sovereign Hosting in Algeria (Data Security)",
            "Setup Fee: 80,000 DZD (one-time)"
          ],
          cta: "Start Digitalization"
        },
        {
          tag: "Popular",
          title: "Pro (Artificial Intelligence)",
          price: "75,000",
          features: [
            "Up to 500 employees - For growing companies",
            "Everything in Starter, plus:",
            "AI Engine for automatic schedule generation",
            "Automated Legal Compliance (Rest, hour quotas)",
            "Skill-based and Certification-based assignment",
            "Real-time Productivity & Labor Cost Analytics",
            "Certified Shift Swap system between employees",
            "Setup Fee: 150,000 DZD (Includes business modeling)",
            "Priority 5/7 phone support"
          ],
          cta: "Switch to AI"
        },
        {
          title: "Corporate (Operations)",
          price: "150,000",
          features: [
            "Unlimited employees - For Large Groups",
            "Everything in Pro, plus:",
            "Logistics Module & Automated Shuttle Routing",
            "Cross-Department and Multi-site Planning",
            "On-Premise (Local Servers) deployment available",
            "Direct ERP Connectors (Odoo, SAP, Sage)",
            "SSO and Active Directory Integration",
            "Service Level Agreement (SLA) & 24/7 Support",
            "Dedicated Account Manager for your success"
          ],
          cta: "Request Detailed Quote"
        }
      ],
      paymentMethod: "Local and international payments accepted",
      payments: ["Edahabia", "CIB", "Visa", "Mastercard"],
      calculator: {
        title: "Calculate your custom rate",
        employees: "Number of Employees",
        planningUnits: "Planning Units",
        unlimitedMention: "Unlimited Organizations & Teams per unit",
        admins: "Administrators (Full)",
        supervisors: "Supervisors (Planning)",
        ia: "AI Activation",
        total: "Monthly Total",
        setup: "Setup Fee (one-time)",
        cta: "Request official quote"
      }
    },
    booking: {
      tag: "Open Calendar",
      title1: "Level up",
      title2: "your operations.",
      desc: "Book a personalized 20-minute session to discover how Planifié can transformer your HR & Logistics management.",
      cta: "Schedule my demo",
      sub: "No card required"
    },
    navbar: {
      pilotage: "HR STEERING",
      optimization: "OPTIMIZATION",
      logistique: "LOGISTICS",
      services: "SERVICES & HEALTH",
      informer: "GET INFORMED",
      support: "SUPPORT",
      explore: "Explore the platform",
      clientsCount: "+0 companies optimize their time",
      startProject: "Start a project"
    },
    resources_detail: {
      "etudes-cas": { name: "Case Studies", desc: "Discover our clients' successes" },
      "blog": { name: "HR Expert Blog", desc: "Planning trends and tips" },
      "centre-aide": { name: "Help Center", desc: "Guides and technical docs" },
      "webinaires": { name: "Webinars", desc: "Live demos and training" }
    },
    help_center: {
      title: "Help Center",
      subtitle: "Find answers and guides to master Planifié.",
      searchPlaceholder: "Search for a tutorial, a rule...",
      categories: [
        { id: "start", title: "Full Digitalization", desc: "The concept of a centralized digital repository for your talent.", icon: "Zap", slug: "dossiers-collaborateurs" },
        { id: "admin", title: "Governance", desc: "Manage multi-entity structures and advanced group permissions.", icon: "Shield", slug: "multi-entites" },
        { id: "ia", title: "AI Insights", desc: "Mathematical optimization concept for error-free schedules.", icon: "Bot", slug: "planning-intelligent" },
        { id: "mobile", title: "Employee Autonomy", desc: "The self-service experience for leave and shift swaps.", icon: "Smartphone", slug: "portail-self-service" }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How does AI optimization work?", a: "Our engine uses Google OR-Tools to analyze millions of combinations while respecting your constraints (legal rest, skills, wishes) to find the mathematically optimal schedule." },
        { q: "How is my data secured?", a: "Data is hosted on sovereign servers in Algeria with full encryption and total isolation between companies." },
        { q: "Can Planifié link to an ERP?", a: "Yes, we provide API connectors to sync Planifié with Odoo, SAP, or your existing payroll software." },
        { q: "Can I modify a schedule after generation?", a: "Yes, 'Manual Edition' mode allows you to adjust any shift. The system alerts you immediately if a violation occurs." }
      ],
      ctaTitle: "Still need help?",
      ctaDesc: "Our experts are available to assist you with your specific configuration.",
      ctaBtn: "Contact Support"
    },
    footer: {
      desc: "Advanced software solutions for operational management and human resources planning.",
      product: "Product",
      legal: "Legal",
      rights: "All rights reserved."
    },
    solutions_detail: {
      "dossiers-collaborateurs": {
        title: "Employee Records",
        tagline: "Secure HR Data Architecture",
        heroDesc: "Centralize the entire administrative lifecycle of your talent on a sovereign and highly secure platform.",
        benefits: [
          { title: "Certified Documents", desc: "Manage contracts, amendments, and certifications with validity alerts." },
          { title: "Full History", desc: "Chronological tracking of assignments, promotions, and career evolutions." },
          { title: "Self-Service", desc: "Dedicated portal allowing employees to update their personal information." }
        ],
        sections: [
          {
            title: "Digital Business Vault",
            desc: "Encrypted storage of sensitive documents. No more physical files; access contractual records in one click with full access traceability.",
            capture: "Secure Archiving System"
          },
          {
            title: "Qualification Management",
            desc: "Ensure every employee has the required certifications for their role. The system automatically blocks non-compliant assignments.",
            capture: "Skills Matrix"
          }
        ]
      },
      "transport-logistique": {
        title: "Transport & Logistics",
        tagline: "Automated Staff Pick-up",
        heroDesc: "Optimize your team's mobility through intelligent shuttle line management synchronized with your schedules.",
        benefits: [
          { title: "Geographic Mapping", desc: "Precise management of pick-up zones and points of interest by neighborhood." },
          { title: "Auto Assignment", desc: "The system automatically assigns each employee to the correct line based on their shift." },
          { title: "Driver Dashboard", desc: "Real-time updated passenger lists for seamless coordination." }
        ],
        sections: [
          {
            title: "Line & Zone Management",
            desc: "Define your transport circuits, vehicle capacities, and coverage areas. Visualize subscriber density by sector.",
            capture: "Transport Matrix"
          },
          {
            title: "Rotation Scheduling",
            desc: "Full synchronization with shifts. When a schedule is generated, transport needs are instantly calculated.",
            capture: "Assignment Table"
          }
        ]
      },
      "workflows-conges": {
        title: "Leave Workflows",
        tagline: "Automated Validation and Real-Time Balances",
        heroDesc: "Eliminate paper forms and streamline communication between employees and managers for absence management.",
        benefits: [
          { title: "Agile Circuit", desc: "Customizable multi-level validation (Direct Manager > HR > Management)." },
          { title: "Automatic Calculation", desc: "Instant update of leave balances and carryovers after each approval." },
          { title: "Shared Calendar", desc: "Overview of team planning to avoid critical understaffing." }
        ],
        sections: [
          {
            title: "Simplified Request",
            desc: "Employees submit requests in 5 seconds from their mobile. The system automatically checks compatibility with the schedule.",
            capture: "Absence Request Portal"
          },
          {
            title: "Notification Engine",
            desc: "Automatic alerts via Email and Push for every workflow step. Never leave a request pending.",
            capture: "Notification Center"
          }
        ]
      },
      "portail-self-service": {
        title: "Self-Service Portal",
        tagline: "Complete Employee Autonomy & Flexibility",
        heroDesc: "Empower your teams with the tools to manage their professional daily life independently: schedules, leave, and shift swaps.",
        benefits: [
          { title: "Personal Dashboard", desc: "A unified view for each employee to track schedules, balances, and tasks." },
          { title: "Shift Marketplace", desc: "Ability to propose shift swaps with qualified colleagues directly from the app." },
          { title: "Total Transparency", desc: "Instant access to pay stubs and administrative certificates at any time." }
        ],
        sections: [
          {
            title: "Permutations & Swaps",
            desc: "An interactive system allowing employees to propose shift swaps. The engine automatically checks legal compliance (rest, quotas) before manager validation.",
            capture: "Shift Exchange Interface"
          },
          {
            title: "Preference Management",
            desc: "Employees indicate their rest preferences and availability directly from their smartphone to influence upcoming schedules.",
            capture: "Mobile Wishes Center"
          }
        ]
      },
      "planning-intelligent": {
        title: "Intelligent Planning",
        tagline: "Mathematical Optimization Engine",
        heroDesc: "Transform complex constraints into optimal schedules using our AI-based resolution engine.",
        benefits: [
          { title: "Legal Compliance", desc: "Guarantee strict compliance with labor laws and company agreements." },
          { title: "Social Equity", desc: "Algorithm ensuring fair distribution of strenuous shifts and rest days." },
          { title: "Unified Export", desc: "Instant generation of schedules in PDF, Excel formats or App synchronization." }
        ],
        sections: [
          {
            title: "Strategic Pre-planning",
            desc: "Prepare your work cycles in advance. Define typical rotations and fixed assignments before running AI optimization.",
            capture: "Pre-configuration Interface"
          },
          {
            title: "Constraint-Based Resolution",
            desc: "Our AI simultaneously analyzes staffing needs, required skills, and employee preferences to find the ideal solution.",
            capture: "AI Resolution Visualizer"
          },
          {
            title: "Assisted Manual Edition",
            desc: "Keep total control. Modify any assignment after generation. The system alerts you in real-time if a conflict occurs.",
            capture: "Interactive Schedule Editor"
          },
          {
            title: "Dynamic Adjustment",
            desc: "Something unexpected? The system allows instant recalculation of part of the schedule to handle last-minute absences.",
            capture: "Quick Adjustment Mode"
          }
        ]
      },
      "equite-contraintes": {
        title: "Equity & Constraints",
        tagline: "Intelligent Balancing of Working Conditions",
        heroDesc: "An advanced system for managing complex business rules ensuring fair task distribution and strict law compliance.",
        benefits: [
          { title: "Rules Engine", desc: "Automatic application of labor laws and company collective agreements." },
          { title: "Equity Index", desc: "Algorithm preventing overtime buildup or tiring consecutive shifts for the same person." },
          { title: "Skills Management", desc: "Linking each shift to required skills to guarantee service quality." }
        ],
        sections: [
          {
            title: "Limits Modeling",
            desc: "Define mandatory rest periods, hour caps, and critical certifications. The system integrates them into every calculation.",
            capture: "Constraints Editor"
          },
          {
            title: "Load Analysis",
            desc: "Monitor operational pressure distribution across teams for a healthy and fair work environment.",
            capture: "Team Balance Report"
          }
        ]
      },
      "multi-entites": {
        title: "Multi-Entities",
        tagline: "Hierarchical Management for Large Groups",
        heroDesc: "A flexible architecture allowing the management of multiple subsidiaries or organizations under a single instance with total data isolation.",
        benefits: [
          { title: "Flexible Structure", desc: "Breakdown the company into Organizations, Departments, and Teams according to your needs." },
          { title: "Data Sealing", desc: "Full confidentiality for each entity with the possibility of central supervision by general management." },
          { title: "Access Levels", desc: "Advanced permissions system (RBAC) precisely defining who can see or modify what." }
        ],
        sections: [
          {
            title: "Organizational Tree",
            desc: "Build your group's structure easily. Link employees and managers to their precise administrative units.",
            capture: "Hierarchy Editor"
          },
          {
            title: "Supervisor Permissions (RBAC)",
            desc: "Total control over what each supervisor can see or do. Assign managers to specific organizations or departments with sensitive data isolation.",
            capture: "User Role Management"
          },
          {
            title: "Central Supervision",
            desc: "Dashboard for group directors to monitor all subsidiaries' performance simultaneously.",
            capture: "Consolidated Dashboard View"
          }
        ]
      },
      "analytics-kpis": {
        title: "Analytics & KPIs",
        tagline: "Decision-Making Based on Real Data",
        heroDesc: "Transform your attendance and absence data into strategic insights to optimize productivity and reduce costs.",
        benefits: [
          { title: "Live Reporting", desc: "Automatic generation of key performance indicators (KPIs) without manual entry." },
          { title: "Absenteeism Tracking", desc: "Analysis of causes and patterns to identify organizational problems early." },
          { title: "Cost Forecasting", desc: "Estimating labor costs and overtime before execution." }
        ],
        sections: [
          {
            title: "Statistics Center",
            desc: "Interactive charts presenting coverage rates, hourly distribution, and absenteeism ratios per department.",
            capture: "Operational Dashboard"
          },
          {
            title: "Professional Exports",
            desc: "Data extraction in PDF or Excel formats for your management meetings or payroll integration.",
            capture: "Report Generator"
          }
        ]
      }
    }
  }
};
