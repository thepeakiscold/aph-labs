/**
 * APH LABS — Multilingual Engine (TR / EN) & Interactive Controller
 * Minimalist Bordo & Beyaz Industrial Design
 */

const translations = {
  tr: {
    // Nav
    nav_products: "Sistemler",
    nav_capabilities: "Yetkinlikler",
    nav_specs: "Teknik Veriler",
    nav_contact: "İletişim",
    btn_rfq: "Teklif Al",
    
    // Hero
    hero_badge: "ENDÜSTRİYEL MAKİNE & HASSAS METROLOJİ",
    hero_title: "Hassas Makine Mühendisliği ve İleri Metroloji",
    hero_desc: "APH Labs; hat içi optik filament çap ölçüm sistemleri, aerodinamik kanallı rüzgar jeneratörleri ve yüksek torklu endüstriyel kırma makineleri tasarlar ve üretir.",
    hero_btn_explore: "Sistemleri İnceleyin",
    hero_btn_contact: "Mühendislik Talebi",
    
    // Live Simulator Card
    sim_title: "HAT İÇİ OPTİK LAZER MİKROMETRE CANLI VERİ",
    sim_status: "AKTİF KAPALI ÇEVRİM",
    sim_reading_label: "Anlık Filament Çapı (Nominal: 1.750 mm)",
    sim_waveform_label: "Lazer Tarama Sinyali",
    sim_sampling_label: "ÖRNEKLEME FREKANSI",
    sim_sampling_val: "1.200 Ölçüm / sn",
    sim_compute_label: "İŞLEMCİ MİMARİSİ",
    sim_compute_val: "ESP32-P4 + Sayısal Sinyal İşleme",
    sim_loop_status: "Ekstrüzyon Hat Hızı Otomatik Dengeleme Aktif",

    // Products Section
    section_products_badge: "ÜRETİM & SİSTEMLER",
    section_products_title: "Geliştirdiğimiz Sistemler",
    section_products_desc: "Tolerans sınırlarını zorlayan, yüksek çalışma süreli ve verimlilik odaklı endüstriyel makineler.",
    btn_view_3d: "3D CAD Modelini İncele",
    
    // Product 1
    p1_tag: "SERİ FM-1 • METROLOJİ",
    p1_title: "Optik Filament Çap Ölçüm Cihazı",
    p1_desc: "3D yazıcı filament ekstrüzyon hatları için tasarlanmış, temassız çift eksenli optik mikrometre. Sub-mikron hassasiyetle anlık çap analizi ve kapalı çevrim çekici hız kontrolü.",
    p1_f1: "Hassasiyet: ±0.002 mm (±2 mikron) tekrarlanabilirlik",
    p1_f2: "Donanım: Çift çekirdek ESP32-P4 ve yüksek hızlı DSP",
    p1_f3: "Entegrasyon: Kapalı çevrim çekici hız geri beslemesi",
    p1_btn: "FM-1 Teklif Al",

    // Product 2
    p2_tag: "SERİ WG-AERO • YENİLENEBİLİR ENERJİ",
    p2_title: "Kanallı Aerodinamik Rüzgar Jeneratörü (2x2)",
    p2_desc: "Altıgenden kareye geçişli difüzör kanal geometrisi ile tasarlanmış, sınır tabaka hızlandırmalı mikro rüzgar türbini. Düşük rüzgarda yüksek tork ve güç katsayısı.",
    p2_f1: "Aerodinamik: Venturi kanallı hava akış ivmelendirmesi",
    p2_f2: "Başlama Hızı: < 1.8 m/s ultra düşük kalkış",
    p2_f3: "Uygulama: Mikroşebekeler, telekom, endüstriyel çatı sistemleri",
    p2_btn: "WG-Aero Teklif Al",

    // Product 3
    p3_tag: "SERİ SH-MK8 • GERİ DÖNÜŞÜM & İŞLEME",
    p3_title: "Yüksek Torklu Endüstriyel Parçalayıcı (MK8)",
    p3_desc: "Polimer atıkları, filament fireleri ve teknik kompozitlerin boyut küçültmesi için geliştirilmiş çift şaftlı endüstriyel parçalayıcı. ANSYS statik mukavemet (FEA) onaylı.",
    p3_f1: "Bıçaklar: CNC hassas işlenmiş sertleştirilmiş takım çeliği",
    p3_f2: "Doğrulama: ANSYS ile statik ve dinamik gerilme analizi",
    p3_f3: "Tahrik: Planet redüktör ve sıkışma önleyici otomatik geri sarma",
    p3_btn: "SH-MK8 Teklif Al",

    // 3D Modal
    modal_3d_title: "İnteraktif 3D CAD Modeli",
    modal_3d_hint: "Modeli fareniz veya dokunmatik ekranınızla 360° çevirebilir ve yakınlaştırabilirsiniz.",

    // Capabilities Section
    cap_badge: "MÜHENDİSLİK YETKİNLİKLERİ",
    cap_title: "Tasarım, Simülasyon ve İmalat",
    cap_desc: "Kağıt üzerindeki tasarımdan atölye zeminine kadar her aşamada analitik doğrulama.",
    cap_c1_title: "Parametrik CAD ve Kinematik Tasarım",
    cap_c1_desc: "STEP, SolidWorks ve Fusion ortamında tolerans yığılım analizli eksiksiz 3D mekanik modelleme.",
    cap_c2_title: "FEA Mukavemet ve CFD Akış Analizi",
    cap_c2_desc: "Şasi ve bıçak mekanik gerilimlerinin ANSYS ile doğrulanması; akışkanlar mekaniği optimizasyonu.",
    cap_c3_title: "Gömülü Sistemler ve Sensör Füzyonu",
    cap_c3_desc: "ESP32-P4, ARM mikrodenetleyiciler, optik sensör sürücüleri ve endüstriyel haberleşme protokolleri.",
    cap_fea_box_title: "FEA STATİK GERİLME DOĞRULAMASI",
    cap_fea_box_sub: "Maksimum Güvenlik Katsayısı: 2.84 • 7/24 Kesintisiz Çalışma Onaylı",

    // Specifications Table
    spec_badge: "TEKNİK KARŞILAŞTIRMA",
    spec_title: "Sistem Parametreleri",
    th_system: "Sistem",
    th_range: "Çalışma Aralığı",
    th_precision: "Hassasiyet / Verim",
    th_compute: "Hesaplama Çekirdeği",
    th_interface: "Haberleşme",

    // Contact Section
    contact_badge: "İLETİŞİM & TEKLİF",
    contact_title: "Projeniz İçin Mühendislik Desteği Alın",
    contact_desc: "Hassas ölçüm sistemleri, rüzgar enerjisi çözümleri veya özel makine talepleriniz için doğrudan bize ulaşın.",
    form_machine_label: "İlgilendiğiniz Sistem",
    form_machine_opt1: "Optik Filament Çap Ölçüm Cihazı (FM-1 / Assembly V2.0)",
    form_machine_opt2: "Kanallı Aerodinamik Rüzgar Jeneratörü (WG-Aero / 2x2)",
    form_machine_opt3: "Yüksek Torklu Endüstriyel Parçalayıcı (SH-MK8)",
    form_machine_opt4: "Özel Makine Tasarımı / Mühendislik Danışmanlığı",
    form_name: "Adınız Soyadınız",
    form_company: "Firma / Kurum",
    form_email: "Kurumsal E-posta",
    form_notes: "Teknik Talepler & Detaylar (Toleranslar, kapasite, çalışma ortamı vb.)",
    form_submit: "Teklif Talebini İlet",
    form_transmitting: "İletiliyor...",
    form_success_title: "Talebiniz Alındı",
    form_success_desc: "Mühendislik ekibimiz teknik şartlarınızı inceleyerek en kısa sürede dönüş yapacaktır.",
    
    // Footer
    footer_copy: "APH LABS © 2026 • Hassas Makine Sistemleri & Metroloji",
    footer_domain: "Resmi Alan Adı: www.aph-labs.com"
  },

  en: {
    // Nav
    nav_products: "Systems",
    nav_capabilities: "Capabilities",
    nav_specs: "Specifications",
    nav_contact: "Contact",
    btn_rfq: "Request Quote",
    
    // Hero
    hero_badge: "INDUSTRIAL MACHINERY & PRECISION METROLOGY",
    hero_title: "Precision Machine Engineering & Advanced Metrology",
    hero_desc: "APH Labs designs and manufactures in-line optical filament measurement systems, aerodynamic ducted wind turbines, and high-torque industrial processing machinery.",
    hero_btn_explore: "Explore Systems",
    hero_btn_contact: "Engineering Inquiry",
    
    // Live Simulator Card
    sim_title: "IN-LINE OPTICAL LASER MICROMETER LIVE FEED",
    sim_status: "ACTIVE CLOSED-LOOP",
    sim_reading_label: "Live Filament Diameter (Nominal: 1.750 mm)",
    sim_waveform_label: "Laser Scan Signal",
    sim_sampling_label: "SAMPLING RATE",
    sim_sampling_val: "1,200 Scans / Sec",
    sim_compute_label: "COMPUTE ARCH",
    sim_compute_val: "ESP32-P4 + Digital Signal Processing",
    sim_loop_status: "Extrusion Speed Auto-Compensating Active",

    // Products Section
    section_products_badge: "PRODUCTION & SYSTEMS",
    section_products_title: "Engineered Machinery Portfolio",
    section_products_desc: "Built to push tolerance limits, maximize uptime, and deliver consistent industrial performance.",
    btn_view_3d: "Inspect 3D CAD Model",
    
    // Product 1
    p1_tag: "SERIES FM-1 • METROLOGY",
    p1_title: "Optical Filament Diameter Gauge",
    p1_desc: "Non-contact dual-axis optical micrometer built for 3D printing filament extrusion lines. Sub-micron precision, real-time closed-loop puller speed regulation, and rapid line tracking.",
    p1_f1: "Precision: ±0.002 mm (±2 microns) repeatability",
    p1_f2: "Hardware: Dual-core ESP32-P4 & high-speed DSP",
    p1_f3: "Control: Closed-loop puller speed feedback",
    p1_btn: "Request FM-1 Quote",

    // Product 2
    p2_tag: "SERIES WG-AERO • RENEWABLE ENERGY",
    p2_title: "Ducted Aerodynamic Wind Generator (2x2)",
    p2_desc: "Diffuser-augmented micro wind turbine featuring a hexagonal-to-square ducted shroud. Accelerates boundary layer airflow for exceptional low-wind startup torque and power density.",
    p2_f1: "Aerodynamics: Venturi ducted airflow acceleration",
    p2_f2: "Cut-in Speed: < 1.8 m/s ultra-low startup",
    p2_f3: "Applications: Microgrids, telecom towers, industrial rooftops",
    p2_btn: "Request WG-Aero Quote",

    // Product 3
    p3_tag: "SERIES SH-MK8 • MATERIAL PROCESSING",
    p3_title: "High-Torque Industrial Shredder (MK8)",
    p3_desc: "Heavy-duty dual-shaft shredder built for polymers, production scraps, and technical composites. Verified with comprehensive ANSYS finite element stress analysis (FEA).",
    p3_f1: "Blades: CNC-profiled hardened alloy tool steel",
    p3_f2: "Validation: Full ANSYS static and dynamic structural FEA",
    p3_f3: "Drive: High-reduction planetary gear with anti-jam reverse",
    p3_btn: "Request SH-MK8 Quote",

    // 3D Modal
    modal_3d_title: "Interactive 3D CAD Model",
    modal_3d_hint: "Rotate 360° and zoom using your mouse or touch gestures.",

    // Capabilities Section
    cap_badge: "ENGINEERING RIGOR",
    cap_title: "Design, Simulation & Fabrication",
    cap_desc: "Analytical verification at every milestone, bridging parametric CAD with shop-floor manufacturing.",
    cap_c1_title: "Parametric CAD & Kinematic Assemblies",
    cap_c1_desc: "STEP, SolidWorks, and Fusion solid modeling with rigorous tolerance stackup calculations.",
    cap_c2_title: "FEA Structural & CFD Aerodynamic Simulation",
    cap_c2_desc: "ANSYS finite element chassis stress validation and computational fluid dynamics shroud testing.",
    cap_c3_title: "Embedded Systems & Sensor Fusion",
    cap_c3_desc: "ESP32-P4, ARM microcontrollers, optical sensor pipelines, and industrial fieldbus integration.",
    cap_fea_box_title: "FEA STATIC STRESS VERIFICATION",
    cap_fea_box_sub: "Maximum Safety Factor: 2.84 • Certified for 24/7 Operations",

    // Specifications Table
    spec_badge: "TECHNICAL BENCHMARKS",
    spec_title: "System Parameters",
    th_system: "System Platform",
    th_range: "Operating Range",
    th_precision: "Accuracy / Efficiency",
    th_compute: "Compute Core",
    th_interface: "Connectivity",

    // Contact Section
    contact_badge: "CONTACT & INQUIRY",
    contact_title: "Request Engineering Specifications",
    contact_desc: "Get in touch directly with our engineering team for customized metrology, renewable generation, or custom machinery.",
    form_machine_label: "Target Machine System",
    form_machine_opt1: "Optical Filament Diameter Gauge (FM-1 / Assembly V2.0)",
    form_machine_opt2: "Ducted Aerodynamic Wind Generator (WG-Aero / 2x2)",
    form_machine_opt3: "High-Torque Industrial Shredder (SH-MK8)",
    form_machine_opt4: "Custom Machine Design / Engineering Consultation",
    form_name: "Full Name",
    form_company: "Company / Organization",
    form_email: "Corporate Email Address",
    form_notes: "Technical Requirements (Tolerances, feed rates, operational conditions)",
    form_submit: "Transmit Engineering Request",
    form_transmitting: "Transmitting...",
    form_success_title: "Inquiry Received",
    form_success_desc: "Our engineering group will review your specifications and follow up promptly.",
    
    // Footer
    footer_copy: "APH LABS © 2026 • Precision Machinery & Metrology",
    footer_domain: "Official Domain: www.aph-labs.com"
  }
};

