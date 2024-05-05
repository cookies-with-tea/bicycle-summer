<template>
  <div class="home-page">
    <h1>Home page</h1>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES } from '#shared/contants'

definePageMeta({
  redirect: { name: ROUTES.UIKIT.name },
})
</script>
