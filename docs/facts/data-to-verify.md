# Данные сайта — что проверить с Maga / Jacob

Список всех мест в коде, где стоят конкретные данные (телефоны, email, адреса, ссылки, цифры, имена). Это **источник правды** — если поменяется, найди тут и поправь во всех местах сразу.

---

## 1. Контакты (телефон, email)

### Телефон `+1 (424) 558-4141`
**Display:** `+1 (424) 558-4141`
**Tel-link:** `tel:+14245584141`
**WhatsApp:** `https://wa.me/14245584141`

Где:
- `src/components/layout/Header.tsx:297` — телефон в шапке
- `src/components/layout/Footer.tsx` — не явно, но в адресе/контактах
- `src/components/home/FinalCTA.tsx:83, 89` — phone row + display
- `src/components/pages/ContactPage.tsx:196` — WhatsApp link
- `src/components/pages/ContactPage.tsx:216, 230` — phone tap row
- `src/components/pages/PracticePage.tsx:454` — WhatsApp final CTA
- `src/components/seo/AttorneyJsonLd.tsx:25` — `+1-424-558-4141` (формат для schema.org)
- `src/lib/legal/accessibility.ts:10, 55, 75, 135, 155` — `FIRM_PHONE`
- `src/lib/legal/fraud-warning.ts:15, 99` — `FIRM_PHONE`

**Проверить:** телефон актуальный? Это рабочий WhatsApp Business?

### Email `info@shidaev.com`
Где:
- `src/components/home/FinalCTA.tsx:73, 79`
- `src/components/pages/ContactPage.tsx:235, 253`
- `src/components/seo/AttorneyJsonLd.tsx:26`
- `src/lib/legal/accessibility.ts:11`
- `src/lib/legal/notice.ts:14`
- `src/lib/legal/fraud-warning.ts:14`
- `src/lib/legal/privacy.ts:11`
- `src/lib/legal/terms.ts:10`

**Проверить:** почтовый ящик настроен и кто-то его читает?

---

## 2. Адрес офиса

```
Valley Executive Tower
15233 Ventura Blvd, Suite 1004
Sherman Oaks, CA 91403
```

Где:
- `src/components/layout/Footer.tsx:126-130` — full address
- `src/components/pages/ContactPage.tsx:270-274` — address блок
- `src/components/pages/ContactPage.tsx:290` — Google Maps embed iframe (поиск по адресу)
- `src/components/seo/AttorneyJsonLd.tsx:29-34` — schema.org PostalAddress

**Проверить:** офис всё ещё там? Suite номер актуальный?

---

## 3. Часы работы

```
Пн – Пт · 9:00 – 17:00 PT
Сб – Вс · по записи
```

Где:
- `src/components/layout/Footer.tsx:53, 54, 133-135` (RU и EN)
- `src/components/pages/ContactPage.tsx:36-37, 68-69, 280-283`
- `src/components/seo/AttorneyJsonLd.tsx:56-62` — openingHoursSpecification

**Проверить:** актуально?

---

## 4. Calendly URL — ⚠️ ПЛЕЙСХОЛДЕР

Сейчас стоит **мой demo-аккаунт** `zulihan1993` — нужно заменить на Calendly Jacob.

Где:
- `src/components/pages/ContactPage.tsx:117` — popup widget URL
- `src/components/pages/ContactPage.tsx:122` — fallback open
- `src/components/pages/ContactPage.tsx:168` — href fallback

Текущее значение:
```
https://calendly.com/zulihan1993/30min?primary_color=A8894A&hide_gdpr_banner=1
```

