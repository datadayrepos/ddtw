<template>
  <div
    class="ddtw-button-group inline-flex rounded-md shadow-sm"
    role="group"
  >
    <slot />
  </div>
</template>

<style>
.ddtw-button-group > button {
  @apply rounded-none;
}
.ddtw-button-group > button:first-child {
  @apply rounded-l-lg;
}
.ddtw-button-group > button:last-child {
  @apply rounded-r-lg;
}
</style>
