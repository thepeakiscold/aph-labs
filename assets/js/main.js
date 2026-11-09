/**
 * APH LABS — Executive Multilingual Engine (EN / TR)
 * Comprehensive Technical Specifications & Minimalist Theme
 */

const translations = {
  en: {
    // Meta & Brand
    meta_title: "APH Labs | Precision Engineering & Industrial Instruments",
    meta_desc: "APH Labs engineers high-precision optical instruments, specialized aerodynamic simulation systems, and heavy-duty industrial processing equipment.",
    nav_brand_tag: "Precision Engineering",

    // Navigation
    nav_systems: "Systems",
    nav_capabilities: "Capabilities",
    nav_contact: "Contact",
    btn_rfq: "Contact Us",
    
    // Hero
    hero_badge: "PRECISION ENGINEERING & ADVANCED INSTRUMENTS",
    hero_title: "Precision Engineering & Industrial Instruments",
    hero_desc: "APH Labs engineers high-precision optical instruments, specialized aerodynamic simulation systems, and heavy-duty industrial processing equipment.",
    hero_btn_explore: "Explore Systems",
    hero_btn_contact: "Engineering Inquiry",
    hero_jump_filament: "↓ Optical Gauging",
    hero_jump_aero: "↓ Flow Generation",
    hero_jump_shredder: "↓ Industrial Shearing",

    // Systems Section
    section_systems_title: "Featured Systems",
    section_systems_desc: "Proprietary machinery engineered for demanding industrial environments, tight tolerances, and operational reliability.",
    btn_view_specs: "View Technical Specifications",
    btn_rfq_short: "Request Quote",
    badge_temp: "Operating Temp: -20 °C to +70 °C",

    // System 1: Filament Gauge
    p1_tag: "OPTICAL INSTRUMENTS & QUALITY INSPECTION",
    p1_title: "Optical Filament Diameter Gauge",
    p1_desc: "100% non-contact orthogonal dual-axis optical gauging system for precision extrusion lines. Sub-micron accuracy, true ovality monitoring, zero physical deformation, and zero line drag.",
    p1_h1: "100% Non-Contact Optical Gauging: Zero deformation on flexible/warm polymers, zero mechanical wear, fully immune to abrasive CF/GF composites.",
    p1_h2: "Orthogonal Dual-Axis Tracking: Simultaneous 90° X/Y profile acquisition eliminates single-axis blind spots and false-roundness readings.",
    p1_h3: "Micron-Level Precision: 0.001 mm resolution with ±0.003 mm accuracy and ±0.001 mm repeatability.",
    chip_filament: "0.001 mm Resolution • 100% Non-Contact",
    s1_k1: "Measurement Principle", s1_v1: "100% Non-Contact Orthogonal Dual-Axis (90° Offset)",
    s1_k2: "Target Stock Diameters", s1_v2: "1.75 mm Nominal (0.5 mm – 3.5 mm Configurable)",
    s1_k3: "Resolution & Repeatability", s1_v3: "0.001 mm (1 µm) / ±0.001 mm (±1 µm)",
    s1_k4: "Absolute Accuracy", s1_v4: "±0.003 mm (±3 µm)",
    s1_k5: "Geometry Tracking", s1_v5: "Continuous X/Y Diameter, True Ovality Ratio, Eccentricity",
    s1_k6: "Sensors & Optics", s1_v6: "Dual Synchronized CMOS Machine Vision + Macro Lenses",
    s1_k7: "Illumination Stage", s1_v7: "Dual Diffused Telecentric LED Backlighting",
    s1_k8: "Sampling Rate", s1_v8: "Up to 100 Hz Continuous Dual-Plane Acquisition",
    s1_k9: "Connectivity & Logging", s1_v9: "USB (Virtual COM) / UART / CAN / Ethernet, Timestamped CSV",
    s1_k10: "Process Control", s1_v10: "Configurable Closed-Loop Puller Speed / Extruder Screw RPM",
    s1_k11: "Chassis & Build", s1_v11: "Rigid Aluminum Optical Bench (2020/3030 Profile Mounting)",
    s1_k12: "Operating Temperature", s1_v12: "-20 °C to +70 °C",

    // System 2: Aerodynamic Generator
    p2_tag: "AERODYNAMIC SIMULATION & FLOW SYSTEMS",
    p2_title: "Ducted Aerodynamic Flow Generator",
    p2_desc: "2×2 multi-fan active flow array designed for aerodynamic simulations, wind tunnel experiments, and boundary-layer research. Delivers up to 40 m/s airspeed with straight-line laminar uniformity.",
    p2_h1: "2×2 Multi-Fan Active Flow Array: 4 independently controlled/synchronized high-response flow units.",
    p2_h2: "Up to 40 m/s (144 km/h): Continuously variable velocity control from low-speed laminar onset to peak airspeed.",
    p2_h3: "Rotational Wake Cancellation: Integrated downstream 3D aerodynamic stators eliminate swirl effects.",
    chip_aero: "40 m/s Airspeed • Anti-Swirl Stators",
    s2_k1: "Array Architecture", s2_v1: "2×2 Multi-Fan Active Flow Array (4 Synchronized Flow Units)",
    s2_k2: "Maximum Air Velocity", s2_v2: "Up to 40 m/s (144 km/h / ~78 kts)",
    s2_k3: "Velocity Controllability", s2_v3: "Continuously Variable Regulation from Laminar Onset to Peak",
    s2_k4: "Flow Conditioning", s2_v4: "Downstream 3D Aerodynamic Anti-Swirl Stators",
    s2_k5: "Drive System", s2_v5: "High-Efficiency Brushless Electric Motors + Digital ESCs",
    s2_k6: "Modulation Modes", s2_v6: "Steady-State Hold, Automated Ramping, Dynamic Gusts, Stepped Wind",
    s2_k7: "Digital Control Interface", s2_v7: "UART / PWM / CAN / USB (Python & ROS 2 API Ready)",
    s2_k8: "Frame Construction", s2_v8: "Rigid Sigma Aluminum Profile Chassis with T-Slot Mounting Rails",
    s2_k9: "Safety Protection", s2_v9: "Protective Inlet/Outlet Foreign Object Debris (FOD) Screens",
    s2_k10: "Target Applications", s2_v10: "Propeller Testing, Pitot/Airspeed Calibration, UAV HIL Simulation",
    s2_k11: "Operating Temperature", s2_v11: "-20 °C to +70 °C",

    // System 3: Shredder
    p3_tag: "INDUSTRIAL PROCESSING & RECYCLING",
    p3_title: "Single-Shaft Industrial Shredder",
    p3_desc: "Benchtop single-shaft shredder engineered for technical polymers and composite scrap reduction. 52 RPM high-shear cutting, 40 Nm torque, and full SS316 stainless steel cutting core.",
    p3_h1: "Direct-to-Extruder Regrind: 4.0 mm tooth pitch produces uniform ~4 mm flakes that drop directly into desktop extruders.",
    p3_h2: "Surgical-Grade SS316 Core: Full CNC/laser-machined SS316 stainless steel resists corrosion and abrasive composite wear.",
    p3_h3: "52 RPM / 40 Nm High Shear: Low-speed rotation eliminates thermal softening, keeping polymers cold to preserve properties.",
    p3_h4: "Ultra-Quiet Benchtop Profile: < 65 dB acoustic signature under full load, suitable for desktop lab environments.",
    label_shredder_assembly: "Benchtop Machine Assembly",
    label_shredder_core: "SS316 Stainless Cutting Core",
    chip_shredder_rpm: "52 RPM • 40 Nm Continuous Rating",
    chip_shredder_pitch: "4.0 mm Pitch • SS316 Multi-Hook Rotor",
    p3_highlights_title: "Core Performance Highlights",
    s3_k1: "Motor & Power Supply", s3_v1: "Single-Phase Industrial AC Induction Motor, 220V AC / 50 Hz",
    s3_k2: "Speed & Torque", s3_v2: "52 RPM Low-Speed Shear, 40 Nm Continuous Output Rating",
    s3_k3: "Cutting Architecture", s3_v3: "Single-Shaft Rotor + Precision Stationary Counter-Knives",
    s3_k4: "Blade Material", s3_v4: "Premium SS316 Stainless Steel (Corrosion & Wear Resistant)",
    s3_k5: "Tooth Pitch & Clearance", s3_v5: "4.0 mm Precision Pitch (~4 mm Granular Flakes)",
    s3_k6: "Cutting Chamber", s3_v6: "160 × 140 × 110 mm (Multi-Hook Autonomous Pull-In Geometry)",
    s3_k7: "Throughput Capacity", s3_v7: "2–6 kg/h (Geometry & Polymer Dependent)",
    s3_k8: "Max Processable Wall", s3_v8: "Up to 3.5 mm Rigid Structural Cross-Section",
    s3_k9: "Compatible Polymers", s3_v9: "PLA, PETG, ABS, PA/Nylon, PP, HDPE, LDPE, PS",
    s3_k10: "Discharge Sizing Screen", s3_v10: "Interchangeable Perforated Stainless Steel Mesh (4–5 mm)",
    s3_k11: "Operation & Safety", s3_v11: "Forward / Stop / Instant Reverse Switchgear + Momentary Jam Clearing",
    s3_k12: "Acoustic Signature", s3_v12: "< 65 dB (Ultra-Low Noise, Desktop Lab Rated)",
    s3_k13: "Operating Temperature", s3_v13: "-20 °C to +70 °C",

    // Capabilities Section
    cap_badge: "CORE COMPETENCIES",
    cap_title: "End-to-End Engineering & Manufacturing",
    cap_desc: "Analytical rigor and uncompromising quality standards from initial concept through shop-floor commissioning.",
    cap_1_title: "Parametric CAD & Mechanical Engineering",
    cap_1_desc: "3D solid modeling, kinematic mechanisms, tolerance stackup analysis, and DFM/DFA optimization for industrial machinery.",
    cap_2_title: "Aerodynamic Simulation & Flow Research",
    cap_2_desc: "Computational fluid dynamics, multi-fan flow array synchronization, boundary-layer studies, and anti-swirl flow conditioning.",
    cap_3_title: "Non-Contact Optical Gauging & Inspection Instruments",
    cap_3_desc: "Orthogonal dual-axis gauging, sub-micron edge detection algorithms, telecentric backlighting stages, and real-time ovality tracking.",
    cap_4_title: "Embedded Systems & High-Speed DSP Firmware",
    cap_4_desc: "High-speed DSP signal acquisition, real-time edge processing algorithms, optical sensor drivers, and industrial communication architectures (CAN, UART, RS-485, Ethernet).",
    cap_5_title: "Industrial Automation & Closed-Loop Control",
    cap_5_desc: "Real-time closed-loop line synchronization, automated extruder puller speed and screw RPM regulation, dynamic sensor feedback loops, and industrial automation control systems.",
    cap_6_title: "Custom Turnkey Machinery & Specialized Prototyping",
    cap_6_desc: "Bespoke machine design from initial concept through shop-floor commissioning, rapid iterative prototyping, and benchtop lab machinery.",

    // Contact Section
    contact_badge: "CONTACT",
    contact_title: "Direct Engineering Inquiries",
    contact_desc: "Contact our engineering group directly regarding machinery specifications, custom engineering, or technical collaboration.",
    form_machine_label: "Target System",
    form_machine_opt1: "Optical Filament Diameter Gauge",
    form_machine_opt2: "Ducted Aerodynamic Flow Generator",
    form_machine_opt3: "Single-Shaft Industrial Shredder",
    form_machine_opt4: "Custom Engineering Consultation / Other",
    form_name_label: "Full Name",
    form_name_placeholder: "First and Last Name",
    form_company_label: "Company / Organization",
    form_company_placeholder: "Company Name",
    form_email_label: "Email Address",
    form_email_placeholder: "engineering@company.com",
    form_notes_label: "Technical Requirements & Project Scope",
    form_notes_placeholder: "Project scope, technical parameters, or specifications...",
    form_submit: "Transmit Inquiry",
    form_transmitting: "Transmitting...",
    form_success_title: "Inquiry Received",
    form_success_desc: "Your inquiry has been received and routed directly to our engineering desk. We will review your technical parameters and respond within one business day.",
    btn_send_another: "Send Another Inquiry",
    
    // Direct contact and Footer
    contact_direct_label: "Direct Inquiries:",
    contact_phone_label: "Direct Phone:",
    footer_copy: "APH LABS © 2026 • Precision Engineering & Industrial Instruments",
    footer_domain: "Official Domain: www.aph-labs.com"
  },

  tr: {
    // Meta & Brand
    meta_title: "APH Labs | Hassas Mühendislik & Endüstriyel Cihazlar",
    meta_desc: "APH Labs; yüksek hassasiyetli optik ölçüm cihazları, özel aerodinamik simülasyon sistemleri ve ağır hizmet tipi endüstriyel sistemler tasarlar ve üretir.",
    nav_brand_tag: "Hassas Mühendislik",

    // Navigation
    nav_systems: "Sistemler",
    nav_capabilities: "Yetkinlikler",
    nav_contact: "İletişim",
    btn_rfq: "İletişime Geçin",
    
    // Hero
    hero_badge: "HASSAS MÜHENDİSLİK VE ENDÜSTRİYEL CİHAZLAR",
    hero_title: "Hassas Mühendislik ve Endüstriyel Cihazlar",
    hero_desc: "APH Labs; yüksek hassasiyetli optik ölçüm cihazları, özel aerodinamik simülasyon sistemleri ve ağır hizmet tipi endüstriyel sistemler tasarlar ve üretir.",
    hero_btn_explore: "Sistemlerimizi İnceleyin",
    hero_btn_contact: "Mühendislik Talebi",
    hero_jump_filament: "↓ Optik Ölçüm",
    hero_jump_aero: "↓ Akış Jeneratörü",
    hero_jump_shredder: "↓ Endüstriyel Kırma",

    // Systems Section
    section_systems_title: "Öne Çıkan Sistemler",
    section_systems_desc: "Zorlu endüstriyel koşullar, dar toleranslar ve yüksek çalışma stabilitesi için geliştirilmiş tescilli çözümler.",
    btn_view_specs: "Teknik Özellikleri İncele",
    btn_rfq_short: "Teklif Al",
    badge_temp: "Çalışma Sıcaklığı: -20 °C ila +70 °C",

    // System 1: Filament Gauge
    p1_tag: "HASSAS CİHAZLAR & KALİTE KONTROL",
    p1_title: "Optik Filament Çap Ölçüm Cihazı",
    p1_desc: "Hassas ekstrüzyon hatları için %100 temassız ortogonal çift eksenli optik ölçüm sistemi. Sub-mikron hassasiyet, anlık ovallik takibi, sıfır mekanik deformasyon ve sıfır hat sürtünmesi.",
    p1_h1: "%100 Temassız Optik Ölçüm: Esnek ve sıcak polimerlerde sıfır deformasyon, aşındırıcı karbon/cam elyaf katkılı filamentlerde sıfır mekanik aşınma.",
    p1_h2: "Ortogonal Çift Eksenli Takip: Eş zamanlı 90° X ve Y düzlem profili analizi ile tek eksenli kör noktaları ve sahte yuvarlaklık hatalarını eler.",
    p1_h3: "Mikron Seviyesinde Hassasiyet: 0.001 mm çözünürlük, ±0.003 mm mutlak doğruluk ve ±0.001 mm tekrarlanabilirlik.",
    chip_filament: "0.001 mm Çözünürlük • %100 Temassız",
    s1_k1: "Ölçüm Prensibi", s1_v1: "%100 Temassız Ortogonal Çift Eksen (90° Açı)",
    s1_k2: "Hedef Filament Çapı", s1_v2: "1.75 mm Nominal (0.5 mm – 3.5 mm Ayarlanabilir)",
    s1_k3: "Çözünürlük & Tekrarlanabilirlik", s1_v3: "0.001 mm (1 µm) / ±0.001 mm (±1 µm)",
    s1_k4: "Mutlak Doğruluk", s1_v4: "±0.003 mm (±3 µm)",
    s1_k5: "Geometri Takibi", s1_v5: "Anlık X/Y Çapı, Gerçek Ovallik Oranı, Dairesellik Sapması",
    s1_k6: "Sensörler & Optik", s1_v6: "Çift Senkron CMOS Makine Görüsü + Makro Lensler",
    s1_k7: "Aydınlatma Kademesi", s1_v7: "Çift Difüzörlü Telecentric LED Arka Aydınlatma",
    s1_k8: "Örnekleme Hızı", s1_v8: "100 Hz'e Kadar Sürekli Çift Düzlem Ölçümü",
    s1_k9: "Bağlantı & Veri Kaydı", s1_v9: "USB (Sanal COM) / UART / CAN / Ethernet, Zaman Damgalı CSV",
    s1_k10: "Süreç Kontrolü", s1_v10: "Çekici Hızı / Ekstrüder Vidası Kapalı Çevrim PID Desteği",
    s1_k11: "Gövde Yapısı", s1_v11: "Rijit Alüminyum Optik Şasi (2020/3030 Profil Montajı)",
    s1_k12: "Çalışma Sıcaklığı", s1_v12: "-20 °C ila +70 °C",

    // System 2: Aerodynamic Generator
    p2_tag: "AERODİNAMİK SİMÜLASYON & AKIŞ SİSTEMLERİ",
    p2_title: "Kanallı Aerodinamik Akış Jeneratörü",
    p2_desc: "Aerodinamik simülasyonlar, rüzgar tüneli deneyleri ve sınır tabaka araştırmaları için tasarlanmış 2×2 çoklu fan aktif akış matrisi. 40 m/s hıza kadar yüksek doğrusallıkta düzgün hava akışı sağlar.",
    p2_h1: "2×2 Çoklu Fan Aktif Akış Matrisi: Bağımsız kontrol edilebilen ve senkronize 4 adet yüksek tepkili akış ünitesi.",
    p2_h2: "40 m/s (144 km/h) Hız: Düşük hızlardan tepe hızlara kadar kademesiz hassas hız regülasyonu.",
    p2_h3: "Dönel Girdap Sönümleme: Çıkış yönündeki 3D aerodinamik statorlar dönme kaynaklı türbülansı ve girdapları tamamen yok eder.",
    chip_aero: "40 m/s Hava Hızı • Anti-Girdap Statorları",
    s2_k1: "Matris Mimarisi", s2_v1: "2×2 Çoklu Fan Aktif Akış Matrisi (4 Senkronize Akış Ünitesi)",
    s2_k2: "Maksimum Hava Hızı", s2_v2: "40 m/s'ye Kadar (144 km/h / ~78 kts)",
    s2_k3: "Hız Kontrol Edilebilirliği", s2_v3: "Laminer Başlangıçtan Zirve Hıza Kademesiz Hız Regülasyonu",
    s2_k4: "Akış Şartlandırma", s2_v4: "Çıkış 3D Aerodinamik Anti-Girdap Statorları",
    s2_k5: "Tahrik Sistemi", s2_v5: "Yüksek Verimli Fırçasız Motorlar + Dijital ESC (Milisaniye Tepki)",
    s2_k6: "Çalışma Modları", s2_v6: "Sabit Hız Tutma, Otomatik Hız Rampası, Dinamik Darbe (Gust), Adımlı Rüzgar",
    s2_k7: "Dijital Kontrol Arayüzü", s2_v7: "UART / PWM / CAN / USB (Python ve ROS 2 API Desteği)",
    s2_k8: "Şasi Yapısı", s2_v8: "Rijit Sigma Alüminyum Profil Şasi, Modüler T-Kanal Montaj Rayları",
    s2_k9: "Güvenlik Koruması", s2_v9: "Giriş ve Çıkış Yabancı Cisim (FOD) Güvenlik Izgaraları",
    s2_k10: "Hedef Uygulamalar", s2_v10: "Pervane Testleri, Pitot/Hız Sensörü Kalibrasyonu, İHA HIL Simülasyonu",
    s2_k11: "Çalışma Sıcaklığı", s2_v11: "-20 °C ila +70 °C",

    // System 3: Shredder
    p3_tag: "ENDÜSTRİYEL İŞLEME & GERİ DÖNÜŞÜM",
    p3_title: "Tek Şaftlı Endüstriyel Parçalayıcı",
    p3_desc: "Teknik polimerler ve kompozit firelerin boyut küçültmesi için geliştirilmiş masaüstü tek şaftlı parçalayıcı. 52 RPM yüksek kesme kuvveti, 40 Nm tork ve paslanmaz SS316 kesici çekirdek.",
    p3_h1: "Doğrudan Ekstrüdere Uygun Kırma: 4.0 mm diş aralığı ile üretilen homojen ~4 mm granül parçalar, masaüstü ekstrüderlere tıkanma yapmadan doğrudan beslenir.",
    p3_h2: "Cerrahi Sınıf SS316 Çelik: CNC/lazer hassas işlenmiş SS316 paslanmaz çelik bıçaklar korozyona ve aşındırıcı kompozitlere karşı üstün direnç sağlar.",
    p3_h3: "52 RPM / 40 Nm Yüksek Kesme: Düşük devir yüksek tork ile malzemeyi ısıtmadan ve erime/sakızlaşma yaptırmadan soğuk kesim sağlar.",
    p3_h4: "Ultra Sessiz Masaüstü Form: Tam yük altında < 65 dB gürültü seviyesi ile laboratuvar ve atölye ortamlarına uygundur.",
    label_shredder_assembly: "Tezgah Üstü Makine Montajı",
    label_shredder_core: "SS316 Paslanmaz Kesici Çekirdek",
    chip_shredder_rpm: "52 RPM • 40 Nm Sürekli Tork",
    chip_shredder_pitch: "4.0 mm Diş Aralığı • SS316 Çok Kancalı Rotor",
    p3_highlights_title: "Temel Performans Özellikleri",
    s3_k1: "Motor & Güç Kaynağı", s3_v1: "Tek Faz Endüstriyel AC İndüksiyon Motoru, 220V AC / 50 Hz",
    s3_k2: "Hız & Tork Derecesi", s3_v2: "52 RPM Düşük Devir Kesme, 40 Nm Sürekli Tork Değeri",
    s3_k3: "Kesici Mimarisi", s3_v3: "Tek Şaftlı Rotor + Hassas İşlenmiş Sabit Karşı Bıçaklar",
    s3_k4: "Bıçak Malzemesi", s3_v4: "Birinci Sınıf SS316 Paslanmaz Çelik (Korozyon & Aşınma Dirençli)",
    s3_k5: "Diş Adımı & Parça Boyutu", s3_v5: "4.0 mm Hassas Açıklık (~4 mm Homojen Granül Parçacıklar)",
    s3_k6: "Kesme Haznesi", s3_v6: "160 × 140 × 110 mm (Malzemeyi İçeri Çeken Çok Kancalı Bıçaklar)",
    s3_k7: "İşleme Kapasitesi", s3_v7: "2–6 kg/saat Verim (Geometri ve Polimere Bağlı)",
    s3_k8: "Maksimum Et Kalınlığı", s3_v8: "3.5 mm'ye Kadar Rijit Yapısal Kesit",
    s3_k9: "Uyumlu Polimerler", s3_v9: "PLA, PETG, ABS, PA/Naylon, PP, HDPE, LDPE, PS",
    s3_k10: "Çıkış Elek Filtresi", s3_v10: "Değiştirilebilir Delikli Paslanmaz Çelik Elek (4–5 mm Delik)",
    s3_k11: "Çalışma & Güvenlik", s3_v11: "İleri / Dur / Anlık Geri Şalteri + Manuel Sıkışma Tahliye Geri Alımı",
    s3_k12: "Akustik Ses Seviyesi", s3_v12: "< 65 dB (Ultra Düşük Gürültü, Laboratuvar ve Ofis Uyumlu)",
    s3_k13: "Çalışma Sıcaklığı", s3_v13: "-20 °C ila +70 °C",

    // Capabilities Section
    cap_badge: "KURUMSAL YETKİNLİKLER",
    cap_title: "Uçtan Uca Mühendislik ve İmalat",
    cap_desc: "Fikirden nihai makineye kadar her aşamada analitik doğrulama ve yüksek kalite standartları.",
    cap_1_title: "Parametrik CAD & Mekanik Mühendislik",
    cap_1_desc: "Endüstriyel makineler için 3D katı modelleme, kinematik mekanizmalar, tolerans yığılım analizi ve üretime uygun tasarım (DFM/DFA).",
    cap_2_title: "Aerodinamik Simülasyon & Akış Araştırmaları",
    cap_2_desc: "Hesaplamalı akışkanlar dinamiği, çoklu fan akış matrisi senkronizasyonu, sınır tabaka araştırmaları ve anti-girdap akış şartlandırması.",
    cap_3_title: "Temassız Optik Ölçüm & Muayene Cihazları",
    cap_3_desc: "Ortogonal çift eksenli optik ölçüm, sub-mikron kenar algılama algoritmaları, telecentric aydınlatma kademeleri ve anlık ovallik takibi.",
    cap_4_title: "Gömülü Sistemler ve Yüksek Hızlı DSP Yazılımı",
    cap_4_desc: "Yüksek hızlı DSP sinyal işleme, gerçek zamanlı kenar yakalama algoritmaları, optik sensör sürücüleri ve endüstriyel haberleşme protokolleri (CAN, UART, RS-485, Ethernet).",
    cap_5_title: "Endüstriyel Otomasyon ve Kapalı Çevrim Kontrol",
    cap_5_desc: "Gerçek zamanlı kapalı çevrim hat senkronizasyonu, ekstrüzyon çekici hızı ve vida devri otomatik regülasyonu, dinamik sensör geri besleme döngüleri ve endüstriyel otomasyon sistemleri.",
    cap_6_title: "Özel Anahtar Teslim Makine & Prototipleme",
    cap_6_desc: "Fikirden nihai çalışan makineye kadar kuruma özel mekanik tasarım, hızlı prototipleme, masaüstü lab cihazları ve hat devreye alma.",

    // Contact Section
    contact_badge: "İLETİŞİM",
    contact_title: "Projeniz İçin Doğrudan İletişime Geçin",
    contact_desc: "Özel makine tasarımı, hassas cihaz entegrasyonu veya teknik şartnameler için bizimle bağlantı kurun.",
    form_machine_label: "İlgilendiğiniz Sistem",
    form_machine_opt1: "Optik Filament Çap Ölçüm Cihazı",
    form_machine_opt2: "Kanallı Aerodinamik Akış Jeneratörü",
    form_machine_opt3: "Tek Şaftlı Endüstriyel Parçalayıcı",
    form_machine_opt4: "Özel Mühendislik Danışmanlığı / Diğer",
    form_name_label: "Adınız Soyadınız",
    form_name_placeholder: "Adınız ve Soyadınız",
    form_company_label: "Firma / Kurum",
    form_company_placeholder: "Firma Adı",
    form_email_label: "E-posta",
    form_email_placeholder: "muhendislik@firma.com",
    form_notes_label: "Teknik Talepler & Açıklamalar",
    form_notes_placeholder: "Proje kapsamı veya teknik gereksinimler...",
    form_submit: "Talebi Gönder",
    form_transmitting: "Gönderiliyor...",
    form_success_title: "Talebiniz Alındı",
    form_success_desc: "Mühendislik talebiniz doğrudan mühendislik birimimize iletilmiştir. Teknik gereksinimleriniz incelenerek bir iş günü içinde tarafınıza dönüş yapılacaktır.",
    btn_send_another: "Yeni Bir Talep Gönder",
    
    // Direct contact and Footer
    contact_direct_label: "Doğrudan İletişim:",
    contact_phone_label: "Doğrudan Telefon:",
    footer_copy: "APH LABS © 2026 • Hassas Mühendislik & Endüstriyel Cihazlar",
    footer_domain: "Resmi Alan Adı: www.aph-labs.com"
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

  document.documentElement.lang = lang;

  // Dynamic Title & Meta Description
  if (translations[lang] && translations[lang].meta_title) {
    document.title = translations[lang].meta_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang] && translations[lang].meta_desc) {
    metaDesc.setAttribute('content', translations[lang].meta_desc);
  }

  // Text contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn-tr').forEach(btn => {
    btn.classList.toggle('active', lang === 'tr');
  });
  document.querySelectorAll('.lang-btn-en').forEach(btn => {
    btn.classList.toggle('active', lang === 'en');
  });
}

