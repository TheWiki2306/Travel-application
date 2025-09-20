import type { LoaderFunctionArgs } from "react-router";

// This becomes a resource route because we export loader but no default component
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);

  // Handle Chrome DevTools specific request
  if (url.pathname.includes("com.chrome.devtools.json")) {
    return new Response(null, {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Handle other .well-known requests
  return new Response(null, { status: 404 });
}
