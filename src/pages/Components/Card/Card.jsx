import React, { useEffect, useState } from 'react';
import Layout from '../../Layout'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ArrowUpRight, Copy } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose another theme
  

export default function CardSection() {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch the raw file from GitHub
    fetch('https://raw.githubusercontent.com/unaivan22/shadcn-ui-not2flat/refs/heads/master/src/components/ui/card.jsx')
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
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Framework</Label>
                        <Select>
                          <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/card.jsx or .tsx and replace with this code </p>
            <Button onClick={handleCopy} className='gap-x-2 w-fit'>
              <Copy className='w-4 h-4' /> {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
            <SyntaxHighlighter language="javascript" style={okaidia} className='whitespace-pre-wrap'>
              {code}
            </SyntaxHighlighter>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/card' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
