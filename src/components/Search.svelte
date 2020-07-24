<script>
  import axios from "axios";
  import Request from "../models/Request.js";
  import { createEventDispatcher } from "svelte";
  import Products from "../components/Products.svelte";

  const dispatch = createEventDispatcher();
  let searchPhrase = "";
  export let products = [];

  async function getSearchProducts() {
    try {
      const products = await axios
        .get(SEARCH_REQUEST, {
          params: {
            searchPrase: "test"
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
    return products;
  }

  async function getSuggestProducts() {
    try {
      const suggests = await axios
        .get(SUGGEST_REQUEST, {
          params: {
            searchPrase: "test"
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
    products = getSearchProducts();

    dispatch("search", {
      products: products
    });
  }

  function suggest() {
    suggests = getSuggestProducts();
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

