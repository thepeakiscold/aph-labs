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
    nav_systems: "Products and Solutions",
    nav_capabilities: "Capabilities",
    nav_contact: "Contact",
    btn_rfq: "Contact Us",
    
    // Hero
    hero_badge: "PRECISION ENGINEERING & ADVANCED INSTRUMENTS",
    hero_title: "Precision Engineering & Industrial Instruments",
    hero_desc: "APH Labs engineers high-precision optical instruments, specialized aerodynamic simulation systems, and heavy-duty industrial processing equipment.",
    hero_btn_explore: "Explore Products and Solutions",
    hero_btn_contact: "Engineering Inquiry",
    hero_jump_filament: "Optical Filament Gauge →",
    hero_jump_aero: "Aerodynamic Flow Generator →",
    hero_jump_shredder: "Industrial Shredder →",

    // Systems Section
    section_systems_title: "Products and Solutions",
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
    
    // Navigation & Multi-Page Architecture
    nav_home: "Home",
    nav_all_systems: "All Products and Solutions",
    nav_p1_sub: "0.001 mm Resolution • Dual-Axis",
    nav_p2_sub: "2×2 Array • Up to 40 m/s",
    nav_p3_sub: "52 RPM / 40 Nm • SS316 Core",
    btn_view_product: "View Product Page",
    btn_compare_systems: "Compare All Products",
    btn_jump_specs: "Technical Specifications",

    // Product Catalog & Shared Datasheet Sections
    meta_catalog_title: "Products and Solutions | APH Labs",
    meta_catalog_desc: "Explore APH Labs precision engineering products and solutions: Optical Filament Diameter Gauge, Ducted Aerodynamic Flow Generator, and Single-Shaft Industrial Shredder.",
    meta_p1_title: "Optical Filament Diameter Gauge | APH Labs",
    meta_p1_desc: "100% non-contact orthogonal dual-axis optical filament diameter gauge with 0.001 mm resolution, ±0.003 mm accuracy, and 100 Hz closed-loop extrusion control.",
    meta_p2_title: "Ducted Aerodynamic Flow Generator | APH Labs",
    meta_p2_desc: "2×2 multi-fan active aerodynamic flow generator delivering up to 40 m/s laminar airspeed with 3D anti-swirl stators and Python / ROS 2 digital control.",
    meta_p3_title: "Single-Shaft Industrial Shredder | APH Labs",
    meta_p3_desc: "Benchtop 52 RPM / 40 Nm single-shaft industrial polymer shredder with SS316 stainless steel cutting core, 4.0 mm pitch, and < 65 dB lab operation.",

    catalog_badge: "PRODUCTS & SOLUTIONS",
    catalog_title: "Products and Solutions",
    catalog_desc: "Explore dedicated technical documentation, system architecture, and engineering specifications for each platform.",
    catalog_compare_title: "Platform Comparison Matrix",
    catalog_col_system: "Product",
    catalog_col_domain: "Engineering Domain",
    catalog_col_metric: "Primary Benchmark",
    catalog_col_interface: "Control & Interface",
    catalog_col_temp: "Operating Range",
    catalog_col_page: "Documentation",
    catalog_custom_title: "Need a Custom Turnkey Configuration?",
    catalog_custom_desc: "Discuss bespoke machine architectures, sensor integrations, or specialized process automation directly with our engineering team.",

    section_arch_badge: "SYSTEM ARCHITECTURE",
    section_arch_title: "Engineering Highlights & Subsystems",
    section_specs_badge: "ENGINEERING DATASHEET",
    section_specs_title: "Full Technical Specifications",
    section_specs_desc: "Verified operational parameters, interfaces, and mechanical tolerances.",
    section_apps_badge: "USE CASES & APPLICATIONS",
    section_apps_title: "Where This System Is Used",
    section_apps_desc: "Real-world industrial production, laboratory, and research scenarios where this system operates.",
    apps_label: "Example Applications",
    section_related_title: "Other Products and Solutions",
    product_inquiry_badge: "DIRECT ENGINEERING INQUIRY",
    product_inquiry_title: "Request Engineering Quote & Datasheet",
    product_inquiry_desc: "Submit your process parameters and target requirements directly to our engineering desk.",

    // Product 1 KPIs & Subsystems
    p1_kpi1_val: "0.001 mm", p1_kpi1_lbl: "Resolution (1 µm)",
    p1_kpi2_val: "±0.003 mm", p1_kpi2_lbl: "Absolute Accuracy",
    p1_kpi3_val: "100 Hz", p1_kpi3_lbl: "Dual-Plane Rate",
    p1_kpi4_val: "90° X/Y", p1_kpi4_lbl: "Orthogonal Axes",
    p1_sub1_title: "Optical Acquisition & Telecentric Stage",
    p1_sub1_desc: "Dual synchronized CMOS machine vision sensors paired with macro optics and dual diffused telecentric LED backlighting measure continuous X/Y diameter, true ovality ratio, and eccentricity across 0.5 mm – 3.5 mm stock (1.75 mm nominal).",
    p1_sub2_title: "Industrial Connectivity & Closed-Loop Control",
    p1_sub2_desc: "Outputs timestamped CSV telemetry via USB (Virtual COM), UART, CAN, and Ethernet while regulating closed-loop puller speed and extruder screw RPM from a rigid 2020/3030 aluminum optical bench.",
    p1_apps_summary: "3D filament extrusion lines • Abrasive CF/GF composites • Medical tubing & precision wires • Spool QC logging",
    p1_use1_title: "3D Printing Filament Extrusion Lines",
    p1_use1_desc: "Continuous 100 Hz diameter and ovality inspection on 1.75 mm / 2.85 mm extrusion lines with closed-loop puller speed and extruder screw RPM feedback to hold ±0.003 mm tolerance.",
    p1_use2_title: "Abrasive CF/GF Composite & Warm Polymer Lines",
    p1_use2_desc: "100% non-contact optical gauging eliminates physical sensor wear, drag, and calibration drift on abrasive carbon/glass-fiber filaments and soft or still-warm polymers.",
    p1_use3_title: "Medical Tubing, Precision Wires & Fiber Jackets",
    p1_use3_desc: "Sub-micron (0.001 mm) orthogonal 90° X/Y tracking across 0.5 mm – 3.5 mm cylindrical stock catches necking, ovality, and eccentricity hidden from single-axis gauges.",
    p1_use4_title: "R&D Compounding & Spool Quality Certification",
    p1_use4_desc: "Streams timestamped CSV diameter logs over USB, UART, CAN, or Ethernet to document spool-by-spool dimensional compliance during polymer formulation trials.",

    // Product 2 KPIs & Subsystems
    p2_kpi1_val: "2×2", p2_kpi1_lbl: "Active Flow Array",
    p2_kpi2_val: "40 m/s", p2_kpi2_lbl: "Peak Airspeed",
    p2_kpi3_val: "3D Stators", p2_kpi3_lbl: "Anti-Swirl Wake",
    p2_kpi4_val: "ROS 2 / Py", p2_kpi4_lbl: "Digital Control API",
    p2_sub1_title: "Multi-Fan Drive & Flow Conditioning",
    p2_sub1_desc: "Four synchronized brushless electric flow units with digital ESCs drive continuously variable airspeeds up to 40 m/s (144 km/h), conditioned by downstream 3D anti-swirl stators and protective inlet/outlet FOD screens inside a Sigma aluminum T-slot frame.",
    p2_sub2_title: "Modulation Profiles & Research Integration",
    p2_sub2_desc: "Supports steady-state hold, automated ramping, dynamic gusts, and stepped wind profiles over UART, PWM, CAN, and USB (Python & ROS 2 API ready) for propeller testing, pitot/airspeed calibration, and UAV HIL simulation.",
    p2_apps_summary: "UAV HIL wind-gust testing • Pitot & anemometer calibration • Propeller efficiency rigs • Boundary-layer research",
    p2_use1_title: "UAV Hardware-in-the-Loop (HIL) Wind Testing",
    p2_use1_desc: "Commands automated ramping, dynamic wind gusts, and stepped profiles up to 40 m/s via Python or ROS 2 API to test autopilot disturbance rejection indoors.",
    p2_use2_title: "Pitot-Static Probe & Airspeed Sensor Calibration",
    p2_use2_desc: "Downstream 3D anti-swirl stators deliver straight-line laminar airflow from low-speed onset to 144 km/h (~78 kts) for repeatable benchtop calibration of pitot tubes and anemometers.",
    p2_use3_title: "Propeller, Rotor & Micro-Turbine Thrust Rigs",
    p2_use3_desc: "Rigid Sigma aluminum T-slot rails allow direct downstream mounting of thrust stands to characterize propeller and rotor efficiency across controlled axial inflow speeds.",
    p2_use4_title: "Academic Boundary-Layer & Flow Research",
    p2_use4_desc: "Compact 2×2 synchronized array brings repeatable aerodynamic profile, wake, and boundary-layer studies to university labs without facility-scale wind tunnels.",

    // Product 3 KPIs & Subsystems
    p3_kpi1_val: "52 RPM", p3_kpi1_lbl: "Low-Speed Shear",
    p3_kpi2_val: "40 Nm", p3_kpi2_lbl: "Continuous Torque",
    p3_kpi3_val: "SS316", p3_kpi3_lbl: "Cutting Core",
    p3_kpi4_val: "< 65 dB", p3_kpi4_lbl: "Lab Acoustic",
    p3_sub1_title: "SS316 Rotor Geometry & Sizing Screen",
    p3_sub1_desc: "A 160 × 140 × 110 mm multi-hook autonomous pull-in chamber pairs a single-shaft SS316 rotor with stationary counter-knives at 4.0 mm pitch and interchangeable 4–5 mm stainless discharge mesh, outputting 2–6 kg/h of uniform ~4 mm regrind.",
    p3_sub2_title: "AC Induction Drive, Safety & Polymer Range",
    p3_sub2_desc: "Powered by a 220V AC / 50 Hz single-phase induction motor with Forward / Stop / Instant Reverse switchgear and momentary jam clearing, processing PLA, PETG, ABS, PA/Nylon, PP, HDPE, LDPE, and PS walls up to 3.5 mm quietly below 65 dB.",
    p3_apps_summary: "3D print scrap-to-extruder recycling • University polymer R&D • Abrasive composite reduction • Small-batch injection regrind",
    p3_use1_title: "Closed-Loop 3D Print & Extrusion Recycling",
    p3_use1_desc: "Converts failed prints, purge blocks, and support waste (PLA, PETG, ABS, PA/Nylon) into uniform ~4 mm flakes engineered to feed directly into desktop filament extruders.",
    p3_use2_title: "University R&D & Polymer Sample Preparation",
    p3_use2_desc: "Low-speed 52 RPM / 40 Nm cold shear prevents thermal softening so PP, HDPE, LDPE, and PS batches retain their native properties under a quiet < 65 dB lab profile.",
    p3_use3_title: "Corrosive & Abrasive Technical Scrap Reduction",
    p3_use3_desc: "Surgical-grade CNC/laser-machined SS316 stainless steel cutting core resists corrosion and wear when downsizing rigid polymer walls up to 3.5 mm.",
    p3_use4_title: "Small-Batch Injection Molding Runner Regrind",
    p3_use4_desc: "Interchangeable 4–5 mm stainless sizing screens and 2–6 kg/h throughput reclaim sprues and runners cleanly with Forward / Stop / Instant Reverse jam protection.",

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
    nav_systems: "Ürünler ve Çözümler",
    nav_capabilities: "Yetkinlikler",
    nav_contact: "İletişim",
    btn_rfq: "İletişime Geçin",
    
    // Hero
    hero_badge: "HASSAS MÜHENDİSLİK VE ENDÜSTRİYEL CİHAZLAR",
    hero_title: "Hassas Mühendislik ve Endüstriyel Cihazlar",
    hero_desc: "APH Labs; yüksek hassasiyetli optik ölçüm cihazları, özel aerodinamik simülasyon sistemleri ve ağır hizmet tipi endüstriyel sistemler tasarlar ve üretir.",
    hero_btn_explore: "Ürün ve Çözümleri İncele",
    hero_btn_contact: "Mühendislik Talebi",
    hero_jump_filament: "Optik Filament Ölçüm Cihazı →",
    hero_jump_aero: "Aerodinamik Akış Jeneratörü →",
    hero_jump_shredder: "Endüstriyel Parçalayıcı →",

    // Systems Section
    section_systems_title: "Ürünler ve Çözümler",
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
    
    // Navigation & Multi-Page Architecture
    nav_home: "Ana Sayfa",
    nav_all_systems: "Tüm Ürünler ve Çözümler",
    nav_p1_sub: "0.001 mm Çözünürlük • Çift Eksen",
    nav_p2_sub: "2×2 Matris • 40 m/s'ye Kadar",
    nav_p3_sub: "52 RPM / 40 Nm • SS316 Çekirdek",
    btn_view_product: "Ürün Sayfasını İncele",
    btn_compare_systems: "Tüm Ürünleri Karşılaştır",
    btn_jump_specs: "Teknik Özellikler",

    // Product Catalog & Shared Datasheet Sections
    meta_catalog_title: "Ürünler ve Çözümler | APH Labs",
    meta_catalog_desc: "APH Labs hassas mühendislik ürünlerini ve çözümlerini inceleyin: Optik Filament Çap Ölçüm Cihazı, Kanallı Aerodinamik Akış Jeneratörü ve Tek Şaftlı Endüstriyel Parçalayıcı.",
    meta_p1_title: "Optik Filament Çap Ölçüm Cihazı | APH Labs",
    meta_p1_desc: "0.001 mm çözünürlük, ±0.003 mm doğruluk ve 100 Hz kapalı çevrim ekstrüzyon kontrolü sunan %100 temassız ortogonal çift eksenli optik filament çap ölçüm cihazı.",
    meta_p2_title: "Kanallı Aerodinamik Akış Jeneratörü | APH Labs",
    meta_p2_desc: "3D anti-girdap statorları ve Python / ROS 2 dijital kontrol ile 40 m/s'ye kadar laminer hava hızı sağlayan 2×2 çoklu fan aktif aerodinamik akış jeneratörü.",
    meta_p3_title: "Tek Şaftlı Endüstriyel Parçalayıcı | APH Labs",
    meta_p3_desc: "SS316 paslanmaz çelik kesici çekirdek, 4.0 mm diş adımı ve < 65 dB laboratuvar sessizliğine sahip tezgah üstü 52 RPM / 40 Nm tek şaftlı endüstriyel parçalayıcı.",

    catalog_badge: "ÜRÜNLER & ÇÖZÜMLER",
    catalog_title: "Ürünler ve Çözümler",
    catalog_desc: "Her platform için özel teknik dokümantasyonu, sistem mimarisini ve mühendislik şartnamelerini inceleyin.",
    catalog_compare_title: "Platform Karşılaştırma Matrisi",
    catalog_col_system: "Ürün",
    catalog_col_domain: "Mühendislik Alanı",
    catalog_col_metric: "Temel Performans",
    catalog_col_interface: "Kontrol & Arayüz",
    catalog_col_temp: "Çalışma Aralığı",
    catalog_col_page: "Dokümantasyon",
    catalog_custom_title: "Özel Anahtar Teslim Konfigürasyon mu Gerekiyor?",
    catalog_custom_desc: "Özel makine mimarileri, sensör entegrasyonları veya prosese özel otomasyon çözümleri için mühendislik ekibimizle doğrudan görüşün.",

    section_arch_badge: "SİSTEM MİMARİSİ",
    section_arch_title: "Mühendislik Öne Çıkanları & Alt Sistemler",
    section_specs_badge: "MÜHENDİSLİK VERİ SAYFASI",
    section_specs_title: "Tam Teknik Özellikler",
    section_specs_desc: "Doğrulanmış çalışma parametreleri, haberleşme arayüzleri ve mekanik toleranslar.",
    section_apps_badge: "KULLANIM ALANLARI",
    section_apps_title: "Örnek Kullanım Alanları",
    section_apps_desc: "Bu sistemin aktif olarak kullanılabildiği endüstriyel üretim, Ar-Ge ve laboratuvar senaryoları.",
    apps_label: "Örnek Kullanım",
    section_related_title: "Diğer Ürünler ve Çözümler",
    product_inquiry_badge: "DOĞRUDAN MÜHENDİSLİK TALEBİ",
    product_inquiry_title: "Teklif ve Teknik Veri Talebi",
    product_inquiry_desc: "Proses parametrelerinizi ve teknik gereksinimlerinizi doğrudan mühendislik birimimize iletin.",

    // Product 1 KPIs & Subsystems
    p1_kpi1_val: "0.001 mm", p1_kpi1_lbl: "Çözünürlük (1 µm)",
    p1_kpi2_val: "±0.003 mm", p1_kpi2_lbl: "Mutlak Doğruluk",
    p1_kpi3_val: "100 Hz", p1_kpi3_lbl: "Çift Düzlem Hızı",
    p1_kpi4_val: "90° X/Y", p1_kpi4_lbl: "Ortogonal Eksen",
    p1_sub1_title: "Optik Algılama & Telecentric Kademe",
    p1_sub1_desc: "Makro lensli çift senkron CMOS makine görüsü sensörleri ve çift difüzörlü telecentric LED arka aydınlatma; 0.5 mm – 3.5 mm aralığında (1.75 mm nominal) anlık X/Y çapı, gerçek ovallik oranı ve dairesellik sapmasını ölçer.",
    p1_sub2_title: "Endüstriyel Bağlantı & Kapalı Çevrim Kontrol",
    p1_sub2_desc: "USB (Sanal COM), UART, CAN ve Ethernet üzerinden zaman damgalı CSV veri kaydı sunarken; rijit 2020/3030 alüminyum optik şasi üzerinde çekici hızı ve ekstrüder vidası devri için kapalı çevrim kontrol sağlar.",
    p1_apps_summary: "3D filament ekstrüzyon hatları • CF/GF kompozit hatları • Medikal boru & hassas tel • Makara kalite kayıtları",
    p1_use1_title: "3D Yazıcı Filament Ekstrüzyon Hatları",
    p1_use1_desc: "1.75 mm / 2.85 mm ekstrüzyon hatlarında ±0.003 mm toleransı korumak için çekici hızı ve vida devrine kapalı çevrim geri besleme sağlayan 100 Hz anlık çap ve ovallik takibi.",
    p1_use2_title: "Aşındırıcı CF/GF Kompozit & Sıcak Polimer Hatları",
    p1_use2_desc: "%100 temassız optik ölçüm sayesinde karbon/cam elyaf katkılı aşındırıcı filamentlerde mekanik sensör aşınmasını ve sıcak/esnek polimerlerde ezilme hatasını tamamen ortadan kaldırır.",
    p1_use3_title: "Medikal Hortum, Hassas Tel & Kablo İzolasyonu",
    p1_use3_desc: "0.5 mm – 3.5 mm arası ince silindirik hatlarda 90° ortogonal X/Y ölçümü ile tek eksenli sensörlerin kaçırdığı boğulma, ovallik ve eksantriklik hatalarını yakalar.",
    p1_use4_title: "Ar-Ge Malzeme Denemeleri & Kalite Sertifikasyonu",
    p1_use4_desc: "Polimer formülasyon denemelerinde USB, UART, CAN veya Ethernet üzerinden zaman damgalı CSV kaydı alarak makara bazlı kalite sertifikasyonu ve izlenebilirlik sunar.",

    // Product 2 KPIs & Subsystems
    p2_kpi1_val: "2×2", p2_kpi1_lbl: "Aktif Akış Matrisi",
    p2_kpi2_val: "40 m/s", p2_kpi2_lbl: "Maks. Hava Hızı",
    p2_kpi3_val: "3D Stator", p2_kpi3_lbl: "Girdap Sönümleme",
    p2_kpi4_val: "ROS 2 / Py", p2_kpi4_lbl: "Dijital Kontrol API",
    p2_sub1_title: "Çoklu Fan Tahriki & Akış Şartlandırma",
    p2_sub1_desc: "Dijital ESC'li dört senkronize fırçasız elektrik motorlu akış ünitesi 40 m/s'ye (144 km/h) kadar kademesiz hız üretir; çıkış 3D anti-girdap statorları ve giriş/çıkış FOD koruma ızgaraları ile Sigma alüminyum T-kanal şaside şartlandırılır.",
    p2_sub2_title: "Modülasyon Modları & Araştırma Entegrasyonu",
    p2_sub2_desc: "Pervane testleri, pitot/hız sensörü kalibrasyonu ve İHA HIL simülasyonları için UART, PWM, CAN ve USB (Python & ROS 2 API uyumlu) üzerinden sabit hız tutma, otomatik rampa, dinamik darbe ve adımlı rüzgar profilleri sunar.",
    p2_apps_summary: "İHA HIL rüzgar testleri • Pitot & anemometre kalibrasyonu • Pervane verimlilik testleri • Sınır tabaka Ar-Ge",
    p2_use1_title: "İHA Hardware-in-the-Loop (HIL) Rüzgar Testleri",
    p2_use1_desc: "Python veya ROS 2 API üzerinden 40 m/s'ye kadar otomatik rampa, dinamik rüzgar darbesi (gust) ve adımlı profiller üreterek otopilotların rüzgar tepkisini laboratuvarda doğrular.",
    p2_use2_title: "Pitot Tüpü & Hava Hızı Sensörü Kalibrasyonu",
    p2_use2_desc: "Çıkış 3D anti-girdap statorları ile düşük hızdan 144 km/h (~78 kts) hıza kadar doğrusal laminer akış sağlayarak pitot-statik problar ve anemometreler için tekrarlanabilir kalibrasyon sunar.",
    p2_use3_title: "Pervane, Rotor & Mikro Türbin İtki Testleri",
    p2_use3_desc: "Rijit Sigma alüminyum T-kanal raylar üzerine doğrudan bağlanan itki/tork düzenekleriyle kontrollü serbest akım hızlarında pervane ve rotor verimlilik haritalaması yapar.",
    p2_use4_title: "Akademik Sınır Tabaka & Aerodinamik Araştırmalar",
    p2_use4_desc: "Kompakt 2×2 senkronize fan dizisi ile üniversite laboratuvarlarında devasa rüzgar tünellerine gerek kalmadan kanat profili ve sınır tabaka deneylerinin yapılmasını sağlar.",

    // Product 3 KPIs & Subsystems
    p3_kpi1_val: "52 RPM", p3_kpi1_lbl: "Düşük Devir Kesme",
    p3_kpi2_val: "40 Nm", p3_kpi2_lbl: "Sürekli Tork",
    p3_kpi3_val: "SS316", p3_kpi3_lbl: "Kesici Çekirdek",
    p3_kpi4_val: "< 65 dB", p3_kpi4_lbl: "Lab Ses Seviyesi",
    p3_sub1_title: "SS316 Rotor Geometrisi & Elek Sistemi",
    p3_sub1_desc: "160 × 140 × 110 mm çok kancalı otomatik beslemeli kesme haznesi; 4.0 mm diş adımında tek şaftlı SS316 rotor, sabit karşı bıçaklar ve değiştirilebilir 4–5 mm delikli paslanmaz elek ile saatte 2–6 kg homojen ~4 mm granül üretir.",
    p3_sub2_title: "AC İndüksiyon Tahriki, Güvenlik & Polimer Uyumu",
    p3_sub2_desc: "220V AC / 50 Hz tek faz endüstriyel AC indüksiyon motoru ve İleri / Dur / Anlık Geri şalteri ile donatılmıştır; 3.5 mm et kalınlığına kadar PLA, PETG, ABS, PA/Naylon, PP, HDPE, LDPE ve PS malzemeleri 65 dB altında işler.",
    p3_apps_summary: "3D baskı atığından filament geri dönüşümü • Üniversite polimer Ar-Ge • Kompozit boyut küçültme • Enjeksiyon yolluk kırma",
    p3_use1_title: "Kapalı Çevrim 3D Baskı & Ekstrüzyon Geri Dönüşümü",
    p3_use1_desc: "Hatalı 3D baskıları, destek yapılarını ve purge atıklarını (PLA, PETG, ABS, PA/Naylon) masaüstü filament ekstrüderlerine doğrudan beslenebilen homojen ~4 mm granüllere dönüştürür.",
    p3_use2_title: "Üniversite Ar-Ge & Polimer Numune Hazırlama",
    p3_use2_desc: "52 RPM / 40 Nm düşük devirli soğuk kesim, malzemeyi ısıtıp eritmeden kestiği için PP, HDPE, LDPE ve PS test partilerinin mekanik özelliklerini < 65 dB sessizlikte korur.",
    p3_use3_title: "Aşındırıcı & Korozif Teknik Fire Boyut Küçültme",
    p3_use3_desc: "Cerrahi sınıf CNC/lazer işlenmiş SS316 paslanmaz çelik kesici çekirdek, 3.5 mm et kalınlığına kadar teknik polimer ve kompozit parçaları korozyona dirençle işler.",
    p3_use4_title: "Küçük Ölçekli Enjeksiyon Yolluk Geri Kazanımı",
    p3_use4_desc: "Değiştirilebilir 4–5 mm paslanmaz elek ve 2–6 kg/saat kapasite ile pilot üretim ve enjeksiyon atölyelerinde yolluk firelerini anlık geri alma korumasıyla temizce geri kazandırır.",

    // Direct contact and Footer
    contact_direct_label: "Doğrudan İletişim:",
    contact_phone_label: "Doğrudan Telefon:",
    footer_copy: "APH LABS © 2026 • Hassas Mühendislik & Endüstriyel Cihazlar",
    footer_domain: "Resmi Alan Adı: www.aph-labs.com"
  }
};

