import * as React from "react"

type Variant = "primary" | "secondary" | "outline"

const variants: Record<Variant, string> = {
  primary: "bg-blue-900 text-white hover:bg-blue-800",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  outline: "border border-zinc-300 text-zinc-900 hover:bg-zinc-50",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 ${variants[variant]} ${className}`}
    />
  )
}
