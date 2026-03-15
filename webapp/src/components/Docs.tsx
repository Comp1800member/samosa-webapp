import React from "react";
import "./Docs.css";

export function Docs() {
  return (
    <main className="Docs">
      <header className="Docs__hero">
        <h1>Documentation</h1>
        <p>
          Everything you need to know to install the extension and generate
          production-ready deployment scaffolding.
        </p>
      </header>

      <section className="Docs__section">
        <h2>Extension overview</h2>
        <p>
          Samosa helps you write better git commit messages by generating them
          automatically from your code changes. It also provides templates to
          scaffold deployment configs for popular cloud providers.
        </p>
      </section>

      <section className="Docs__section">
        <h2>Key concepts</h2>
        <ul>
          <li>
            <strong>Automatic commit messages</strong> — Generate concise, high-
            quality commit messages without leaving your editor.
          </li>
          <li>
            <strong>Deployment scaffolding</strong> — Create config files and
            deployment templates for supported cloud targets.
          </li>
          <li>
            <strong>Custom rules</strong> — Customize your message style and
            deployment preferences via config.
          </li>
        </ul>
      </section>

      <section className="Docs__section">
        <h2>Where to go next</h2>
        <ol>
          <li>Open the extension folder in VS Code</li>
          <li>Run the extension in the debugger (F5) to try it locally</li>
          <li>Update the docs in this site to match your project structure</li>
        </ol>
      </section>

      <footer className="Docs__footer">
        <p>
          Tip: For richer docs, consider adding Markdown support (MDX) and a
          dedicated docs route for each topic.
        </p>
      </footer>
    </main>
  );
}
