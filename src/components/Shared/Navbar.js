import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({children}) => {
    const menuItem = (
        <>
            <li>
                <NavLink className='rounded-lg' to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className='rounded-lg' to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className='rounded-lg' to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink className='rounded-lg' to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className='rounded-lg' to="/login">Login</NavLink>
            </li>
            <li class="dropdown dropdown-end dropdown-hover">
                <label tabindex="0" class="btn btn-primary btn-outline m-1 rounded-lg">Book Now</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NavLink className='rounded-lg' to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className='rounded-lg' to="/login">Login</NavLink>
                    </li>
                </ul>
            </li>
        </>
    )
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-300 lg:px-20">
                <div class="flex-1 px-2 mx-2 text-2xl">Clean Co.</div>
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal gap-x-2">
                        {menuItem}
                    </ul>
                </div>
                </div>
                {children}
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;