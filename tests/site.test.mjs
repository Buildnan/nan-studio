import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chromium } from '@playwright/test';
const baseURL = process.env.TEST_BASE_URL || 'http://127.0.0.1:5173';
const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
process.on('exit', () => browser.close());

test('desktop: Arabic content, section navigation, concepts and safe contact links', async () => {
 const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
 const errors = [];
 page.on('pageerror', error => errors.push(error.message));
 page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
 await page.goto(baseURL); await page.evaluate(() => document.fonts.ready);
 assert.equal(await page.locator('html').getAttribute('lang'), 'ar');
 assert.equal(await page.locator('html').getAttribute('dir'), 'rtl');
 assert.equal(await page.locator('h1').count(), 1);
 assert.equal(await page.locator('.division-card').count(), 3);
 assert.equal(await page.locator('.team-card').count(), 3);
 for(const id of ['home','expertise','work','studio','contact']) {
  await page.locator(`.navigation a[href="#${id}"]`).click();
  await page.waitForTimeout(700);
  assert.equal(new URL(page.url()).hash, `#${id}`);
  assert.ok(await page.locator(`#${id}`).evaluate(el => { const r=el.getBoundingClientRect(); return r.top < innerHeight * .25 && r.bottom > 0; }));
 }
 assert.equal(await page.locator('a[href^="mailto:"]').count(), 0);
 const snapchat = page.locator('.contact-row[href]');
 assert.equal(await snapchat.getAttribute('href'), 'https://www.snapchat.com/add/nanstudio');
 assert.equal(await page.locator('.social-placeholders a').count(), 0);
 await page.locator('.project-web').click();
 await page.waitForFunction(() => document.querySelector('dialog').open);
 assert.equal(await page.locator('dialog').getAttribute('open'), '');
 await page.keyboard.press('Escape');
 assert.equal(await page.locator('dialog').getAttribute('open'), null);
 await page.locator('.project-interface').click();
 await page.locator('dialog a').click();
 assert.equal(new URL(page.url()).hash, '#contact');
 await page.goto(baseURL); await page.waitForTimeout(300);
 await page.keyboard.press('Tab');
 assert.equal(await page.locator(':focus').textContent(), 'تجاوز إلى المحتوى');
 await page.keyboard.press('Enter');
 assert.equal(new URL(page.url()).hash, '#main');
 assert.deepEqual(errors, []);
 await page.goto(baseURL); await page.waitForTimeout(600);
 await page.screenshot({ path: '/tmp/nan-desktop.png', fullPage: true });
 await page.close();
});

test('mobile and tablet: navigation, no horizontal overflow, keyboard and reduced motion', async () => {
 for(const width of [360,390,768,1024,1920]) {
  const page = await browser.newPage({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
  await page.goto(baseURL); await page.evaluate(() => document.fonts.ready);
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}`);
  assert.equal(await page.locator('.marquee-track').evaluate(el => getComputedStyle(el).animationName), 'none');
  assert.equal(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior), 'auto');
  if(width <= 800) {
   const toggle = page.locator('.menu-toggle');
   await toggle.click();
   assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
   await page.locator('.navigation a[href="#work"]').focus();
   await page.keyboard.press('Escape');
   assert.equal(await page.getByRole('button', { name: 'فتح القائمة' }).getAttribute('aria-expanded'), 'false');
   await toggle.click(); await page.locator('.navigation a[href="#contact"]').click();
   assert.equal(new URL(page.url()).hash, '#contact');
   assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
  }
  if(width === 390) { await page.goto(baseURL); await page.screenshot({ path: '/tmp/nan-mobile.png', fullPage: true }); }
  await page.close();
 }
});

test.after(async () => { await browser.close(); });
