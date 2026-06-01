# Instruções do Projeto — Site

## Skills Obrigatórias

Antes de criar qualquer interface, componente, layout ou texto, leia e aplique
as diretrizes nas seguintes skills:
~/.claude/skills/copywriting-pro/SKILL.md   → Todo conteúdo textual
~/.claude/skills/frontend-design/SKILL.md   → Direção criativa e estética
~/.claude/skills/ui-ux-pro-max/SKILL.md     → Design system e padrões de UX
~/.claude/skills/page-cro/SKILL.md          → Otimização de conversão por seção
~/.claude/skills/seo-audit/SKILL.md         → SEO técnico e on-page
~/.claude/skills/schema-markup/SKILL.md     → Dados estruturados JSON-LD
~/.claude/skills/analytics-tracking/SKILL.md → Configuração de GA4/GTM

Nunca comece a implementar copy, UI ou design sem consultar os arquivos acima primeiro.

---

## Responsabilidade dos Arquivos

### `CLAUDE.md` — INTOCÁVEL
- Define processo de trabalho e regras de execução
- Vale para qualquer projeto, qualquer nicho, qualquer cliente
- NUNCA deve ser editado, sob nenhuma circunstância, a não ser a pedido do editor (Joatan Rodrigues)
- Não contém cores, fontes, estilos ou qualquer detalhe específico de projeto

### `PROJECT_SPEC.md` — Criado por você no início de cada projeto
- Criado do zero para cada novo projeto
- Contém tudo que é específico da referência: paleta, fontes, seções,
  espaçamentos, animações, padrões de layout
- É a fonte de verdade visual do projeto
- DEVE conter valores numéricos exatos — nunca descrições vagas como
  "espaçamento generoso" ou "fonte grande". Exemplo correto:
  padding-section: 120px | font-size-h1: 64px | gap-cards: 32px

### `CONTENT.md` — Criado por você no início de cada projeto
- Criado antes de qualquer implementação de design
- Contém todo o conteúdo textual: headlines, serviços, depoimentos, contatos
- É a fonte de verdade de conteúdo do projeto
- Nenhum texto pode ser inventado fora do CONTENT.md

### `reference.html` — Criado por você no início de cada projeto (quando há referência)
- Criado com o código fonte HTML/CSS/JS fornecido pelo usuário
- Salvo na pasta `reference/`
- Usado em conjunto com o screenshot full-size para extração de valores exatos
- Nunca deve ser alterado após criado — é a fonte de verdade técnica da referência

---

## Ordem de Execução Obrigatória

### Etapa 0 — Preparação do Ambiente

#### Quando há referência visual:
1. Crie as pastas `screenshots/reference/` e `reference/`
2. Avise o usuário que as pastas estão prontas
3. **PAUSA OBRIGATÓRIA** — aguarde o usuário colocar:
   - O screenshot full-size da página de referência em `screenshots/reference/`
   - O código fonte HTML/CSS/JS da referência na pasta `reference/`
4. Aguarde a confirmação do usuário para prosseguir
5. Crie o `reference/reference.html` com o código fonte recebido em anexo
6. Leia o screenshot + `reference.html`, extraia os valores exatos e crie o `PROJECT_SPEC.md`

#### Quando não há referência (projeto do zero):
1. Crie as pastas `screenshots/progress/`
2. **PAUSA OBRIGATÓRIA** — antes de qualquer implementação, pergunte ao usuário:
   - Qual o nicho e objetivo do site?
   - Quem é o público-alvo (idade, dores, nível de consciência)?
   - Existe alguma referência de estilo (site que admira, mood, paleta preferida)?
   - Qual o CTA principal?
   - Quais seções são obrigatórias?
3. Com as respostas, crie o `PROJECT_SPEC.md` com decisões de design documentadas
   (paleta escolhida com hex exato, fontes, espaçamentos, breakpoints)
4. Aguarde aprovação do PROJECT_SPEC.md antes de implementar

### Etapa 0.5 — Análise de Contexto (obrigatória antes do CONTENT.md)

Antes de escrever qualquer copy ou definir qualquer visual, execute:

#### Análise de Concorrentes
- Pesquise 2–3 concorrentes diretos do cliente
- Documente no PROJECT_SPEC.md:
  - O que eles prometem (proposta de valor)
  - O que eles NÃO prometem (gap = oportunidade do cliente)
  - Paleta e estilo visual predominante no mercado (para diferenciar ou alinhar)

#### Diferencial Único
- Defina em UMA frase o diferencial do cliente que nenhum concorrente usa
- Essa frase é a base de toda a copy e deve aparecer no PROJECT_SPEC.md
- Nunca use: "qualidade", "excelência", "comprometimento", "atendimento personalizado"

#### Tom de Voz
Documente no PROJECT_SPEC.md as respostas para:
- Formal ou informal? (ex: "você consegue" vs "conquiste")
- Técnico ou simples? (ex: jargões do nicho vs linguagem do leigo)
- Direto ou narrativo? (ex: bullet points vs storytelling)
- Exemplo de frase que representa o tom certo e uma que representa o tom errado

