export default function Projects() {
  return (
    <section id="projects" className="p-10">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        <div className="p-5 border rounded shadow hover:scale-105">
          <h3 className="font-bold">Portfolio Website</h3>
          <p>Personal portfolio project</p>
          <a href="#" className="text-blue-500">GitHub</a>
        </div>

        <div className="p-5 border rounded shadow hover:scale-105">
          <h3 className="font-bold">Finance Tracker</h3>
          <p>Expense tracking app</p>
        </div>
      </div>
    </section>
  );
}