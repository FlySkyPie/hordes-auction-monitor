var pattern = "https://hordes.io/client.js*";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  let version = [...requestDetails.url.matchAll(/\?v=([\d]+)/g)];
  return {redirectUrl: "http://0.0.0.0:8123/"+ version[0][1] +"/client.js"};
  switch(requestDetails.url){
    case "https://hordes.io/client.js?v=4305950":
      return {redirectUrl: "http://0.0.0.0:8123/4305950/client.js"};
    case "https://hordes.io/client.js?v=4298202":
      return {redirectUrl: "http://0.0.0.0:8123/4298202/client.js"};
    case "https://hordes.io/client.js?v=4308820":
      return {redirectUrl: "http://0.0.0.0:8123/4308820/client.js"};
    default:
      console.warn("Version unmatch! using origin.");
      return {redirectUrl: requestDetails.url};
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[pattern], types:["script"]},
  ["blocking"]
);
