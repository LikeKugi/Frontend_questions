```JavaScript
function Unit() {
   	this._data; // just temp value
}
Unit.prototype = {
 	get accreation() {
   		return this._data;
   	},
   	set accreation(value) {
   		this._data = value
   	},
}
Unit.prototype.edit = function(data) {
   	this.accreation = data; // setting
   	this.out();
};

Unit.prototype.out = function() {
    alert(this.accreation); // getting
};

var unit = new Unit();
unit.edit('setting and getting');

function Field() {
    // children
}

Field.prototype = Object.create(Unit.prototype);

Field.prototype.add = function(data) {
  this.accreation = data; // setting
   	this.out();
}

var field1 = new Field();
field1.add('new value for getter&setter');

var field2 = new Field();
field2.out();// because field2 object has no setting
```

```JavaScript
Object.defineProperties(obj.__proto__, {"property_name": {get: getfn, set: setfn}})
```
