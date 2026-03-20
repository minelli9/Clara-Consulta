const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxb99bI1kBnmZJtbgHCFIyw6_FIy6U752V0XdcKQM4aKBgmakvuueDPZhyok-mER2yB/exec';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  let source = req.method === 'POST' ? (req.body || {}) : (req.query || {});
  if (typeof source === 'string') {
    try {
      source = JSON.parse(source);
    } catch (_) {
      source = {};
    }
  }
  const cep = String(source.cep || '').replace(/\D/g, '');
  const cel = String(source.cel || '').replace(/\D/g, '');
  const especialidade = String(source.especialidade || '');
  const origem = String(source.origem || 'site');

  if (cep.length !== 8 || cel.length < 10) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(400).json({ ok: false, error: 'invalid_payload' });
  }

  const qs = new URLSearchParams({
    cep,
    cel,
    especialidade,
    origem,
    _t: String(Date.now()),
    source: 'vercel-api'
  });

  try {
    const response = await fetch(`${APPS_SCRIPT_URL}?${qs.toString()}`, { redirect: 'follow' });
    const text = await response.text();

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ ok: true, status: response.status, body: text.slice(0, 120) });
  } catch (error) {
    console.error('Erro ao enviar lead para Apps Script:', error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ ok: false, error: 'send_failed' });
  }
}
