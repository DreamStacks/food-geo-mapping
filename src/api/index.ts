export async function fetchData<T = any>(url: string, options: object): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: T = await response.json();
  return data;
}

export * from "./modules";