### Etapa 1 — Conteúdo
- Leia `copywriting-pro/SKILL.md` e `page-cro/SKILL.md`
- Crie o `CONTENT.md` completo com todo o conteúdo textual do projeto
- Para cada seção do CONTENT.md, documente:
  - **Objeção quebrada**: qual dúvida ou resistência essa seção elimina
  - **Emoção ativada**: o que o visitante deve sentir ao ler (segurança, urgência, desejo, etc.)
  - **Próximo passo induzido**: o que o visitante deve querer fazer depois de ler
- Valide a ordem das seções pela jornada do visitante: consciência → interesse → desejo → ação
- Valide o CONTENT.md com o checklist de copy antes de avançar

### Etapa 2 — Design System
- Leia `frontend-design/SKILL.md` e `ui-ux-pro-max/SKILL.md`
- Crie o design system base: variáveis CSS, tipografia, cores e espaçamentos
- Todos os valores devem vir do `PROJECT_SPEC.md`
- Defina e documente no PROJECT_SPEC.md os **estados de todos os componentes interativos** antes de implementar:
  - Botão: default | hover | active | focus | disabled
  - Card: default | hover
  - Link: default | hover | visited | focus
  - Input/form: default | focus | error | success
  - Micro-interações: duração padrão (ex: 200ms) e easing padrão (ex: ease-out) — aplicar igual em todo o site
- Nunca invente um estado durante a implementação — ele deve estar no PROJECT_SPEC.md primeiro

### Etapa 3 — Implementação
- Implemente cada seção com o conteúdo do `CONTENT.md`
- Ao concluir cada seção, execute obrigatoriamente o Loop de Screenshot abaixo
- Só avance para a próxima seção após a Iteração 3/3 estar zerada

#### Loop de Screenshot por Seção

**Passo 1 — Preparar o recorte da referência**
Antes de comparar, recorte a seção correspondente do screenshot full-size da referência e salve em `screenshots/reference/reference-[nome-secao].png`:

```bash
node -e "
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file://' + path.resolve('reference/reference.html'), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.fade-in { opacity: 1 !important; transform: none !important; transition: none !important; }' });
  await page.waitForTimeout(500);
  // Substituir .SELETOR-REFERENCIA pela classe da seção na referência
  const el = await page.\$('.SELETOR-REFERENCIA');
  const box = await el.boundingBox();
  await page.evaluate((y) => window.scrollTo(0, y), box.y);
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'screenshots/reference/reference-NOME-SECAO.png' });
  await browser.close();
})();
"
```

**Passo 2 — Tirar screenshot da seção implementada**
Capturar a mesma seção do site em desenvolvimento:

```bash
node -e "
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file://' + path.resolve('index.html'), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.fade-in { opacity: 1 !important; transform: none !important; transition: none !important; }' });
  await page.waitForTimeout(500);
  // Substituir .SELETOR pela classe da seção no site implementado
  const el = await page.\$('.SELETOR');
  const box = await el.boundingBox();
  await page.evaluate((y) => window.scrollTo(0, y), box.y);
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'screenshots/progress/itN-NOME-SECAO.png' });
  await browser.close();
})();
"
```

**Passo 3 — Comparação direta (obrigatório usar o tool Read nos dois arquivos)**
- Leia `screenshots/progress/it1-[nome-secao].png` com o tool Read
- Leia `screenshots/reference/reference-[nome-secao].png` com o tool Read
- Compare os dois visualmente e preencha o checklist numérico com valores exatos
- Registre cada diferença no formato: `font-size atual: 48px | referência: 64px → ❌`
- Corrija TODOS os ❌ antes da próxima iteração

**Contagem obrigatória:**
- **Iteração 1/3** — identificar e corrigir todas as divergências estruturais e de valores
- **Iteração 2/3** — verificar se as correções foram aplicadas; corrigir residuais
- **Iteração 3/3** — confirmação final: zero diferenças → avançar para a próxima seção
- Se na Iteração 3 ainda houver ❌, continue (4ª, 5ª...) até zerar

**Nomenclatura dos arquivos de progresso:**
```
screenshots/progress/it1-navbar.png
screenshots/progress/it2-navbar.png
screenshots/progress/it3-navbar.png
screenshots/reference/reference-navbar.png
screenshots/reference/reference-hero.png
screenshots/reference/reference-[nome-secao].png
```

### Etapa 4 — SEO, Performance e Analytics
- Implemente todas as meta tags (ver seção SEO abaixo)
- Adicione Schema.org JSON-LD conforme o tipo de negócio
- Otimize imagens (WebP, lazy loading, dimensões corretas)
- Configure GA4/GTM se o usuário fornecer os IDs
- Gere o `sitemap.xml` com todas as páginas do site
- Execute o checklist de performance (ver abaixo)
- **Execute o Lighthouse via CLI e registre os scores reais:**

