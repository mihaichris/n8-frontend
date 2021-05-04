<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./layout/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import Status from "./pages/Status.svelte";
  import Footer from "./layout/Footer.svelte";
  import Resource from "./pages/Resource.svelte";

  export let url = "";
</script>

<Router url = "{url}">
  <Navbar />
    <Route path="/" component={Home} />
<!--    <Route path="/status" component={Status} />-->
    <Route path="/"><Home /></Route>
    <Route path="/resource/:id" component={Resource} />
</Router>

<Footer/>