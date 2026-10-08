import Image from "next/image";
import heroimg from "@/assets/hero_img.jpg";
const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#f8f7f3] px-4 py-6 sm:px-6 lg:px-10">

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-linear-to-br from-[#f1eee7] via-[#f8f7f3] to-[#e8eee5] px-6 py-10 shadow-sm sm:px-10 lg:px-16 lg:py-14">

        {/* Background Decoration */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-200/30 blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl"></div>


        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-10 sm:flex-row">

          {/* Left Content */}
          <div className="max-w-xl text-center sm:text-left">

            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-green-700">
              📚 Discover Your Next Read
            </span>

            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Books to freshen up
              <br />
              <span className="text-green-700">
                your bookshelf
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
              Discover inspiring stories, timeless classics, and
              fascinating books that deserve a place on your
              bookshelf.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">

              <button
                type="button"
                className="rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-green-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-lg"
              >
                View The List →
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-300 bg-white/70 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-green-500 hover:text-green-700"
              >
                Explore Books
              </button>

            </div>
          </div>


          {/* Right Image */}
          <div className="relative flex w-full justify-center sm:w-auto">

            {/* Image Background */}
            <div className="absolute h-56 w-56 rounded-full bg-white/70 shadow-inner blur-sm sm:h-64 sm:w-64"></div>

            <div className="relative z-10 w-52 transition duration-500 hover:scale-105 sm:w-60 lg:w-64">
              <Image
                src={heroimg}
                alt="Featured book"
                width={400}
                height={400}
                priority
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>
    </main>
  );
};

export default HomePage;