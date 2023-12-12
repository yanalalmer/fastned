import React from "react";
import PageTransitionLayout from "./layouts/PageTransitionLayout";

export default function Home() {
  return (
    <PageTransitionLayout>
      <div className="h-screen w-full bg-golden flex justify-center items-center">
        <h1>Home Page</h1>
      </div>
    </PageTransitionLayout>
  );
}
