<script lang="ts">
  import "../app.pcss"
  import { screenWidth, screenHeight } from "$lib/stores"
  import { ModeWatcher } from "mode-watcher"
  import { Toaster } from "$lib/components/ui/sonner"

  let innerWidth: number
  let innerHeight: number

  $: screenWidth.set(innerWidth)
  $: screenHeight.set(innerHeight)
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<ModeWatcher />
<Toaster richColors />
<slot />
