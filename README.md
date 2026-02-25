# Clara Consulta — Site MVP (Smoke Test)

## Estrutura
```
claramed-site/
├── index.html          ← Site completo (HTML + CSS + JS)
├── vercel.json         ← Config do Vercel
├── public/
│   ├── logo-icon.png   ← Logo ícone (C com coração)
│   └── logo-full.png   ← Logo horizontal (Clara Consulta)
└── README.md
```

## Deploy no Vercel (5 minutos)

### Passo 1 — Criar conta Vercel
1. Acesse https://vercel.com
2. Faça login com GitHub (ou crie conta)

### Passo 2 — Deploy
**Opção A (mais rápida): drag & drop**
1. Acesse https://vercel.com/new
2. Arraste a pasta `claramed-site` inteira para a área de upload
3. Clique "Deploy"

**Opção B: via CLI**
```bash
npm i -g vercel
cd claramed-site
vercel
```

### Passo 3 — Conectar domínio
1. No dashboard do Vercel, vá em Settings > Domains
2. Adicione: `claraconsulta.com.br`
3. No Registro.br, aponte o DNS:
   - Tipo A: `76.76.21.21`
   - Tipo CNAME (www): `cname.vercel-dns.com`

## Configurar Analytics

### Google Analytics 4
1. Crie conta em https://analytics.google.com
2. Pegue o ID (G-XXXXXXXXXX)
3. No index.html, descomente o bloco GA4 e substitua `G-XXXXXXXXXX`

### Meta Pixel
1. Crie pixel em https://business.facebook.com > Events Manager
2. Pegue o Pixel ID
3. No index.html, descomente o bloco Meta Pixel e substitua `PIXEL_ID`

## Eventos rastreados
- `form_submit` — CEP + celular enviados (GA4: event, Meta: Lead)
- `whatsapp_click` — clique no botão WhatsApp (Meta: Contact)
- `pesquisa_click` — clique no link da pesquisa R$50
- `notify_yes` — clique em "Sim, me avise!"

## Personalizar
- **Link da pesquisa**: busque `forms.google.com` no index.html e substitua pela URL do seu Google Forms
- **Instagram**: busque `instagram.com/claraconsulta` e ajuste se necessário
- **Facebook**: busque `facebook.com/claraconsulta` e ajuste
- **WhatsApp**: número já configurado (5511951785663)

## UTM para flyers (Fase 6)
Use este link nos QR codes impressos:
```
https://claraconsulta.com.br/?utm_source=flyer&utm_medium=print&utm_campaign=farmacia
```
