import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="px-[20px] lg:container lg:px-20 mx-auto scroll-m-12"
      aria-labelledby="pricing-section"
    >
      <div className="my-16">
        <h1
          id="pricing-section"
          className="text-center font-semibold text-3xl lg:text-4xl"
        >
          Flexible plans for you
        </h1>
        <p className="pt-[16px] pb-[40px] text-center text-black/80 text-lg">
          No hidden fees!
        </p>

        <div className="flex flex-col gap-y-6 gap-x-4 lg:flex-row">
          {/* Free Trial Plan */}
          <div
            className="w-full rounded-lg bg-slate-100 p-6 flex flex-col lg:justify-between"
            role="region"
            aria-labelledby="free-trial"
          >
            <div>
              <h3
                id="free-trial"
                className="font-semibold text-[#4328EB] text-lg lg:text-xl"
              >
                Free Trial
              </h3>
              <p className="pt-4 text-black/80 text-lg">
                Perfect for testing the waters
              </p>

              <h2 className="pt-4 text-2xl font-medium text-black/80">
                0$<span className="text-black/80">/mo</span>
              </h2>

              <ul className="flex flex-col gap-y-2 pt-4 text-black/80">
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-[#4328EB]" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-[#4328EB]" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-[#4328EB]" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <button
              className="mt-4 rounded-md bg-white py-[14px] text-[#4328EB] font-semibold hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Start free trial"
            >
              Start Trial
            </button>
          </div>

          {/* Business Plan */}
          <div
            className="w-full rounded-lg bg-[#4328EB] p-6 flex flex-col lg:justify-between"
            role="region"
            aria-labelledby="business-plan"
          >
            <div>
              <h3
                id="business-plan"
                className="font-semibold text-white text-lg lg:text-xl"
              >
                Business
              </h3>
              <p className="pt-4 text-[#F4F8FA] text-lg">
                Perfect for small businesses
              </p>

              <h2 className="pt-4 text-2xl font-medium text-white lg:text-3xl">
                500$<span className="text-white/80">/mo</span>
              </h2>

              <ul className="flex flex-col gap-y-3 pt-4 text-[#F4F8FA]">
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-gray-400" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-gray-400" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-gray-400" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-gray-400" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li className="flex items-center gap-x-3">
                  <span>
                    <CheckCircle2 className="text-gray-400" />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
              </ul>
            </div>
            <button
              className="mt-6 rounded-md bg-white py-4 text-[#4328EB] font-semibold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Get started with Business plan"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div
            className="w-full rounded-lg bg-slate-100 p-6 flex flex-col lg:justify-between"
            role="region"
            aria-labelledby="enterprise-plan"
          >
            <div>
              <h3
                id="enterprise-plan"
                className="font-medium text-[#4328EB] text-lg lg:text-xl"
              >
                Enterprise
              </h3>
              <p className="pt-4 text-black/80 text-lg">
                Perfect for big companies
              </p>

              <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
                Custom
              </h2>

              <p className="pt-4 text-base text-black/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p className="pt-2 text-black/80">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
            <button
              className="mt-6 rounded-md bg-white py-4 text-[#4328EB] font-semibold hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label="Contact us for Enterprise plan"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
