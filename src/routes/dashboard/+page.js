export async function load({ data }) {
  const { listfiles } = data;
  return {
    listfiles,
  };
}
