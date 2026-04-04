import { Suspense } from "react";
import HomeClient from "./HomeClient";

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="max-w-2xl mx-auto p-6 md:p-12 text-gray-500">
          Loading...
        </main>
      }
    >
      <HomeClient />
    </Suspense>
  );
}
