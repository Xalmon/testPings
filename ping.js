const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://luminouz-18x0.onrender.com', { waitUntil: 'networkidle2' });
  await browser.close();
})();
