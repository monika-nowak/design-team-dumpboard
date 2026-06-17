# Dumpboard

Wewnętrzne ćwiczenie dla zespołu designerów: każdy buduje swoją edytowalną stronę i publikuje ją w tym repo. Wspólny feed zbiera wrzutki zespołu w jednym miejscu.

**Live:** https://monika-nowak.github.io/design-team-dumpboard/

## Szybki start (dla designerów)

1. **Stwórz stronę** — otwórz [canvas-editor.html](canvas-editor.html), ułóż treść na płótnie.
2. **Pobierz ZIP** — przycisk „Download my page" w edytorze.
3. **Wgraj na GitHub** — w folderze `people/` utwórz podfolder swoim nickiem (np. `people/monika.nowak/`) i wrzuć całą zawartość ZIP-a. **Nie wgrywaj do korzenia repo.**
4. **Gotowe** — po minucie Twoja strona i wrzutki pojawią się na [feedzie](index.html).

Szczegóły publikacji są też w edytorze (modal „Jak opublikować").

## Struktura repo

| Plik / folder | Po co |
|---|---|
| `index.html` | Router wejścia (pierwsza wizyta → `start.html`, kolejne → `hub.html`) |
| `start.html` | Intro / landing (tylko przy pierwszym wejściu) |
| `hub.html` | Feed zespołu |
| `canvas-editor.html` | Edytor — pobieraj i otwieraj lokalnie (`file://` też działa) |
| `people.json` | Lista osób — **nie edytuj ręcznie**, generuje się automatycznie |
| `people/twoj-nick/` | Twój folder ze stroną (`index.html`, `feed.json`, …) |
| `assets/` | Fonty, logo, naklejki — zasoby wspólne |

## Co trafia do feedu?

Automatycznie: każde **zdjęcie** i każdy **film YouTube** z Twojej strony. Tekst i naklejki zostają tylko na Twojej stronie.

## Lokalne testowanie

Hub wymaga serwera HTTP (nie działa z `file://`):

```bash
node .claude/server.js
```

Potem otwórz http://localhost:8753/index.html

## Dla maintainerów

- **GitHub Pages** — workflow `.github/workflows/deploy-pages.yml` (deploy przy każdym pushu na `main`).
- **people.json** — workflow `.github/workflows/generate-people.yml` skanuje `people/<nick>/` (foldery z `index.html` lub `feed.json`) i aktualizuje listę.
