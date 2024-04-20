import Link from "next/link"

export default function Component() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 px-4 py-6 sm:flex-row sm:px-6">
      <p className="text-xs text-zinc-400">© 2024 Issa Ndao Inc. All rights reserved.</p>
      <Link className="text-xs text-zinc-400 group" href="https://www.aliou.online" target="_blank">
        made by <span className="text-white group-hover:underline">@aliouuuw</span>
      </Link>
    </footer>
  )
}