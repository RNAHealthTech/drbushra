import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import WhatsApp from "./WhatsApp";

interface LayoutProps{
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
       <div className="bg-background flex flex-col min-h-screen">
        <Header />
         <main className="flex-grow">{children}</main>
         <WhatsApp />
         <Footer />
       </div>
      
    )
}

export default Layout;