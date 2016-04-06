Install
-------

npm install blakelapierre/scriptHandler#1.0.0


Usage
-----

In your own library (e.g. customTypeHandler.js):
````javascript
import scriptHandler from 'scriptHandler';

scriptHandler('custom/type', text => console.log(`Got custom/type with text: ${text}`));
````

````html
<script src="customTypeHandler.js">

<script type="custom/type">
  Custom script!
</script>
````

Example
-------
[application/es2015](https://github.com/blakelapierre/es2015Handler)