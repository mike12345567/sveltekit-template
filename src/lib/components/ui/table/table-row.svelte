<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements"
  import { cn } from "$lib/utils.js"

  type $$Props = HTMLAttributes<HTMLTableRowElement> & {
    "data-state"?: unknown
    clickable?: boolean
  }

  let className: $$Props["class"] = undefined
  export let clickable: $$Props["clickable"] = undefined
  export { className as class }

  $: classes = `border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${clickable ? "cursor-pointer" : ""}`
</script>

<tr
  class={cn(classes, className)}
  {...$$restProps}
  on:click
  on:keydown
  on:mouseenter
  on:mouseleave
>
  <slot />
</tr>
