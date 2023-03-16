import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar";
type Props = {
  children?: ReactNode;
  title?: string;
  content?: string;
};

const Layout = ({ children, title = "This is the default title" ,content = 'x' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content={content} />
    </Head>
    <header className="sticky top-0 z-30 w-full  bg-white  shadow">
      <Navbar />
    </header>
    
    <ChakraProvider> {children}</ChakraProvider>
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
      <div>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem in, repellendus deleniti atque sequi nemo doloribus beatae veritatis, dicta doloremque nihil repellat illum reprehenderit maxime nesciunt totam minima! Expedita?</p>
      </div>
    </footer>
  </div>
);

export default Layout;
