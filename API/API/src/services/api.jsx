const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error("Failed to fetch contacts");
  return response.json();
};

export const getContact = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (!response.ok) throw new Error("Failed to fetch contact");
  return response.json();
};
