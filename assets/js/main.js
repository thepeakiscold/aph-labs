/**
 * APH SYSTEMS - Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Request for Quote (RFQ) Modal
  const rfqModal = document.getElementById('rfqModal');
  const rfqButtons = document.querySelectorAll('.open-rfq-modal');
  const closeRfqBtn = document.getElementById('closeRfqBtn');
  const rfqForm = document.getElementById('rfqForm');
  const rfqSuccess = document.getElementById('rfqSuccess');

  const openModal = (productName = '') => {
    if (rfqModal) {
      rfqModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (productName && document.getElementById('modalProductSelect')) {
        document.getElementById('modalProductSelect').value = productName;
      }
    }
  };

  const closeModal = () => {
    if (rfqModal) {
      rfqModal.classList.remove('active');
      document.body.style.overflow = '';
      if (rfqSuccess) rfqSuccess.classList.add('hidden');
      if (rfqForm) rfqForm.classList.remove('hidden');
    }
  };

  rfqButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || '';
      openModal(product);
    });
  });

  if (closeRfqBtn) closeRfqBtn.addEventListener('click', closeModal);
  if (rfqModal) {
    rfqModal.addEventListener('click', (e) => {
      if (e.target === rfqModal) closeModal();
    });
  }

  if (rfqForm) {
    rfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Transmitting Specifications...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Send Engineering Request';
        }
        if (rfqForm) rfqForm.classList.add('hidden');
        if (rfqSuccess) rfqSuccess.classList.remove('hidden');
        rfqForm.reset();
      }, 900);
    });
  }

  // 3. Live Optical Filament Diameter Measurement Simulator
  const liveReading = document.getElementById('liveReading');
  const liveDeviation = document.getElementById('liveDeviation');
  const liveStdDev = document.getElementById('liveStdDev');
  const liveSparkPoints = document.getElementById('sparklinePoints');

  if (liveReading && liveDeviation) {
    let history = [1.750, 1.751, 1.749, 1.750, 1.752, 1.748, 1.750, 1.751, 1.750, 1.750];

    setInterval(() => {
      // Simulate microscopic laser/optical micrometer jitter around 1.750 mm (nominal 3D printing filament)
      const noise = (Math.random() - 0.5) * 0.005; // ±0.0025 mm
      const current = parseFloat((1.750 + noise).toFixed(3));
      const dev = parseFloat(((current - 1.750) * 1000).toFixed(1)); // in microns (µm)

      liveReading.textContent = current.toFixed(3) + ' mm';
      liveDeviation.textContent = (dev >= 0 ? '+' : '') + dev.toFixed(1) + ' µm';
      
      if (liveStdDev) {
        const std = (Math.abs(noise) * 0.8 + 0.0012).toFixed(4);
        liveStdDev.textContent = '±' + std + ' mm';
      }

      // Update history and mini SVG sparkline
      history.shift();
      history.push(current);

      if (liveSparkPoints) {
        // Map history to SVG coordinate points (x from 0 to 240, y centered around 30)
        const coords = history.map((val, idx) => {
          const x = (idx / (history.length - 1)) * 240;
          const y = 30 - ((val - 1.750) * 1500); // 1.750 is y=30
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');
        liveSparkPoints.setAttribute('points', coords);
      }
    }, 750);
  }

  // 4. Smooth Anchor Link Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
