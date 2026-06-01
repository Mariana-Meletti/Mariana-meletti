# PROJECT_SPEC.md — Site Mariana Meletti (Psicóloga)

**Referência:** Cyclix – Cycling Club Framer Template  
**Fonte:** `reference/reference.html` + `screenshots/reference/cyclix-template.framer.website_.png`

---

## Paleta de Cores

| Token             | Hex       | Uso                              |
|-------------------|-----------|----------------------------------|
| `--color-bg`      | `#000000` | Fundo principal (preto)          |
| `--color-accent`  | `#fdf567` | CTA, destaques, hover (amarelo)  |
| `--color-dark`    | `#465907` | Fundo secundário (verde-oliva escuro) |
| `--color-muted`   | `#696969` | Texto secundário, labels         |
| `--color-white`   | `#ffffff` | Texto principal sobre fundo escuro |
| `--color-surface` | `#111111` | Cards, seções alternadas         |

> Adaptação para psicóloga: manter o sistema dark/light do template. O amarelo `#fdf567` será mantido como cor de acento para CTAs e destaques — transmite energia e clareza.

---

## Tipografia

| Token                  | Valor                          |
|------------------------|--------------------------------|
| `--font-heading`       | `'Inter', sans-serif`          |
| `--font-body`          | `'Inter', sans-serif`          |
| `--font-size-display`  | `80px`                         |
| `--font-size-h1`       | `64px`                         |
| `--font-size-h2`       | `48px`                         |
| `--font-size-h3`       | `32px`                         |
| `--font-size-h4`       | `24px`                         |
| `--font-size-body-lg`  | `18px`                         |
| `--font-size-body`     | `16px`                         |
| `--font-size-sm`       | `14px`                         |
| `--font-size-xs`       | `12px`                         |
| `--font-weight-heading`| `500`                          |
| `--font-weight-body`   | `400`                          |
| `--letter-spacing-display` | `-0.06em`                  |
| `--letter-spacing-heading` | `-0.04em`                  |
| `--letter-spacing-body`    | `0`                        |

**Google Fonts:** `Inter` (weights 400, 500)

---

## Espaçamentos

| Token                    | Valor     |
|--------------------------|-----------|
| `--spacing-section-lg`   | `150px`   |
| `--spacing-section`      | `80px`    |
| `--spacing-section-sm`   | `60px`    |
| `--spacing-gap-lg`       | `40px`    |
| `--spacing-gap`          | `24px`    |
| `--spacing-gap-sm`       | `16px`    |
| `--spacing-gap-xs`       | `8px`     |
| `--padding-mobile`       | `20px`    |
| `--padding-tablet`       | `40px`    |
| `--padding-desktop`      | `80px`    |

---

## Container e Grid

| Propriedade        | Valor     |
|--------------------|-----------|
| Container máximo   | `1330px`  |
| Colunas cards      | `3` (desktop) → `2` (tablet) → `1` (mobile) |
| Gap cards          | `24px`    |

---

## Bordas e Formas

| Token                    | Valor     |
|--------------------------|-----------|
| `--radius-card`          | `20px`    |
| `--radius-card-sm`       | `12px`    |
| `--radius-btn`           | `100px`   | ← botão cápsula (pill)

---

## Breakpoints

```css
/* Mobile: base — até 767px */
/* Tablet: */
@media (min-width: 768px) { }
/* Desktop pequeno: */
@media (min-width: 992px) { }
/* Desktop padrão: */
@media (min-width: 1280px) { }
/* Desktop largo: */
@media (min-width: 1440px) { }
```

_(Alinhado com os breakpoints da referência: 767px / 991px / 1279px)_

---

## Seções do Site (estrutura prevista)

1. **Navbar** — logo + links de navegação + CTA
2. **Hero** — headline grande, subtítulo, CTA duplo (primário + secundário), imagem
3. **Stats / Números** — métricas de impacto (ex.: anos de experiência, pacientes, etc.)
4. **Sobre** — foto + texto + diferenciais
5. **Serviços** — cards (3 colunas) com ícone, nome e descrição
6. **Depoimentos** — cards de clientes com resultado concreto
7. **FAQ** — acordeão com perguntas e respostas
8. **CTA Final** — fundo accent, headline forte + botão
9. **Footer** — links, redes sociais, contato

---

## Animações (a replicar da referência)

- **Fade-in on scroll** — elementos entram com `opacity: 0 → 1` + `translateY(20px → 0)` ao entrar no viewport
- **Hover em cards** — escala sutil (`transform: scale(1.02)`) com `transition: 200ms ease`
- **Hover em botões** — inversão de cor (fundo branco → amarelo, ou amarelo → preto)
- **Navbar** — fixa no scroll com `backdrop-filter: blur(12px)` + fundo semi-transparente

---

## Padrões Visuais

- Layout predominantemente **dark** (fundo preto)
- Texto branco sobre fundo escuro, texto preto sobre accent amarelo
- Cards com fundo `#111111` e borda sutil ou sem borda
- Botão primário: fundo `#fdf567`, texto `#000000`, border-radius `100px`
- Botão secundário: borda `1px solid #ffffff`, texto `#ffffff`, fundo transparente
- Imagens com `border-radius: 20px`
- Seções alternando fundo `#000000` e `#111111`
