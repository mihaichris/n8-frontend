<script>
import DATA from "../data/RESOURCES.js";
import {createEventDispatcher, onMount} from 'svelte';

export let suggests = DATA.AUTOSUGGEST_KEYWORDS;
export let htmlSuggests = [];
const dispatch = createEventDispatcher();
onMount(() => {
    if (suggests.length !== 0) {
        suggests.forEach(suggest => {
            var html = "<a href='#" + suggest + "' id='suggest-" + suggest.replace(' ', '-') + "' class='bg-yellow-100 rounded-full inline text-gray-700 text-center px-4 py-2 mr-4' on:click={selectSuggestionKeyword}>" + suggest + "</a>";
            document.getElementById('suggests').innerHTML += html;
        });
    }
});

function selectSuggestionKeyword() {
    dispatch("suggestionSelect", {
        suggests: suggests
    });
}

</script>
<div id = "suggests" class="bg-gray-200">
</div>