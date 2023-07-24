export function load({ cookies, fetch }) {
  const user = cookies.get("user");
  const token = cookies.get("token");

  if (user && token) {
    return fetch(`http://localhost:3000/api/user/${user}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((user) => ({ user, islogin: true }))
      .catch((error) => {
        console.error("Error fetching user:", error);
        // Handle the error appropriately, e.g., show an error message to the user.
      });
  }

  return { user: null, islogin: false };
}
