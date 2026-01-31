import React from "react";
import { Building2, Cpu, Code2, MonitorCog } from "lucide-react";

// Services Data with strict Figma content matching
const services = [
  {
    title: "الخدمات المؤسسية",
    description:
      "خدمات تشمل الدعم والتشغيل المؤسساتي والحوكمة والإمتثال والتكنولوجيا والتمويل وخدمات ربط الأنظمة والمعدات والموارد البشرية.",
    icon: Building2,
  },
  {
    title: "الاستشارات التقنية",
    description:
      "وتشمل تقديم خدمات الاستشارات التقنية والاستشارات التطبيقية المتقدمة.",
    icon: Cpu,
  },
  {
    title: "تطوير التقنيات", // Shortened to match visual balance if needed, or kept full
    description:
      "بما يتم تطويره وابتكار المنتجات والحلول والمنصات لخدمة قطاعات الحكومة الرقمية، البنية المالية، التصنيع الإلكتروني، وإدارة الإجراءات وغيرها.",
    icon: MonitorCog,
  },
  {
    title: "تطوير المنصات",
    description:
      "التصميم والبناء والتطوير والتشغيل لمنصات عملاء الشركة، بما يشمل مشاريع الشراكة مع القطاع العام (PPP).",
    icon: Code2,
  },
];

const contributions = [
  {
    number: "1",
    title: "محور التطوير المهني والمعرفي",
    description:
      "يتعلق هذا المحور في جهود عزم السعودية فيما يرتبط بالدعم المعرفي من خلال الزيارات وإقامة ورش تدريبية في مجالات الإدارة والتقنية، والتمكين لشباب وشابات هذا الوطن من خلال إتاحة فرص التدريب النوعية في أقسام وفرق الشركة.",
  },
  {
    number: "2",
    title: "محور التعاون مع الجهات الوقفية والجمعيات الخيرية",
    description:
      "تسعى عزم السعودية من خلال هذا المحور لبناء علاقات مستدامة مع الجهات الخيرية وتوفير الدعم لها بمختلف السبل، كالتمكين الرقمي والدعم المادي والتبرعات العينية.",
  },
  {
    number: "3",
    title:
      'المبادرات الخاصة بأولوية "تقديم الخدمات بمرونة وكفاءة وفاعلية أكبر"',
    description:
      "تندرج المبادرات العامة تحت هذا المحور حرصاً من عزم السعودية على تضمين كافة الأفكار التي تخدم المجتمع والتوعية العامة في مجالات مختلفة كالصحة والرياضة، والثقافة، والبيئة، وغيرها.",
  },
];

export default function ServicesPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen w-full bg-[#020014] text-white font-tajawal overflow-hidden pb-20 selection:bg-purple-500/30"
    >
      {/* Services Header */}
      <section className="relative z-10 pt-24 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-right">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">خدماتنا</h1>
          <p className="max-w-3xl text-gray-300 text-lg leading-relaxed">
            لترسيخ نهج منظم نحو تحقيق أولوياتنا الإستراتيجية، حيث تمت إعادة تصنيف
            تدفقات الإيرادات لدينا إلى خطوط أعمال تمثل نشاطات الشركة، على النحو
            التالي:
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[340px] w-full overflow-hidden rounded-xl border border-white/5 bg-[radial-gradient(90.16%_143.01%_at_15.32%_21.04%,rgba(248,224,255,0.0256)_0%,rgba(248,224,255,0.0064)_77.08%,rgba(255,255,255,0)_100%)] p-8 backdrop-blur-[40px] transition-all duration-300 hover:border-purple-500/30"
            >
              {/* Internal Gradient Mask/Highlight (Mimicking 'Vector') */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Grid Pattern Overlay (Mimicking 'Glowing Mouse Hover Effect') */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(167, 51, 204, 0.5) 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between">
                {/* Top Row: Icon (Left aligned in RTL = Left side visually) */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-[#E38CFF] shadow-[0_0_20px_rgba(227,140,255,0.2)]">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="text-right">
                  <h3 className="mb-4 text-[30px] font-medium leading-[36px] text-white">
                    {service.title}
                  </h3>
                  <p className="text-[18px] font-normal leading-[24px] text-white/80 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contributions Section */}
      <section className="relative z-10 bg-[#000913] py-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start">
          {/* Header Area */}
          <div className="w-full mb-16 relative z-20">
            <h2 className="text-white text-4xl md:text-6xl font-bold  text-right leading-tight">
              مساهماتنا في المجتمع
            </h2>
            <div className="max-w-[600px] max-w-3xl mr-auto">
              <div className="w-44 h-1 bg-[#733088] mb-8 rounded-full md:ml-auto md:ml-0 ml-auto"></div>
              <p className="text-gray-300 text-lg md:text-xl leading-loose ">
                تحرص عزم السعودية على أداء مسؤولياتها الاجتماعية عبر رؤية صحيحة، وإدراكاً تسعى الشركة إلى تأسيس علاقات متينة ودائمة مع المجتمعات التي تعمل فيها، وتحرص على ضمان أن برامج المسؤولية الاجتماعية الرائدة التي تقدمها تنتج منافع اقتصادية واجتماعية ملموسة وإيجابية.
              </p>
            </div>
          </div>

          {/* Staggered Cards Container */}
          <div className="flex flex-col gap-6 w-full relative z-10">
            {contributions.map((item, index) => (
              <div
                key={index}
                className={`
                  flex items-center gap-1 justify-start w-full
                  ${index === 1 ? "md:pr-24 lg:pr-48" : ""}
                  ${index === 2 ? "md:pr-48 lg:pr-96" : ""}
                `}
              >
                {/* Large Number - Outside (Right side in RTL) */}
                <div
                  className="font-bold leading-none text-[#733088] select-none shrink-0"
                  style={{
                    fontSize: 'clamp(80px, 10vw, 140px)',
                    textShadow: '0 4px 20px rgba(115, 48, 136, 0.5)'
                  }}
                >
                  {item.number}
                </div>

                {/* Card */}
                <div
                  className="
                    relative overflow-hidden rounded-xl border border-white/5 bg-[#0a1420] p-8 md:p-10
                    w-full max-w-[600px] transition-all duration-500 hover:border-purple-500/30 group
                    hover:translate-x-2
                  "
                >
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-start text-right">
                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-normal">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 md:text-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Subtle Grid / Noise Overlay */}
                  <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
