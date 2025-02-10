export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/hello") {
      return new Response("Hello, World!", { status: 200 });
    } else if (url.pathname === "/about") {
      return new Response("About Us Page", { status: 200 });
    }

    return new Response("Not Found", { status: 404 });
  },
};
