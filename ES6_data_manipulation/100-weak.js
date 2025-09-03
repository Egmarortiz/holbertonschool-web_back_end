// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
  // Check if endpoint is already tracked in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0); // Initialize counter
  }

  // Increment the counter
  let count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Throw an error if the endpoint has been queried >= 5 times
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return `Querying ${endpoint.protocol}://${endpoint.name} (Call #${count})`;
}

