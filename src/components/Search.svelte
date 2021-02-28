<script>
  import axios from "axios";
  import {SEARCH_REQUEST, SUGGEST_REQUEST} from "../models/Request.js";
  import { createEventDispatcher } from "svelte";
  import Resources from "../components/Resources.svelte";

  const dispatch = createEventDispatcher();
  let searchPhrase = "";
  export let resources = [];

  async function getSearchResources() {
    try {
      const resources = await axios
        .get(SEARCH_REQUEST, {
          params: {
            searchPhrase: "test"
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    } catch (error) {
      console.log(error);
    }
    return resources;
  }

  async function getSuggestProducts() {
    try {
      const suggests = await axios
        .get(SUGGEST_REQUEST, {
          params: {
            searchPhrase: "test"
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    } catch (error) {
      console.log(error);
    }
    return suggests;
  }

  function search() {
    resources = getSearchResources();

    dispatch("search", {
      products: resources
    });
  }

  function suggest() {
    suggests = getSearchResources();
    dispatch("suggest", {
     suggests: suggests
    });
  }

  const onKeyPress = event => {
    if (event.key === 13) search();
    suggest();
  };

</script>

<div id="cover">
  <div class="tb">
    <div class="td">
      <input id = "search-input"
        on:keypress={onKeyPress}
        type="text"
        placeholder="Caută"
        bind:value = {searchPhrase}
        required />
    </div>
    <div class="td" id="s-cover">
      <button on:click={search} type="submit">
        <div id="s-circle" />
        <span />
      </button>
    </div>
  </div>
</div>

