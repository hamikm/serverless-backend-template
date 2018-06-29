/**
 * In the potentially deeply-nested object o, for all values of type
 * valueType equal to origValue, replace them with newValue. If
 * newValue is undefined, delete the keys
 */
function deepReplace(obj, valueType, origValue, newValue, deleteTheseKeys=[]) {
  if (!obj || !(obj instanceof Object)) {
    return;
  }

  if (!(obj instanceof Array)) {
    Object.keys(obj).forEach((key) => {
      const nestedObj = obj[key];
      if (typeof nestedObj === valueType && nestedObj === origValue) {
        if (newValue === undefined) {
          deleteTheseKeys.push(key);
        } else {
          obj[key] = newValue;
        }
      } else if (nestedObj instanceof Object) {
        deepReplace(nestedObj, valueType, origValue, newValue);
      }
    });
    deleteTheseKeys.forEach((key) => {
      delete obj[key];
    });
  } else {
    obj.forEach((nestedObj, idx, currArr) => {
      if (typeof nestedObj === valueType && nestedObj === origValue) {
        if (newValue === undefined) {
          deleteTheseKeys.push(idx);
        } else {
          currArr[idx] = newValue;
        }
      } else if (nestedObj instanceof Object) {
        deepReplace(nestedObj, valueType, origValue, newValue);
      }
    });
    while (deleteTheseKeys.length > 0) {
      const idx = deleteTheseKeys.pop();
      obj.splice(idx, 1);
    }
  }
};

exports.attachPrincipalPolicy = attachPrincipalPolicy;
exports.handleAttachError = handleAttachError;
exports.createPolicy = createPolicy;
exports.generatePolicyDocumentTemplate = generatePolicyDocumentTemplate;
exports.deepReplace = deepReplace;
