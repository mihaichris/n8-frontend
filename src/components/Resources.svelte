<script>
  import ResourceCard from "../components/ResourceCard.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";

 export let items = [];
  let currentPage = 1;
  let pageSize = 4;
  // $: paginatedResources = paginate({ items, pageSize, currentPage });
</script>

<div class="container">
  <div class="mx-10 pt-15">
    {#if items.length !== 0}
      <div class="grid gap-6 mb-8 md:grid-cols-1">
        {#each items as resource}
          <ResourceCard {resource} />
        {/each}
      </div>
  <!--    <LightPaginationNav-->
  <!--      totalItems={items.length}-->
  <!--      {pageSize}-->
  <!--      {currentPage}-->
  <!--      limit={1}-->
  <!--      showStepOptions={true}-->
  <!--      on:setPage={e => (currentPage = e.detail.page)} />-->
   {/if}
  </div>
</div>