```bash
npx lighthouse file://$(pwd)/index.html \
  --output=json \
  --output-path=./lighthouse-report.json \
  --chrome-flags="--headless" \
  --only-categories=performance,accessibility,best-practices,seo \
  --quiet
node -e "
const r = require('./lighthouse-report.json');
const c = r.categories;
console.log('Performance:', Math.round(c.performance.score * 100));
console.log('Acessibilidade:', Math.round(c.accessibility.score * 100));
console.log('Boas práticas:', Math.round(c['best-practices'].score * 100));
console.log('SEO:', Math.round(c.seo.score * 100));
"
```

Scores mínimos aceitáveis para entrega:
- Performance ≥ 90
- Acessibilidade ≥ 90
- SEO ≥ 95
- Boas práticas ≥ 90

Se algum score estiver abaixo do mínimo, corrija antes de avançar para a Etapa 5.

### Etapa 5 — Integração e QA
- Integre todas as seções
- Execute o Relatório de Comparação Final
- Corrija todas as diferenças
- Execute o **QA de Funcionalidade** antes de entregar:

#### QA de Funcionalidade (obrigatório)

**Links e CTAs:**
- Clique em cada botão CTA — verificar se abre o destino correto (WhatsApp, âncora, página)
- Clique no logo — verificar se vai para o topo
- Clique em cada link do footer (Instagram, WhatsApp, email) — verificar se abre corretamente
- Verificar se o link do WhatsApp tem o número correto e a mensagem pré-preenchida

**Formulário (se houver):**
- Submeter com campos vazios — verificar se a validação bloqueia e exibe mensagem de erro
- Submeter com dados válidos — verificar se o envio ocorre e exibe confirmação
- Verificar se o campo email rejeita formato inválido

**Navegação:**
- Navegar a página inteira usando apenas o teclado (Tab → Enter)
- Verificar se todos os elementos interativos recebem foco visível
- Testar menu mobile: abrir, navegar pelos links, fechar

**Validação de HTML:**
```bash
npx html-validate index.html
```
Corrija todos os erros antes de entregar (warnings são aceitáveis).

- Entregue somente quando o checklist final estiver 100% ✅

**Regra crítica: nunca comece o design antes do `CONTENT.md` estar pronto e validado.**

---

## Padrão de Código

- **HTML**: Semântico (HTML5) — use `<section>`, `<article>`, `<header>`, `<main>`, `<footer>` corretamente
- **CSS**: Variáveis CSS obrigatórias (`--color-*`, `--font-*`, `--spacing-*`), mobile-first
- **JS**: Vanilla por padrão; React apenas quando o projeto exigir reatividade complexa
- **Nenhum framework CSS genérico** (sem Bootstrap, Bulma etc.) — escreva o CSS próprio do projeto

---

## Breakpoints Padrão

Use sempre os seguintes breakpoints, do menor para o maior (mobile-first):

```css
/* Mobile: base (sem media query) — até 767px */
/* Tablet: */
@media (min-width: 768px) { }
/* Desktop pequeno: */
@media (min-width: 1024px) { }
/* Desktop padrão: */
@media (min-width: 1280px) { }
/* Desktop largo: */
@media (min-width: 1440px) { }
```

Regras:
- O base (sem media query) é sempre o mobile
- Nunca use `max-width` para lógica principal — apenas para correções pontuais
- Container máximo: `1280px` por padrão, salvo se `PROJECT_SPEC.md` indicar outro valor
- Padding lateral mobile: `16px` | tablet: `32px` | desktop: `80px` (ou valores do PROJECT_SPEC.md)

---

## Design — Fidelidade Visual à Referência é OBRIGATÓRIA

O objetivo é replicar o design da referência com precisão máxima.
"Inspirado em" NÃO é aceito. "Parecido com" NÃO é aceito.
O resultado deve ser visualmente idêntico à referência, trocando apenas o conteúdo.

### Fonte de Referência Visual
Você receberá dois arquivos do usuário:
- **Screenshot full-size** da página de referência → mostra como o design parece visualmente
- **Código fonte HTML/CSS/JS** da referência → confirma os valores exatos sem estimativa visual
- **Vídeo das animações** (quando disponível) → usado para reconstruir animações complexas

O código fonte tem prioridade para valores numéricos.
O screenshot tem prioridade para percepção visual e estados de hover.
O vídeo é a fonte de verdade para timing e sequência de animações.

### Regras de Replicação Visual

- Mantenha o screenshot de referência da seção aberto durante toda a implementação
- Extraia valores de espaçamento, fonte, border-radius, gap e padding diretamente do código fonte
- Cores em hex exato extraído do código fonte — nunca aproximadas
- Layout de grid (colunas, largura de cards) deve replicar a referência
- Hierarquia tipográfica deve replicar tamanho, peso e espaçamento da referência
- Animações presentes na referência são obrigatórias — não opcionais
- Se o código fonte da animação estiver no `reference.html`, extraia diretamente
- Se não estiver, analise o vídeo fornecido e reconstrua com base na análise visual
- Diferenças visuais são bugs — corrija, não justifique

#### Loop de Screenshot Mobile — Obrigatório após fechar o desktop

Após a Iteração 3/3 desktop de TODAS as seções, execute o loop mobile:

