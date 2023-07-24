/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch, cookies, params }) {
  const token = cookies.get("token");

  console.log(params, "from sf");

  const singlefile = await fetch(
    `http://localhost:3000/api/file/${params.singlefile}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    }
  );

  return {
    file: await singlefile.json(),
  };
}