let currentLang = 'en';

/**
 * Apply Language to DOM
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('aph_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update active states on language switch buttons
  document.querySelectorAll('.lang-btn-tr').forEach(btn => {
    btn.classList.toggle('active', lang === 'tr');
  });
  document.querySelectorAll('.lang-btn-en').forEach(btn => {
    btn.classList.toggle('active', lang === 'en');
  });
}

/**
 * Automatic Location / Browser Language Detection
 */
async function detectUserLanguage() {
  const saved = localStorage.getItem('aph_lang');
  if (saved && (saved === 'tr' || saved === 'en')) {
    setLanguage(saved);
    return;
  }

  const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  let detected = navLang.startsWith('tr') ? 'tr' : 'en';
  setLanguage(detected);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1800);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (res.ok) {
      const data = await res.json();
      if (data.country_code === 'TR') {
        if (!localStorage.getItem('aph_lang')) {
          setLanguage('tr');
        }
      }
    }
  } catch (err) {}
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  detectUserLanguage();

  // Language Button Listeners
  document.querySelectorAll('.lang-btn-tr').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('tr');
    });
  });
  document.querySelectorAll('.lang-btn-en').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('en');
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Interactive 3D Model Modal
  const modal3D = document.getElementById('modal3D');
  const modelViewer = document.getElementById('cadModelViewer');
  const modal3DTitle = document.getElementById('modal3DTitle');
  const close3DBtn = document.getElementById('close3DBtn');

  const open3D = (modelSrc, titleText) => {
    if (modal3D && modelViewer) {
      modelViewer.src = modelSrc;
      if (modal3DTitle) modal3DTitle.textContent = titleText;
      modal3D.classList.remove('hidden');
      modal3D.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  };

  const close3D = () => {
    if (modal3D) {
      modal3D.classList.add('hidden');
      modal3D.classList.remove('flex');
      document.body.style.overflow = '';
      if (modelViewer) modelViewer.src = '';
    }
  };

  document.querySelectorAll('[data-model-src]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-model-src');
      const title = btn.getAttribute('data-model-title') || '3D CAD Model';
      open3D(src, title);
    });
  });

  if (close3DBtn) close3DBtn.addEventListener('click', close3D);
  if (modal3D) {
    modal3D.addEventListener('click', (e) => {
      if (e.target === modal3D) close3D();
    });
  }

  // Live Optical Filament Measurement Simulator
  const liveReading = document.getElementById('liveReading');
  const liveDeviation = document.getElementById('liveDeviation');
  const liveStdDev = document.getElementById('liveStdDev');
  const sparkPoints = document.getElementById('sparklinePoints');

  if (liveReading && liveDeviation) {
    let history = [1.750, 1.751, 1.749, 1.750, 1.752, 1.749, 1.750, 1.751, 1.750, 1.750];

    setInterval(() => {
      const noise = (Math.random() - 0.5) * 0.005;
      const val = parseFloat((1.750 + noise).toFixed(3));
      const devMicrons = parseFloat(((val - 1.750) * 1000).toFixed(1));

      liveReading.textContent = val.toFixed(3) + ' mm';
      liveDeviation.textContent = (devMicrons >= 0 ? '+' : '') + devMicrons.toFixed(1) + ' µm';
      
      if (liveStdDev) {
        liveStdDev.textContent = '±' + (Math.abs(noise) * 0.8 + 0.0012).toFixed(4) + ' mm';
      }

      history.shift();
      history.push(val);

      if (sparkPoints) {
        const coords = history.map((v, i) => {
          const x = (i / (history.length - 1)) * 240;
          const y = 24 - ((v - 1.750) * 1600);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');
        sparkPoints.setAttribute('points', coords);
      }
    }, 800);
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = translations[currentLang].form_transmitting;
      }
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = translations[currentLang].form_submit;
        }
        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        contactForm.reset();
      }, 700);
    });
  }

  // Pre-fill Target Machine in Contact form when clicking product buttons
  document.querySelectorAll('[data-target-machine]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMachine = btn.getAttribute('data-target-machine');
      const select = document.getElementById('formTargetMachine');
      if (select && targetMachine) {
        select.value = targetMachine;
      }
    });
  });
});
