<script>
import DATA from "../data/RESOURCES.js";
import { onMount } from 'svelte';

export let suggests = DATA.AUTOSUGGEST_KEYWORDS;
export let htmlSuggests = [];
onMount(() => {
    if (suggests.length !== 0) {
        suggests.forEach(suggest => {
            var html = "<a " + "id='suggest-" + suggest.replace(' ', '-') + "' class='inline text-gray-700 text-center bg-gray-400 px-4 py-2'>" + suggest + "</a>";
            document.getElementById('suggests').innerHTML += html;
        });
    }
});



</script>
<div id = "suggests" class="bg-gray-200">
</div>