```bash
# Mobile 375px (iPhone)
node -e "
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('file://' + path.resolve('index.html'), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.fade-in { opacity: 1 !important; transform: none !important; }' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/progress/mobile-375-full.png', fullPage: true });
  await browser.close();
})();
"

# Tablet 768px
node -e "
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('file://' + path.resolve('index.html'), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.fade-in { opacity: 1 !important; transform: none !important; }' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/progress/tablet-768-full.png', fullPage: true });
  await browser.close();
})();
"
```

Checklist Mobile obrigatório:
- Menu hamburger abre e fecha: [✅ ou ❌]
- Nenhum texto cortado ou overflow horizontal: [✅ ou ❌]
- Font-size body ≥ 16px no mobile: [✅ ou ❌]
- Botões com altura mínima 44px (área de toque): [✅ ou ❌]
- Imagens não distorcidas: [✅ ou ❌]
- Cards empilhados corretamente (1 coluna): [✅ ou ❌]
- Padding lateral ≥ 16px em todos os elementos: [✅ ou ❌]
- Botão WhatsApp flutuante visível e clicável: [✅ ou ❌]

**Só avance para o Loop Final quando o mobile estiver ✅ em todos os itens.**

#### Loop de Comparação Final (página completa):

Após todas as seções implementadas, execute mais 3 ciclos com full-page:

```bash
node -e "
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file://' + path.resolve('index.html'), { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '.fade-in { opacity: 1 !important; transform: none !important; transition: none !important; }' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/progress/final-full-page.png', fullPage: true });
  await browser.close();
})();
"
```

- **Iteração F1/3**: Comparar página completa vs referência full-size
- **Iteração F2/3**: Verificar e corrigir residuais encontrados na F1
- **Iteração F3/3**: Aprovação final — site visualmente idêntico à referência

Checklist numérico por seção:
- Cor de fundo (hex): [atual] vs [referência] → [✅ ou ❌]
- Cor do texto principal (hex): [atual] vs [referência] → [✅ ou ❌]
- Font-family heading: [atual] vs [referência] → [✅ ou ❌]
- Font-size heading (px): [atual] vs [referência] → [✅ ou ❌]
- Font-weight heading: [atual] vs [referência] → [✅ ou ❌]
- Letter-spacing (px ou em): [atual] vs [referência] → [✅ ou ❌]
- Font-family body: [atual] vs [referência] → [✅ ou ❌]
- Font-size body (px): [atual] vs [referência] → [✅ ou ❌]
- Padding interno da seção (px): [atual] vs [referência] → [✅ ou ❌]
- Gap entre cards/itens (px): [atual] vs [referência] → [✅ ou ❌]
- Border-radius de cards/botões (px): [atual] vs [referência] → [✅ ou ❌]
- Número de colunas do grid: [atual] vs [referência] → [✅ ou ❌]
- Largura máxima do container (px): [atual] vs [referência] → [✅ ou ❌]
- Cor dos botões CTA (hex): [atual] vs [referência] → [✅ ou ❌]
- Animações presentes: [atual] vs [referência] → [✅ ou ❌]
- Hover states: [atual] vs [referência] → [✅ ou ❌]

### O que NUNCA fazer no Design

- Tomar decisões estéticas próprias que não estejam na referência
- Usar cores aproximadas — apenas hex exato extraído do código fonte
- Usar espaçamentos estimados — apenas valores extraídos do código fonte
- Entregar uma seção sem completar o Loop de Screenshot
- Pular etapas de screenshot e comparação
- Usar texto que não esteja no `CONTENT.md`
- Editar o `CLAUDE.md` por qualquer motivo

---

## Copy

- Todo texto vem exclusivamente do `CONTENT.md` — nunca inventado durante o design
- O `CONTENT.md` é criado com base na skill `copywriting-pro/SKILL.md`
- **Nunca usar Lorem Ipsum** ou qualquer placeholder de texto
- Headlines nunca podem conter o nome da empresa
- Diferenciais nunca podem ser "qualidade", "excelência" ou "comprometimento"
- Todo texto escrito na segunda pessoa ("você")
- Serviços descritos por benefício, nunca por processo

---

## SEO Técnico

