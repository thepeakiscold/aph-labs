/**
 * APH LABS — Core Interactive Controller & Bilingual i18n Engine (TR / EN)
 * Architecture inspired by AirCar (aircar.aero/tr)
 */

const translations = {
  tr: {
    // Meta
    meta_title: "APH Labs | Hassas Mühendislik ve Endüstriyel Cihazlar",
    meta_desc: "APH Labs; yüksek hassasiyetli optik ölçüm cihazları, kanallı aerodinamik akış sistemleri ve SS316 çekirdekli endüstriyel parçalayıcılar tasarlar ve üretir.",
    meta_catalog_title: "Ürünler ve Çözümler | APH Labs",
    meta_catalog_desc: "Optik Filament Çap Ölçüm Cihazı, Kanallı Aerodinamik Akış Jeneratörü ve Tek Şaftlı Endüstriyel Parçalayıcı teknik dokümantasyonları.",
    meta_p1_title: "Optik Filament Çap Ölçüm Cihazı | APH Labs",
    meta_p1_desc: "0.001 mm çözünürlük, ±0.003 mm doğruluk ve 100 Hz kapalı çevrim ekstrüzyon kontrolü sunan %100 temassız ortogonal çift eksenli optik ölçüm sistemi.",
    meta_p2_title: "Kanallı Aerodinamik Akış Jeneratörü | APH Labs",
    meta_p2_desc: "3D anti-girdap statorları ve Python / ROS 2 dijital kontrol API ile 40 m/s laminer hava akışı sunan 2×2 çoklu fan aktif akış matrisi.",
    meta_p3_title: "Tek Şaftlı Endüstriyel Parçalayıcı | APH Labs",
    meta_p3_desc: "SS316 paslanmaz çelik kesici çekirdek, 52 RPM / 40 Nm yüksek torklu soğuk kesim ve < 65 dB laboratuvar sessizliği sunan tezgah üstü parçalayıcı.",
    meta_order_title: "Sistem Konfigüratörü & Teklif Talebi | APH Labs",
    meta_order_desc: "APH Labs hassas mühendislik platformlarını yapılandırın ve doğrudan mühendislik ekibimizden teklif / ön sipariş talebi oluşturun.",
    meta_privacy_title: "Gizlilik Politikası | APH Labs",
    meta_privacy_desc: "APH Labs web sitesi gizlilik politikası, iletişim verileri işleme esasları ve çerez bilgilendirmesi.",

    // Navigation
    nav_home: "Ana Sayfa",
    nav_systems: "Ürünler",
    nav_all_systems: "Tüm Ürünler ve Çözümler",
    nav_capabilities: "Yetkinlikler",
    nav_specs: "Teknik Özellikler",
    nav_order_cta: "Teklif / Sipariş",
    nav_contact_cta: "İletişim",
    nav_menu_btn: "Menü",
    nav_p1_sub: "0.001 mm Çözünürlük • Çift Eksen",
    nav_p2_sub: "2×2 Aktif Matris • 40 m/s",
    nav_p3_sub: "52 RPM / 40 Nm • SS316 Çekirdek",
    search_placeholder: "Ürün, teknik parametre veya yetkinlik arayın...",
    search_empty: "Eşleşen sonuç bulunamadı.",

    // Hero
    hero_kicker: "APH Labs",
    hero_sub: "Hassas Mühendislik & Endüstriyel Sistemler",
    hero_giant_cta: "TEKLİF & SİPARİŞ",
    hero_scarcity: "Özel üretim ve laboratuvar teslimatına açık • 3 Tescilli Mühendislik Platformu",
    hero_secondary_cta: "ÜRÜNLERİ KEŞFET →",
    hero_jump_p1: "Optik Filament Ölçer",
    hero_jump_p2: "Aerodinamik Akış Jeneratörü",
    hero_jump_p3: "Endüstriyel Parçalayıcı",

    // 5-Column Metrics Strip
    m1_lbl: "Optik Çap Çözünürlüğü",
    m2_lbl: "Çift Eksen Örnekleme",
    m3_lbl: "Laminer Hava Hızı",
    m4_lbl: "Sürekli Kesme Torku",
    m5_lbl: "Laboratuvar Sessizliği",

    // Video Tags
    vid1_tag: "APH LABS • PLATFORM REEL",
    vid2_tag: "OPTİK ÖLÇÜM & AKTİF AKIŞ",
    vid3_tag: "ENDÜSTRİYEL TASARIM & MEKANİK HASSASİYET",

    // Editorial Block 1
    ed1_title: "Yeni Nesil Endüstriyel Mühendislik",
    ed1_p1: "APH Labs; laboratuvar ölçeğindeki çevikliği, ağır sanayi standartlarındaki mekanik dayanıklılıkla birleştiren özgün mühendislik sistemleri geliştirir. Temassız optik metrolojiden aktif aerodinamik simülasyon dizilerine ve cerrahi sınıf SS316 parçalama çekirdeklerine kadar her platform sıfırdan tasarlanır.",
    ed1_p2: "Geleneksel hantal test tesislerinin ve mekanik aşınmaya mahkûm ölçüm cihazlarının aksine, tüm APH Labs sistemleri doğrudan tezgah üstünde veya üretim hattında yüksek tekrarlanabilirlik, düşük akustik profil ve açık dijital kontrol arayüzleri sunacak şekilde optimize edilmiştir.",
    ed1_p3: "-20 °C ila +70 °C çalışma sıcaklığı aralığında doğrulanan rijit alüminyum şasiler, gömülü yüksek hızlı DSP algoritmaları ve kapalı çevrim otomasyon desteğiyle fikirden çalışan makineye uçtan uca çözüm sunuyoruz.",

    // Editorial Block 2
    ed2_title: "Mikrondan Akışkanlar Dinamiğine",
    ed2_p1: "Ekstrüzyon hatlarında tek eksenli ölçüm cihazlarının kaçırdığı ovallik ve boğulma hatalarını 90° ortogonal çift eksenli optik mimariyle 1 mikron çözünürlükte yakalıyoruz; sıcak veya karbon elyaf katkılı aşındırıcı filamentlere sıfır fiziksel temasla.",
    ed2_p2: "Aerodinamik araştırmalarda ise devasa rüzgar tünellerine ihtiyaç duymadan, Python ve ROS 2 üzerinden milisaniye tepkiyle yönetilen 2×2 aktif fan matrisi ve 3D anti-girdap statorlarıyla laboratuvar masanızda 144 km/s hıza ulaşan doğrusal laminer akış üretiyoruz.",

    // Carousel 1 (Light Band: Flagship Systems)
    c1_kicker: "TESCİLLİ PLATFORMLAR",
    c1_title: "Hassas Cihazlar ve Endüstriyel Sistemler",
    btn_view_product: "Ürün Sayfasını İncele",
    btn_configure: "Yapılandır & Teklif Al",
    btn_compare_all: "Tüm Ürünleri Karşılaştır",

    // Dark Band Editorial Block 3
    ed3_title: "Tasarımdan Gerçeğe",
    ed3_p1: "Her APH Labs makinesi üretime geçmeden önce hassas CNC mekanik işleme, tolerans yığılım kontrolü ve çok eksenli laboratuvar kalibrasyon aşamalarından geçer.",
    ed3_p2: "SS316 paslanmaz çelik kesici çekirdekten 90° ortogonal optik gövdeye ve 3D anti-girdap statorlu 2×2 akış dizisine kadar her parça uzun ömürlü sürekli çalışma için üretilir.",

    // Dark Band Carousels
    c2_kicker: "MEKANİK MİMARİ & İŞÇİLİK",
    c2_title: "SS316 Çekirdek ve Modüler Şasi Mühendisliği",
    c2_s1_tag: "SS316 KESİCİ ÇEKİRDEK",
    c2_s1_title: "Cerrahi Sınıf Paslanmaz Çelik Rotor",
    c2_s1_desc: "CNC ve lazer hassas işlenmiş 4.0 mm diş aralıklı çok kancalı rotor; korozif ve aşındırıcı teknik polimerleri ısıtmadan soğuk kesimle parçalar.",
    c2_s2_tag: "TEZGAH ÜSTÜ ENDÜSTRİYEL GÖVDE",
    c2_s2_title: "Tam Yükte 65 dB Altında Sessiz Çalışma",
    c2_s2_desc: "52 RPM düşük devirde 40 Nm sürekli tork üreten indüksiyon tahriki ve yalıtımlı çelik gövde, laboratuvar ortamında konforlu kullanım sunar.",
    c2_s3_tag: "3D ANTİ-GİRDAP STATORLARI",
    c2_s3_title: "40 m/s Doğrusal Laminer Akış",
    c2_s3_desc: "2×2 aktif fan matrisi ve altıgen akış şartlandırma petekleri, pitot kalibrasyonu ve İHA HIL rüzgar testleri için homojen akış oluşturur.",
    c2_s4_tag: "ORTOGONAL OPTİK MİMARİ",
    c2_s4_title: "0.001 mm Temassız Çift Eksen Ölçüm",
    c2_s4_desc: "Rijit işlenmiş alüminyum gövde ve dahili OLED ekran ile 100 Hz hızda gerçek X/Y çap ve ovallik takibi.",

    // Lower White Band: Competencies Rounded Gallery
    c4_kicker: "KURUMSAL YETKİNLİKLER",
    c4_title: "Uçtan Uca Mühendislik ve Özel İmalat",

    // Editorial Manifesto Banner
    man_title: "Mühendislik Sizinle Başlar.",
    man_lead: "Standart laboratuvar platformlarından kuruma özel anahtar teslim otomasyon makinelerine kadar; her toleransı, her akış profilini ve her kontrol döngüsünü birlikte inşa ediyoruz.",

    // Specs Matrix
    specs_kicker: "MÜHENDİSLİK VERİ SAYFASI",
    specs_title: "APH Labs Platform Özellikleri",
    spec_grp_metrology: "Metroloji & Optik",
    spec_grp_control: "Bağlantı, Kontrol & Gövde",
    spec_grp_aero: "Akış & Aerodinamik",
    spec_grp_drive: "Tahrik, Kontrol & Şasi",
    spec_grp_cutting: "Kesme Mimarisi & Performans",
    spec_grp_power: "Motor, Güvenlik & Uyumluluk",
    spec_cad_label: "Endüstriyel Şasi • -20 °C ila +70 °C",
    spec_view_full: "Tam Ürün Sayfası →",

    // Product 1
    p1_tag: "OPTİK ÖLÇÜM & KALİTE KONTROL",
    p1_title: "Optik Filament Çap Ölçüm Cihazı",
    p1_short: "Optik Filament Ölçer",
    p1_desc: "Hassas ekstrüzyon hatları için %100 temassız ortogonal çift eksenli optik ölçüm sistemi. Sub-mikron hassasiyet, anlık ovallik takibi, sıfır mekanik deformasyon ve sıfır hat sürtünmesi.",
    p1_h1: "%100 Temassız Optik Ölçüm: Esnek ve sıcak polimerlerde sıfır deformasyon, aşındırıcı karbon/cam elyaf katkılı filamentlerde sıfır mekanik aşınma.",
    p1_h2: "Ortogonal Çift Eksenli Takip: Eş zamanlı 90° X ve Y düzlem profili analizi ile tek eksenli kör noktaları ve sahte yuvarlaklık hatalarını eler.",
    p1_h3: "Mikron Seviyesinde Hassasiyet: 0.001 mm çözünürlük, ±0.003 mm mutlak doğruluk ve ±0.001 mm tekrarlanabilirlik.",
    p1_kpi1_val: "0.001 mm", p1_kpi1_lbl: "Çözünürlük (1 µm)",
    p1_kpi2_val: "±0.003 mm", p1_kpi2_lbl: "Mutlak Doğruluk",
    p1_kpi3_val: "100 Hz", p1_kpi3_lbl: "Çift Düzlem Hızı",
    p1_kpi4_val: "90° X/Y", p1_kpi4_lbl: "Ortogonal Eksen",
    p1_sub1_title: "Optik Algılama & Telecentric Kademe",
    p1_sub1_desc: "Makro lensli çift senkron CMOS makine görüsü sensörleri ve çift difüzörlü telecentric LED arka aydınlatma; 0.5 mm – 3.5 mm aralığında (1.75 mm nominal) anlık X/Y çapı, gerçek ovallik oranı ve dairesellik sapmasını ölçer.",
    p1_sub2_title: "Endüstriyel Bağlantı & Kapalı Çevrim Kontrol",
    p1_sub2_desc: "USB (Sanal COM), UART, CAN ve Ethernet üzerinden zaman damgalı CSV veri kaydı sunarken; rijit 2020/3030 alüminyum optik şasi üzerinde çekici hızı ve ekstrüder vidası devri için kapalı çevrim kontrol sağlar.",
    p1_use1_title: "3D Yazıcı Filament Ekstrüzyon Hatları",
    p1_use1_desc: "1.75 mm / 2.85 mm ekstrüzyon hatlarında ±0.003 mm toleransı korumak için çekici hızı ve vida devrine kapalı çevrim geri besleme sağlayan 100 Hz anlık çap ve ovallik takibi.",
    p1_use2_title: "Aşındırıcı CF/GF Kompozit & Sıcak Polimer Hatları",
    p1_use2_desc: "%100 temassız optik ölçüm sayesinde karbon/cam elyaf katkılı aşındırıcı filamentlerde mekanik sensör aşınmasını ve sıcak/esnek polimerlerde ezilme hatasını tamamen ortadan kaldırır.",
    p1_use3_title: "Medikal Hortum, Hassas Tel & Kablo İzolasyonu",
    p1_use3_desc: "0.5 mm – 3.5 mm arası ince silindirik hatlarda 90° ortogonal X/Y ölçümü ile tek eksenli sensörlerin kaçırdığı boğulma, ovallik ve eksantriklik hatalarını yakalar.",
    p1_use4_title: "Ar-Ge Malzeme Denemeleri & Kalite Sertifikasyonu",
    p1_use4_desc: "Polimer formülasyon denemelerinde USB, UART, CAN veya Ethernet üzerinden zaman damgalı CSV kaydı alarak makara bazlı kalite sertifikasyonu ve izlenebilirlik sunar.",
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

    // Product 2
    p2_tag: "AERODİNAMİK SİMÜLASYON & AKIŞ SİSTEMLERİ",
    p2_title: "Kanallı Aerodinamik Akış Jeneratörü",
    p2_short: "Aerodinamik Akış Jeneratörü",
    p2_desc: "Aerodinamik simülasyonlar, rüzgar tüneli deneyleri ve sınır tabaka araştırmaları için tasarlanmış 2×2 çoklu fan aktif akış matrisi. 40 m/s hıza kadar yüksek doğrusallıkta laminer hava akışı sağlar.",
    p2_h1: "2×2 Çoklu Fan Aktif Akış Matrisi: Bağımsız kontrol edilebilen ve senkronize 4 adet yüksek tepkili akış ünitesi.",
    p2_h2: "40 m/s (144 km/h) Hız: Düşük hızlardan tepe hızlara kadar kademesiz hassas hız regülasyonu.",
    p2_h3: "Dönel Girdap Sönümleme: Çıkış yönündeki 3D aerodinamik statorlar dönme kaynaklı türbülansı ve girdapları tamamen yok eder.",
    p2_kpi1_val: "2×2", p2_kpi1_lbl: "Aktif Akış Matrisi",
    p2_kpi2_val: "40 m/s", p2_kpi2_lbl: "Maks. Hava Hızı",
    p2_kpi3_val: "3D Stator", p2_kpi3_lbl: "Girdap Sönümleme",
    p2_kpi4_val: "ROS 2 / Py", p2_kpi4_lbl: "Dijital Kontrol API",
    p2_sub1_title: "Çoklu Fan Tahriki & Akış Şartlandırma",
    p2_sub1_desc: "Dijital ESC'li dört senkronize fırçasız elektrik motorlu akış ünitesi 40 m/s'ye (144 km/h) kadar kademesiz hız üretir; çıkış 3D anti-girdap statorları ve giriş/çıkış FOD koruma ızgaraları ile Sigma alüminyum T-kanal şaside şartlandırılır.",
    p2_sub2_title: "Modülasyon Modları & Araştırma Entegrasyonu",
    p2_sub2_desc: "Pervane testleri, pitot/hız sensörü kalibrasyonu ve İHA HIL simülasyonları için UART, PWM, CAN ve USB (Python & ROS 2 API uyumlu) üzerinden sabit hız tutma, otomatik rampa, dinamik darbe ve adımlı rüzgar profilleri sunar.",
    p2_use1_title: "İHA Hardware-in-the-Loop (HIL) Rüzgar Testleri",
    p2_use1_desc: "Python veya ROS 2 API üzerinden 40 m/s'ye kadar otomatik rampa, dinamik rüzgar darbesi (gust) ve adımlı profiller üreterek otopilotların rüzgar tepkisini laboratuvarda doğrular.",
    p2_use2_title: "Pitot Tüpü & Hava Hızı Sensörü Kalibrasyonu",
    p2_use2_desc: "Çıkış 3D anti-girdap statorları ile düşük hızdan 144 km/h (~78 kts) hıza kadar doğrusal laminer akış sağlayarak pitot-statik problar ve anemometreler için tekrarlanabilir kalibrasyon sunar.",
    p2_use3_title: "Pervane, Rotor & Mikro Türbin İtki Testleri",
    p2_use3_desc: "Rijit Sigma alüminyum T-kanal raylar üzerine doğrudan bağlanan itki/tork düzenekleriyle kontrollü serbest akım hızlarında pervane ve rotor verimlilik haritalaması yapar.",
    p2_use4_title: "Akademik Sınır Tabaka & Aerodinamik Araştırmalar",
    p2_use4_desc: "Kompakt 2×2 senkronize fan dizisi ile üniversite laboratuvarlarında devasa rüzgar tünellerine gerek kalmadan kanat profili ve sınır tabaka deneylerinin yapılmasını sağlar.",
    s2_k1: "Matris Mimarisi", s2_v1: "2×2 Çoklu Fan Aktif Akış Matrisi (4 Senkronize Ünite)",
    s2_k2: "Maksimum Hava Hızı", s2_v2: "40 m/s'ye Kadar (144 km/h / ~78 kts)",
    s2_k3: "Hız Kontrol Edilebilirliği", s2_v3: "Laminer Başlangıçtan Zirve Hıza Kademesiz Regülasyon",
    s2_k4: "Akış Şartlandırma", s2_v4: "Çıkış 3D Aerodinamik Anti-Girdap Statorları",
    s2_k5: "Tahrik Sistemi", s2_v5: "Yüksek Verimli Fırçasız Motorlar + Dijital ESC",
    s2_k6: "Çalışma Modları", s2_v6: "Sabit Hız, Otomatik Rampa, Dinamik Darbe (Gust), Adımlı Rüzgar",
    s2_k7: "Dijital Kontrol Arayüzü", s2_v7: "UART / PWM / CAN / USB (Python ve ROS 2 API)",
    s2_k8: "Şasi Yapısı", s2_v8: "Rijit Sigma Alüminyum Profil, Modüler T-Kanal Raylar",
    s2_k9: "Güvenlik Koruması", s2_v9: "Giriş ve Çıkış Yabancı Cisim (FOD) Izgaraları",
    s2_k10: "Hedef Uygulamalar", s2_v10: "Pervane Testleri, Pitot Kalibrasyonu, İHA HIL Simülasyonu",
    s2_k11: "Çalışma Sıcaklığı", s2_v11: "-20 °C ila +70 °C",

    // Product 3
    p3_tag: "ENDÜSTRİYEL İŞLEME & GERİ DÖNÜŞÜM",
    p3_title: "Tek Şaftlı Endüstriyel Parçalayıcı",
    p3_short: "Endüstriyel Parçalayıcı",
    p3_desc: "Teknik polimerler ve kompozit firelerin boyut küçültmesi için geliştirilmiş masaüstü tek şaftlı parçalayıcı. 52 RPM yüksek kesme kuvveti, 40 Nm sürekli tork ve SS316 paslanmaz çelik kesici çekirdek.",
    p3_h1: "Doğrudan Ekstrüdere Uygun Kırma: 4.0 mm diş aralığı ile üretilen homojen ~4 mm granül parçalar, masaüstü ekstrüderlere tıkanma yapmadan doğrudan beslenir.",
    p3_h2: "Cerrahi Sınıf SS316 Çelik: CNC/lazer hassas işlenmiş SS316 paslanmaz çelik bıçaklar korozyona ve aşındırıcı kompozitlere karşı üstün direnç sağlar.",
    p3_h3: "52 RPM / 40 Nm Yüksek Kesme: Düşük devir yüksek tork ile malzemeyi ısıtmadan ve erime/sakızlaşma yaptırmadan soğuk kesim sağlar.",
    p3_h4: "Ultra Sessiz Masaüstü Form: Tam yük altında < 65 dB gürültü seviyesi ile laboratuvar ve atölye ortamlarına uygundur.",
    p3_kpi1_val: "52 RPM", p3_kpi1_lbl: "Düşük Devir Kesme",
    p3_kpi2_val: "40 Nm", p3_kpi2_lbl: "Sürekli Tork",
    p3_kpi3_val: "SS316", p3_kpi3_lbl: "Kesici Çekirdek",
    p3_kpi4_val: "< 65 dB", p3_kpi4_lbl: "Lab Ses Seviyesi",
    p3_sub1_title: "SS316 Rotor Geometrisi & Elek Sistemi",
    p3_sub1_desc: "160 × 140 × 110 mm çok kancalı otomatik beslemeli kesme haznesi; 4.0 mm diş adımında tek şaftlı SS316 rotor, sabit karşı bıçaklar ve değiştirilebilir 4–5 mm delikli paslanmaz elek ile saatte 2–6 kg homojen ~4 mm granül üretir.",
    p3_sub2_title: "AC İndüksiyon Tahriki, Güvenlik & Polimer Uyumu",
    p3_sub2_desc: "220V AC / 50 Hz tek faz endüstriyel AC indüksiyon motoru ve İleri / Dur / Anlık Geri şalteri ile donatılmıştır; 3.5 mm et kalınlığına kadar PLA, PETG, ABS, PA/Naylon, PP, HDPE, LDPE ve PS malzemeleri 65 dB altında işler.",
    p3_use1_title: "Kapalı Çevrim 3D Baskı & Ekstrüzyon Geri Dönüşümü",
    p3_use1_desc: "Hatalı 3D baskıları, destek yapılarını ve purge atıklarını (PLA, PETG, ABS, PA/Naylon) masaüstü filament ekstrüderlerine doğrudan beslenebilen homojen ~4 mm granüllere dönüştürür.",
    p3_use2_title: "Üniversite Ar-Ge & Polimer Numune Hazırlama",
    p3_use2_desc: "52 RPM / 40 Nm düşük devirli soğuk kesim, malzemeyi ısıtıp eritmeden kestiği için PP, HDPE, LDPE ve PS test partilerinin mekanik özelliklerini < 65 dB sessizlikte korur.",
    p3_use3_title: "Aşındırıcı & Korozif Teknik Fire Boyut Küçültme",
    p3_use3_desc: "Cerrahi sınıf CNC/lazer işlenmiş SS316 paslanmaz çelik kesici çekirdek, 3.5 mm et kalınlığına kadar teknik polimer ve kompozit parçaları korozyona dirençle işler.",
    p3_use4_title: "Küçük Ölçekli Enjeksiyon Yolluk Geri Kazanımı",
    p3_use4_desc: "Değiştirilebilir 4–5 mm paslanmaz elek ve 2–6 kg/saat kapasite ile pilot üretim ve enjeksiyon atölyelerinde yolluk firelerini anlık geri alma korumasıyla temizce geri kazandırır.",
    s3_k1: "Motor & Güç Kaynağı", s3_v1: "Tek Faz Endüstriyel AC İndüksiyon Motoru, 220V AC / 50 Hz",
    s3_k2: "Hız & Tork Derecesi", s3_v2: "52 RPM Düşük Devir Kesme, 40 Nm Sürekli Tork",
    s3_k3: "Kesici Mimarisi", s3_v3: "Tek Şaftlı Rotor + Hassas İşlenmiş Sabit Karşı Bıçaklar",
    s3_k4: "Bıçak Malzemesi", s3_v4: "Birinci Sınıf SS316 Paslanmaz Çelik",
    s3_k5: "Diş Adımı & Parça Boyutu", s3_v5: "4.0 mm Hassas Açıklık (~4 mm Homojen Granül)",
    s3_k6: "Kesme Haznesi", s3_v6: "160 × 140 × 110 mm (Çok Kancalı Otomatik Çekiş)",
    s3_k7: "İşleme Kapasitesi", s3_v7: "2–6 kg/saat (Geometri ve Polimere Bağlı)",
    s3_k8: "Maksimum Et Kalınlığı", s3_v8: "3.5 mm'ye Kadar Rijit Yapısal Kesit",
    s3_k9: "Uyumlu Polimerler", s3_v9: "PLA, PETG, ABS, PA/Naylon, PP, HDPE, LDPE, PS",
    s3_k10: "Çıkış Elek Filtresi", s3_v10: "Değiştirilebilir Delikli Paslanmaz Elek (4–5 mm)",
    s3_k11: "Çalışma & Güvenlik", s3_v11: "İleri / Dur / Anlık Geri Şalteri + Sıkışma Tahliyesi",
    s3_k12: "Akustik Ses Seviyesi", s3_v12: "< 65 dB (Laboratuvar ve Ofis Uyumlu)",
    s3_k13: "Çalışma Sıcaklığı", s3_v13: "-20 °C ila +70 °C",

    // Capabilities
    cap_1_title: "Parametrik CAD & Mekanik Mühendislik",
    cap_1_desc: "Endüstriyel makineler için 3D katı modelleme, kinematik mekanizmalar, tolerans yığılım analizi ve DFM/DFA optimizasyonu.",
    cap_2_title: "Aerodinamik Simülasyon & Akış Araştırmaları",
    cap_2_desc: "Hesaplamalı akışkanlar dinamiği (CFD), çoklu fan akış matrisi senkronizasyonu, sınır tabaka çalışmaları ve anti-girdap şartlandırma.",
    cap_3_title: "Temassız Optik Ölçüm & Muayene Cihazları",
    cap_3_desc: "Ortogonal çift eksenli ölçüm, sub-mikron kenar algılama algoritmaları, telecentric aydınlatma ve anlık ovallik takibi.",
    cap_4_title: "Gömülü Sistemler & Yüksek Hızlı DSP Yazılımı",
    cap_4_desc: "Gerçek zamanlı DSP sinyal işleme, optik sensör sürücüleri ve endüstriyel haberleşme mimarileri (CAN, UART, RS-485, Ethernet).",
    cap_5_title: "Endüstriyel Otomasyon & Kapalı Çevrim Kontrol",
    cap_5_desc: "Gerçek zamanlı hat senkronizasyonu, ekstrüder çekici hızı ve vida devri otomatik PID regülasyonu ve sensör geri besleme döngüleri.",
    cap_6_title: "Özel Anahtar Teslim Makine & Prototipleme",
    cap_6_desc: "Fikirden çalışan makineye kuruma özel mekanik tasarım, hızlı yinelemeli prototipleme, tezgah üstü laboratuvar cihazları.",

    // Catalog & Product Pages Shared
    catalog_badge: "ÜRÜNLER VE ÇÖZÜMLER",
    catalog_title: "Mühendislik Platformları",
    catalog_desc: "Her APH Labs sistemi için doğrulanmış teknik dokümantasyon, sistem mimarisi ve kullanım senaryolarını inceleyin.",
    catalog_compare_title: "Platform Karşılaştırma Matrisi",
    catalog_col_system: "Platform",
    catalog_col_domain: "Mühendislik Alanı",
    catalog_col_metric: "Temel Performans",
    catalog_col_interface: "Kontrol & Arayüz",
    catalog_col_temp: "Çalışma Aralığı",
    catalog_col_page: "Dokümantasyon",
    section_apps_kicker: "KULLANIM ALANLARI",
    section_apps_title: "Nerelerde Kullanılır?",
    section_arch_kicker: "SİSTEM MİMARİSİ",
    section_arch_title: "Mühendislik Öne Çıkanları & Alt Sistemler",
    section_specs_title: "Tam Teknik Özellikler",
    section_related_title: "Diğer APH Labs Platformları",
    btn_jump_specs: "Teknik Özellikler",

    // Contact & Inquiry Form
    contact_kicker: "DOĞRUDAN MÜHENDİSLİK İLETİŞİMİ",
    contact_title: "Projeniz İçin Mühendislik Ekibimizle Görüşün",
    contact_desc: "Standart platform teklifleri, laboratuvar demoları veya kuruma özel anahtar teslim makine tasarımları için doğrudan bizimle bağlantı kurun.",
    contact_email_lbl: "Doğrudan E-posta",
    contact_phone_lbl: "Doğrudan Telefon",
    contact_domain_lbl: "Resmi Alan Adı",
    form_machine_label: "İlgilendiğiniz Sistem",
    form_machine_opt1: "Optik Filament Çap Ölçüm Cihazı",
    form_machine_opt2: "Kanallı Aerodinamik Akış Jeneratörü",
    form_machine_opt3: "Tek Şaftlı Endüstriyel Parçalayıcı",
    form_machine_opt4: "Özel Mühendislik Danışmanlığı / Anahtar Teslim Proje",
    form_name_label: "Adınız Soyadınız",
    form_name_placeholder: "Adınız ve Soyadınız",
    form_company_label: "Firma / Kurum",
    form_company_placeholder: "Firma veya Üniversite Adı",
    form_email_label: "E-posta Adresi",
    form_email_placeholder: "muhendislik@firma.com",
    form_notes_label: "Teknik Gereksinimler & Proje Kapsamı",
    form_notes_placeholder: "Proses parametreleri, hedef toleranslar veya kurulum detayları...",
    form_submit: "Mühendislik Talebini Gönder",
    form_transmitting: "Gönderiliyor...",
    form_success_title: "Talebiniz Alındı",
    form_success_desc: "Mühendislik talebiniz ekibimize iletildi. Teknik parametreleriniz incelenerek bir iş günü içinde size dönüş yapılacaktır.",
    btn_send_another: "Yeni Bir Talep Gönder",

    // Configurator (/order/)
    cfg_title: "Sistem Konfigüratörü",
    cfg_sub: "Platformunuzu seçin, entegrasyon seçeneklerini belirleyin ve doğrudan mühendislik teklifi oluşturun.",
    cfg_step1: "1. Platform Seçimi",
    cfg_step2: "2. Yapılandırma & Arayüz Paketi",
    cfg_step3: "3. Paket İçeriği",
    cfg_step4: "4. Adet & Teklif Talebi",
    cfg_qty_label: "Adet",
    cfg_view_video: "Video",
    cfg_view_photo: "Stüdyo",
    cfg_view_cad: "Detay",
    cfg_submit: "Teklif / Ön Sipariş Talebi Gönder",
    cfg_privacy_note: "Göndererek Gizlilik Politikası kapsamındaki iletişim şartlarını kabul etmiş olursunuz.",

    // Footer
    footer_news_title: "Güncel Kalın",
    footer_news_placeholder: "E-postanızı girin",
    footer_news_btn: "Bültene Abone Olun",
    footer_news_ok: "Kaydınız alındı. Yeni mühendislik duyurularında bilgilendirileceksiniz.",
    footer_contact: "İletişim",
    footer_privacy: "Gizlilik Politikası",
    footer_copy: "© 2026 APH Labs — Hassas Mühendislik ve Endüstriyel Cihazlar"
  },

  en: {
    // Meta
    meta_title: "APH Labs | Precision Engineering & Industrial Instruments",
    meta_desc: "APH Labs engineers high-precision optical instruments, ducted aerodynamic flow systems, and SS316 single-shaft industrial shredders.",
    meta_catalog_title: "Products & Solutions | APH Labs",
    meta_catalog_desc: "Technical documentation and engineering specs for Optical Filament Diameter Gauge, Ducted Aerodynamic Flow Generator, and Single-Shaft Industrial Shredder.",
    meta_p1_title: "Optical Filament Diameter Gauge | APH Labs",
    meta_p1_desc: "100% non-contact orthogonal dual-axis optical filament diameter gauge with 0.001 mm resolution, ±0.003 mm accuracy, and 100 Hz closed-loop control.",
    meta_p2_title: "Ducted Aerodynamic Flow Generator | APH Labs",
    meta_p2_desc: "2×2 multi-fan active aerodynamic flow generator delivering up to 40 m/s laminar airspeed with 3D anti-swirl stators and Python / ROS 2 API.",
    meta_p3_title: "Single-Shaft Industrial Shredder | APH Labs",
    meta_p3_desc: "Benchtop 52 RPM / 40 Nm single-shaft industrial polymer shredder with SS316 stainless steel cutting core and < 65 dB lab acoustics.",
    meta_order_title: "System Configurator & Quote Request | APH Labs",
    meta_order_desc: "Configure APH Labs precision engineering platforms and transmit a direct quote or pre-order request to our engineering desk.",
    meta_privacy_title: "Privacy Policy | APH Labs",
    meta_privacy_desc: "APH Labs privacy policy, technical inquiry data handling, and cookie notice.",

    // Navigation
    nav_home: "Home",
    nav_systems: "Products",
    nav_all_systems: "All Products & Solutions",
    nav_capabilities: "Capabilities",
    nav_specs: "Specifications",
    nav_order_cta: "Configure / Quote",
    nav_contact_cta: "Contact",
    nav_menu_btn: "Menu",
    nav_p1_sub: "0.001 mm Resolution • Dual-Axis",
    nav_p2_sub: "2×2 Active Array • Up to 40 m/s",
    nav_p3_sub: "52 RPM / 40 Nm • SS316 Core",
    search_placeholder: "Search products, specs, or engineering capabilities...",
    search_empty: "No matching results found.",

    // Hero
    hero_kicker: "APH Labs",
    hero_sub: "Precision Engineering & Industrial Systems",
    hero_giant_cta: "CONFIGURE & QUOTE",
    hero_scarcity: "Open for lab & production commissioning • 3 Proprietary Engineering Platforms",
    hero_secondary_cta: "EXPLORE SYSTEMS →",
    hero_jump_p1: "Optical Filament Gauge",
    hero_jump_p2: "Aerodynamic Flow Generator",
    hero_jump_p3: "Industrial Shredder",

    // 5-Column Metrics Strip
    m1_lbl: "Optical Resolution",
    m2_lbl: "Dual-Plane Sampling",
    m3_lbl: "Peak Laminar Airspeed",
    m4_lbl: "Continuous Shear Torque",
    m5_lbl: "Lab Acoustic Rating",

    // Video Tags
    vid1_tag: "APH LABS • PLATFORM REEL",
    vid2_tag: "OPTICAL METROLOGY & ACTIVE FLOW",
    vid3_tag: "INDUSTRIAL DESIGN & MECHANICAL PRECISION",

    // Editorial Block 1
    ed1_title: "Next-Generation Industrial Engineering",
    ed1_p1: "APH Labs engineers proprietary instrumentation and machinery combining laboratory agility with heavy-duty mechanical durability. From non-contact optical metrology to active aerodynamic flow arrays and surgical-grade SS316 shredding cores, every platform is built from first principles.",
    ed1_p2: "Unlike oversized wind-tunnel facilities or contact gauges prone to abrasive wear, APH Labs platforms bring high repeatability, ultra-quiet operation, and open digital interfaces directly to your benchtop or extrusion line.",
    ed1_p3: "Validated across -20 °C to +70 °C on rigid aluminum optical and Sigma chassis with embedded high-speed DSP firmware and closed-loop feedback, we deliver turnkey precision from concept to commissioning.",

    // Editorial Block 2
    ed2_title: "From Sub-Micron Optics to Fluid Dynamics",
    ed2_p1: "On precision extrusion lines, our 90° orthogonal dual-axis optical architecture captures true ovality and necking at 0.001 mm resolution—completely immune to abrasive CF/GF composites and zero deformation on warm polymers.",
    ed2_p2: "For aerodynamic R&D, our 2×2 synchronized active fan array and downstream 3D anti-swirl stators deliver straight-line laminar airflow up to 40 m/s (144 km/h) controlled in real time via Python and ROS 2.",

    // Carousel 1
    c1_kicker: "PROPRIETARY PLATFORMS",
    c1_title: "Precision Instruments & Industrial Machinery",
    btn_view_product: "View Product Page",
    btn_configure: "Configure & Quote",
    btn_compare_all: "Compare All Platforms",

    // Dark Band Editorial Block 3
    ed3_title: "From Design to Reality",
    ed3_p1: "Every APH Labs machine is precision CNC-machined, tolerance-verified, and individually calibrated before commissioning on your benchtop or extrusion line.",
    ed3_p2: "From the surgical-grade SS316 stainless cutting core to the orthogonal 90° optical bench and 3D anti-swirl 2×2 flow array, every subsystem is built for continuous reliability.",

    // Dark Band Carousels
    c2_kicker: "MECHANICAL ARCHITECTURE & CRAFT",
    c2_title: "SS316 Core & Modular Chassis Engineering",
    c2_s1_tag: "SS316 CUTTING CORE",
    c2_s1_title: "Surgical-Grade Stainless Steel Rotor",
    c2_s1_desc: "CNC and laser-machined 4.0 mm pitch multi-hook rotor delivers cold high-shear cutting resistant to corrosion and abrasive composite wear.",
    c2_s2_tag: "BENCHTOP INDUSTRIAL ENCLOSURE",
    c2_s2_title: "Quietly Operating Below 65 dB Under Full Load",
    c2_s2_desc: "Low-speed 52 RPM AC induction drive with 40 Nm continuous torque inside a damped powder-coated cabinet fit for R&D laboratories.",
    c2_s3_tag: "3D ANTI-SWIRL STATORS",
    c2_s3_title: "40 m/s Straight-Line Laminar Flow",
    c2_s3_desc: "2×2 synchronized active fan matrix and hexagonal stainless conditioning mesh deliver repeatable laminar flow for UAV HIL and pitot calibration.",
    c2_s4_tag: "ORTHOGONAL OPTICAL BENCH",
    c2_s4_title: "0.001 mm Non-Contact Dual-Axis Gauging",
    c2_s4_desc: "Precision anodized enclosure with integrated OLED readout capturing simultaneous 100 Hz X/Y diameter and true ovality.",

    // Lower White Band
    c4_kicker: "CORE COMPETENCIES",
    c4_title: "End-to-End Engineering & Custom Manufacturing",

    // Manifesto
    man_title: "Precision Starts With You.",
    man_lead: "From ready-to-commission laboratory instruments to bespoke turnkey industrial automation, we engineer every tolerance, airflow profile, and closed-loop controller alongside your team.",

    // Specs Matrix
    specs_kicker: "ENGINEERING DATASHEET",
    specs_title: "APH Labs Platform Specifications",
    spec_grp_metrology: "Metrology & Optics",
    spec_grp_control: "Connectivity, Control & Build",
    spec_grp_aero: "Flow & Aerodynamics",
    spec_grp_drive: "Drive, API & Frame",
    spec_grp_cutting: "Cutting Architecture & Output",
    spec_grp_power: "Drive, Safety & Compatibility",
    spec_cad_label: "Industrial Chassis • -20 °C to +70 °C",
    spec_view_full: "Full Product Page →",

    // Product 1
    p1_tag: "OPTICAL INSTRUMENTS & QUALITY INSPECTION",
    p1_title: "Optical Filament Diameter Gauge",
    p1_short: "Optical Filament Gauge",
    p1_desc: "100% non-contact orthogonal dual-axis optical gauging system for precision extrusion lines. Sub-micron accuracy, true ovality monitoring, zero physical deformation, and zero line drag.",
    p1_h1: "100% Non-Contact Optical Gauging: Zero deformation on flexible/warm polymers, zero mechanical wear, fully immune to abrasive CF/GF composites.",
    p1_h2: "Orthogonal Dual-Axis Tracking: Simultaneous 90° X/Y profile acquisition eliminates single-axis blind spots and false-roundness readings.",
    p1_h3: "Micron-Level Precision: 0.001 mm resolution with ±0.003 mm accuracy and ±0.001 mm repeatability.",
    p1_kpi1_val: "0.001 mm", p1_kpi1_lbl: "Resolution (1 µm)",
    p1_kpi2_val: "±0.003 mm", p1_kpi2_lbl: "Absolute Accuracy",
    p1_kpi3_val: "100 Hz", p1_kpi3_lbl: "Dual-Plane Rate",
    p1_kpi4_val: "90° X/Y", p1_kpi4_lbl: "Orthogonal Axes",
    p1_sub1_title: "Optical Acquisition & Telecentric Stage",
    p1_sub1_desc: "Dual synchronized CMOS machine vision sensors paired with macro optics and dual diffused telecentric LED backlighting measure continuous X/Y diameter, true ovality ratio, and eccentricity across 0.5 mm – 3.5 mm stock.",
    p1_sub2_title: "Industrial Connectivity & Closed-Loop Control",
    p1_sub2_desc: "Outputs timestamped CSV telemetry via USB (Virtual COM), UART, CAN, and Ethernet while regulating closed-loop puller speed and extruder screw RPM from a rigid 2020/3030 aluminum optical bench.",
    p1_use1_title: "3D Printing Filament Extrusion Lines",
    p1_use1_desc: "Continuous 100 Hz diameter and ovality inspection on 1.75 mm / 2.85 mm extrusion lines with closed-loop puller speed and screw RPM feedback to hold ±0.003 mm tolerance.",
    p1_use2_title: "Abrasive CF/GF Composite & Warm Polymer Lines",
    p1_use2_desc: "100% non-contact optical gauging eliminates physical sensor wear, drag, and calibration drift on abrasive carbon/glass-fiber filaments and soft or warm polymers.",
    p1_use3_title: "Medical Tubing, Precision Wires & Fiber Jackets",
    p1_use3_desc: "Sub-micron (0.001 mm) orthogonal 90° X/Y tracking across 0.5 mm – 3.5 mm cylindrical stock catches necking, ovality, and eccentricity hidden from single-axis gauges.",
    p1_use4_title: "R&D Compounding & Spool Quality Certification",
    p1_use4_desc: "Streams timestamped CSV diameter logs over USB, UART, CAN, or Ethernet to document spool-by-spool dimensional compliance during polymer formulation trials.",
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

    // Product 2
    p2_tag: "AERODYNAMIC SIMULATION & FLOW SYSTEMS",
    p2_title: "Ducted Aerodynamic Flow Generator",
    p2_short: "Aerodynamic Flow Generator",
    p2_desc: "2×2 multi-fan active flow array designed for aerodynamic simulations, wind tunnel experiments, and boundary-layer research. Delivers up to 40 m/s airspeed with straight-line laminar uniformity.",
    p2_h1: "2×2 Multi-Fan Active Flow Array: 4 independently controlled/synchronized high-response flow units.",
    p2_h2: "Up to 40 m/s (144 km/h): Continuously variable velocity control from low-speed laminar onset to peak airspeed.",
    p2_h3: "Rotational Wake Cancellation: Integrated downstream 3D aerodynamic stators eliminate swirl effects.",
    p2_kpi1_val: "2×2", p2_kpi1_lbl: "Active Flow Array",
    p2_kpi2_val: "40 m/s", p2_kpi2_lbl: "Peak Airspeed",
    p2_kpi3_val: "3D Stators", p2_kpi3_lbl: "Anti-Swirl Wake",
    p2_kpi4_val: "ROS 2 / Py", p2_kpi4_lbl: "Digital Control API",
    p2_sub1_title: "Multi-Fan Drive & Flow Conditioning",
    p2_sub1_desc: "Four synchronized brushless electric flow units with digital ESCs drive continuously variable airspeeds up to 40 m/s (144 km/h), conditioned by downstream 3D anti-swirl stators and protective inlet/outlet FOD screens.",
    p2_sub2_title: "Modulation Profiles & Research Integration",
    p2_sub2_desc: "Supports steady-state hold, automated ramping, dynamic gusts, and stepped wind profiles over UART, PWM, CAN, and USB (Python & ROS 2 API ready) for propeller testing, pitot calibration, and UAV HIL simulation.",
    p2_use1_title: "UAV Hardware-in-the-Loop (HIL) Wind Testing",
    p2_use1_desc: "Commands automated ramping, dynamic wind gusts, and stepped profiles up to 40 m/s via Python or ROS 2 API to test autopilot disturbance rejection indoors.",
    p2_use2_title: "Pitot-Static Probe & Airspeed Sensor Calibration",
    p2_use2_desc: "Downstream 3D anti-swirl stators deliver straight-line laminar airflow from low-speed onset to 144 km/h (~78 kts) for repeatable benchtop calibration of pitot tubes and anemometers.",
    p2_use3_title: "Propeller, Rotor & Micro-Turbine Thrust Rigs",
    p2_use3_desc: "Rigid Sigma aluminum T-slot rails allow direct downstream mounting of thrust stands to characterize propeller and rotor efficiency across controlled axial inflow speeds.",
    p2_use4_title: "Academic Boundary-Layer & Flow Research",
    p2_use4_desc: "Compact 2×2 synchronized array brings repeatable aerodynamic profile, wake, and boundary-layer studies to university labs without facility-scale wind tunnels.",
    s2_k1: "Array Architecture", s2_v1: "2×2 Multi-Fan Active Flow Array (4 Synchronized Units)",
    s2_k2: "Maximum Air Velocity", s2_v2: "Up to 40 m/s (144 km/h / ~78 kts)",
    s2_k3: "Velocity Controllability", s2_v3: "Continuously Variable from Laminar Onset to Peak",
    s2_k4: "Flow Conditioning", s2_v4: "Downstream 3D Aerodynamic Anti-Swirl Stators",
    s2_k5: "Drive System", s2_v5: "High-Efficiency Brushless Electric Motors + Digital ESCs",
    s2_k6: "Modulation Modes", s2_v6: "Steady-State Hold, Ramping, Dynamic Gusts, Stepped Wind",
    s2_k7: "Digital Control Interface", s2_v7: "UART / PWM / CAN / USB (Python & ROS 2 API Ready)",
    s2_k8: "Frame Construction", s2_v8: "Rigid Sigma Aluminum Profile Chassis with T-Slot Rails",
    s2_k9: "Safety Protection", s2_v9: "Protective Inlet/Outlet Foreign Object Debris (FOD) Screens",
    s2_k10: "Target Applications", s2_v10: "Propeller Testing, Pitot Calibration, UAV HIL Simulation",
    s2_k11: "Operating Temperature", s2_v11: "-20 °C to +70 °C",

    // Product 3
    p3_tag: "INDUSTRIAL PROCESSING & RECYCLING",
    p3_title: "Single-Shaft Industrial Shredder",
    p3_short: "Industrial Shredder",
    p3_desc: "Benchtop single-shaft shredder engineered for technical polymers and composite scrap reduction. 52 RPM high-shear cutting, 40 Nm torque, and full SS316 stainless steel cutting core.",
    p3_h1: "Direct-to-Extruder Regrind: 4.0 mm tooth pitch produces uniform ~4 mm flakes that drop directly into desktop extruders.",
    p3_h2: "Surgical-Grade SS316 Core: Full CNC/laser-machined SS316 stainless steel resists corrosion and abrasive composite wear.",
    p3_h3: "52 RPM / 40 Nm High Shear: Low-speed rotation eliminates thermal softening, keeping polymers cold to preserve properties.",
    p3_h4: "Ultra-Quiet Benchtop Profile: < 65 dB acoustic signature under full load, suitable for desktop lab environments.",
    p3_kpi1_val: "52 RPM", p3_kpi1_lbl: "Low-Speed Shear",
    p3_kpi2_val: "40 Nm", p3_kpi2_lbl: "Continuous Torque",
    p3_kpi3_val: "SS316", p3_kpi3_lbl: "Cutting Core",
    p3_kpi4_val: "< 65 dB", p3_kpi4_lbl: "Lab Acoustic",
    p3_sub1_title: "SS316 Rotor Geometry & Sizing Screen",
    p3_sub1_desc: "A 160 × 140 × 110 mm multi-hook autonomous pull-in chamber pairs a single-shaft SS316 rotor with stationary counter-knives at 4.0 mm pitch and interchangeable 4–5 mm stainless mesh, outputting 2–6 kg/h of ~4 mm regrind.",
    p3_sub2_title: "AC Induction Drive, Safety & Polymer Range",
    p3_sub2_desc: "Powered by a 220V AC / 50 Hz single-phase induction motor with Forward / Stop / Instant Reverse switchgear, processing PLA, PETG, ABS, PA/Nylon, PP, HDPE, LDPE, and PS walls up to 3.5 mm below 65 dB.",
    p3_use1_title: "Closed-Loop 3D Print & Extrusion Recycling",
    p3_use1_desc: "Converts failed prints, purge blocks, and support waste (PLA, PETG, ABS, PA/Nylon) into uniform ~4 mm flakes engineered to feed directly into desktop filament extruders.",
    p3_use2_title: "University R&D & Polymer Sample Preparation",
    p3_use2_desc: "Low-speed 52 RPM / 40 Nm cold shear prevents thermal softening so PP, HDPE, LDPE, and PS batches retain their native properties under a quiet < 65 dB lab profile.",
    p3_use3_title: "Corrosive & Abrasive Technical Scrap Reduction",
    p3_use3_desc: "Surgical-grade CNC/laser-machined SS316 stainless steel cutting core resists corrosion and wear when downsizing rigid polymer walls up to 3.5 mm.",
    p3_use4_title: "Small-Batch Injection Molding Runner Regrind",
    p3_use4_desc: "Interchangeable 4–5 mm stainless sizing screens and 2–6 kg/h throughput reclaim sprues and runners cleanly with Forward / Stop / Instant Reverse jam protection.",
    s3_k1: "Motor & Power Supply", s3_v1: "Single-Phase Industrial AC Induction Motor, 220V AC / 50 Hz",
    s3_k2: "Speed & Torque", s3_v2: "52 RPM Low-Speed Shear, 40 Nm Continuous Output",
    s3_k3: "Cutting Architecture", s3_v3: "Single-Shaft Rotor + Precision Stationary Counter-Knives",
    s3_k4: "Blade Material", s3_v4: "Premium SS316 Stainless Steel (Corrosion & Wear Resistant)",
    s3_k5: "Tooth Pitch & Clearance", s3_v5: "4.0 mm Precision Pitch (~4 mm Granular Flakes)",
    s3_k6: "Cutting Chamber", s3_v6: "160 × 140 × 110 mm (Multi-Hook Autonomous Pull-In)",
    s3_k7: "Throughput Capacity", s3_v7: "2–6 kg/h (Geometry & Polymer Dependent)",
    s3_k8: "Max Processable Wall", s3_v8: "Up to 3.5 mm Rigid Structural Cross-Section",
    s3_k9: "Compatible Polymers", s3_v9: "PLA, PETG, ABS, PA/Nylon, PP, HDPE, LDPE, PS",
    s3_k10: "Discharge Sizing Screen", s3_v10: "Interchangeable Perforated Stainless Steel Mesh (4–5 mm)",
    s3_k11: "Operation & Safety", s3_v11: "Forward / Stop / Instant Reverse + Momentary Jam Clearing",
    s3_k12: "Acoustic Signature", s3_v12: "< 65 dB (Ultra-Low Noise, Desktop Lab Rated)",
    s3_k13: "Operating Temperature", s3_v13: "-20 °C to +70 °C",

    // Capabilities
    cap_1_title: "Parametric CAD & Mechanical Engineering",
    cap_1_desc: "3D solid modeling, kinematic mechanisms, tolerance stackup analysis, and DFM/DFA optimization for industrial machinery.",
    cap_2_title: "Aerodynamic Simulation & Flow Research",
    cap_2_desc: "Computational fluid dynamics (CFD), multi-fan flow array synchronization, boundary-layer studies, and anti-swirl conditioning.",
    cap_3_title: "Non-Contact Optical Gauging & Inspection",
    cap_3_desc: "Orthogonal dual-axis gauging, sub-micron edge detection algorithms, telecentric backlighting, and real-time ovality tracking.",
    cap_4_title: "Embedded Systems & High-Speed DSP Firmware",
    cap_4_desc: "High-speed DSP signal acquisition, optical sensor drivers, and industrial communication architectures (CAN, UART, RS-485, Ethernet).",
    cap_5_title: "Industrial Automation & Closed-Loop Control",
    cap_5_desc: "Real-time line synchronization, automated extruder puller speed and screw RPM PID regulation, and dynamic sensor feedback loops.",
    cap_6_title: "Custom Turnkey Machinery & Prototyping",
    cap_6_desc: "Bespoke machine design from initial concept through shop-floor commissioning, rapid prototyping, and benchtop lab machinery.",

    // Catalog & Product Pages Shared
    catalog_badge: "PRODUCTS & SOLUTIONS",
    catalog_title: "Engineering Platforms",
    catalog_desc: "Explore verified technical documentation, system architecture, and real-world use cases across all APH Labs platforms.",
    catalog_compare_title: "Platform Comparison Matrix",
    catalog_col_system: "Platform",
    catalog_col_domain: "Engineering Domain",
    catalog_col_metric: "Primary Benchmark",
    catalog_col_interface: "Control & Interface",
    catalog_col_temp: "Operating Range",
    catalog_col_page: "Documentation",
    section_apps_kicker: "USE CASES & APPLICATIONS",
    section_apps_title: "Where This System Is Used",
    section_arch_kicker: "SYSTEM ARCHITECTURE",
    section_arch_title: "Engineering Highlights & Subsystems",
    section_specs_title: "Full Technical Specifications",
    section_related_title: "Other APH Labs Platforms",
    btn_jump_specs: "Technical Specifications",

    // Contact
    contact_kicker: "DIRECT ENGINEERING INQUIRY",
    contact_title: "Speak Directly With Our Engineering Team",
    contact_desc: "Reach out for standard platform quotes, laboratory demonstrations, or custom turnkey machinery architectures.",
    contact_email_lbl: "Direct Email",
    contact_phone_lbl: "Direct Phone",
    contact_domain_lbl: "Official Domain",
    form_machine_label: "Target System",
    form_machine_opt1: "Optical Filament Diameter Gauge",
    form_machine_opt2: "Ducted Aerodynamic Flow Generator",
    form_machine_opt3: "Single-Shaft Industrial Shredder",
    form_machine_opt4: "Custom Engineering Consultation / Turnkey Project",
    form_name_label: "Full Name",
    form_name_placeholder: "First and Last Name",
    form_company_label: "Company / Institution",
    form_company_placeholder: "Company or University Name",
    form_email_label: "Email Address",
    form_email_placeholder: "engineering@company.com",
    form_notes_label: "Technical Requirements & Project Scope",
    form_notes_placeholder: "Process parameters, target tolerances, or commissioning details...",
    form_submit: "Transmit Engineering Inquiry",
    form_transmitting: "Transmitting...",
    form_success_title: "Inquiry Received",
    form_success_desc: "Your technical inquiry has been routed directly to our engineering desk. We will respond within one business day.",
    btn_send_another: "Send Another Inquiry",

    // Configurator (/order/)
    cfg_title: "System Configurator",
    cfg_sub: "Select your platform, choose integration options, and transmit a direct engineering quote request.",
    cfg_step1: "1. Select Platform",
    cfg_step2: "2. Configuration & Interface Package",
    cfg_step3: "3. Included Hardware & Deliverables",
    cfg_step4: "4. Quantity & Quote Request",
    cfg_qty_label: "Quantity",
    cfg_view_video: "Video",
    cfg_view_photo: "Studio",
    cfg_view_cad: "Detail",
    cfg_submit: "Submit Quote / Pre-Order Request",
    cfg_privacy_note: "By submitting, you agree to our Privacy Policy regarding technical inquiry communication.",

    // Footer
    footer_news_title: "Stay Updated",
    footer_news_placeholder: "Enter your email",
    footer_news_btn: "Subscribe",
    footer_news_ok: "Subscribed. We will share new engineering releases with you.",
    footer_contact: "Contact",
    footer_privacy: "Privacy Policy",
    footer_copy: "© 2026 APH Labs — Precision Engineering & Industrial Instruments"
  }
};

