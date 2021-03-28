<script>
    import NavLink from "../components/NavLink.svelte";
    import {onMount} from "svelte";

    export let resource;
    let encodedSubjectUri;
    let subjectUri;
    let subjectScore;
    let subjectGraph;
    let values = [];
    onMount(() => {
        encodedSubjectUri = encodeURIComponent(resource["@id"]);
        subjectUri = resource["@id"];
        subjectScore = resource["n:score"];
        subjectGraph = resource["n:graph"];
        resource["n:values"].forEach(value => {
            const valueAndAttribute = {
                attribute: value["n:attribute"]["@id"],
                id: value["@id"]
            };
            values.push(valueAndAttribute);
        })
    });
</script>


{#each values as value}
    <div class="min-w-0 p-4 text-gray-800 rounded-lg shadow-xs" style="	--tw-bg-opacity: 1;
background-color: rgba(254, 242, 242, var(--tw-bg-opacity));">
        <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
                <NavLink to="/resource/{encodedSubjectUri}">
                  <span class="transition duration-500 ease-in-out transform font-bold
                    hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block
                    lg:mt-0 text-yellow-700 hover:text-yellow-400 mr-4">
                      {subjectUri}
                  </span>
                </NavLink>
            </div>
            <div class="text-center">
                <span class="text-yellow-700">{value.attribute}</span>
            </div>
            <div class="text-center">
                <span class="text-yellow-700">{value.id}</span>
            </div>
<!--            <div>-->
<!--                {subjectScore}-->
<!--            </div>-->
<!--            <div>-->
<!--                {subjectGraph}-->
<!--            </div>-->
        </div>

    </div>
{/each}
