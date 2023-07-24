import { redirect } from "@sveltejs/kit";

const unProtectedRoutes = ["/", "/login", "/logout"];

// @ts-ignore
export const handle = async ({ event, request, resolve }) => {
  const token = event.cookies.get("token");
  if (!token && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, "/");
  }
  const userInfo = event.cookies.get("user");
  const currentUser = userInfo;
  if (currentUser) {
    event.locals.user = {
      isAuthenticated: true,
      email: currentUser.email,
      id: currentUser.id,
      token,
    };
  } else {
    if (!unProtectedRoutes.includes(event.url.pathname)) {
      throw redirect(303, "/");
    }
  }

  return resolve(event);
};
