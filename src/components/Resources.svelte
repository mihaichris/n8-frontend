<script>
    import ResourceCard from "../components/ResourceCard.svelte";
    import {paginate, LightPaginationNav} from "svelte-paginate";

    export let resources = [];
    let currentPage = 1;
    let pageSize = 4;
    // $: paginatedResources = paginate({ items, pageSize, currentPage });
</script>

<div class="container">
    <div class="md:-ml-44 md:-mr-44 pt-15">
        {#if resources.length !== 0}
            <div class=" grid gap-1 mb-8 md:grid-cols-1">
                <div class="grid grid-cols-12 gap-8">
                    <div class=" p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Tip
                    </div>
                    <div class="col-span-4 p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Entitate
                    </div>
                    <div class="col-span-2  p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Atribut
                    </div>
                    <div class="col-span-2 p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Valoare
                    </div>
                    <div class="col-span-2 p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-2xl text-center"
                         style="--tw-bg-opacity: 1">
                        Scor
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
