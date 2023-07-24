/** @type {import('./$types').PageServerLoad} */
import { redirect } from "@sveltejs/kit";

export async function load() {
  throw redirect(301, "/");
}

export const actions = {
  // @ts-ignore
  async default({ fetch, cookies }) {
    const token = cookies.get("token");

    cookies.delete("token");
    cookies.delete("user");

    throw redirect(301, "/");
  },
};
