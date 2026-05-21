<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary'

withDefaults(
  defineProps<{
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
  }>(),
  {
    href: undefined,
    type: 'button',
    variant: 'primary',
  },
)

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-caramel-400 text-espresso-950 hover:bg-cream-50',
  secondary:
    'border border-cream-50/20 text-cream-50 hover:border-caramel-400 hover:text-caramel-400',
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : type"
    class="inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-black uppercase tracking-[0.18em] transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-400 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso-950"
    :class="variantClasses[variant]"
  >
    <slot />
  </component>
</template>
