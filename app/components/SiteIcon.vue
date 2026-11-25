<script setup lang="ts">
defineProps<{ name: string }>();
const paths: Record<string, string> = {
  arrow: "M4 12h16m-6-6 6 6-6 6",
  diagonal: "M5 19 19 5M5 5h14v14",
  down: "m6 9 6 6 6-6",
  key: "M14 9a5 5 0 1 0-3 4.6L20 22l3-3-3-3-2 2-2-2 2-2-4-4M7 7h.01",
  network: "M12 8v5M5 17v-4h14v4M9 2h6v6H9zM2 17h6v5H2zM16 17h6v5h-6z",
  code: "m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16",
  check: "m5 12 4 4L19 6",
  globe:
    "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3a17 17 0 0 1 0 18 17 17 0 0 1 0-18Z",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  refresh: "M20 4v6h-6M20 10a8 8 0 1 0-1 7",
  building: "M5 21V3h14v18M3 21h18M9 7h1m4 0h1m-6 4h1m4 0h1m-5 10v-5h4v5",
  screen: "M3 4h18v14H3zM8 22h8m-4-4v4",
  lock: "M7 11V7a5 5 0 0 1 10 0v4M5 11h14v11H5zM12 15v3",
  spark: "m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z",
  copy: "M9 9h12v12H9zM15 9V3H3v12h6",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "m6 6 12 12M6 18 18 6",
  book: "M12 5v16M3 3c4 0 6 0 9 2 3-2 5-2 9-2v16c-4 0-6 0-9 2-3-2-5-2-9-2Z",
  plus: "M5 12h14M12 5v14",
};
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.arrow" />
  </svg>
</template>
