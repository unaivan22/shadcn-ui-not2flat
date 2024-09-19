import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@/components/ui/button'

const AccordionCodeCustomSnippet = () => {
  const [copied, setCopied] = useState(false);
  const code = `
  "use client"

  import * as React from "react"
  import * as AccordionPrimitive from "@radix-ui/react-accordion"
  import { ChevronDown, Plus } from "lucide-react"

  import { cn } from "@/lib/utils"

  const Accordion = AccordionPrimitive.Root

  const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn("bg-muted px-4 py-1 rounded-2xl mb-2", className)} {...props} />
  ))
  AccordionItem.displayName = "AccordionItem"

  const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-3 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-[45deg]",
          className
        )}
        {...props}>
        {children}
        <Plus className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ))
  AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

  const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden opacity-60 text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}>
      <div className={cn("pb-2 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  ))

  AccordionContent.displayName = AccordionPrimitive.Content.displayName

  export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

  `;

  return (
    <div className="p-2 bg-gray-100 w-full text-xs">
      <pre className="whitespace-pre-wrap bg-yellow-200 p-4 rounded-lg border border-gray-300">
        {code}
      </pre>
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <Button className="mt-2">
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
      </CopyToClipboard>
    </div>
  );
};

export default AccordionCodeCustomSnippet;