**Что нужно от Jacob:**
- Зарегистрировать calendly.com, создать event-type «30 min consultation»
- Дать URL вида `calendly.com/<jacob-handle>/30min`
- Брендирование (primary_color = #A8894A золото) оставить как есть

---

## 5. Formspree endpoint — ⚠️ ПЛЕЙСХОЛДЕР

Форма «Написать письмо» сейчас НЕ РАБОТАЕТ.

Где:
- `src/components/pages/ContactPage.tsx:346`

Текущее:
```
action="https://formspree.io/f/YOUR_FORM_ID"
```

**Что нужно:**
- Решение от Jacob: Formspree (бесплатно 50/мес) ИЛИ свой `/api/contact` через Resend.
- Если Formspree: зарегистрироваться, создать form, получить ID, подставить.

---

## 6. Цена консультации `$150 / 30 минут`

Где упомянуто:
- `src/components/home/FinalCTA.tsx:10, 18` — главная final CTA
- `src/components/pages/AboutPage.tsx:48, 111` — about CTA
- `src/components/pages/PracticePage.tsx:167, 328` — practice final
- `src/components/pages/ContactPage.tsx:29, 61` — contact hero meta

**Проверить:** цена актуальная?

---

## 7. California State Bar `#343616`

Где:
- `src/components/home/Hero.tsx` — eyebrow содержит «Jacob Shidaev · Иммиграционный адвокат» (без номера)
- `src/components/home/Credentials.tsx:11, 22` — «CA Bar #343616»
- `src/components/pages/AboutPage.tsx:19, 60, 84, 120` — quickfacts + «California State Bar — #343616»
- `src/components/seo/AttorneyJsonLd.tsx:53` — schema.org identifier
- `src/lib/legal/fraud-warning.ts:99` — «California State Bar #343616 (действующий член)»

**Проверить:** номер актуальный, статус active in good standing?

---

## 8. Социальные сети

Где: `src/components/layout/Footer.tsx:83-108` + `src/components/seo/AttorneyJsonLd.tsx:64-68`

```
Instagram:  https://www.instagram.com/shidaev.immigration
TikTok:     https://www.tiktok.com/@shidaev.immigration
YouTube:    https://www.youtube.com/@LawOfficesofJacobShidaev
```

**Проверить:** все три handle реально существуют у Jacob? Если каких-то нет — убрать из Footer **и** из JSON-LD одновременно.

---

## 9. Google Maps / Google Business Profile

### Maps iframe (карта в /contact)
`src/components/pages/ContactPage.tsx:290`
```
https://www.google.com/maps?q=15233+Ventura+Blvd+Suite+1004+Sherman+Oaks+CA+91403&output=embed&z=15
```
Это поиск по адресу — должно работать без place_id, но если у Jacob есть verified GBP — лучше его embed code.

### Ссылка «view all reviews» на главной — ⚠️ generic search
`src/components/home/Reviews.tsx:161`
```
https://www.google.com/maps/place/Law+Offices+of+Jacob+Shidaev
```
Это generic search URL, может открыть НЕ ТО место. **Нужна** реальная ссылка на Google Business Profile Jacob (если есть). Если GBP-а нет — убрать ссылку или заменить на «оставить отзыв на Google» с другой UX-логикой.

---

## 10. Отзывы клиентов — нужно подтверждение

### RU блок (`src/components/home/Reviews.tsx:22-47`)
1. **Ната Иванова** — «Иммиграционный суд · 2026»
2. **Kazat Baimatov** — «Убежище и смена статуса · 2026»
3. **Анастасия Пашкова** — «Выигранный суд · 2026»
4. **Sayat Kuanysh** — «Иммиграционный суд · 2025» (упоминает дату 8 декабря 2025)

### EN блок (`src/components/home/Reviews.tsx:57-82`)
1. **Kristina Musiienko** — «Bond Hearing · 2026»
2. **Maxim Maximoff** — «Immigration Case · 2025»
3. **Regina Gamadaeva** — «Immigration Case · 2026»
4. **Leyla Shakhmilova** — «Immigration Case · 2026»

### Эти же отзывы используются на PracticePage
- Kazat Baimatov → asylum (`src/components/pages/PracticePage.tsx:53-57`)
- Анастасия Пашкова → removal (RU) / Regina Gamadaeva (EN) (`PracticePage.tsx:122-127, 283-288`)
- Ната Иванова → detained (RU) / Kristina Musiienko (EN) (`PracticePage.tsx:156-161, 317-322`)
- Maxim Maximoff → asylum (EN) (`PracticePage.tsx:213-218`)

**Проверить с Maga/Jacob:**
- Все 8 имён — реальные клиенты?
- Получено письменное согласие на публикацию отзыва на сайте? (CA Bar требует documented consent)
- Даты (год) — реальные или приблизительные?
- Метки дел (Asylum / Bond Hearing / Immigration Case) — соответствуют реальным делам?

---

## 11. Биография Jacob

Из `src/components/pages/AboutPage.tsx:25-28` (RU) и `87-91` (EN):
- **2000 год** — Jacob с отцом получили политическое убежище в США
- Подростком оформлял для семьи green card/citizenship
- До своей практики — коммерческие судебные споры
- Предлагали Deputy DA в **Tulare County** — отказался
- **2023** — открыл свой офис

Образование (`AboutPage.tsx:34-39`):
- **JD · LL.M. по налоговому праву** — University of San Diego School of Law
- **B.A. по бизнес-экономике** — University of California, Riverside

Membership: **AILA (American Immigration Lawyers Association)** — отделение Южной Калифорнии (SoCal Chapter)

Языки: **Русский + English** (свободное владение)

**Проверить:** факты совпадают с резюме Jacob?

---

## 12. Допуски в суды

`src/components/pages/AboutPage.tsx:56-61, 119-123`:
- **California State Bar #343616** — действующий член
- **US District Courts** — Центральный, Восточный и Северный округа Калифорнии (3 округа)
- **Pro hac vice** — Arizona, Arkansas, Kentucky, Nebraska, Oklahoma (квалификатор «по запросу для конкретного дела»)
- **EOIR** — все 50 штатов

Также:
- `src/components/home/Credentials.tsx:11-14, 22-25` — «3 фед. округа · Калифорния», «50 штатов · EOIR»
- `src/components/home/Hero.tsx` — больше нет (после правок)

**Проверить:** все 4 пункта актуальны? Pro hac vice список 5 штатов — реальные admissions?

---

## 13. Домен сайта

Везде стоит `https://shidaev.com`:
- `src/app/(site)/layout.tsx:16` — metadataBase
- `src/app/sitemap.ts:8` — SITE_URL
- `src/app/robots.ts:6` — SITE_URL
- `src/components/seo/AttorneyJsonLd.tsx:21, 23, 24` — schema.org URL
- `src/app/(site)/blog/[slug]/page.tsx:37, 63` — canonical / hreflang

Vercel deploy сейчас на каком-то `shidaev-immigration-*.vercel.app` (см. `.vercel/`).

**Проверить:** домен `shidaev.com` купил Jacob? DNS уже на Vercel? Если не настроен — все canonical/OG/sitemap указывают в никуда.

---

## 14. Footer copyright + Attorney Advertising

`src/components/layout/Footer.tsx:34-35, 63-64`:
```
© 2026 Law Offices of Jacob Shidaev · Все права защищены · Реклама юридических услуг
© 2026 Law Offices of Jacob Shidaev · All rights reserved · Attorney Advertising
```

**Проверить:** имя фирмы точное — `Law Offices of Jacob Shidaev` (без вариаций «Law Office» в единственном)? «Attorney Advertising» обязательно по CA Bar Rule 7.2 — оставить.

---

## 15. Credit в footer

`src/components/layout/Footer.tsx:158-164`:
```
Design & development · doukhaeva.com
```
Это моё. Можно оставить (со скрытой галочкой от Maga/Jacob).

---

## Сводка блокеров

Если запускать прямо сейчас, эти 3 пункта НЕ работают:

| # | Что | Где | Эффект |
|---|-----|-----|--------|
| 4 | Calendly URL = демо | `ContactPage.tsx:117, 122, 168` | Клиент бронирует мой слот, не Jacob |
| 5 | Formspree = `YOUR_FORM_ID` | `ContactPage.tsx:346` | Форма «Написать письмо» → ошибка |
| 9 | Google Reviews = search URL | `Reviews.tsx:161` | Клиент попадает не на тот листинг |

Остальные пункты (соцсети, фото, имена отзывов, биография) — нужно подтвердить, но они не ломают сайт.
