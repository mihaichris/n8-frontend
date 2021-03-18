<script>
    import NavLink from "../components/NavLink.svelte";
export let resource
</script>


<div class="min-w-0 p-4 text-gray-800 rounded-lg shadow-xs" style="--tw-bg-opacity: 1;
background-color: rgba(254, 242, 242, var(--tw-bg-opacity));">
    <NavLink to="/resource" id="{resource.id}">
      <span class="transition duration-500 ease-in-out transform font-bold
        hover:-translate-y-1 hover:scale-11 text-lg block mt-4 lg:inline-block
        lg:mt-0 text-orange-600 hover:text-white mr-4">
          {resource["@id"]}
      </span>
    </NavLink>
</div>