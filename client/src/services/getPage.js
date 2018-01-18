export default async function() {
  const response = await fetch("http://localhost:8080/api/v1/page");
  return response.json();
}
