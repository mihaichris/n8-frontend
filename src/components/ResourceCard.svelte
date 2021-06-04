<script>
    import NavLink from "../components/NavLink.svelte";
    import {onMount} from "svelte";

    export let resource;
    let encodedSubjectUri;
    let subjectUri;
    let subjectScore;
    let subjectGraph;
    let subjectType;
    let values = [];
    onMount(() => {
        encodedSubjectUri = encodeURIComponent(resource["@id"]);
        subjectUri = resource["@id"];
        subjectGraph = resource["n:graph"];
        resource["n:values"].forEach(value => {
            const valueAndAttribute = {
                attribute: value["n:attribute"]["@id"],
                id: value["@id"],
                score: value["n:score"]
            };
            values.push(valueAndAttribute);
        })
        subjectType = () => {
            if (isOntology()) {
                return "Ontologie";
            } else if(isClass()) {
                return "Clasă";
            } else if(isProperty()) {
                return "Proprietate";
            } else {
                return "Resursă";
            }
        }
        function isOntology() {
            const entity = resource["@id"];
            return (entity.includes("ontolog") || entity.split('.').pop() === "owl") && !entity.includes("#");
        }
        function isProperty() {
            const entity = resource["@id"];
            const isAProperty = () => {
                if (!entity.includes("#")) {
                    return false;
                } else {
                    const lastWord = entity.split("#").pop();
                    const firstChar = lastWord.charAt(0);
                    if (firstChar === firstChar.toLowerCase()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            return entity.includes("property")  || isAProperty()
        }
        function isClass() {
            const entity = resource["@id"];
            const isAClass = () => {
                if (!entity.includes("#")) {
                    return false;
                } else {
                    const lastWord = entity.split("#").pop();
                    const firstChar = lastWord.charAt(0);
                    if (firstChar === firstChar.toUpperCase()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            return entity.includes("class")  || (isAClass())
        }
    });
</script>


{#each values as value}
    <div class="min-w-0 p-4 text-gray-800 rounded-lg shadow-xs" style="	--tw-bg-opacity: 1;
background-color: rgba(254, 242, 242, var(--tw-bg-opacity));">
        <div class="grid grid-cols-12 gap-8">
            <div class="text-center p-4">
                <span class="font-bold text-yellow-700">{value.id.includes("onto") ? "Ontologie" : subjectType()}</span>
            </div>
            <div class="text-center col-span-4 p-4">
                <NavLink to="/resource/{encodedSubjectUri}">
                  <span class="transition duration-500 ease-in-out transform font-bold
                    hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block
                    lg:mt-0 text-yellow-700 hover:text-yellow-400 mr-4">
                      {subjectUri}
                  </span>
                </NavLink>
            </div>
            <div class="text-center  col-span-2  p-4">
                <span class="text-yellow-700">{value.attribute}</span>
            </div>
            <div class="text-center col-span-2 p-4">
                <span class="text-yellow-700">{value.id}</span>
            </div>
            <div class="text-center col-span-2 p-4">
                <span class="text-yellow-700">{value.score}</span>
            </div>
        </div>

    </div>
{/each}
