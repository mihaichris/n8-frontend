<script>
    import axios from "axios";
    import {SEARCH_REQUEST, SUGGEST_REQUEST} from "../models/Request.js";
    import {createEventDispatcher, onMount} from "svelte";
    import DATA from "../data/Resources";
    import Select from 'svelte-select';

    const dispatch = createEventDispatcher();
    let searchPhrase = "";
    export let resources = [];
    let responseTime = 0;
    let defaultSelectValue = {value: 'en', label: 'Engleză'};
    let selectedLanguage = 'en';
    let onlyOntologies = false;
    const supportedLanguages = [
        {value: '', label: 'Detectare automată'},
        {value: 'en', label: 'Engliză'},
        {value: 'es', label: 'Spaniolă'},
        {value: 'de', label: 'Germană'},
        {value: 'fr', label: 'Franceză'},
        {value: 'it', label: 'Italiană'}
    ];
    onMount(() => {
        let suggests = DATA.AUTOSUGGEST_KEYWORDS;
        buildSuggestionPills(suggests);
    })

    function buildSuggestionPills(suggests) {
        document.getElementById('suggests').innerHTML = "";
        suggests.forEach(suggest => {
            var id = "suggest-" + suggest.replace(' ', '-');
            var html = "<a  href='#" + suggest + "' id='" + id + "' class='suggestion bg-yellow-100 rounded-full text-lg text-gray-700 text-center px-4 py-2 mr-4'>" + suggest + "</a>";
            document.getElementById('suggests').innerHTML += html;
        });
        const suggestionElements = document.getElementsByClassName("suggestion");
        for (let i = 0; i < suggestionElements.length; i++) {
            suggestionElements[i].addEventListener('click', selectSuggestion, false);
        }
    }

    function selectSuggestion(event) {
        searchPhrase = event.target.firstChild.nodeValue;
    }

    const getSearchResources = async () => {
        try {
            return await axios.post(SEARCH_REQUEST, {
                searchQuery: searchPhrase,
                searchType: onlyOntologies ? "DOCUMENT" : "RESOURCE",
                language: selectedLanguage
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function getSuggestKeywords() {
        try {
            const suggests = await axios
                .get(SUGGEST_REQUEST + "/" + searchPhrase + " ")
                .then(function (response) {
                    buildSuggestionPills(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    }

    function dispatchSearching() {
        dispatch("search", {
            resources: resources
        });
    }

    function search() {
        if (searchPhrase.length <= 2) {
            clearResults();
        } else {
            clearResults();
            const ajaxTime = new Date().getTime();
            getSearchResources().then((response) => {
                resources = sortResources(response.data);
                responseTime = new Date().getTime() - ajaxTime;
                dispatchSearching();
            });
        }
    }

    function clearResults() {
        resources = [];
        dispatchSearching();
    }

    function onSelectLanguage(event) {
        selectedLanguage = event.detail.value;
    }

    const onKeyPress = event => {
        if (event.key === 'Enter') search();
        if (searchPhrase.length > 2) getSuggestKeywords();
    };

    function sortResources(resources) {
        function compareScores(a, b) {
            let aValues = a["n:values"];
            let bValues = b["n:values"];
            if (aValues.length > 0) {
                aValues = aValues.sort(sortValues);
            }
            if (bValues.length > 0) {
                bValues = bValues.sort(sortValues);
            }
            const aScore = parseFloat(aValues[0]["n:score"].replace(/\^(.*)/gm, ""));
            const bScore = parseFloat(bValues[0]["n:score"].replace(/\^(.*)/gm, ""));
            return bScore - aScore;
        }

        return resources.sort(compareScores);
    }

    function sortValues(a, b) {
        const aScore = parseFloat(a["n:score"].replace(/\^(.*)/gm, ""));
        const bScore = parseFloat(b["n:score"].replace(/\^(.*)/gm, ""));
        return bScore - aScore;
    }

</script>

<div id="search-bar">
    <div class="tb">
        <div class="td">
            <input id="search-input"
                   autocomplete="off"
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
        <div id="suggests" class="bg-gray-200">
        </div>

    </div>
    <!--Right Col-->
    <div class="w-full md:w-3/5 py-4 text-center">
        <div class="container mx-auto flex flex-wrap flex-row md:text-right">
            <div class="box-content h-5 w-32 px-4 py-2 mr-4 bg-yellow-100 rounded-3xl flex-auto">
                <div class="text-center"><span class="text-yellow-700 shadow-xs text-lg font-semibold">Doar Ontologii:</span>
                    <input type=checkbox autocomplete="off" bind:checked={onlyOntologies}></div>
            </div>
            <div class="box-content h-5 w-32 rounded-3xl flex-auto">
                <div class="text-center"><span class="text-yellow-700  shadow-xs font-semibold"></span><Select
                        placeholder="Limbă rezultate..." selectedValue={defaultSelectValue}
                        containerClasses=" rounded-3xl  font-semibold text-yellow-700 text-lg" items={supportedLanguages}
                        on:select={onSelectLanguage}></Select></div>
            </div>
        </div>
    </div>
</div>
<div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <div class="box-content h-32 w-32 p-4 bg-yellow-100 rounded-3xl">
        <p class="text-gray-700 shadow-xs font-semibold text-2xl text-center">Timp Răspuns</p>
        <p class="text-yellow-700 shadow-xs font-semibold text-2xl text-center">{responseTime}</p>
        <p class="text-gray-700 shadow-xs font-semibold text-2xl text-center">milisecunde</p>
    </div>
</div>