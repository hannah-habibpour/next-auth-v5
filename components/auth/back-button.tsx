"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonprops {
  href: string;
  label: string;
}

export function BackButton({ href, label }: BackButtonprops) {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
