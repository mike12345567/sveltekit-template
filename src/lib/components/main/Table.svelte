<script lang="ts">
  import { Table, Pagination } from "$lib/components/ui"
  import { Icon } from "$lib/components/main"
  import { createEventDispatcher } from "svelte"

  const dispatch = createEventDispatcher()
  export let schema: { display?: string; key: string }[]
  // can't use generics for these sadly
  export let data: any[]
  export let paginate: boolean = false
  export let pageSize: number = 0
  export let clickable: boolean

  let page: number | undefined
  $: pagedData =
    paginate && page
      ? data.slice(page * pageSize - pageSize, page * pageSize)
      : data
</script>

<Table.Root>
  <Table.Caption></Table.Caption>
  <Table.Header>
    <Table.Row>
      {#each schema as header}
        <Table.Head>{header.display || header.key}</Table.Head>
      {/each}
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each pagedData as row}
      <Table.Row {clickable} on:click={() => dispatch("rowClicked", row)}>
        {#each schema as header}
          <Table.Cell>{row[header.key]}</Table.Cell>
        {/each}
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
{#if paginate && pageSize}
  <div class="pb-6 pt-2">
    <Pagination.Root
      count={data.length}
      perPage={pageSize}
      siblingCount={1}
      bind:page
      let:pages
      let:currentPage
    >
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.PrevButton>
            <Icon icon="ChevronLeft" />
            <span class="hidden sm:block">Previous</span>
          </Pagination.PrevButton>
        </Pagination.Item>
        {#each pages as page (page.key)}
          {#if page.type === "ellipsis"}
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
          {:else}
            <Pagination.Item>
              <Pagination.Link {page} isActive={currentPage === page.value}>
                {page.value}
              </Pagination.Link>
            </Pagination.Item>
          {/if}
        {/each}
        <Pagination.Item>
          <Pagination.NextButton>
            <span class="hidden sm:block">Next</span>
            <Icon icon="ChevronRight" />
          </Pagination.NextButton>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  </div>
{/if}