let currentLang = "tr";

function trackAnalyticsEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function getBasePath() {
  return document.body?.dataset.basePath || "";
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "tr";
  currentLang = lang;
  try {
    localStorage.setItem("aph_lang", lang);
  } catch (_) {}

  document.documentElement.lang = lang;
  const dict = translations[lang];
  const titleKey = document.body?.dataset.pageTitleKey || "meta_title";
  const descKey = document.body?.dataset.pageDescKey || "meta_desc";

  if (dict[titleKey]) {
    document.title = dict[titleKey];
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict[titleKey]);
  }
  if (dict[descKey]) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict[descKey]);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict[descKey]);
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn-tr").forEach((b) => b.classList.toggle("active", lang === "tr"));
  document.querySelectorAll(".lang-btn-en").forEach((b) => b.classList.toggle("active", lang === "en"));

  document.dispatchEvent(new CustomEvent("aph:langchange", { detail: { lang } }));
}

function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem("aph_lang");
  } catch (_) {}

  const params = new URLSearchParams(window.location.search);
  const queryLang = params.get("lang");
  if (queryLang === "tr" || queryLang === "en") {
    setLanguage(queryLang);
  } else if (saved === "tr" || saved === "en") {
    setLanguage(saved);
  } else {
    setLanguage("tr");
  }

  document.querySelectorAll(".lang-btn-tr").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage("tr");
      trackAnalyticsEvent("language_switch", { language: "tr" });
    });
  });

  document.querySelectorAll(".lang-btn-en").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage("en");
      trackAnalyticsEvent("language_switch", { language: "en" });
    });
  });
}

