export const config = {
  runtime: "experimental-edge",
};

export default async function (req) {
  return new Response(JSON.stringify({ name: "JKS"}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Cache-Control": "max-age=86400",
    },
  });
}
