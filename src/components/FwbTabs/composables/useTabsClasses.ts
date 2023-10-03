import { computed } from 'vue'
import type { Ref } from 'vue'
import type { TabsVariant } from '../types'

export type UseTabsClassesProps = {
  variant: TabsVariant
}

export function useTabsClasses (props: UseTabsClassesProps): {
  divClasses: Ref<string>,
  ulClasses: Ref<string>,
} {
  const ulClasses = computed(() => {
    const baseClasses = 'flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-sm'

    if (props.variant === 'default') {
      return `${baseClasses} border-b border-gray-200 dark:border-gray-700`
    } else if (props.variant === 'pills') {
      return ''
    } else if (props.variant === 'underline') {
      return '-mb-px'
    }

    return ''
  })

  const divClasses = computed(() => {
    if (props.variant === 'underline') {
      return 'border-b border-gray-200 dark:border-gray-700 font-medium text-center text-gray-500 dark:text-gray-400 text-sm'
    }

    return ''
  })

  return {
    divClasses,
    ulClasses,
  }
}
