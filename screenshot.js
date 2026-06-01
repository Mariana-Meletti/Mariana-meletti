const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle' });

  // Acionar todas as animações de scroll imediatamente
  await page.evaluate(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  });

  await page.waitForTimeout(400);

  // Full page
  await page.screenshot({ path: 'screenshots/progress/01-full-page.png', fullPage: true });

  // Recortes por seção
  const sections = [
    { name: '01-navbar', selector: '.navbar' },
    { name: '02-hero',   selector: '.hero' },
    { name: '03-stats',  selector: '.stats' },
    { name: '04-sobre',  selector: '.sobre' },
    { name: '05-servicos', selector: '.servicos' },
    { name: '06-diferenciais', selector: '.diferenciais' },
    { name: '07-depoimentos',  selector: '.depoimentos' },
    { name: '08-faq',    selector: '.faq' },
    { name: '09-cta',    selector: '.cta-final' },
    { name: '10-footer', selector: '.footer' },
  ];

  for (const s of sections) {
    const el = page.locator(s.selector);
    if (await el.count()) {
      await el.screenshot({ path: `screenshots/progress/${s.name}.png` });
    }
  }

  await browser.close();
  console.log('Screenshots capturados em screenshots/progress/');
})();