### Meta Tags Obrigatórias (toda página)

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO básico -->
  <title>[Palavra-chave principal] — [Nome da empresa] | [Cidade/Nicho]</title>
  <meta name="description" content="[150–160 caracteres com CTA e palavra-chave]" />
  <link rel="canonical" href="https://[dominio.com.br]/" />

  <!-- Open Graph (WhatsApp, Facebook, LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="[Mesmo título ou variação]" />
  <meta property="og:description" content="[Mesma description ou variação]" />
  <meta property="og:image" content="https://[dominio.com.br]/assets/og-image.jpg" />
  <meta property="og:url" content="https://[dominio.com.br]/" />
  <meta property="og:locale" content="pt_BR" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="[Título]" />
  <meta name="twitter:description" content="[Description]" />
  <meta name="twitter:image" content="https://[dominio.com.br]/assets/og-image.jpg" />

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
</head>
```

Regras de SEO:
- Title: máximo 60 caracteres
- Description: entre 150 e 160 caracteres, sempre com um verbo de ação
- og:image: 1200×630px, JPG ou PNG, menos de 200kb
- Canonical: sempre com URL absoluta e trailing slash consistente
- Pergunte ao usuário o domínio final antes de preencher — nunca invente

### Schema.org JSON-LD

Adicione antes do `</body>` conforme o tipo de negócio:

**Negócio local / prestador de serviços:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Nome da empresa]",
  "description": "[Descrição do negócio]",
  "url": "https://[dominio.com.br]",
  "telephone": "[+55 XX XXXXX-XXXX]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[Cidade]",
    "addressRegion": "[Estado]",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.instagram.com/[usuario]",
    "https://wa.me/[numero]"
  ]
}
</script>
```

**Profissional liberal (médico, psicólogo, advogado, coach):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "[Nome completo]",
  "jobTitle": "[Profissão]",
  "url": "https://[dominio.com.br]",
  "sameAs": ["https://www.instagram.com/[usuario]"]
}
</script>
```

**FAQ (se a página tiver seção de perguntas frequentes):**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Pergunta]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Resposta]"
      }
    }
  ]
}
</script>
```

Regra: pergunte ao usuário o tipo de negócio antes de escolher o schema.

---

## Performance

### Imagens
- Formato preferido: **WebP** (fallback JPG/PNG via `<picture>`)
- Sempre defina `width` e `height` explícitos no `<img>` para evitar CLS
- Use `loading="lazy"` em todas as imagens fora do viewport inicial
- A imagem hero (above the fold) deve ter `loading="eager"` e `fetchpriority="high"`
- Dimensione imagens para o tamanho real exibido — nunca sirva 2000px para um card de 400px
- Comprima antes de usar: alvo abaixo de 150kb por imagem

```html
<!-- Imagem hero — eager + alta prioridade -->
<img
  src="hero.webp"
  alt="[Descrição real da imagem]"
  width="1440"
  height="800"
  loading="eager"
  fetchpriority="high"
/>

<!-- Demais imagens — lazy -->
<img
  src="servico.webp"
  alt="[Descrição]"
  width="600"
  height="400"
  loading="lazy"
/>
```

### Fontes
- Carregue fontes do Google Fonts com `display=swap`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet" />
  ```
- Pré-carregue a fonte principal com `<link rel="preload">`:
  ```html
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=...&display=swap" />
  ```
- Nunca bloqueie a renderização com fontes — sempre `font-display: swap`

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: a imagem hero ou heading principal deve carregar em menos de 2,5s
  - Use `fetchpriority="high"` na imagem hero
  - Evite CSS background-image no elemento LCP — prefira `<img>`
- **CLS (Cumulative Layout Shift)**: sempre defina width/height em imagens e espaço reservado para fontes
- **FID/INP**: evite JavaScript blocking no carregamento inicial — scripts não críticos com `defer` ou `async`

```html
<!-- Scripts não críticos -->
<script src="main.js" defer></script>
<!-- Analytics no final do body ou com async -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"></script>
```

---

## Acessibilidade

### Regras obrigatórias

- **Contraste mínimo**: texto normal ≥ 4,5:1 | texto grande (18px+) ≥ 3:1 (WCAG AA)
  - Verifique sempre que escolher cor de texto sobre fundo colorido
- **Alt text**: toda `<img>` deve ter `alt` descritivo — nunca vazio exceto em imagens decorativas (`alt=""`)
- **Foco visível**: nunca remova o outline de foco sem substituir por alternativa visível
  ```css
  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 3px;
  }
  ```
- **Navegação por teclado**: todos os elementos interativos (links, botões, inputs) acessíveis via Tab
- **Roles e ARIA**: use apenas quando o HTML semântico não for suficiente
  ```html
  <!-- Botão de menu mobile -->
  <button aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-menu">
  <!-- Seção de depoimentos -->
  <section aria-label="Depoimentos de clientes">
  <!-- Ícone decorativo (sem significado) -->
  <svg aria-hidden="true">...</svg>
  ```
- **Idioma**: declare sempre `<html lang="pt-BR">`
- **Ordem de headings**: `h1` único por página → `h2` por seção → `h3` para sub-itens
  - Nunca pule níveis (h1 → h3)
  - Nunca use heading apenas por estilo — use CSS para estilizar, heading para hierarquia
- **Links**: texto descritivo — nunca "clique aqui" ou "saiba mais" solto sem contexto
  ```html
  <!-- Errado -->
  <a href="/servicos">Clique aqui</a>
  <!-- Certo -->
  <a href="/servicos">Ver todos os serviços de nutrição</a>
  ```
- **Formulários**: todo `<input>` associado a um `<label>` com `for`/`id`

---

## Analytics

### Configuração GA4 + GTM

Pergunte ao usuário antes de implementar:
- ID do GA4 (formato: `G-XXXXXXXXXX`)
- ID do GTM (formato: `GTM-XXXXXX`) — se usar Tag Manager
- Quais eventos rastrear (cliques em CTA, scroll, envio de formulário, clique no WhatsApp)

**Implementação direta GA4 (sem GTM):**
```html
<!-- No <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Implementação GTM:**
```html
<!-- No <head> — o mais alto possível -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>

<!-- Logo após o <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

**Eventos customizados importantes:**
```js
// Clique no CTA principal
document.querySelector('.btn-cta-primary').addEventListener('click', () => {
  gtag('event', 'cta_click', { event_category: 'engagement', event_label: 'hero_cta' });
});

