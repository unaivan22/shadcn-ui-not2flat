"use client"
 
import React, { useEffect, useState } from 'react';
import Layout from '../../Layout'
import { ArrowUpRight, Copy } from "lucide-react"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'; // You can choose another theme
import { Button } from '@/components/ui/button';

export default function MenuBarSection() {
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch the raw file from GitHub
    fetch('https://raw.githubusercontent.com/unaivan22/shadcn-ui-not2flat/refs/heads/master/src/components/ui/menubar.jsx')
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
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        New Window <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled>New Incognito Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Share</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Email link</MenubarItem>
                          <MenubarItem>Messages</MenubarItem>
                          <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        Print... <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Find</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Search the web</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Find...</MenubarItem>
                          <MenubarItem>Find Next</MenubarItem>
                          <MenubarItem>Find Previous</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem checked>
                        Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator />
                      <MenubarItem inset>
                        Reload <MenubarShortcut>⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled inset>
                        Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Hide Sidebar</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                    <MenubarContent>
                      <MenubarRadioGroup value="benoit">
                        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                        <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator />
                      <MenubarItem inset>Edit...</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Custom</h1>
            <p className=''>Go to components/ui/menubar.jsx or .tsx and replace with this code </p>
            <Button onClick={handleCopy} className='gap-x-2 w-fit'>
              <Copy className='w-4 h-4' /> {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
            <SyntaxHighlighter language="javascript" style={okaidia} className='whitespace-pre-wrap'>
              {code}
            </SyntaxHighlighter>
          </div>
          <div className='flex flex-col gap-y-2 mb-12'>
            <h1 className='text-3xl font-bold'>Usage</h1>
            <a href='https://ui.shadcn.com/docs/components/menubar' target='_blank' className='hover:underline flex gap-x-1'>Original reference from the official Shadcn/UI documentation <ArrowUpRight /> </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}
