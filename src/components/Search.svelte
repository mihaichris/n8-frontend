<script>
    import axios from "axios";
    import {SEARCH_REQUEST, SUGGEST_REQUEST} from "../models/Request.js";
    import {createEventDispatcher, onMount} from "svelte";
    import DATA from "../data/Resources";

    const dispatch = createEventDispatcher();
    let searchPhrase = "";
    export let resources = [];

    onMount(() => {
        let suggests = DATA.AUTOSUGGEST_KEYWORDS;
        suggests.forEach(suggest => {
            var id = "suggest-" + suggest.replace(' ', '-');
            var html = "<a  href='#" + suggest + "' id='" + id + "' class='suggestion bg-yellow-100 rounded-full  text-gray-700 text-center px-4 py-2 mr-4'>" + suggest + "</a>";
            document.getElementById('suggests').innerHTML += html;
        });
        const suggestionElements = document.getElementsByClassName("suggestion");
        for (let i = 0; i < suggestionElements.length; i++) {
            suggestionElements[i].addEventListener('click', selectSuggestion, false);
        }
    })

    function selectSuggestion(event) {
        searchPhrase = event.target.firstChild.nodeValue;
    }

    const getSearchResources = async () => {
        try {
            return await axios.post(SEARCH_REQUEST, {
                    searchQuery: searchPhrase,
                    searchType: "RESOURCE"
                });
        } catch (error) {
            console.log(error);
        }
    }

    async function getSuggestKeywords() {
        try {
            const suggests = await axios
                .get(SUGGEST_REQUEST, {
                    params: {
                        searchPhrase: "test"
                    }
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
        return suggests;
    }

    function search() {
        if (searchPhrase === "") {
            resources = [] ;
        } else {
            getSearchResources().then((response) => {
                resources = response.data;
                dispatch("search", {
                    resources: resources
                });
            });
        }
    }

    function suggest() {
        let suggests = getSuggestKeywords();
        dispatch("suggest", {
            suggests: suggests
        });
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') search();
        //suggest();
    };

</script>

<div id="search-bar">
    <div class="tb">
        <div class="td">
            <input id="search-input"
                   on:keypress={onKeyPress}
                   type="text"
                   placeholder="Caută"
                   bind:value={searchPhrase}
                   required/>
        </div>
        <div class="td" id="s-cover">
            <button on:click={search} type="submit">
                <div id="s-circle"/>
                <span/>
            </button>
        </div>
    </div>
</div>

<div class="container px-64 mx-auto flex flex-wrap flex-col md:flex-row
    items-center">
    <!--Left Col-->
    <div
            class="flex flex-col w-full md:w-2/5 justify-center items-start
      text-center md:text-left">
        <div id = "suggests" class="bg-gray-200">
        </div>
    </div>
    <!--Right Col-->
    <div class="w-full md:w-3/5 py-6 text-center">
    </div>
</div>
