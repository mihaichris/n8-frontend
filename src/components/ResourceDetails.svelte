<script>
    import TailwindCss from "../style/TailwindCss.svelte";
    import AppCss from "../style/AppCss.svelte";
    import {onMount} from "svelte";
    import NavLink from "./NavLink.svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let id;
    export let entityDescription = {};
    export let entityProperties = [];
    export let entityClasses = [];
    export let entityDescriptionValues = [];
    onMount(() => {
    });

    const extractLocalName = (id) => {
        return id.split(/[#/]+/).pop();
    }

    const extractPropertyType = (entityProperty) => {
        let type = "";
        let entityPropertyValues = entityProperty["n:values"];
        entityPropertyValues.forEach((entity) => {
            let attribute = entity["n:attribute"];
            if (attribute["@id"].split(/[#/]+/).pop() === "type") {
                type = entity["@id"].split(/[#/]+/).pop();
            }
        });
        return type;
    }
    function link(event) {
        let id = event.target.baseURI.split("resource/").pop()
        dispatch('refresh', {id: id});
    }
</script>

<div class="w-full max-w-full rounded p-2 lg:p-2 mx-auto text-gray-800 relative md:text-left">
    <h3 class="text-center font-bold text-2xl font-sans  text-yellow-700">{id}</h3> &nbsp;
    {#if entityDescription !== null}
        <div class="w-full max-w-full rounded bg-white shadow-xl  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <h3 class="text-center font-bold text-lg font-sans ">Despre Resursă</h3> &nbsp;
            <div class="grid grid-cols-6 gap-4">
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-lg text-center">Denumire locală</div>
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-lg text-center">URI</div>
                <div class="col-span-4 p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-lg text-center">Valoare
                </div>
                {#each entityDescriptionValues as value}
                    <div class="text-center">{extractLocalName(value["n:attribute"]["@id"])}</div>
                    <div class="text-center">
                        <NavLink  to="/resource/{encodeURIComponent(value['n:attribute']['@id'])}">
                              <span  on:click={link} class=" transition duration-500 ease-in-out transform font-bold
                                hover:-translate-y-1 hover:scale-11 text-xl block mt-4 lg:inline-block
                                lg:mt-0 text-yellow-700 hover:text-yellow-400 mr-4">
                                  {value["n:attribute"]["@id"]}
                              </span>
                        </NavLink>
                    </div>
                    <div class="col-span-4 text-center">
                        {value["@id"]}
                    </div>
                {/each}
            </div>
        </div>
    {/if}
    &nbsp;
    {#if entityClasses.length > 0}
        <div class="w-full max-w-full rounded bg-white shadow-xl  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <h3 class="text-center font-bold text-lg font-sans ">Clase definite</h3> &nbsp;
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-xl text-center">Denumire locală</div>
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-xl text-center">URI</div>
                {#each entityClasses as entityClass}
                    <div class="text-center">{extractLocalName(entityClass["@id"])}</div>
                    <div class="text-center">
                        <NavLink to="/resource/{encodeURIComponent(entityClass['@id'])}">
                              <span  on:click={link} class=" transition duration-500 ease-in-out transform font-bold
                                hover:-translate-y-1 hover:scale-11 text-xl block mt-4 lg:inline-block
                                lg:mt-0 text-yellow-700 hover:text-yellow-400 mr-4">
                                  {entityClass["@id"]}
                              </span>
                        </NavLink>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
    &nbsp;
    {#if entityProperties.length > 0}
        <div class="w-full max-w-full rounded bg-white shadow-xl  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <h3 class="text-center font-bold text-xl font-sans ">Proprietăți definite</h3> &nbsp;
            <div class="grid grid-cols-3 gap-4">
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-xl text-center">Denumire locală</div>
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-xl text-center">URI</div>
                <div class="p-4 min-w-0 text-gray-800 shadow-xs font-semibold text-xl text-center">Tip</div>
                {#each entityProperties as entityProperty}
                    <div class="text-center">{extractLocalName(entityProperty["@id"])}</div>
                    <div class="text-center">
                        <NavLink to="/resource/{encodeURIComponent(entityProperty['@id'])}">
                              <span on:click={link} class=" transition duration-500 ease-in-out transform font-bold
                                hover:-translate-y-1 hover:scale-11 text-xl block mt-4 lg:inline-block
                                lg:mt-0 text-yellow-700 hover:text-yellow-400 mr-4">
                                  {entityProperty["@id"]}
                              </span>
                        </NavLink>
                    </div>
                    <div class="text-center">{extractPropertyType(entityProperty)}</div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<TailwindCss/>
<AppCss/>