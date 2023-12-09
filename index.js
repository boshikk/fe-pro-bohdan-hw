const redirectToSite = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    url = "http://" + url;
  }

  window.location.href = url;
};

document
  .getElementById("redirectToSite1")
  .addEventListener("click", () => redirectToSite("www.google.com"));

document
  .getElementById("redirectToSite2")
  .addEventListener("click", () => redirectToSite("developer.mozilla.org"));
