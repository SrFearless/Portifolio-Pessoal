import { Button, ButtonProps } from '@/components/ui/button';
import React from 'react';

interface SocialButtonProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
}

export const SocialButton = ({ 
  href, 
  children,
  ...props 
}: SocialButtonProps) => (
  <Button
    asChild
    size="lg"
    variant="outline"
    className="border-red-800 text-red-900 hover:bg-red-900/90"
    {...props}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Button>
);