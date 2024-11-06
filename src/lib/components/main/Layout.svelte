<script lang="ts">
  import { Separator } from "$lib/components/ui"

  export let center: boolean = false
</script>

<div class="my-10 flex w-full justify-center">Header</div>
<Separator />
<div class="flex flex-col items-center justify-center py-10">
  {#if center}
    <div class="flex w-full flex-col items-center justify-center gap-6 px-3">
      <slot />
    </div>
  {:else}
    <slot />
  {/if}
</div>
<Separator />
<div class="my-10 flex w-full justify-center">Footer</div>
