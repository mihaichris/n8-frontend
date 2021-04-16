<script>
    import TailwindCss from "../style/TailwindCss.svelte";
    import AppCss from "../style/AppCss.svelte";
    import {onMount} from "svelte";
    import axios from "axios";
    import {RESOURCE_REQUEST, SEARCH_REQUEST} from "../models/Request";

    export let id;
    export let resource;
    onMount(() => {
        console.log(id);
        findEntityBySubjectUri(id).then((response) => {
            resource = response.data;
        });
    });

    const findEntityBySubjectUri = async (subjectUri) => {
        try {
            return await axios.get(RESOURCE_REQUEST + "/" + subjectUri);
        } catch (error) {
            console.log(error);
        }
    }

</script>
<section class="container mx-auto px-8">
    <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        </div>


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