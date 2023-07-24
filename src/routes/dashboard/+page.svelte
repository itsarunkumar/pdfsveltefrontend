<script>
  // @ts-nocheck

  import Carousel from "$lib/components/Carousel.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
</script>

<h1>dashboard</h1>

<h2>user</h2>
<h3>
  {data.user.name} ({data.user.email})
</h3>

<!-- {#each data.listfiles.files as file}
  <img src={file.url} alt="" />
  <a href="/{file.id}">go to file page</a>
{/each} -->

<Carousel files={data.listfiles.files} />

<!-- <h4>PDF files</h4>

{#each data.listfiles.files as file}
  {#if file.type === "application/pdf"}
    <iframe
      title={file.name}
      width="100%"
      height="100%"
      class="w-fit h-screen"
      src={file.url}
      frameborder="0"
    />
  {/if}
{/each} -->
