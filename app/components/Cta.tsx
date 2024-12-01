import { ArrowRightCircle } from "lucide-react";

export function Cta() {
  return (
    <section className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-900 py-12 px-8 text-center my-32 lg:px-80 lg:py-22">
        <h1 className="text-white text-4xl font-medium lg:text-5xl">
          Monitor your website like a pro
        </h1>
        <p className="text-white pt-6 lg:pt-8 lg:text-xl">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>

        <div className="mt-10 flex flex-col w-full items-center lg:mt-14 lg:flex-row lg:justify-center gap-x-10">
          <button className="py-4 px-8 bg-white hover:bg-purple-100 rounded-md text-purple-700 font-medium">
            Try for free
          </button>

          <button className="flex w-full items-center justify-center font-medium gap-x-3 mt-[32px] text-white lg:w-fit lg:mt-0">
            Contact Sales{" "}
            <span>
              <ArrowRightCircle className="text-purple-200" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