/* ==========================================================================
   Header, Mobile Modal & Quick Search
   ========================================================================== */
function initHeaderAndModals() {
  const header = document.querySelector(".site-header");
  if (header && !header.classList.contains("header-light")) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 36);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Dropdown click support
  const dropdowns = document.querySelectorAll(".nav-dropdown");
  dropdowns.forEach((dd) => {
    const trigger = dd.querySelector(".nav-dropdown-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const open = dd.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach((dd) => {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        const t = dd.querySelector(".nav-dropdown-trigger");
        if (t) t.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Mobile Nav Dialog
  const mobileTrigger = document.getElementById("mobileMenuBtn");
  const mobileModal = document.getElementById("mobileNavModal");
  const mobileClose = document.getElementById("mobileNavClose");

  const closeMobile = () => {
    if (mobileModal) {
      mobileModal.classList.remove("is-open");
      document.body.style.overflow = "";
      if (mobileTrigger) mobileTrigger.setAttribute("aria-expanded", "false");
    }
  };

  if (mobileTrigger && mobileModal) {
    mobileTrigger.setAttribute("aria-expanded", "false");
    mobileTrigger.addEventListener("click", () => {
      mobileModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      mobileTrigger.setAttribute("aria-expanded", "true");
    });
    if (mobileClose) mobileClose.addEventListener("click", closeMobile);
    mobileModal.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMobile));
  }

  // Search Modal
  const searchTrigger = document.getElementById("searchOpenBtn");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const buildSearchIndex = () => {
    const base = getBasePath();
    const d = translations[currentLang];
    return [
      { title: d.p1_title, meta: d.nav_p1_sub, url: `${base}products/optical-filament-gauge/`, keywords: "optik optical filament diameter cap 0.001 mm cmos 100 hz" },
      { title: d.p2_title, meta: d.nav_p2_sub, url: `${base}products/aerodynamic-flow-generator/`, keywords: "aerodinamik aerodynamic wind ruzgar fan 2x2 40 m/s stator ros2 python" },
      { title: d.p3_title, meta: d.nav_p3_sub, url: `${base}products/industrial-shredder/`, keywords: "shredder parcalayici ss316 52 rpm 40 nm 65 db polimer recycling" },
      { title: d.cfg_title, meta: d.nav_order_cta, url: `${base}order/`, keywords: "teklif siparis order quote configurator konfigurator" },
      { title: d.nav_all_systems, meta: currentLang === "en" ? "Catalog" : "Katalog", url: `${base}products/`, keywords: "urunler products catalog matrix karsilastirma" },
      { title: d.cap_1_title, meta: "01 • CAD", url: `${base}#capabilities`, keywords: "cad mekanik solid modeling dfa dfm" },
      { title: d.cap_4_title, meta: "04 • DSP", url: `${base}#capabilities`, keywords: "dsp embedded gomulu can uart ethernet firmware" },
      { title: d.footer_privacy, meta: "Legal", url: `${base}privacy/`, keywords: "gizlilik privacy legal" }
    ];
  };

  const renderSearch = (q) => {
    if (!searchResults) return;
    const query = (q || "").trim().toLowerCase();
    const items = buildSearchIndex().filter((it) => {
      if (!query) return true;
      return (
        it.title.toLowerCase().includes(query) ||
        it.meta.toLowerCase().includes(query) ||
        it.keywords.toLowerCase().includes(query)
      );
    });

    if (!items.length) {
      searchResults.innerHTML = `<div style="padding:18px 14px;color:rgba(255,255,255,0.5);font-size:14px;">${translations[currentLang].search_empty}</div>`;
      return;
    }

    searchResults.innerHTML = items
      .map(
        (it) => `
      <a class="search-result-item" href="${it.url}">
        <div>
          <div class="search-result-title">${it.title}</div>
          <div class="search-result-meta">${it.meta}</div>
        </div>
        <span style="opacity:0.5">→</span>
      </a>`
      )
      .join("");
  };

  const closeSearch = () => {
    if (searchModal) {
      searchModal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  };

  if (searchTrigger && searchModal && searchInput) {
    searchTrigger.addEventListener("click", () => {
      searchModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      renderSearch(searchInput.value);
      setTimeout(() => searchInput.focus(), 60);
    });

    searchInput.addEventListener("input", (e) => renderSearch(e.target.value));
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });
    document.addEventListener("aph:langchange", () => {
      if (searchModal.classList.contains("is-open")) renderSearch(searchInput.value);
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobile();
      closeSearch();
      dropdowns.forEach((dd) => dd.classList.remove("open"));
    }
  });
}

