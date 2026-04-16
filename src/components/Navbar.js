export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-5">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}