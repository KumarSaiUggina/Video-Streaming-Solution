"use client";

import { useRef } from "react";
import Card from "../components/Card";

export default function Home() {
  // Refs for each section
  const videoStreamRef = useRef(null);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div className="bg-white ">
      <div className="container mx-auto px-4 lg:px-8">
        <main>
          <section>
            <div className="relative isolate  lg:px-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our latest feature updates.{" "}
                    <a href="#" className="font-semibold text-indigo-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Stream Your Favorite Cartoons & Shows Anytime, Anywhere
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Dive into a world of endless animated entertainment. From
                    classic cartoons to the latest animated movies, we’ve got it
                    all for you, available on any device.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      onClick={() => handleScrollToSection(videoStreamRef)}
                    >
                      Get started
                    </button>
                    <a
                      href="#"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              >
                <div
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
              </div>
            </div>
          </section>
          <section ref={videoStreamRef} className="lg:-mt-56 md:-mt-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:py-48 lg:py-56 ">
              <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-8 justify-items-center">
                <Card
                  h2="Watch on any device"
                  p="Stream your favorite cartoons and shows on any device, from
        your smartphone to your smart TV."
                />
                <Card
                  h2="No ads, no interruptions"
                  p="Enjoy your favorite shows without any ads or interruptions.
        Just pure, uninterrupted entertainment."
                />
                <Card
                  h2="Download for offline viewing"
                  p="Download your favorite shows and cartoons to watch offline
        anytime, anywhere."
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
