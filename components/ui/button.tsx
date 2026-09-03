import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold tracking-[0.01em] transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:pointer-events-none disabled:opacity-50";

const styles = {
  primary: "bg-brand text-black shadow-[0_12px_30px_rgba(255,122,0,.2)] hover:-translate-y-0.5 hover:bg-brand-soft",
  secondary: "border border-white/12 bg-white/[0.045] text-cream hover:-translate-y-0.5 hover:border-brand/50 hover:bg-white/[0.075]",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof styles }) {
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof styles; children: ReactNode }) {
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
