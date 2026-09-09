export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">SweatClub</h1>
        <p className="mt-4 text-xl text-gray-400">
          Train together. Stay consistent.
        </p>
        <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black">
          Join the Club
        </button>
      </div>
    </main>
  );
}