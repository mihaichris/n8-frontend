<script>
  import { Link } from "svelte-routing";
  import { github } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";
</script>

<nav
  class="rounded flex items-center justify-between flex-wrap bg-orange-400 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight text-orange-600">N8</span>
  </div>
  <div class="text-sm lg:flex-grow">
    <Link to="/">
      <span
        class="transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block
        lg:mt-0 text-orange-600 hover:text-white mr-4">
        Home
      </span>
    </Link>
    <Link to="/status">
      <span
        class="transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block
        lg:mt-0 text-orange-600 hover:text-white mr-4">
        Status
      </span>
    </Link>
  </div>
  <div>
    <a href="https://github.com/mihaichris/n8-frontend">
      <Icon
        class="transition duration-500 ease-in-out transform
        hover:-translate-y-1 hover:scale-110 text-orange-600 block flex
        items-center hover:text-white mr-5"
        data={github}
        scale="2" />
    </a>
  </div>
</nav>
