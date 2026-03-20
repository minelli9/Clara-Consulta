export default async function handler(req, res) {
  const url =
    'https://docs.google.com/spreadsheets/d/1wJcOzqIAHniWISLCBMXyUyudumtYFkqO7knM-GzChPw/export?format=csv';

  try {
    const response = await fetch(url, { redirect: 'follow' });
    const text = await response.text();

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (error) {
    console.error('Erro ao buscar planilha:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).send('Erro ao buscar dados');
  }
}
