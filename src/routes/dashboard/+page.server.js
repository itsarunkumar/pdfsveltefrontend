/** @type {import('./$types').PageServerLoad} */

export async function load({ cookies, fetch }) {
  const token = cookies.get("token");

  if (!token) {
    return {
      error: "Not authorized",
    };
  }

  const listfiles = await fetch("http://localhost:3000/api/file/listfiles", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
  });

  return {
    listfiles: await listfiles.json(),
  };
}
