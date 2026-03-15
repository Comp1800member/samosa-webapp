import React from "react";
import { Link } from "react-router-dom";
import { FeatureCard } from "./FeatureCard";
import "./Landing.css";

export function Landing() {
  return (
    <main className="Landing">
      <header className="Landing__hero">
        <div className="Landing__heroContent">
          <h1 className="Landing__title">Samosa</h1>
          <p className="Landing__subtitle">
            Generate high-quality commit messages and scaffold cloud deployment
            configs without leaving your editor.
          </p>

          <div className="Landing__actions">
            <Link className="Landing__primary" to="/docs">
              View docs
            </Link>
            <Link className="Landing__secondary" to="/setup">
              Setup guide
            </Link>
          </div>
        </div>
      </header>

      <section className="Landing__section">
        <h2>What you can explore</h2>
        <div className="Landing__grid">
          <FeatureCard
            icon="🧠"
            title="Smart commit messages"
            description="Generate concise, conventional commit messages directly from your editor’s diff."
          />
          <FeatureCard
            icon="🚀"
            title="Cloud scaffolding"
            description="Create deploy-ready config files for popular clouds in seconds."
          />
          <FeatureCard
            icon="⚙️"
            title="Custom workflows"
            description="Adjust the style and templates to match your team’s workflow."
          />
        </div>
      </section>

      <footer className="Landing__footer">
        <p>
          Built with <strong>React</strong>. Run <code>npm run build</code> to
          produce production-ready assets.
        </p>
      </footer>
    </main>
  );
}
