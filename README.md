# Utilities

<a name="typeOf"></a>

## typeOf ⇒ <code>String</code>
A better way of checking JavaScript types.

| Param | Type |
| --- | --- |
| obj | <code>Any</code> |

<a name="isEmpty"></a>

## isEmpty ⇒ <code>Boolean</code>
Checks if a value is empty.

| Param | Type |
| --- | --- |
| object | <code>Any</code> |

<a name="deepPath"></a>

## deepPath ⇒ <code>Any</code>
Access deep properties inside a JSON data using path

| Param | Type |
| --- | --- |
| path | <code>Array</code> |
| object | <code>JSON</code> |

<a name="mapOnObject"></a>

## mapOnObject ⇒ <code>Array</code>
Map on an object data, iteratee is the function invoked per iteration.

| Param | Type |
| --- | --- |
| object | <code>Object</code> |
| iteratee | <code>function</code> |

<a name="pluralize"></a>

## pluralize ⇒ <code>String</code>
Pluralizes a word based on the value of count.

| Param | Type |
| --- | --- |
| count | <code>Number</code> |
| text | <code>String</code> |
| suffix | <code>String</code> |

<a name="toProperCase"></a>

## toProperCase ⇒ <code>String</code>
Changes a given string to sentence case.

| Param | Type |
| --- | --- |
| str | <code>String</code> |

<a name="safeInvoke"></a>

## safeInvoke ⇒ <code>Any</code>
Safely invoke the function with the given arguments,
if it is indeed a function, and return its value.

| Param | Type |
| --- | --- |
| func | <code>function</code> |
| args | <code>Any</code> |

<a name="isValidEmail"></a>

## isValidEmail ⇒ <code>Boolean</code>
Checks if an email is valid

| Param | Type |
| --- | --- |
| email | <code>String</code> |

## Build

```
yarn build
```

This will transpile and build files for `cjs` and `es` environments.

The `dist` folder will have bundled version of the library

The `lib` folder will have transpiled version of the library targeting `es` module system.

## License

MIT © [Darpan Kakadia](https://github.com/kakadiadarpan)
