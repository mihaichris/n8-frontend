<script>
    import TailwindCss from "../style/TailwindCss.svelte";
    import AppCss from "../style/AppCss.svelte";
    import {onMount} from "svelte";
    import axios from "axios";
    import {RESOURCE_REQUEST} from "../models/Request";
    import ResourceDetails from "../components/ResourceDetails.svelte";

    export let id;
    export let unique = {};
    export let entityDescription = {};
    export let entityProperties = [];
    export let entityClasses = [];
    export let entityDescriptionValues = [];
    onMount(() => {
        findEntityBySubjectUri(id).then((response) => {
            const data = response.data;
            entityDescription = data.entityDescription.pop();
            entityDescriptionValues = entityDescription["n:values"];
            entityClasses = data.entityClasses;
            entityProperties = data.entityProperties;
        });
    });

    const findEntityBySubjectUri = async (subjectUri) => {
        try {
            return await axios.post(RESOURCE_REQUEST, {uri: subjectUri});
        } catch (error) {
            console.log(error);
        }
    }
    function refresh(event) {
        findEntityBySubjectUri(id).then((response) => {
            const data = response.data;
            entityDescription = data.entityDescription.pop();
            entityDescriptionValues = entityDescription["n:values"];
            entityClasses = data.entityClasses;
            entityProperties = data.entityProperties;
            unique = {}
        });

    }
</script>
<section class="container-fluid">
    <div class="bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        {#key unique}
        <ResourceDetails on:refresh={refresh} id={id} entityDescriptionValues={entityDescriptionValues} entityDescription={entityDescription} entityClasses={entityClasses} entityProperties={entityProperties}/>
            {/key}
        <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
                <a title="Go to actual resource" href="{id}" target="_blank"
                   class="text-center block w-20 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                    <img class="object-cover object-center w-full h-full rounded-full"
                         src="/semantic-web-logo.png"/>
                </a>
            </div>
        </div>
    </div>
</section>
<TailwindCss/>
<AppCss/>