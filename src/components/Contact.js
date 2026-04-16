export default function Contact() {
  return (
    <section id="contact" className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold">Contact</h2>

      <form className="flex flex-col gap-3 mt-5">
        <input type="text" placeholder="Name" className="p-2 border" required />
        <input type="email" placeholder="Email" className="p-2 border" required />
        <textarea placeholder="Message" className="p-2 border" required />
        <button className="bg-blue-500 text-white p-2">Send</button>
      </form>
    </section>
  );
}