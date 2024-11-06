<script lang="ts">
  import { Card } from "$lib/components/ui"

  export let title: string
  export let width: string
  export let maxWidth: string = ""
  export let description: string = ""
  export let classes: string = ""
</script>

<Card.Root
  style={`width: ${width}${maxWidth ? `; max-width: ${maxWidth}` : ""}`}
>
  <Card.Header>
    <div class="flex justify-between">
      <div class="flex flex-col gap-2">
        <Card.Title>{title}</Card.Title>
        {#if description}
          <Card.Description>{description}</Card.Description>
        {/if}
      </div>
    </div>
  </Card.Header>
  <div class={classes}>
    <slot />
  </div>
</Card.Root>
