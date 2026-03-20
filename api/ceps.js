export default async function handler(req, res) {
  const url =
    'https://docs.google.com/spreadsheets/d/1wJcOzqIAHniWISLCBMXyUyudumtYFkqO7knM-GzChPw/export?format=csv';

  try {
    const response = await fetch(url);
    const text = await response.text();

    console.log('=== CEPs API DEBUG ===');
    console.log('Status:', response.status);
    console.log('CSV Length:', text.length);
    console.log('First 500 chars:', text.substring(0, 500));
    console.log('=== END DEBUG ===');

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(text);
  } catch (error) {
    console.error('Erro ao buscar planilha:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).send('Erro ao buscar dados');
  }
}
