"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Portrait from "@/components/Portrait";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center p-4 bg-background text-foreground border-b border-purple-500 dark:border-purple-300">
        <div className="min-w-[33.3%] max-w-[33.3%]">
          <h1 className="text-2xl font-bold">Mazrine </h1>
        </div>
        <div className="flex min-w-[33.3%] max-w-[33.3%] justify-center">
          <nav className="flex">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-purple-500 transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-purple-500 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-purple-500 transition-colors"
                >
                  Componentes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="min-w-[33.3%] max-w-[33.3%] flex justify-end">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-purple-500 transition-colors"
              >
                <div className="text-foreground hover:text-purple-500 transition-colors">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10zM8 7h8v2H8V7zm8 4H8v2h8v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-500 transition-colors"
              >
                <div className="text-foreground hover:text-purple-500 transition-colors">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-purple-500 transition-colors"
              >
                <div className="text-foreground hover:text-purple-500 transition-colors">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M17 4h2v10h-2V4zm0 12h-2v2h2v2h2v-2h2v-2h-4zm-4-6h-2v10h2V10zm-8 2H3v2h2v6h2v-6h2v-2H5zm8-8h-2v2H9v2h6V6h-2V4zM5 4h2v6H5V4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="bg-background text-foreground transition-all hover:bg-opacity-80 hover:text-purple-500"
              >
                {theme === "white-purple" ? (
                  // Light Theme Icon
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path
                      d="M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  // Dark Theme Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                  >
                    <path d="M20 0h2v2h2v2h-2v2h-2V4h-2V2h2V0ZM8 4h8v2h-2v2h-2V6H8V4ZM6 8V6h2v2H6Zm0 8H4V8h2v8Zm2 2H6v-2h2v2Zm8 0v2H8v-2h8Zm2-2v2h-2v-2h2Zm-2-4v-2h2V8h2v8h-2v-4h-2Zm-4 0h4v2h-4v-2Zm0 0V8h-2v4h2Zm-8 6H2v2H0v2h2v2h2v-2h2v-2H4v-2Z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-row gap-2 justify-center items-center w-full">
          <span>a</span>
          <Portrait />
        </div>

        {/* <div className="flex gap-2">
          <motion.div
            className="w-4 h-4 rounded"
            initial={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            animate={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-4 h-4 rounded"
            initial={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            animate={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="w-4 h-4 rounded"
            initial={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            animate={{
              backgroundColor: theme === "white-purple" ? "#2d1b5a" : "#d4b3ff",
            }}
            transition={{ duration: 0.5 }}
          />
        </div> */}

        {/* <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}
      </main>
    </div>
  );
}
