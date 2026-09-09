"use client";
import { useState } from "react";
export default function Home() {
  const [started, setStarted] = useState(false);
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="absolute top-0 flex w-full items-center justify-between px-8 py-6">
    <div className="text-xl font-bold">SweatClub</div>

    <button className="rounded-full border border-zinc-700 px-5 py-2 text-sm">
      Log in
    </button>
  </nav>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Your gym. Your people. Your streak.
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight sm:text-8xl">
          Sweat together.
          <br />
          Stay consistent.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          SweatClub turns going to the gym into a social challenge you actually
          want to keep.
        </p>

        <button 
        onClick={() => setStarted(true)}
  className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
>
  {started ? "Streak started!" : "Start your streak"}
        </button>
        {started && (
  <p className="mt-6 text-green-400">
    🔥 Your streak has started!
  </p>
)}
      </section>
    </main>
  );
}