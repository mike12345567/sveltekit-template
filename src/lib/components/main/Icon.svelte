<script lang="ts">
  import * as icons from "lucide-svelte"

  export let icon: string = ""
  export let cssClass = ""
  export let size: string = "24"

  let IconComponent: (typeof icons)["Sun"] = icons[icon]
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} {size} class={cssClass} />
{/if}