let currentLang = 'en';

/**
 * Safely dispatch custom GA4 events without blocking when gtag is unavailable
 */
function trackAnalyticsEvent(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Apply Language to DOM across root and individual product pages
 */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('aph_lang', lang);

  document.documentElement.lang = lang;

  const titleKey = document.body?.dataset.pageTitleKey || 'meta_title';
  const descKey = document.body?.dataset.pageDescKey || 'meta_desc';
  const dict = translations[lang];

  if (dict && dict[titleKey]) {
    document.title = dict[titleKey];
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', dict[titleKey]);
  }
  if (dict && dict[descKey]) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict[descKey]);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', dict[descKey]);
  }

  // Text contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict && dict[key] !== undefined) {
      el.placeholder = dict[key];
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
  const detected = navLang.startsWith('tr') ? 'tr' : 'en';
  setLanguage(detected);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1800);
    const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.country_code === 'TR' && !localStorage.getItem('aph_lang')) {
        setLanguage('tr');
      }
    }
  } catch (err) {}
}

/**
 * Initialize header language toggles and dropdown navigation
 */
function initNavigation() {
  document.querySelectorAll('.lang-btn-tr').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('tr');
      trackAnalyticsEvent('language_switch', { language: 'tr' });
    });
  });
  document.querySelectorAll('.lang-btn-en').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage('en');
      trackAnalyticsEvent('language_switch', { language: 'en' });
    });
  });

  document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href') || '';
      const method = href.startsWith('tel:') ? 'phone' : 'email';
      trackAnalyticsEvent('contact_click', { contact_method: method });
    });
  });

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

  // Accessible toggle support for desktop Systems dropdown
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });
  });

  document.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('open');
        const trigger = dropdown.querySelector('.nav-dropdown-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/**
 * Resolve default product index for the inquiry select control
 */
function applyDefaultTargetSystem() {
  const select = document.getElementById('formTargetMachine');
  if (!select) return;

  const params = new URLSearchParams(window.location.search);
  const queryIndex = params.get('system');
  const bodyIndex = document.body?.dataset.defaultSystem;
  const rawIndex = queryIndex !== null ? queryIndex : bodyIndex;

  if (rawIndex !== undefined && rawIndex !== null && rawIndex !== '') {
    const idx = parseInt(rawIndex, 10);
    if (!Number.isNaN(idx) && idx >= 0 && idx < select.options.length) {
      select.selectedIndex = idx;
    }
  }
}

/**
 * Initialize Contact / RFQ Form (Real-Time Dispatch to furkaniusprimes@gmail.com)
 */
function initContactForm() {
  applyDefaultTargetSystem();

  document.querySelectorAll('[data-target-machine]').forEach(btn => {
    btn.addEventListener('click', () => {
      const machineIndex = btn.getAttribute('data-target-machine');
      const select = document.getElementById('formTargetMachine');
      if (select && machineIndex !== null) {
        const idx = parseInt(machineIndex, 10);
        if (!Number.isNaN(idx) && idx >= 0 && idx < select.options.length) {
          select.selectedIndex = idx;
        }
      }
    });
  });

  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  if (!contactForm || !contactSuccess) return;

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
      "Source Page": window.location.pathname,
      "Direct Phone Line": "+90 553 821 62 99"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/furkaniusprimes@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        trackAnalyticsEvent('generate_lead', {
          target_system: targetSystem,
          page_language: currentLang
        });
      }
    } catch (err) {
      console.warn("Transmission notice:", err);
    } finally {
      contactForm.classList.add('hidden');
      contactSuccess.classList.remove('hidden');
      contactForm.reset();
      applyDefaultTargetSystem();

      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitTextSpan) {
          submitTextSpan.textContent = originalText;
        }
      }
    }
  });

  const btnSendAnother = document.getElementById('btnSendAnother');
  if (btnSendAnother) {
    btnSendAnother.addEventListener('click', () => {
      contactSuccess.classList.add('hidden');
      contactForm.classList.remove('hidden');
      applyDefaultTargetSystem();

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
}

document.addEventListener('DOMContentLoaded', () => {
  detectUserLanguage();
  initNavigation();
  initContactForm();
});
