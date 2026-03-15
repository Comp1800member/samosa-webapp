import React from "react";
import "./Setup.css";

export function Setup() {
  return (
    <main className="Setup">
      <header className="Setup__hero">
        <h1>Setup</h1>
        <p>
          Follow a few quick steps to install the extension and configure it for
          your workspace.
        </p>
      </header>

      <section className="Setup__section">
        <h2>Install</h2>
        <p>
          Install the extension from the VS Code Marketplace (when published) or
          load the project locally:
        </p>
        <pre className="Setup__code">code --disable-extensions --extensionDevelopmentPath=.</pre>
      </section>

      <section className="Setup__section">
        <h2>Run</h2>
        <ol>
          <li>Press <strong>F5</strong> to start the extension host.</li>
          <li>Open a repository and make a small change.</li>
          <li>Trigger the command palette and run the “Generate Commit Message” command.</li>
        </ol>
      </section>

      <section className="Setup__section">
        <h2>Deploy scaffolding</h2>
        <p>
          Once you have a commit message, you can generate deployment templates for supported cloud providers. The output is saved to your repo so you can commit it directly.
        </p>
      </section>

      <footer className="Setup__footer">
        <p>
          Tip: Customize your preferred deployment targets in <code>samosa.config.json</code> (coming soon).
        </p>
      </footer>
    </main>
  );
}
