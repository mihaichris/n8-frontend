<script>
  import ProductCard from "../components/ProductCard.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";

 export let items = [];
  let currentPage = 1;
  let pageSize = 4;
  $: paginatedProducts = paginate({ items, pageSize, currentPage });
</script>

<div class="container">
  {#if items.length !== 0}
    <div class="grid grid-flow-col grid-cols-6 gap-4">
      {#each paginatedProducts as product}
        <ProductCard {product} />
      {/each}
    </div>
    <LightPaginationNav
      totalItems={items.length}
      {pageSize}
      {currentPage}
      limit={1}
      showStepOptions={true}
      on:setPage={e => (currentPage = e.detail.page)} />
  {/if}
</div>
