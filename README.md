hotreload
=========

Add hot reload on static pages via polling.

Copy & Paste this:

```html
<script src="https://cdn.jsdelivr.net/gh/tom-010/hotreload/hotreload.js"></script>
```

To configure the poll interval (default 500ms), add this BEFORE the script:

```html
<script>window.poll_interval = 2000</script>
```

To reload css automatically add `reload="1"` to the tag, like:

```html
<link reload="1" rel="stylesheet" type="text/css" href="test.css" />
```
