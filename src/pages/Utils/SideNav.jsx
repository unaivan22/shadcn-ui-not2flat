import { Github } from 'lucide-react';
import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default function SideNav() {
    const activeLinkStyle = {
        backgroundColor: 'white', // Change the background color
        color: 'blue', // Change the text color
        // Add any other styles you want to apply to the active link
      };
    
      return (
        <div className='flex flex-col px-6 py-4 h-[96vh] overflow-y-scroll pb-12 gap-y-1 bg-stone-50'>
            <a className="font-medium block flex gap-x-2 items-center border px-4 py-2 w-fit my-4 md:hidden text-gray-600 hover:text-white hover:bg-black dark:text-neutral-400 dark:hover:text-neutral-500" href="https://github.com/unaivan22/shadcn-ui-not2flat" target="_blank" rel="noopener noreferrer"> <Github /> Github</a>
            {/* <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/"
                activeClassName="active" 
            >
                Home
            </NavLink> */}
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/installation"
                activeClassName="active" 
            >
                Installation
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/accordion"
                activeClassName="active" 
            >
                Accordion
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/alert"
                activeClassName="active" 
            >
                Alert
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/alert-dialog"
                activeClassName="active" 
            >
                Alert Dialog
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/badge"
                activeClassName="active" 
            >
                Badge
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/button"
                activeClassName="active" 
            >
                Button
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/calendar"
                activeClassName="active" 
            >
                Calendar
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/card"
                activeClassName="active" 
            >
                Card
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/carousel"
                activeClassName="active" 
            >
                Carousel
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/checkbox"
                activeClassName="active" 
            >
                Checkbox
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/combobox"
                activeClassName="active" 
            >
                Combobox
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/command"
                activeClassName="active" 
            >
                Command
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/date-picker"
                activeClassName="active" 
            >
                Date Picker
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/dialog"
                activeClassName="active" 
            >
                Dialog
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/drawer"
                activeClassName="active" 
            >
                Drawer
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/dropdown-menu"
                activeClassName="active" 
            >
                Dropdown Menu
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/hover-card"
                activeClassName="active" 
            >
                Hover Card
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/input"
                activeClassName="active" 
            >
                Input
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/input-otp"
                activeClassName="active" 
            >
                Input OTP
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/menubar"
                activeClassName="active" 
            >
                Menubar
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/navigation-menu"
                activeClassName="active" 
            >
                Navigation Menu
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/pagination"
                activeClassName="active" 
            >
                Pagination
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/popover"
                activeClassName="active" 
            >
                Popover
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/progress"
                activeClassName="active" 
            >
                Progress
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/radio-group"
                activeClassName="active" 
            >
                Radio Group
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/select"
                activeClassName="active" 
            >
                Select
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/slider"
                activeClassName="active" 
            >
                Slider
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/switch"
                activeClassName="active" 
            >
                Switch
            </NavLink>
            <NavLink
                exact
                className='py-[.5rem] pl-[.8rem] text-sm font-light opacity-70 rounded-xs'
                to="/tabs"
                activeClassName="active" 
            >
                Tabs
            </NavLink>
        </div>
      );
  }