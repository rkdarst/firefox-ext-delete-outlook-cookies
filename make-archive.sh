# Create the zipfile that is the extension.
# This does not yet work, since the .xpi file would have to be signed.

cd $(dirname $0)
mkdir -p build

echo '<a href="firefox-ext-delete-outlook-cookies.xpi">firefox-ext-delete-outlook-cookies.xpi</a>' > build/index.html

cp firefox-update-manifest.json build/

cd extension
# Firefox version
zip ../build/firefox-ext-delete-outlook-cookies.xpi \
    manifest.json \
    background.js \
    icon.ico
