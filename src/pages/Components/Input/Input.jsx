"use client"
 
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout'
import { ArrowUpRight, Copy} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose another theme
import { Button } from '@/components/ui/button';

export default function InputSection() {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch the raw file from GitHub
    fetch('https://raw.githubusercontent.com/unaivan22/shadcn-ui-not2flat/refs/heads/master/src/components/ui/input.jsx')
      .then(response => response.text())
      .then(data => setCode(data));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      <Layout>
        <div className='container mx-auto px-0 md:px-24 mt-12'>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Preview</h1>
            <div className='flex items-center justify-center h-[60vh] border w-full'>
              <div className="flex items-center space-x-2">
                <Input type="email" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/input.jsx or .tsx and replace with this code </p>
            <Button onClick={handleCopy} className='gap-x-2 w-fit'>
              <Copy className='w-4 h-4' /> {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
            <SyntaxHighlighter language="javascript" style={okaidia} className='whitespace-pre-wrap'>
              {code}
            </SyntaxHighlighter>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/input' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
