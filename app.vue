<template>
  <nuxt-layout>
    <el-config-provider :locale="ru">
      <nuxt-page />
    </el-config-provider>
  </nuxt-layout>
</template>

<script setup lang="ts">
import ru from 'element-plus/es/locale/lang/ru'
</script>
