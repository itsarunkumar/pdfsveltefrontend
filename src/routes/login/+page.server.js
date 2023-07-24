/** @type {import('./$types').PageServerLoad} */

import { redirect } from "@sveltejs/kit";

export async function load() {}

export const actions = {
  // @ts-ignore
  async login({ fetch, cookies, request }) {
    const form = await request.formData();

    const name = form.get("name");
    const password = form.get("password");
    const email = form.get("email");

    const res = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return {
        status: 401,
        body: data,
      };
    }

    cookies.set("token", data.token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    cookies.set("user", data.user.id, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    throw redirect(301, "/dashboard");
  },
};