/* ==========================================================================
   Inset Video Play/Pause & Smart Viewport Playback
   ========================================================================== */
function initVideos() {
  const pauseIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`;
  const playIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>`;

  document.querySelectorAll(".video-frame").forEach((frame) => {
    const video = frame.querySelector("video");
    const btn = frame.querySelector(".video-toggle-btn");
    if (!video || !btn) return;

    let userPaused = false;
    const syncIcon = () => {
      btn.innerHTML = video.paused ? playIcon : pauseIcon;
      btn.setAttribute("aria-label", video.paused ? "Play video" : "Pause video");
    };

    btn.addEventListener("click", () => {
      if (video.paused) {
        userPaused = false;
        video.play().catch(() => {});
      } else {
        userPaused = true;
        video.pause();
      }
      syncIcon();
    });

    video.addEventListener("play", syncIcon);
    video.addEventListener("pause", syncIcon);
    syncIcon();

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !userPaused) {
              video.play().catch(() => {});
            } else if (!entry.isIntersecting && !video.paused) {
              video.pause();
            }
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(video);
    }
  });
}

/* ==========================================================================
   Horizontal Editorial Carousels
   ========================================================================== */
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((section) => {
    const track = section.querySelector(".carousel-track");
    const prevBtn = section.querySelector("[data-carousel-prev]");
    const nextBtn = section.querySelector("[data-carousel-next]");
    if (!track) return;

    const getStep = () => {
      const card = track.querySelector(".gallery-card, .competency-card");
      return card ? card.getBoundingClientRect().width + 18 : 420;
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -getStep(), behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: getStep(), behavior: "smooth" });
      });
    }
  });
}

