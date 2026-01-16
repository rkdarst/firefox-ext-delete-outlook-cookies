# Create the zipfile that is the extension.
# This does not yet work, since the .xpi file would have to be signed.
zip firefox-ext-delete-outlook-cookies.xpi \
    manifest.json \
    background.js \
    icon.ico