// Clique no WhatsApp
document.querySelector('.whatsapp-btn').addEventListener('click', () => {
  gtag('event', 'whatsapp_click', { event_category: 'contact' });
});

// Envio de formulário
document.querySelector('form').addEventListener('submit', () => {
  gtag('event', 'form_submit', { event_category: 'lead' });
});
```

Se o usuário não fornecer IDs, deixe comentários marcados `<!-- TODO: add GA4 ID -->` nos lugares corretos e registre no checklist final.

---

## Deploy

### Opções recomendadas

**Netlify (recomendado para sites estáticos):**
1. Crie o arquivo `netlify.toml` na raiz do projeto:
   ```toml
   [build]
     publish = "."

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"
   ```
2. Arraste a pasta do projeto para app.netlify.com ou conecte o repositório GitHub

**Vercel:**
1. Crie o arquivo `vercel.json` na raiz:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           { "key": "X-Content-Type-Options", "value": "nosniff" },
           { "key": "X-Frame-Options", "value": "DENY" }
         ]
       }
     ]
   }
   ```
2. Conecte o repositório GitHub em vercel.com

### Checklist pré-deploy
- [ ] Domínio personalizado configurado (perguntar ao usuário)
- [ ] HTTPS ativo (automático no Netlify/Vercel)
- [ ] Canonical URL atualizada com domínio final
- [ ] og:image com URL absoluta do domínio final
- [ ] IDs de GA4/GTM inseridos (não mais placeholders TODO)
- [ ] Favicon e apple-touch-icon presentes
- [ ] `robots.txt` criado (permitir tudo, a menos que o usuário peça o contrário)
- [ ] `sitemap.xml` criado (para sites com mais de uma página)

**`robots.txt` padrão:**
```
User-agent: *
Allow: /
Sitemap: https://[dominio.com.br]/sitemap.xml
```

---

## Estrutura de Arquivos

```
src/
  assets/       → imagens, fontes locais, ícones SVG
  css/          → estilos (main.css + módulos por seção)
  js/           → scripts (main.js + módulos)
  components/   → partes reutilizáveis (hero, navbar, footer…)
public/           → arquivos estáticos prontos para deploy
reference/
  reference.html        → código fonte HTML/CSS/JS da referência
  [video-animacao.mp4]  → vídeo de animações (quando fornecido pelo usuário)
screenshots/
  reference/
    reference-full.png      → screenshot full-size fornecido pelo usuário
    reference-navbar.png    → recorte da navbar
    reference-hero.png      → recorte do hero
    reference-mid.png       → recorte das seções intermediárias
    reference-footer.png    → recorte do footer
  progress/
    01-navbar.png
    02-hero.png
    03-[nome-da-secao].png
    04-[nome-da-secao].png
    05-full-page.png
netlify.toml              → configuração de deploy (Netlify)
vercel.json               → configuração de deploy (Vercel)
robots.txt                → permissões para crawlers
sitemap.xml               → mapa do site (quando houver múltiplas páginas)
```

---

## Screenshot Workflow — Visual Validation

### Fresh Start em Cada Nova Tarefa
No início de cada novo projeto, limpe a pasta de progresso:

```bash
find screenshots/progress -type f -name "*.png" -delete && echo "Screenshots cleared."
```

### Quando Tirar Screenshots
- Após implementar ou atualizar a Navbar
- Após implementar ou atualizar o Hero
- Após adicionar ou modificar qualquer seção
- Após qualquer correção que afete o visual
- Na entrega final de cada seção ou da página completa

### Como Tirar Screenshots

```bash
npx playwright screenshot http://127.0.0.1:5500/index.html screenshots/progress/[section-name].png --viewport-size="1440,900" --full-page
```

Se o Playwright não estiver instalado:

```bash
npx playwright install chromium
```

### Convenção de Nomenclatura
```
screenshots/progress/01-navbar.png
screenshots/progress/02-hero.png
screenshots/progress/03-[nome-da-secao].png
screenshots/progress/04-[nome-da-secao].png
screenshots/progress/05-full-page.png
```

### Recortes da Referência por Seção
Recorte o screenshot full-size em partes para ter a referência isolada de cada seção:

```bash
node -e "
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('file://\$(pwd)/reference/reference.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'screenshots/reference/reference-full.png', fullPage: true });
  await page.screenshot({ path: 'screenshots/reference/reference-viewport.png', fullPage: false });
  await browser.close();
  console.log('Reference captured!');
})();
"
```

### Relatório de Comparação Final

