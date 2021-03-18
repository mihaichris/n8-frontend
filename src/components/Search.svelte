<script>
    import axios from "axios";
    import {SEARCH_REQUEST, SUGGEST_REQUEST} from "../models/Request.js";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();
    let searchPhrase = "";
    export let resources = [];

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

