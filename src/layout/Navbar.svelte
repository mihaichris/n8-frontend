<script>
  import NavLink from "../components/NavLink.svelte";
  import { github } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";
</script>

<nav class="rounded flex items-center justify-between flex-wrap p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <NavLink to="/"><span class="font-semibold text-5xl tracking-tight text-yellow-700">N8</span></NavLink>
  </div>
  <div class="text-sm lg:flex-grow">
    <!-- <NavLink to="/">
      <span
        class="transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:scale-11 text-2xl block mt-4 lg:inline-block
        lg:mt-0 text-orange-600 hover:text-white mr-4">
        Acasă
      </span>
    </NavLink> -->
<!--    <NavLink to="status">-->
<!--      <span-->
<!--        class="transition duration-500 ease-in-out transform-->
<!--        hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block-->
<!--        lg:mt-0 text-orange-600 hover:text-white mr-4">-->
<!--        Status-->
<!--      </span>-->
<!--    </NavLink>-->
  </div>
  <div>
    <a target="_black" href="https://github.com/mihaichris/n8-frontend">
      <Icon
        class="transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:scale-110 text-orange-600 block flex
        items-center hover:text-white mr-5 font-xl" 
        data={github}
        scale="2" />
    </a>
  </div>
</nav>
