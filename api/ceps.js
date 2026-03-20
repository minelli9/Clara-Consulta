export default async function handler(req, res) {
  const url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTvituNOESdojX8mTSFlbruip1QL6yMMz51Keqo_GCDlOS43KjlAGYZfyKfUUw7_kJHjPp5jbqJimi7/pub?output=csv';

  const response = await fetch(url);
  const text = await response.text();

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).send(text);
}
