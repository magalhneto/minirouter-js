# MiniRouter.JS
MiniRouter is a micro client-side router written in javascript with just 25 lines.
## Instalation
```sh
<script src="dist/minirouter.min.js></script>
```
## Use
```sh
<head>
    <script>
        route('URLPATH', 'TEMPLATEID');
    </script>
</head>
<body>
    <div id="view"></div>
</body>
```
### Example

```sh
<head>
<script src="dist/minirouter.js"></script>
<script>
    route('/', 'homeTemplate');
    route('/about', 'aboutTemplate');
</script>
</head>
<body>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/about">About</a></li>
    </ul>
    <div id="view"></div>
    <template id="homeTemplate">
        <h1>HOME TEMPLATE</h1>
    </template>
    <template id="aboutTemplate">
        <h1>ABOUT TEMPLATE</h1>
    </template>
</body>
```
License
----

MIT