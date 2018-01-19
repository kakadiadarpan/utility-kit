/**
 * A better way of checking JavaScript types.
 *
 * @param  {Any} obj
 * @return {String}
 */
export const typeOf = (obj) => {
  let dataType = typeof obj;
  const constructorName = value => (value.constructor.name);
  dataType = constructorName(obj).toLowerCase();
  return dataType;
};

/**
 * Checks if a value is empty.
 *
 * @param  {Any} object
 * @return {Boolean}
 */
export const isEmpty = (obj) => {
  // null and undefined are "empty"
  if (obj == null) {
    return true;
  }

  const isDate = value => (typeOf(value) === "date");
  const isBoolean = value => (typeOf(value) === "boolean");

  if (isDate(obj) || isBoolean(obj)) {
    return false;
  }

  const isFunction = value => (typeOf(value) === "function");

  if (isFunction(obj)) {
    return obj.length === 0;
  }

  const isError = value => (typeOf(value) === "error");
  if (isError(obj)) {
    return obj.message === "";
  }
  const isSet = value => (typeOf(value) === "set");
  const isMap = value => (typeOf(value) === "map");
  const isFile = value => (typeOf(value) === "file");

  if (isSet(obj) || isMap(obj) || isFile(obj)) {
    return obj.size === 0;
  }

  const isNumber = value => (typeOf(value) === "number");

  if (isNumber(obj)) {
    return Number.isNaN(obj);
  }

  const isArray = value => (Array.isArray(value));
  if (isArray(obj)) {
    return obj.length === 0;
  }

  const isObject = value => (typeOf(value) === "object");
  if (isObject(obj)) {
    const keys = Object.keys(obj);
    for (let i = 0, key = keys[i]; i < keys.length; i += 1) {
      if (hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
  }
  return false;
};

/**
 * Access deep properties inside a JSON data using path
 *
 * @param  {Array} path
 * @param  {JSON} object
 * @return {Any}
 */
export const deepPath = (path, object) => {
  const reducerFunction = (data, key) => {
    return (data && ["null", "undefined"].indexOf(typeOf(data[key])) === -1) ? data[key] : null;
  };
  return path.reduce(reducerFunction, object);
};

/**
 * Map on an object data, iteratee is the function invoked per iteration.
 *
 * @param  {Object} object
 * @param  {Function} iteratee
 * @returns {Array}
 */
export const mapOnObject = (object, iteratee) => {
  const mapValues = [];
  for (const [name, value] of Object.entries(object)) {
    mapValues.push(iteratee(name, value));
  }
  return mapValues;
};

/**
 * Pluralizes a word based on the value of count.
 *
 * @param  {Number} count
 * @param  {String} text
 * @param  {String} suffix
 * @return {String}
 */
export const pluralize = (count, text, suffix = "s") => (
  count === 1 ? text : `${text}${suffix}`
);

/**
 * Changes a given string to sentence case.
 *
 * @param  {String} str
 * @return {String}
 */
export const toProperCase = (str) => {
  return str && str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

/**
 * Safely invoke the function with the given arguments,
 * if it is indeed a function, and return its value.
 *
 * @param  {Function} func
 * @param  {Any} args
 * @return {Any}
 */
export const safeInvoke = (func = undefined, ...args) => {
  const isFunction = value => (typeOf(func) === "function");
  return isFunction(func) && func(...args);
};

/**
 * Checks if an email is valid
 *
 * @param  {String} email
 * @return {Boolean}
 */
export const isValidEmail = (email) => {
  const pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return pattern.test(email);
};
