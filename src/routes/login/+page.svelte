<script>
  /** @type {import('./$types').PageData} */
  export let data;

  import { focusTrap } from "@skeletonlabs/skeleton";

  let isFocused = false;
</script>

<div class="container">
  <h1>Login</h1>

  <form method="post" action="?/login">
    <div>
      <label for="name"> name </label>
      <input type="text" id="name" name="name" />
    </div>

    <div>
      <label for="email"> email </label>
      <input type="text" id="email" name="email" />
    </div>

    <div>
      <label for="password"> password </label>
      <input type="password" id="password" name="password" />
    </div>

    <button type="submit">Login</button>
  </form>
</div>

<div class="container">
  <form method="post" action="?/login">
    <input
      class="input"
      title="Input (text)"
      type="text"
      placeholder="input text"
    />

    <input
      class="input"
      title="Input (password)"
      type="password"
      placeholder="input password"
    />

    <input
      class="input"
      title="Input (email)"
      type="email"
      placeholder="input email"
    />
    <button type="submit">Submit</button>
  </form>
</div>

<style lang="postcss">
  .container {
    @apply flex flex-col items-center justify-center w-full h-screen;
  }

  .container h1 {
    @apply text-3xl font-bold my-8;
  }

  form {
    @apply flex flex-col items-center justify-center gap-3 w-1/4;
  }

  form div {
    @apply w-full flex flex-row items-center justify-evenly gap-1;
  }

  input {
    @apply w-60 px-4 py-2 border-none  rounded-md h-7 outline-none;
  }

  input:hover {
    @apply outline-none;
  }

  input::placeholder {
    @apply text-gray-400 text-center;
  }

  label {
    @apply w-10 flex flex-col items-center justify-start text-start uppercase;
  }

  button {
    @apply w-20 h-7 rounded-md bg-blue-500 text-white;
  }
</style>
