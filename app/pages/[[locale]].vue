<script setup lang="ts">
import { content, locales, type Locale } from "~/data/content";

const route = useRoute();
const rawLocale = String(route.params.locale || "nl");
if (!locales.some((item) => item.code === rawLocale)) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
const locale = computed(() => String(route.params.locale || "nl") as Locale);
const t = computed(() => content[locale.value]);
const menuOpen = ref(false);
const ready = ref(false);
const languageOpen = ref(false);
const languagePicker = ref<HTMLElement>();
const updated = ref(false);
const syncing = ref(false);
const codeTab = ref<"request" | "event">("request");
const copyState = ref<"idle" | "copied" | "error">("idle");
let syncTimer: ReturnType<typeof setTimeout> | undefined;
let copyTimer: ReturnType<typeof setTimeout> | undefined;
const price = computed(() =>
  new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(updated.value ? 379000 : 395000),
);
const currentPath = computed(() =>
  locale.value === "nl" ? "/" : `/${locale.value}`,
);
const navItems = computed(() => [
  { id: "principle", label: t.value.nav.principle },
  { id: "agents", label: t.value.nav.agents },
  { id: "buyers", label: t.value.nav.buyers },
  { id: "developers", label: t.value.nav.developers },
  { id: "questions", label: t.value.nav.questions },
]);
const requestCode =
  '[\n  "REQ",\n  "vastgoed",\n  { "kinds": [30402], "limit": 20 }\n]';
// A tag-only illustration, not a signed event or a live relay response.
const eventCode = computed(() =>
  JSON.stringify(
    {
      kind: 30402,
      tags: [
        ["d", "genk-garden-house"],
        ["title", t.value.agents.property],
        ["location", "Genk, BE"],
        ["price", updated.value ? "379000" : "395000", "EUR"],
        ["t", "real-estate"],
      ],
    },
    null,
    2,
  ),
);
const shownCode = computed(() =>
  codeTab.value === "request" ? requestCode : eventCode.value,
);

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: t.value.meta.title,
  link: [
    { rel: "canonical", href: `https://vastgoed.org${currentPath.value}` },
    ...locales.map((item) => ({
      rel: "alternate" as const,
      type: "text/html",
      hreflang: item.code,
      href: `https://vastgoed.org${item.code === "nl" ? "/" : `/${item.code}`}`,
    })),
    {
      rel: "alternate",
      type: "text/html",
      hreflang: "x-default",
      href: "https://vastgoed.org/",
    },
  ],
}));
useSeoMeta({
  description: () => t.value.meta.description,
  ogTitle: () => t.value.meta.title,
  ogDescription: () => t.value.meta.description,
  ogType: "website",
  ogUrl: () => `https://vastgoed.org${currentPath.value}`,
  ogImage: "https://vastgoed.org/images/brick-house.webp",
  twitterCard: "summary_large_image",
});

function changePrice() {
  if (syncing.value) return;
  if (updated.value) {
    updated.value = false;
    return;
  }
  syncing.value = true;
  syncTimer = setTimeout(() => {
    updated.value = true;
    syncing.value = false;
  }, 700);
}

async function copyCode() {
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText(shownCode.value);
    copyState.value = "copied";
  } catch {
    copyState.value = "error";
  }
  copyTimer = setTimeout(() => {
    copyState.value = "idle";
  }, 4000);
}

function closeMenus(event: KeyboardEvent) {
  if (event.key === "Escape") {
    menuOpen.value = false;
    languageOpen.value = false;
  }
}
function closeLanguage(event: MouseEvent) {
  if (!languagePicker.value?.contains(event.target as Node))
    languageOpen.value = false;
}
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
    languageOpen.value = false;
    copyState.value = "idle";
  },
);
onMounted(() => {
  ready.value = true;
  document.addEventListener("keydown", closeMenus);
  document.addEventListener("click", closeLanguage);
});
onBeforeUnmount(() => {
  clearTimeout(syncTimer);
  clearTimeout(copyTimer);
  document.removeEventListener("keydown", closeMenus);
  document.removeEventListener("click", closeLanguage);
});
</script>

