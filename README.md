# office.com cookie eliminator

This extension deletes all the office.com extensions to solve outlook
login loops.  I don't know how to make extensions, so don't trust
this.  But it's so simple, it probably doesn't do anything wrong.


## Installation

### Firefox

Go to <about:debugging#/runtime/this-firefox>, Select `Load temporary
add-on`, and select the `manifest.json` from this repository.

### Chrome

Change `"scripts": ["background.js"]` to `"service_worker":
"background.js"` (todo: can both be in there and it works across
both?)


## Status and to-do

It works for me but isn't well tested.

- If anyone wants to help prepare it for release, that help would be
  welcome.
- Make it work with Chrome also: can it be the same source code or do
  we need a compiling step or separate one?
  - Then change the repo name to not say "Firefox" ?
- Making it installable on normal Firefox needs the extension to be
  signed, which requires an account and approval.


## License

CC-0
