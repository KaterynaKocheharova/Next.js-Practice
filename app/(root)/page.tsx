import Image from "next/image";

export default function Home() {
  return (
  <header>
    <main>
      <section>
        <h1 className="text-3xl">HELLO</h1>
        <p>{new Date().toTimeString()}</p>
      </section>
    </main>
  </header>
  );
}
