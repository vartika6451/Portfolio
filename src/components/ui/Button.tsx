import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

type Variant = "primary" | "secondary" | "ghost";

interface SharedProps {
  variant?: Variant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_8px_30px_-8px_var(--color-accent)] hover:-translate-y-0.5",
  secondary:
    "glass text-ink hover:border-border-strong hover:-translate-y-0.5",
  ghost: "text-ink-muted hover:text-ink",
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold font-display transition-all duration-300 ease-out active:translate-y-0";

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "primary",
    icon,
    iconPosition = "right",
    magnetic = true,
    className,
    children,
    ...rest
  } = props;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const classes = cn(base, variantClasses[variant], className);

  const el =
    "href" in props && props.href ? (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={props.href}>
        {content}
      </a>
    ) : (
      <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {content}
      </button>
    );

  if (!magnetic) return el;

  return <Magnetic strength={0.3}>{el}</Magnetic>;
}