COPY:
Headline sem nome da empresa: [✅ ou ❌]
Serviços orientados a benefício: [✅ ou ❌]
Depoimentos com resultado concreto: [✅ ou ❌]
FAQ com objeções reais: [✅ ou ❌]
CTA com verbo forte: [✅ ou ❌]

TYPOGRAPHY:
Heading font: [atual] vs [referência] → [✅ ou ❌]
Heading weight: [atual] vs [referência] → [✅ ou ❌]
Heading size (px): [atual] vs [referência] → [✅ ou ❌]
Letter spacing: [atual] vs [referência] → [✅ ou ❌]
Body font: [atual] vs [referência] → [✅ ou ❌]
Body size (px): [atual] vs [referência] → [✅ ou ❌]
Label style: [atual] vs [referência] → [✅ ou ❌]
Button font: [atual] vs [referência] → [✅ ou ❌]

LAYOUT:
Espaçamento de seções (px): [atual] vs [referência] → [✅ ou ❌]
Grid de cards (colunas): [atual] vs [referência] → [✅ ou ❌]
Largura máxima container (px): [atual] vs [referência] → [✅ ou ❌]
Padding interno seções (px): [atual] vs [referência] → [✅ ou ❌]
Gap entre elementos (px): [atual] vs [referência] → [✅ ou ❌]
Responsivo mobile: [✅ ou ❌]

VISUAL:
Paleta de cores (hex exato): [✅ ou ❌]
Border-radius cards (px): [atual] vs [referência] → [✅ ou ❌]
Animações: [✅ ou ❌]
Hover states: [✅ ou ❌]

SEO:
Title tag (até 60 chars): [✅ ou ❌]
Meta description (150–160 chars): [✅ ou ❌]
Canonical URL: [✅ ou ❌]
Open Graph completo: [✅ ou ❌]
Schema.org JSON-LD: [✅ ou ❌]
Ordem de headings (h1 único): [✅ ou ❌]
Alt text em todas as imagens: [✅ ou ❌]

PERFORMANCE:
Imagens em WebP: [✅ ou ❌]
Width/height definidos em todas as imagens: [✅ ou ❌]
Imagem hero com fetchpriority="high": [✅ ou ❌]
Fontes com font-display: swap: [✅ ou ❌]
Scripts não críticos com defer/async: [✅ ou ❌]

ACESSIBILIDADE:
lang="pt-BR" no <html>: [✅ ou ❌]
Contraste ≥ 4,5:1 no texto principal: [✅ ou ❌]
Foco visível em todos os elementos interativos: [✅ ou ❌]
ARIA labels em botões sem texto: [✅ ou ❌]
Formulários com labels associados: [✅ ou ❌]

ANALYTICS:
GA4/GTM instalado (ou TODO marcado): [✅ ou ❌]
Evento de clique no CTA principal: [✅ ou ❌]
Evento de clique no WhatsApp: [✅ ou ❌]

LINKS:
Todos os CTAs linkados corretamente: [✅ ou ❌]
Redes sociais no footer: [✅ ou ❌]
Botão flutuante WhatsApp: [✅ ou ❌]

DEPLOY:
netlify.toml ou vercel.json criado: [✅ ou ❌]
robots.txt criado: [✅ ou ❌]
Canonical URL com domínio final: [✅ ou ❌]

PRÓXIMOS AJUSTES: [lista com valores exatos do que precisa corrigir]

---

## Todo Workflow — Task Tracking

### Todo List Padrão