<template>
  <div id="top">
    <a class="skip-link" href="#content">{{ t.nav.skip }}</a>
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink :to="currentPath" aria-label="Vastgoed.org" class="brand-link"
          ><BrandMark
        /></NuxtLink>
        <nav class="desktop-nav" :aria-label="t.nav.menu">
          <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">{{
            item.label
          }}</a>
          <NuxtLink :to="`${currentPath === '/' ? '' : currentPath}/contact`">{{ t.contact.label }}</NuxtLink>
        </nav>
        <div class="header-tools">
          <div ref="languagePicker" class="language-picker">
            <button
              class="language-trigger"
              :disabled="!ready"
              :aria-label="t.nav.language"
              :aria-expanded="languageOpen"
              aria-controls="language-options"
              @click="languageOpen = !languageOpen"
            >
              <SiteIcon name="globe" /><span>{{ locale.toUpperCase() }}</span
              ><SiteIcon name="down" />
            </button>
            <div
              v-if="languageOpen"
              id="language-options"
              class="language-options"
            >
              <NuxtLink
                v-for="item in locales"
                :key="item.code"
                :to="`${item.code === 'nl' ? '/' : '/' + item.code}${route.hash}`"
                :lang="item.code"
                :hreflang="item.code"
                :aria-current="locale === item.code ? 'page' : undefined"
                >{{ item.name
                }}<SiteIcon v-if="locale === item.code" name="check"
              /></NuxtLink>
            </div>
          </div>
          <a class="header-cta" href="https://vastgoed.net/"
            >Vastgoed.net <SiteIcon name="diagonal"
          /></a>
          <button
            class="mobile-toggle icon-button"
            :disabled="!ready"
            :aria-label="t.nav.menu"
            :aria-expanded="menuOpen"
            aria-controls="mobile-navigation"
            @click="menuOpen = !menuOpen"
          >
            <SiteIcon :name="menuOpen ? 'close' : 'menu'" />
          </button>
        </div>
      </div>
      <nav
        v-if="menuOpen"
        id="mobile-navigation"
        class="mobile-navigation"
        :aria-label="t.nav.menu"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          @click="menuOpen = false"
          >{{ item.label }}<SiteIcon name="arrow"
        /></a>
        <NuxtLink :to="`${currentPath === '/' ? '' : currentPath}/contact`" @click="menuOpen = false">{{ t.contact.label }}<SiteIcon name="arrow" /></NuxtLink>
        <a href="https://vastgoed.net/"
          >{{ t.nav.visit }}<SiteIcon name="diagonal"
        /></a>
      </nav>
    </header>

    <main id="content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">
              <span class="status-dot" />{{ t.hero.eyebrow }}
            </p>
            <h1 id="hero-title">
              {{ t.hero.line1 }}<br /><span>{{ t.hero.line2 }}</span>
            </h1>
            <p class="hero-description">{{ t.hero.description }}</p>
            <div class="hero-actions">
              <a class="button button-dark" href="#principle"
                >{{ t.hero.primary }}<SiteIcon name="arrow" /></a
              ><a class="text-link" href="#agents"
                >{{ t.hero.secondary }}<SiteIcon name="diagonal"
              /></a>
            </div>
            <p class="hero-note">
              <span class="tiny-cross">+</span>{{ t.hero.note }}
            </p>
          </div>
          <div class="hero-visual">
            <img
              class="hero-image"
              src="/images/brick-house.webp"
              width="1672"
              height="941"
              fetchpriority="high"
              :alt="`${t.agents.property} · ${t.hero.caption}`"
            />
            <div class="image-topline">
              <span>VASTGOED, OPEN.</span><span>NOSTR / 30402</span>
            </div>
            <div class="key-badge">
              <span class="key-badge-icon"><SiteIcon name="key" /></span>
              <div>
                <span>NOSTR</span><strong>{{ t.strip[0] }}</strong>
              </div>
              <span class="badge-check"><SiteIcon name="check" /></span>
            </div>
            <div class="image-caption">
              <SiteIcon name="pin" /><span
                >{{ t.hero.caption
                }}<small>{{ t.hero.captionDetail }}</small></span
              ><span class="image-caption-cross">+</span>
            </div>
            <span class="visual-coordinate" aria-hidden="true"
              >50.9667° N &nbsp; 5.5000° E</span
            >
          </div>
        </div>
        <div class="container belief-strip">
          <span class="strip-label">NOSTR × REAL ESTATE</span
          ><span v-for="item in t.strip" :key="item"
            ><SiteIcon name="check" />{{ item }}</span
          ><a href="#principle" :aria-label="t.hero.primary"
            ><SiteIcon name="down"
          /></a>
        </div>
      </section>

      <section
        id="principle"
        class="section container principles"
        aria-labelledby="principle-title"
      >
        <div class="section-heading">
          <div>
            <p class="eyebrow">
              <span class="section-number">01</span>{{ t.principle.eyebrow }}
            </p>
            <h2 id="principle-title">
              {{ t.principle.title }}<br /><span class="muted-heading">{{
                t.principle.accent
              }}</span>
            </h2>
          </div>
          <p class="section-intro">{{ t.principle.description }}</p>
        </div>
        <div class="principle-cards">
          <article
            v-for="(card, index) in t.principle.cards"
            :key="card.title"
            class="principle-card"
          >
            <div class="card-top">
              <span class="tile-icon"
                ><SiteIcon :name="['key', 'network', 'code'][index]!" /></span
              ><span class="card-number">0{{ index + 1 }}</span>
            </div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </article>
        </div>
      </section>

      <section class="ownership-section">
        <div class="container ownership-grid">
          <div>
            <p class="eyebrow">
              <SiteIcon name="key" />{{ t.ownership.eyebrow }}
            </p>
            <h2>{{ t.ownership.title }}</h2>
            <p>{{ t.ownership.description }}</p>
          </div>
          <div class="key-explainer">
            <article>
              <span class="key-type">npub</span>
              <div>
                <h3>{{ t.ownership.publicLabel }}</h3>
                <p>{{ t.ownership.publicDescription }}</p>
              </div>
              <SiteIcon name="globe" />
            </article>
            <article>
              <span class="key-type key-type-private"
                ><SiteIcon name="lock"
              /></span>
              <div>
                <h3>{{ t.ownership.privateLabel }}</h3>
                <p>{{ t.ownership.privateDescription }}</p>
              </div>
              <SiteIcon name="lock" />
            </article>
            <p class="security-note">{{ t.ownership.note }}</p>
          </div>
        </div>
      </section>

      <section
        id="agents"
        class="section container agent-section"
        aria-labelledby="agents-title"
      >
        <div class="agent-copy">
          <p class="eyebrow">
            <span class="section-number">02</span>{{ t.agents.eyebrow }}
          </p>
          <h2 id="agents-title">
            {{ t.agents.title }}<br /><span class="muted-heading">{{
              t.agents.accent
            }}</span>
          </h2>
          <p>{{ t.agents.description }}</p>
          <button
            class="button button-dark"
            :disabled="!ready || syncing"
            @click="changePrice"
          >
            <SiteIcon name="refresh" :class="{ spinning: syncing }" />{{
              updated ? t.agents.reset : t.agents.try
            }}
          </button>
          <p class="demo-disclaimer">{{ t.agents.disclaimer }}</p>
        </div>
        <figure
          class="property-demo"
          :class="{ 'is-updated': updated, 'is-syncing': syncing }"
        >
          <figcaption>
            <span><span class="status-dot" />{{ t.agents.demo }}</span
            ><SiteIcon name="network" />
          </figcaption>
          <div class="demo-property">
            <img
              src="/images/brick-detail.webp"
              width="650"
              height="527"
              loading="lazy"
              :alt="t.agents.property"
            />
            <div>
              <span class="property-location"
                ><SiteIcon name="pin" />{{ t.agents.location }}</span
              >
              <h3>{{ t.agents.property }}</h3>
              <span class="asking-label">{{ t.agents.asking }}</span><strong
                class="property-price"
                >{{ price }}</strong
              >
            </div>
          </div>
          <div class="demo-connection">
            <span /><SiteIcon name="down" /><span />
          </div>
          <div class="demo-channels">
            <div>
              <span class="channel-label"
                ><SiteIcon name="building" />{{ t.agents.agency }}</span
              ><strong>{{ price }}</strong
              ><span class="channel-state"><SiteIcon name="check" />Nostr</span>
            </div>
            <div>
              <span class="channel-label"
                ><SiteIcon name="screen" />Vastgoed.net</span
              ><strong>{{ price }}</strong
              ><span class="channel-state"><SiteIcon name="check" />Nostr</span>
            </div>
          </div>
          <p class="demo-status" aria-live="polite">
            <span class="status-dot" />{{
              syncing
                ? t.agents.syncing
                : updated
                  ? t.agents.updated
                  : t.agents.initial
            }}
          </p>
        </figure>
      </section>

      <section id="buyers" class="buyer-section">
        <div class="container buyer-grid">
          <div>
            <p class="eyebrow">
              <span class="section-number">03</span>{{ t.buyers.eyebrow }}
            </p>
            <h2>{{ t.buyers.title }}</h2>
            <p>{{ t.buyers.description }}</p>
            <a class="text-link" href="#agents"
              >{{ t.buyers.link }}<SiteIcon name="arrow"
            /></a>
          </div>
          <div class="buyer-checks">
            <article
              v-for="(check, index) in t.buyers.checks"
              :key="check.title"
            >
              <span class="check-number">0{{ index + 1 }}</span>
              <div>
                <h3>{{ check.title }}</h3>
                <p>{{ check.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="open-data" class="section container open-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow"><SiteIcon name="spark" />{{ t.open.eyebrow }}</p>
            <h2>
              {{ t.open.title }}<br /><span class="muted-heading">{{
                t.open.accent
              }}</span>
            </h2>
          </div>
          <p class="section-intro">{{ t.open.description }}</p>
        </div>
        <div class="open-flow" aria-hidden="true">
          <span><SiteIcon name="key" />NOSTR</span><i /><span class="json-node"
            >{ JSON }</span
          ><i /><span><SiteIcon name="globe" />WEB</span><i /><span
            ><SiteIcon name="spark" />AI</span
          >
        </div>
        <div class="open-cards">
          <article v-for="(card, index) in t.open.cards" :key="card.title">
            <SiteIcon :name="['screen', 'spark', 'check'][index]!" />
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </article>
        </div>
      </section>

      <section id="developers" class="developer-section">
        <div class="container developer-grid">
          <div>
            <p class="eyebrow">
              <span class="section-number">04</span>{{ t.developers.eyebrow }}
            </p>
            <h2>{{ t.developers.title }}</h2>
            <p>{{ t.developers.description }}</p>
            <div class="developer-links">
              <a
                href="https://github.com/nostr-protocol/nips/blob/master/01.md"
                target="_blank"
                rel="noopener noreferrer"
                >{{ t.developers.protocol }}<SiteIcon name="diagonal" /></a
              ><a
                href="https://github.com/nostr-protocol/nips/blob/master/99.md"
                target="_blank"
                rel="noopener noreferrer"
                >{{ t.developers.format }}<SiteIcon name="diagonal"
              /></a>
            </div>
          </div>
          <div class="code-panel">
            <div class="code-header">
              <span class="terminal-dots" aria-hidden="true"
                ><i /><i /><i /></span
              ><span>nostr / real-estate.json</span><span>JSON</span>
            </div>
            <div class="code-tabs">
              <button
                :class="{ active: codeTab === 'request' }"
                :aria-pressed="codeTab === 'request'"
                :disabled="!ready"
                @click="codeTab = 'request'"
              >
                {{ t.developers.tabRequest }}</button><button
                :class="{ active: codeTab === 'event' }"
                :aria-pressed="codeTab === 'event'"
                :disabled="!ready"
                @click="codeTab = 'event'"
              >
                {{ t.developers.tabEvent }}</button
              ><button
                class="copy-button"
                :disabled="!ready"
                :aria-label="t.developers.copy"
                @click="copyCode"
              >
                <SiteIcon
                  :name="copyState === 'copied' ? 'check' : 'copy'"
                /><span>{{
                  copyState === "copied"
                    ? t.developers.copied
                    : t.developers.copy
                }}</span>
              </button>
            </div>
            <pre><code>{{ shownCode }}</code></pre>
            <p class="code-footnote">{{ t.developers.note }}</p>
            <p v-if="copyState !== 'idle'" class="copy-feedback" role="status">
              {{
                copyState === "error"
                  ? t.developers.copyError
                  : t.developers.copied
              }}
            </p>
          </div>
        </div>
      </section>

      <section id="questions" class="section container faq-section">
        <div>
          <p class="eyebrow">
            <span class="section-number">05</span>{{ t.faq.eyebrow }}
          </p>
          <h2>{{ t.faq.title }}</h2>
          <span class="faq-symbol" aria-hidden="true">?</span>
        </div>
        <div class="questions">
          <details v-for="item in t.faq.items" :key="item.q" class="question">
            <summary>{{ item.q }}<SiteIcon name="plus" /></summary>
            <p>{{ item.a }}</p>
          </details>
        </div>
      </section>

      <section class="container destination">
        <div class="destination-decoration" aria-hidden="true">
          <svg viewBox="0 0 300 300" fill="none">
            <path
              d="M20 280V115L150 20l130 95v165h-95V165l-70 52v83H20"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              d="m70 150 80-58 80 58"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </div>
        <div>
          <p class="eyebrow"><span class="status-dot" />{{ t.cta.eyebrow }}</p>
          <h2>{{ t.cta.title }}</h2>
          <p>{{ t.cta.description }}</p>
        </div>
        <div class="destination-action">
          <a class="button button-lime" href="https://vastgoed.net/"
            >{{ t.cta.button }}<SiteIcon name="diagonal" /></a
          ><span>{{ t.cta.note }}</span>
        </div>
      </section>
    </main>

    <footer class="container site-footer">
      <div class="footer-main">
        <div>
          <NuxtLink :to="currentPath" aria-label="Vastgoed.org"
            ><BrandMark
          /></NuxtLink>
          <p>{{ t.footer.description }}</p>
        </div>
        <div class="footer-right">
          <NuxtLink :to="`${currentPath === '/' ? '' : currentPath}/contact`">{{ t.contact.label }}<SiteIcon name="arrow" /></NuxtLink>
          <a
            href="https://github.com/nostr-protocol/nips/blob/master/99.md"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t.footer.standard }}<SiteIcon name="diagonal" /></a
          ><a href="#top"
            >{{ t.footer.top }}<SiteIcon name="arrow" class="up-arrow"
          /></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Vastgoed.org</span
        ><span>{{ t.footer.credit }}</span>
        <div>
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="item.code === 'nl' ? '/' : `/${item.code}`"
            :aria-current="locale === item.code ? 'page' : undefined"
            :lang="item.code"
            :hreflang="item.code"
            >{{ item.code.toUpperCase() }}</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>
