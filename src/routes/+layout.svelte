<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  import { Avatar } from "@skeletonlabs/skeleton";

  console.log("from root layout", data);
</script>

<nav>
  <div class="navbar bg-base-100 px-10">
    <div class="flex-1">
      <a href="/" class=" normal-case text-xl">Read It</a>
    </div>
    <div class="flex gap-2">
      {#if data.user !== null}
        <div class="flex justify-evenly items-center gap-8">
          <a href="/dashboard"> dashboard </a>
          <form method="post" action="/logout">
            <button class="avatar tooltip tooltip-bottom" data-tip="Logout">
              <Avatar
                src={data.user.profile.bio}
                alt={data.user.name}
                width="w-10"
                rounded="rounded-3xl"
              />
            </button>
          </form>
        </div>
      {:else}
        <a href="/login"> login </a>
      {/if}
    </div>
  </div>
</nav>

<main class="min-w-screen min-h-screen">
  <slot />
</main>

<Footer />