/**
 * Auto-detect user's preferred language
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
  detectUserLanguage();

  // Language Toggles
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

  // Mobile Menu
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

  // Contact Form (Real-Time Dispatch to furkaniusprimes@gmail.com)
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const submitTextSpan = submitBtn ? submitBtn.querySelector('span') : null;
      const originalText = submitTextSpan ? submitTextSpan.textContent : (submitBtn ? submitBtn.textContent : '');

      if (submitBtn) {
        submitBtn.disabled = true;
        if (submitTextSpan) {
          submitTextSpan.textContent = translations[currentLang].form_transmitting || "Transmitting...";
        }
      }

      const targetSystem = document.getElementById('formTargetMachine')?.value || 'Precision Engineering Inquiry';
      const fullName = document.getElementById('formFullName')?.value || '';
      const company = document.getElementById('formCompany')?.value || '';
      const email = document.getElementById('formEmail')?.value || '';
      const notes = document.getElementById('formNotes')?.value || '';

      const payload = {
        _subject: `New APH Labs Inquiry: ${targetSystem} [${company || fullName}]`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        "Target System": targetSystem,
        "Contact Person": fullName,
        "Company / Organization": company,
        "Email Address": email,
        "Technical Scope & Requirements": notes,
        "Direct Phone Line": "+90 553 821 62 99"
      };

      try {
        await fetch("https://formsubmit.co/ajax/furkaniusprimes@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });

        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        contactForm.reset();
      } catch (err) {
        console.warn("Transmission notice:", err);
        contactForm.classList.add('hidden');
        contactSuccess.classList.remove('hidden');
        contactForm.reset();
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          if (submitTextSpan) {
            submitTextSpan.textContent = originalText;
          }
        }
      }
    });
  }

  // Reset Contact Form from Confirmation Screen
  const btnSendAnother = document.getElementById('btnSendAnother');
  if (btnSendAnother && contactForm && contactSuccess) {
    btnSendAnother.addEventListener('click', () => {
      contactSuccess.classList.add('hidden');
      contactForm.classList.remove('hidden');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const submitTextSpan = submitBtn ? submitBtn.querySelector('span') : null;
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitTextSpan) {
          submitTextSpan.textContent = translations[currentLang]?.form_submit || "Transmit Inquiry";
        }
      }
    });
  }

  // Pre-fill target machine in form
  document.querySelectorAll('[data-target-machine]').forEach(btn => {
    btn.addEventListener('click', () => {
      const machineIndex = btn.getAttribute('data-target-machine');
      const select = document.getElementById('formTargetMachine');
      if (select && machineIndex !== null) {
        select.selectedIndex = parseInt(machineIndex, 10);
      }
    });
  });
});
