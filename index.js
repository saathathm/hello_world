addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Get the URL path from the request
  const url = new URL(request.url);

  // Routing based on the URL path
  if (url.pathname === "/about") {
    return new Response(
      JSON.stringify({
        message: "Hi, I'm a Cloudflare Worker! This is the 'About Me' page.",
        details: {
          name: "Your Name",
          profession: "Your Profession",
          hobbies: ["Coding", "Music", "Gaming"],
        },
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } else if (url.pathname === "/") {
    // Default Hello World page
    return new Response("Hello, World!", {
      headers: { "Content-Type": "text/plain" },
    });
  } else {
    // Handle 404 - Page not found
    return new Response("404 Not Found", { status: 404 });
  }
}
