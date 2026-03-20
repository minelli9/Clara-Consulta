export default async function handler(req, res) {
  const url =
    'https://docs.google.com/spreadsheets/d/1wJcOzqIAHniWISLCBMXyUyudumtYFkqO7knM-GzChPw/export?format=csv';

  const response = await fetch(url);
  const text = await response.text();

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(text);
}
