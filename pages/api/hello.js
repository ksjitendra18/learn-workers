export const config = {
  runtime: "experimental-edge",
};

export default async function (req) {
  return new Response(JSON.stringify({ name: "JS" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
