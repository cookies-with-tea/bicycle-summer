<template>
  <div class="ui-pagination">
    <button
      :class="['ui-pagination__arrow', { 'ui-pagination__arrow--disabled': modelValue === 1 }]"
      type="button"
      @click="handleToFirstPageGo"
    >
      <ui-icon name="double-arrow-left" />
    </button>

    <el-pagination
      ref="paginationRef"
      v-model:current-page="modelValue"
      :next-icon="nextIcon"
      :page-size="props.limit"
      :pager-count="5"
      :prev-icon="prevIcon"
      :total="props.total"
      background
      hide-on-single-page
      layout="prev, pager, next"
      v-bind="$attrs"
      @current-change="handlePageChange"
    />

    <button
      :class="['ui-pagination__arrow', { 'ui-pagination__arrow--disabled': modelValue === lastPage }]"
      type="button"
      @click="handleToLastPageGo"
    >
      <ui-icon name="double-arrow-right" />
    </button>

    <client-only>
      <teleport v-if="doubleArrowPrev" :to="doubleArrowPrev">
        <ui-icon name="double-arrow-left" />
        <ui-icon name="dots" />
      </teleport>

      <teleport v-if="doubleArrowNext" :to="doubleArrowNext">
        <ui-icon name="double-arrow-right" />
        <ui-icon name="dots" />
      </teleport>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { UiIcon, type PaginationType } from '#shared/ui'

type Props = {
  total: PaginationType['total']
  limit: PaginationType['limit']
}

type Emits = {
  'change-page': [page: PaginationType['page']]
}

const modelValue = defineModel<PaginationType['page']>({
  default: 1,
})

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

// DEBT: Если добавить имопрт ElPagination, то стили будут пропадать. Надо типизировать.
const paginationRef = ref()
const doubleArrowPrev = ref<Element>()
const doubleArrowNext = ref<Element>()

const prevIcon = shallowRef({
  render() {
    return h(UiIcon, {
      name: 'arrow-left',
    })
  },
})

const nextIcon = shallowRef({
  render() {
    return h(UiIcon, {
      name: 'arrow-right',
    })
  },
})

const lastPage = computed(() => Math.ceil(props.total / props.limit))

onMounted(() => {
  updateArrows()
})

const updateArrows = () => {
  nextTick(() => {
    doubleArrowPrev.value = paginationRef?.value?.$el.querySelector('.btn-quickprev')

    doubleArrowNext.value = paginationRef?.value?.$el?.querySelector('.btn-quicknext')
  })
}

const handlePageChange = (page: number) => {
  updateArrows()

  emits('change-page', page)
}

const handleToFirstPageGo = () => {
  updateArrows()

  modelValue.value = 1
}

const handleToLastPageGo = () => {
  updateArrows()

  modelValue.value = lastPage.value
}
</script>

<style lang="scss" scoped>
// DEBT: Добавить цвета
.ui-pagination {
  color: var(--color-black);
  display: flex;
  align-items: center;

  .el-pagination {
    --el-pagination-hover-color: #f57520;
    --el-pagination-button-bg-color: transparent;
  }

  :deep(button) {
    transition: color 0.15s linear;
  }

  :deep(.el-icon) {
    width: 10px;
    height: 18px;
  }

  :deep(.el-pager) {
    li {
      height: 46px;
      min-width: 40px;
      --el-color-primary: #f57520;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
    }
  }

  :deep(.ui-icon) {
    width: 10px;
    height: 18px;
  }

  :deep(.btn-prev),
  :deep(.btn-next) {
    width: 30px;
    height: 38px;
    --el-disabled-bg-color: transparent;
  }

  :deep(.btn-quicknext),
  :deep(.btn-quickprev) {
    &:hover {
      .ui-icon {
        &--dots {
          display: none;
        }

        display: block;
        width: 18px;
      }
    }

    svg {
      display: none;
    }

    .ui-icon {
      &--dots {
        display: block;
      }
    }
  }

  &__arrow {
    background: none;
    border: none;
    padding: 0;
    width: 40px;
    height: 38px;

    &--disabled {
      color: gray;
      cursor: not-allowed;
    }

    :deep(.ui-icon) {
      width: 40px;
      height: 38px;
    }
  }
}
</style>
