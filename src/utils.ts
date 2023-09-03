export function objectToQueryString(obj: Record<string, string>): string {
  const queryString = Object.entries(obj)
    .filter(([_, value]) => value !== "") // Exclude key-value pairs with empty values
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return `?${queryString}`;
}
