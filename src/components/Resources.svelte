<script>
    import ResourceCard from "../components/ResourceCard.svelte";
    import {paginate, LightPaginationNav} from "svelte-paginate";

    export let resources = [];
    let currentPage = 1;
    let pageSize = 4;
    // $: paginatedResources = paginate({ items, pageSize, currentPage });
</script>

<div class="container">
    <div class="mx-10 pt-15">
        {#if resources.length !== 0}
            <div class="grid gap-6 mb-8 md:grid-cols-1">
                <div class="grid grid-cols-3 gap-4">
                    <div class="min-w-0 text-gray-800 shadow-xs font-semibold p-0 text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Entitate
                    </div>
                    <div class="min-w-0 text-gray-800 shadow-xs font-semibold p-0 text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Atribut
                    </div>
                    <div class="min-w-0 text-gray-800 shadow-xs font-semibold p-0 text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Valoare
                    </div>
                </div>
                {#each resources as resource}
                    <ResourceCard {resource}/>
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
