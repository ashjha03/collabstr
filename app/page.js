import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-white to-pink-100">
      <Navbar />
      <main className="py-24">
        <h1 className="text-5xl text-center font-bold text-pink-500">
          Influencer Marketing Made Easy
        </h1>
        <p className="text-xl text-center pt-4 max-w-2xl mx-auto text-gray-500">
          Discover influential personalities, execute marketing campaigns, and
          generate distinctive content for your brand effortlessly
        </p>
      </main>
    </div>
  );
}
