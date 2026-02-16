const targetDomains = ["office.com", "microsoftonline.com"];

async function deleteOfficeCookies() {
  try {
    // We have to search all cookie stores, because office may be logged
    // in a container other than default.
    const stores = await browser.cookies.getAllCookieStores();
    console.log(stores);
    for (let store of stores) {
      //console.log("store:", store.id)
      // This function will only return cookies for which we have host
      // permission.  Anyway, we limit it to the target domain here.
      for (let targetDomain of targetDomains) {
          let cookies = await browser.cookies.getAll({ domain: targetDomain, storeId: store.id, firstPartyDomain: null, partitionKey: {} });
        for (let cookie of cookies) {
          // Construct the URL from cookie info
          let url =
            (cookie.secure ? "https://" : "http://") +
            cookie.domain.replace(/^\./, "") +
            cookie.path;

          await browser.cookies.remove({
            url,
            name: cookie.name,
            storeId: cookie.storeId
          });
          console.log(`Deleted cookie: ${cookie.name}`);
        }
      }
    }

  } catch (error) {
    console.error("Failed to delete office.com cookies:", error);
  }
}

// Register click handler for the browser action
browser.action.onClicked.addListener(() => {
  console.log("Office cookie cleaner clicked.");
  deleteOfficeCookies();
});