/* ==========================================================================
   Homepage Technical Specs Tab Switcher
   ========================================================================== */
function initSpecTabs() {
  const buttons = document.querySelectorAll(".spec-tab-btn");
  const panels = document.querySelectorAll(".spec-panel");
  if (!buttons.length || !panels.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.specTab;
      buttons.forEach((b) => {
        const active = b.dataset.specTab === target;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });
      panels.forEach((p) => {
        p.classList.toggle("is-active", p.dataset.specPanel === target);
      });
    });
  });
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const revealVisible = () => {
    const vh = window.innerHeight || 900;
    els.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh + 120) {
        el.classList.add("is-visible");
      }
    });
  };

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px 80px 0px" }
  );

  els.forEach((el) => obs.observe(el));
  window.addEventListener("scroll", revealVisible, { passive: true });
  revealVisible();
}

/* ==========================================================================
   Contact & Newsletter Forms (Formsubmit -> furkaniusprimes@gmail.com)
   ========================================================================== */
function applyDefaultTargetSystem() {
  const select = document.getElementById("formTargetMachine");
  if (!select) return;
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("system") ?? document.body?.dataset.defaultSystem;
  if (raw !== undefined && raw !== null && raw !== "") {
    const idx = parseInt(raw, 10);
    if (!Number.isNaN(idx) && idx >= 0 && idx < select.options.length) {
      select.selectedIndex = idx;
    }
  }
}

