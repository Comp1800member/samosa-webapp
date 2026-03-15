import React from "react";
import "./FeatureCard.css";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  children?: React.ReactNode;
}

export function FeatureCard({ title, description, icon, children }: FeatureCardProps) {
  return (
    <article className="FeatureCard" tabIndex={0}>
      <div className="FeatureCard__icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="FeatureCard__title">{title}</h3>
      <p className="FeatureCard__description">{description}</p>
      {children && <div className="FeatureCard__cta">{children}</div>}
    </article>
  );
}
