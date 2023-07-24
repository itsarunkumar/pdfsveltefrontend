<script>
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data);
</script>

<div class="container flex justify-center items-center flex-col gap-8">
  <div>
    <h4>{data.file.name}</h4>
  </div>

  <div class="artboard artboard-horizontal phone-3">
    <img
      src={data.file.url}
      alt={data.file.name}
      class="w-full h-full object-contain"
    />
  </div>
</div>