function initContactAndNewsletter() {
  applyDefaultTargetSystem();

  document.querySelectorAll("[data-target-machine]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const select = document.getElementById("formTargetMachine");
      const idx = parseInt(btn.getAttribute("data-target-machine"), 10);
      if (select && !Number.isNaN(idx) && idx >= 0 && idx < select.options.length) {
        select.selectedIndex = idx;
      }
    });
  });

  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");
  if (contactForm && contactSuccess) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const labelSpan = submitBtn?.querySelector("span");
      const origText = labelSpan ? labelSpan.textContent : "";

      if (submitBtn) submitBtn.disabled = true;
      if (labelSpan) labelSpan.textContent = translations[currentLang].form_transmitting;

      const targetSystem = document.getElementById("formTargetMachine")?.value || "APH Labs Inquiry";
      const fullName = document.getElementById("formFullName")?.value || "";
      const company = document.getElementById("formCompany")?.value || "";
      const email = document.getElementById("formEmail")?.value || "";
      const notes = document.getElementById("formNotes")?.value || "";
      const configSummary = document.getElementById("formConfigSummary")?.value || "";
      const qty = document.getElementById("formQty")?.value || "";

      const payload = {
        _subject: `New APH Labs Inquiry: ${targetSystem} [${company || fullName}]`,
        _replyto: email,
        _template: "table",
        _captcha: "false",
        "Target System": targetSystem,
        "Configuration": configSummary || "Standard",
        "Quantity": qty || "1",
        "Contact Person": fullName,
        "Company / Organization": company,
        "Email Address": email,
        "Technical Scope": notes,
        "Source Page": window.location.pathname
      };

      try {
        const res = await fetch("https://formsubmit.co/ajax/furkaniusprimes@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          trackAnalyticsEvent("generate_lead", { target_system: targetSystem, page_language: currentLang });
        }
      } catch (err) {
        console.warn("Form dispatch notice:", err);
      } finally {
        contactForm.style.display = "none";
        contactSuccess.classList.add("is-visible");
        contactForm.reset();
        applyDefaultTargetSystem();
        if (submitBtn) submitBtn.disabled = false;
        if (labelSpan) labelSpan.textContent = origText;
      }
    });

    const resetBtn = document.getElementById("btnSendAnother");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        contactSuccess.classList.remove("is-visible");
        contactForm.style.display = "flex";
      });
    }
  }

  // Footer Newsletter Form
  document.querySelectorAll(".newsletter-form").forEach((nf) => {
    nf.addEventListener("submit", async (e) => {
      e.preventDefault();
      const emailInput = nf.querySelector('input[type="email"]');
      const feedback = nf.parentElement?.querySelector(".newsletter-feedback");
      const email = emailInput?.value?.trim();
      if (!email) return;

      if (feedback) feedback.textContent = translations[currentLang].footer_news_ok;
      nf.reset();

      try {
        await fetch("https://formsubmit.co/ajax/furkaniusprimes@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: `APH Labs Newsletter Subscription: ${email}`,
            _captcha: "false",
            Email: email,
            Source: window.location.pathname
          })
        });
      } catch (_) {}
    });
  });
}

