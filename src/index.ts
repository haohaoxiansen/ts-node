function createXHR() {
  let xhr = null;
  try {
    // IE7+
    xhr = new XMLHttpRequest();
  } catch (e) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        xhr = null;
      }
    }
  }
  return xhr;
}
