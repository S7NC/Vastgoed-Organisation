<script setup lang="ts">
import { content, locales } from "~/data/content";

definePageMeta({ path: "/:locale(nl|en|fr|de)?/contact" });

const route = useRoute();
const locale = computed(() =>
  locales.find((item) => item.code === route.params.locale)?.code ?? "nl",
);
const t = computed(() => content[locale.value]);
const homePath = computed(() => locale.value === "nl" ? "/" : `/${locale.value}`);
const contactPath = (code: string) => code === "nl" ? "/contact" : `/${code}/contact`;

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: `${t.value.contact.label} | Vastgoed.org`,
  link: [
    { rel: "canonical", href: `https://vastgoed.org${contactPath(locale.value)}` },
    ...locales.map((item) => ({
      rel: "alternate" as const,
      type: "text/html",
      hreflang: item.code,
      href: `https://vastgoed.org${contactPath(item.code)}`,
    })),
    { rel: "alternate", type: "text/html", hreflang: "x-default", href: "https://vastgoed.org/contact" },
  ],
}));
useSeoMeta({
  description: () => t.value.contact.description,
  ogTitle: () => `${t.value.contact.label} | Vastgoed.org`,
  ogDescription: () => t.value.contact.description,
  ogType: "website",
  ogUrl: () => `https://vastgoed.org${contactPath(locale.value)}`,
});
</script>

<template>
  <div class="contact-page">
    <a class="skip-link" href="#content">{{ t.nav.skip }}</a>
    <header class="site-header">
      <div class="container header-inner">
        <NuxtLink :to="homePath" aria-label="Vastgoed.org" class="brand-link"><BrandMark /></NuxtLink>
        <NuxtLink :to="homePath" class="text-link">{{ t.contact.back }}<SiteIcon name="arrow" /></NuxtLink>
      </div>
    </header>

    <main id="content" class="container contact-content">
      <p class="eyebrow"><span class="status-dot" />{{ t.contact.label }}</p>
      <h1>{{ t.contact.title }}</h1>
      <p class="hero-description">{{ t.contact.description }}</p>
      <a class="contact-email" href="mailto:info@vastgoed.org">info@vastgoed.org<SiteIcon name="diagonal" /></a>
    </main>

    <footer class="container site-footer">
      <div class="footer-bottom">
        <span>© {{ new Date().getFullYear() }} Vastgoed.org</span>
        <div>
          <NuxtLink
            v-for="item in locales"
            :key="item.code"
            :to="contactPath(item.code)"
            :lang="item.code"
            :hreflang="item.code"
            :aria-current="locale === item.code ? 'page' : undefined"
          >{{ item.code.toUpperCase() }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
.contact-content {
  flex: 1;
  padding-block: clamp(64px, 12vw, 160px);
}
h1 {
  font-size: clamp(42px, 6vw, 76px);
  line-height: 1.12;
  letter-spacing: -2px;
}
.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-bottom: 8px;
  border-bottom: 1px solid #87927b;
  font-size: clamp(21px, 4vw, 36px);
  letter-spacing: -0.5px;
}
.contact-email:hover {
  color: #6d8445;
}
@media (max-width: 760px) {
  .header-inner > .text-link {
    max-width: 120px;
    font-size: 11px;
    gap: 8px;
  }
}
</style>
