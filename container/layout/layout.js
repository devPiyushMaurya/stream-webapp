import Link from 'next/link';
import React from 'react';
import PlaylistData from '@/fixtures/playlist.json';

const Layout = (props) => {
      return (
    <>
        <header className='layout__header w-100 py-3'>
            <div className='container'>
                <nav className="menu__nav d-flex">
                    <Link href="/" className="text-white text-decoration-none font-weight-600">Home</Link>
                    {PlaylistData.menu.map((menuItem) => (
                        <Link key={menuItem.contentId} href={`/p/${menuItem.contentId}`} className="text-white text-decoration-none font-weight-600">{menuItem.label}</Link>
                    ))}
                    <Link href="/about" className="text-white text-decoration-none font-weight-600">About us</Link>
                </nav>
            </div>
        </header>
        <main className="layout__main">
            {props.children}
        </main>
        <footer className="layout__header">
            <div className="container text-center py-2">
                Copyright © 2023. All rights reserved.
            </div>
        </footer>
    </>
  )
}

export default Layout;