- [ ] Ler ~/.claude/skills/copywriting-pro/SKILL.md
- [ ] Ler ~/.claude/skills/frontend-design/SKILL.md
- [ ] Ler ~/.claude/skills/ui-ux-pro-max/SKILL.md
- [ ] Ler ~/.claude/skills/page-cro/SKILL.md
- [ ] Ler ~/.claude/skills/seo-audit/SKILL.md
- [ ] Ler ~/.claude/skills/schema-markup/SKILL.md
- [ ] Ler CLAUDE.md
- [ ] Criar pastas `screenshots/reference/` e `reference/` e avisar o usuário (ou `screenshots/progress/` se projeto do zero)
- [ ] **AGUARDAR** o usuário colocar o screenshot, código fonte e vídeo (se houver) nas pastas — ou responder o briefing se projeto do zero
- [ ] **AGUARDAR** confirmação do usuário para prosseguir
- [ ] Criar `reference/reference.html` com o código fonte recebido (quando há referência)
- [ ] Extrair valores exatos do screenshot + reference.html (quando há referência)
- [ ] Criar PROJECT_SPEC.md com valores numéricos exatos
- [ ] Etapa 0.5 — Analisar 2–3 concorrentes e documentar gaps no PROJECT_SPEC.md
- [ ] Etapa 0.5 — Definir diferencial único em uma frase no PROJECT_SPEC.md
- [ ] Etapa 0.5 — Definir tom de voz (formal/informal, técnico/simples, direto/narrativo) no PROJECT_SPEC.md
- [ ] Etapa 0.5 — Definir estados de componentes (botão, card, link, input) e micro-interações no PROJECT_SPEC.md
- [ ] Criar CONTENT.md completo com base na skill de copywriting
- [ ] Documentar objeção quebrada + emoção ativada + próximo passo para cada seção do CONTENT.md
- [ ] Validar ordem das seções pela jornada: consciência → interesse → desejo → ação
- [ ] Validar CONTENT.md (checklist de copy)
- [ ] Criar index.html — estrutura completa baseada no CONTENT.md
- [ ] Criar design system base (main.css + variáveis com px exatos da referência)
- [ ] Implementar seções com conteúdo do CONTENT.md
- [ ] Loop de Screenshot — Navbar — Iteração 1/3: identificar divergências estruturais e de valores
- [ ] Loop de Screenshot — Navbar — Iteração 2/3: verificar correções, corrigir residuais
- [ ] Loop de Screenshot — Navbar — Iteração 3/3: confirmação final — todos os itens ✅
- [ ] Loop de Screenshot — Hero — Iteração 1/3: identificar divergências estruturais e de valores
- [ ] Loop de Screenshot — Hero — Iteração 2/3: verificar correções, corrigir residuais
- [ ] Loop de Screenshot — Hero — Iteração 3/3: confirmação final — todos os itens ✅
- [ ] Loop de Screenshot — Seções intermediárias — Iteração 1/3: identificar divergências estruturais e de valores
- [ ] Loop de Screenshot — Seções intermediárias — Iteração 2/3: verificar correções, corrigir residuais
- [ ] Loop de Screenshot — Seções intermediárias — Iteração 3/3: confirmação final — todos os itens ✅
- [ ] Loop de Screenshot — Footer — Iteração 1/3: identificar divergências estruturais e de valores
- [ ] Loop de Screenshot — Footer — Iteração 2/3: verificar correções, corrigir residuais
- [ ] Loop de Screenshot — Footer — Iteração 3/3: confirmação final — todos os itens ✅
- [ ] Loop de Screenshot Mobile — 375px: checklist mobile completo ✅
- [ ] Loop de Screenshot Mobile — 768px: checklist tablet completo ✅
- [ ] Implementar meta tags SEO completas
- [ ] Adicionar Schema.org JSON-LD
- [ ] Otimizar imagens (WebP, lazy loading, width/height)
- [ ] Gerar sitemap.xml
- [ ] Verificar acessibilidade (contraste, foco, aria, headings)
- [ ] Configurar GA4/GTM (ou marcar TODOs)
- [ ] Executar Lighthouse e registrar scores (mínimo: Performance 90, SEO 95, Acessibilidade 90)
- [ ] Criar netlify.toml ou vercel.json
- [ ] Criar robots.txt
- [ ] QA de Funcionalidade: testar todos os links, CTAs, formulário e navegação por teclado
- [ ] Validar HTML com html-validate
- [ ] Relatório de Comparação Final preenchido e zerado
- [ ] Screenshot final — resultado visualmente idêntico à referência

### Regras
- Marque cada tarefa como concluída [x] antes de passar para a próxima
- NUNCA pule as etapas de Loop de Screenshot
- NUNCA pule a validação do CONTENT.md
- NUNCA avance sem a confirmação do usuário nas pausas obrigatórias
- Diferenças visuais são bugs — corrija até zerar o checklist

---

## Checklist antes de entregar

- [ ] Skills copywriting-pro, frontend-design, ui-ux-pro-max, page-cro, seo-audit e schema-markup aplicadas
- [ ] Pastas criadas e arquivos de referência recebidos do usuário (ou briefing respondido)
- [ ] `reference/reference.html` criado (quando há referência)
- [ ] `PROJECT_SPEC.md` criado com valores numéricos exatos
- [ ] `CONTENT.md` criado e validado
- [ ] Todo texto vem do CONTENT.md — nenhum texto inventado durante o design
- [ ] Design visualmente idêntico à referência — não "parecido", idêntico
- [ ] Fonte da referência carregada e registrada no PROJECT_SPEC.md
- [ ] Animações implementadas conforme a referência (via código fonte ou vídeo)
- [ ] Responsivo (mobile, tablet, desktop) com breakpoints corretos
- [ ] Variáveis CSS com valores exatos extraídos do código fonte da referência
- [ ] HTML semântico e ordem de headings correta (h1 único)
- [ ] Nenhum Lorem Ipsum ou texto placeholder
- [ ] Todos os links (CTA, WhatsApp, Instagram) verificados
- [ ] Loop de Screenshot de cada seção concluído e zerado
- [ ] Screenshot final comparado com a referência e aprovado
- [ ] Meta tags completas (title, description, canonical, OG, Twitter Card)
- [ ] Schema.org JSON-LD implementado
- [ ] Imagens em WebP com width/height e lazy loading
- [ ] Fontes com font-display: swap
- [ ] Scripts não críticos com defer/async
- [ ] Contraste de cores ≥ 4,5:1 verificado
- [ ] Foco visível em todos os elementos interativos
- [ ] ARIA labels em elementos sem texto visível
- [ ] GA4/GTM instalado ou TODOs marcados
- [ ] netlify.toml ou vercel.json criado
- [ ] robots.txt criado
