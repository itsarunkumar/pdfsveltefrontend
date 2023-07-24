<script>
  /**
   * @type {  any}
   */
  export let files;
</script>

<div class="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
  {#each files as file}
    {#if file.type !== "application/pdf"}
      <div class="carousel-item">
        <a href="/{file.id}">
          <img
            src={file.url}
            alt={file.name}
            class="rounded-box w-40 h-40 object-cover"
          />
        </a>
      </div>
    {/if}
  {/each}
  {#each files as file}
    {#if file.type !== "application/pdf"}
      <div class="carousel-item">
        <a href="/{file.id}">
          <img
            src={file.url}
            alt={file.name}
            class="rounded-box w-40 h-40 object-cover"
          />
        </a>
      </div>
    {/if}
  {/each}
</div>
