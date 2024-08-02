export default function Header() {
  return (
    <nav className="flex justify-center py-4">
      <ul className="flex gap-6">
        <li className="">
          <a
            href="#"
            className="p-6 text-sm text-white/80 transition-colors duration-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="p-6 text-sm text-white/80 transition-colors duration-300 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="p-6 text-sm text-white/80 transition-colors duration-300 hover:text-white"
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  )
}
