// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  body_copy: defineAsyncComponent(() => import("./BodyCopy/index.vue")),
  case_study_teaser: defineAsyncComponent(
    () => import("./CaseStudyTeaser/index.vue"),
  ),
  image: defineAsyncComponent(() => import("./Image/index.vue")),
  overline: defineAsyncComponent(() => import("./NewChapter/index.vue")),
  prologue: defineAsyncComponent(() => import("./Prologue/index.vue")),
  quote_spread: defineAsyncComponent(() => import("./QuoteSpread/index.vue")),
  sidebar: defineAsyncComponent(() => import("./Sidebar/index.vue")),
});
