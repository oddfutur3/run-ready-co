export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;

};

export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const formattedDate = date.toLocaleTimeString("en-US");
  return formattedDate;

};



export function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}


export function debouncedCall(callback, delay, timeout) {
  timeout && clearTimeout(timeout)
  timeout = setTimeout(callback,delay)
}