/* ==========================================================================
   AirCar-Style 70/30 Split Configurator Controller (/order/)
   ========================================================================== */
function initConfigurator() {
  const root = document.getElementById("aphConfigurator");
  if (!root) return;

  const base = getBasePath();
  const platforms = {
    filament: {
      index: 0,
      video: `${base}assets/video/product-filament.mp4?v=3`,
      photo: `${base}assets/img/studio/filament-gauge.png`,
      cad: `${base}assets/img/studio/hero-aph-studio.png`,
      tr: {
        name: "Optik Filament Çap Ölçüm Cihazı",
        kicker: "OPTİK METROLOJİ • 0.001 mm",
        kpis: [
          ["0.001 mm", "Çözünürlük"],
          ["±0.003 mm", "Doğruluk"],
          ["100 Hz", "Örnekleme"]
        ],
        options: [
          { id: "std-175", title: "1.75 mm Standart Hat", sub: "0.5–3.5 mm optik aralık • USB/UART" },
          { id: "pro-can", title: "Kapalı Çevrim PID Paketi", sub: "CAN + Ethernet + Çekici PID senkron" },
          { id: "cf-suite", title: "CF/GF Kompozit Kiti", sub: "Yüksek kontrast telecentric + toz kalkanı" },
          { id: "cal-cert", title: "Kalibrasyon Mastar Seti", sub: "Sertifikalı referans pim + CSV yazılımı" }
        ],
        included: [
          { img: `${base}assets/img/studio/filament-gauge.png`, label: "Çift Eksen Optik Ünite" },
          { img: `${base}assets/img/studio/hero-aph-studio.png`, label: "100 Hz Kenar Algılama DSP" }
        ]
      },
      en: {
        name: "Optical Filament Diameter Gauge",
        kicker: "OPTICAL METROLOGY • 0.001 mm",
        kpis: [
          ["0.001 mm", "Resolution"],
          ["±0.003 mm", "Accuracy"],
          ["100 Hz", "Sampling"]
        ],
        options: [
          { id: "std-175", title: "1.75 mm Standard Line", sub: "0.5–3.5 mm optical range • USB/UART" },
          { id: "pro-can", title: "Closed-Loop PID Package", sub: "CAN + Ethernet + Puller PID sync" },
          { id: "cf-suite", title: "CF/GF Composite Kit", sub: "High-contrast telecentric + dust shield" },
          { id: "cal-cert", title: "Calibration Gauge Set", sub: "Certified pin reference + CSV software" }
        ],
        included: [
          { img: `${base}assets/img/studio/filament-gauge.png`, label: "Dual-Axis Optical Head" },
          { img: `${base}assets/img/studio/hero-aph-studio.png`, label: "100 Hz Edge Detection DSP" }
        ]
      }
    },
    aero: {
      index: 1,
      video: `${base}assets/video/product-aero.mp4?v=3`,
      photo: `${base}assets/img/studio/wind-generator.png`,
      cad: `${base}assets/img/studio/wind-generator-closeup.png`,
      tr: {
        name: "Kanallı Aerodinamik Akış Jeneratörü",
        kicker: "2×2 AKTİF AKIŞ MATRİSİ • 40 m/s",
        kpis: [
          ["2×2", "Aktif Matris"],
          ["40 m/s", "Maks. Hız"],
          ["ROS 2", "Python API"]
        ],
        options: [
          { id: "aero-lab", title: "Standart 2×2 Lab Ünitesi", sub: "40 m/s • 3D anti-girdap statorları" },
          { id: "aero-hil", title: "İHA HIL & ROS 2 Paketi", sub: "Dinamik rüzgar darbesi (gust) + CAN/USB" },
          { id: "aero-pitot", title: "Pitot Kalibrasyon Kiti", sub: "Referans hız sensörü + T-kanal aparatı" },
          { id: "aero-array", title: "Modüler Çoklu Dizi", sub: "Genişletilebilir Sigma şasi bağlantısı" }
        ],
        included: [
          { img: `${base}assets/img/studio/wind-generator.png`, label: "2×2 Senkron Fan Ünitesi" },
          { img: `${base}assets/img/studio/wind-generator-closeup.png`, label: "3D Anti-Girdap Statorları" }
        ]
      },
      en: {
        name: "Ducted Aerodynamic Flow Generator",
        kicker: "2×2 ACTIVE FLOW ARRAY • 40 m/s",
        kpis: [
          ["2×2", "Active Array"],
          ["40 m/s", "Peak Airspeed"],
          ["ROS 2", "Python API"]
        ],
        options: [
          { id: "aero-lab", title: "Standard 2×2 Lab Unit", sub: "40 m/s • 3D anti-swirl stators" },
          { id: "aero-hil", title: "UAV HIL & ROS 2 Suite", sub: "Dynamic wind gusts + CAN/USB API" },
          { id: "aero-pitot", title: "Pitot Calibration Rig", sub: "Reference velocity probe + T-slot fixture" },
          { id: "aero-array", title: "Modular Multi-Array", sub: "Expandable Sigma frame interconnects" }
        ],
        included: [
          { img: `${base}assets/img/studio/wind-generator.png`, label: "2×2 Synchronized Array" },
          { img: `${base}assets/img/studio/wind-generator-closeup.png`, label: "3D Anti-Swirl Stators" }
        ]
      }
    },
    shredder: {
      index: 2,
      video: `${base}assets/video/product-shredder.mp4?v=3`,
      photo: `${base}assets/img/studio/industrial-shredder.png`,
      cad: `${base}assets/img/studio/shredder-core.png`,
      tr: {
        name: "Tek Şaftlı Endüstriyel Parçalayıcı",
        kicker: "SS316 ÇEKİRDEK • 52 RPM / 40 Nm",
        kpis: [
          ["52 RPM", "Soğuk Kesim"],
          ["40 Nm", "Sürekli Tork"],
          ["< 65 dB", "Sessiz Lab"]
        ],
        options: [
          { id: "shr-4mm", title: "4.0 mm Ekstrüder Eleği", sub: "Doğrudan filament ekstrüderine uygun granül" },
          { id: "shr-5mm", title: "5.0 mm Yüksek Debi Eleği", sub: "Enjeksiyon yolluk ve kalın parça kırma" },
          { id: "shr-dual", title: "Çift Elek + Yedek Set", sub: "4 mm + 5 mm paslanmaz elek seti" },
          { id: "shr-auto", title: "Otomatik Geri Alma PLC", sub: "Akım algılamalı otomatik sıkışma tahliyesi" }
        ],
        included: [
          { img: `${base}assets/img/studio/industrial-shredder.png`, label: "Tezgah Üstü Komple Ünite" },
          { img: `${base}assets/img/studio/shredder-core.png`, label: "SS316 Paslanmaz Çekirdek" }
        ]
      },
      en: {
        name: "Single-Shaft Industrial Shredder",
        kicker: "SS316 CORE • 52 RPM / 40 Nm",
        kpis: [
          ["52 RPM", "Cold Shear"],
          ["40 Nm", "Torque"],
          ["< 65 dB", "Lab Quiet"]
        ],
        options: [
          { id: "shr-4mm", title: "4.0 mm Extruder Screen", sub: "Direct-to-extruder uniform ~4 mm flakes" },
          { id: "shr-5mm", title: "5.0 mm High-Flow Screen", sub: "Injection runners & thicker rigid walls" },
          { id: "shr-dual", title: "Dual Screen Bundle", sub: "Both 4 mm + 5 mm stainless screens" },
          { id: "shr-auto", title: "Auto-Reverse PLC Module", sub: "Current-sensing automated jam clearing" }
        ],
        included: [
          { img: `${base}assets/img/studio/industrial-shredder.png`, label: "Complete Benchtop Machine" },
          { img: `${base}assets/img/studio/shredder-core.png`, label: "SS316 Cutting Core" }
        ]
      }
    }
  };

  let activeKey = "filament";
  let activeView = "video";
  let selectedOptionTitle = "";

  const params = new URLSearchParams(window.location.search);
  const qPlatform = params.get("platform");
  if (qPlatform && platforms[qPlatform]) activeKey = qPlatform;

  const stageVideo = document.getElementById("cfgStageVideo");
  const stageImg = document.getElementById("cfgStageImg");
  const hudKicker = document.getElementById("cfgHudKicker");
  const hudTitle = document.getElementById("cfgHudTitle");
  const kpiWrap = document.getElementById("cfgKpiStrip");
  const optionsWrap = document.getElementById("cfgOptionGrid");
  const includedWrap = document.getElementById("cfgIncludedList");
  const targetInput = document.getElementById("formTargetMachine");
  const configSummaryInput = document.getElementById("formConfigSummary");

  const renderStageMedia = () => {
    const p = platforms[activeKey];
    if (activeView === "video") {
      stageVideo.style.display = "block";
      stageImg.style.display = "none";
      if (stageVideo.getAttribute("src") !== p.video) {
        stageVideo.setAttribute("src", p.video);
        stageVideo.load();
      }
      stageVideo.play().catch(() => {});
    } else {
      stageVideo.pause();
      stageVideo.style.display = "none";
      stageImg.style.display = "block";
      stageImg.src = activeView === "cad" ? p.cad : p.photo;
      stageImg.classList.remove("is-contain");
    }

    document.querySelectorAll(".stage-pill").forEach((pill) => {
      pill.classList.toggle("is-active", pill.dataset.stageView === activeView);
    });
  };

  const renderConfigurator = () => {
    const p = platforms[activeKey];
    const data = p[currentLang] || p.tr;

    hudKicker.textContent = data.kicker;
    hudTitle.textContent = data.name;

    if (targetInput) targetInput.value = data.name;

    kpiWrap.innerHTML = data.kpis
      .map(
        ([val, lbl]) => `
        <div>
          <div class="cfg-kpi-val">${val}</div>
          <div class="cfg-kpi-lbl">${lbl}</div>
        </div>`
      )
      .join("");

    selectedOptionTitle = data.options[0].title;
    if (configSummaryInput) configSummaryInput.value = selectedOptionTitle;

    optionsWrap.innerHTML = data.options
      .map(
        (opt, i) => `
        <button type="button" class="cfg-option-card ${i === 0 ? "is-active" : ""}" data-opt-title="${opt.title}">
          <div class="cfg-option-title">${opt.title}</div>
          <div class="cfg-option-sub">${opt.sub}</div>
        </button>`
      )
      .join("");

    optionsWrap.querySelectorAll(".cfg-option-card").forEach((card) => {
      card.addEventListener("click", () => {
        optionsWrap.querySelectorAll(".cfg-option-card").forEach((c) => c.classList.remove("is-active"));
        card.classList.add("is-active");
        selectedOptionTitle = card.dataset.optTitle;
        if (configSummaryInput) configSummaryInput.value = selectedOptionTitle;
      });
    });

    includedWrap.innerHTML = data.included
      .map(
        (inc) => `
        <div class="cfg-included-item">
          <img src="${inc.img}" alt="${inc.label}" loading="lazy">
          <span>${inc.label}</span>
        </div>`
      )
      .join("");

    document.querySelectorAll(".cfg-platform-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.platform === activeKey);
    });

    renderStageMedia();
  };

  document.querySelectorAll(".cfg-platform-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeKey = btn.dataset.platform;
      renderConfigurator();
    });
  });

  document.querySelectorAll(".stage-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      activeView = pill.dataset.stageView;
      renderStageMedia();
    });
  });

  // Quantity Stepper
  const qtyInput = document.getElementById("formQty");
  const qtyDec = document.getElementById("qtyDec");
  const qtyInc = document.getElementById("qtyInc");
  if (qtyInput && qtyDec && qtyInc) {
    qtyDec.addEventListener("click", () => {
      const v = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
      qtyInput.value = String(v);
    });
    qtyInc.addEventListener("click", () => {
      const v = Math.min(50, (parseInt(qtyInput.value, 10) || 1) + 1);
      qtyInput.value = String(v);
    });
  }

  document.addEventListener("aph:langchange", renderConfigurator);
  renderConfigurator();
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initHeaderAndModals();
  initVideos();
  initCarousels();
  initSpecTabs();
  initScrollReveal();
  initContactAndNewsletter();
  initConfigurator();
});
