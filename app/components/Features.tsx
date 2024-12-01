import Feature1 from "@/public/assets/feature-1.svg";
import Feature2 from "@/public/assets/feature-2.svg";
import Feature3 from "@/public/assets/feature-3.svg";
import Check from "@/public/assets/check.svg";
import PurpleArrowIcon from "@/public/assets/blue-button.svg";
import GreenArrowIcon from "@/public/assets/green-button.svg";
import PinkArrowIcon from "@/public/assets/pink-button.svg";
import Image from "next/image";

export function Features() {
  return (
    <section id="features" className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="flex flex-col gap-y-14 py-14 lg:py-32 lg:gap-y-20">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image
            src={Feature1}
            alt="Feature image 1"
            className="pt-6 hidden lg:block lg:w-1/2"
          />

          <div className="lg:w-1/2 lg:py-14 lg:pr-14 lg:pl-14">
            <div>
              <h3 className="font-semibold text-purple-700 lg:text-2xl">
                Sales Monitoring
              </h3>
              <h1 className="text-3xl pt-3 font-semibold text-neutral-900 mx-auto lg:text-4xl lg:leading-10">
                Simplify your sales monitoring
              </h1>
            </div>

            <Image
              src={Feature1}
              alt="Feature image 1"
              className="pt-6 lg:hidden lg:w-1/2"
            />

            <p className="py-6 text-black/80 lg:text-lg">
              Stay on top of things and revamp your work process with our
              game-changing features. Get a birds&apos; eye view with our
              cusomizable dashboard.
            </p>

            <ul className="flex flex-col gap-y-3 text-black/90 lg:text-lg">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            <h2 className="flex items-center gap-x-3 pt-6 text-purple-700 font-medium lg:text-lg">
              Learn more{" "}
              <span>
                <Image src={PurpleArrowIcon} alt="Arrow icon" />
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex gap-y-14 lg:gap-y-20">
        <div className="flex flex-col lg:flex-row gap-x-6">
          <Image
            src={Feature2}
            alt="Feature image 1"
            className="pt-6 hidden lg:block lg:w-1/2"
          />

          <div className="lg:w-1/2 lg:py-14 lg:pr-14 lg:pl-14">
            <div>
              <h3 className="font-semibold text-green-600 lg:text-2xl">
                Customer Support
              </h3>
              <h1 className="text-3xl pt-3 font-semibold text-neutral-900 mx-auto lg:text-4xl lg:leading-10">
                Get in touch with your customers
              </h1>
            </div>

            <Image
              src={Feature2}
              alt="Feature image 1"
              className="pt-6 lg:hidden lg:w-1/2"
            />

            <p className="py-6 text-black/80 lg:text-lg">
              Stay on top of things and revamp your work process with our
              game-changing features. Get a birds&apos; eye view with our
              customizable dashboard.
            </p>

            <ul className="flex flex-col gap-y-3 text-black/90 lg:text-lg">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Consectetur adipiscing elit
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image src={Check} alt="Check image" />
                </span>
                Sed do eiusmod tempor incididunt ut labore
              </li>
            </ul>

            <h2 className="flex items-center gap-x-3 pt-6 text-green-600 font-medium lg:text-lg">
              Learn more{" "}
              <span>
                <Image src={GreenArrowIcon} alt="Arrow icon" />
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-14 py-14 lg:py-32 lg:gap-y-20">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image
            src={Feature3}
            alt="Feature image 1"
            className="pt-6 hidden lg:block lg:w-1/2"
          />

          <div className="lg:w-1/2 lg:py-14 lg:pr-14 lg:pl-14">
            <div>
              <h3 className="font-semibold text-pink-600 lg:text-2xl">
                Growth Monitoring
              </h3>
              <h1 className="text-3xl lg:text-4xl pt-3 font-semibold text-neutral-900 mx-auto lg:leading-10">
                Monitor your site&apos;s new subscribers
              </h1>
            </div>

            <Image
              src={Feature3}
              alt="Feature image 3"
              className="pt-6 lg:hidden lg:w-1/2"
            />

            <p className="py-6 text-black/80 lg:text-lg">
              Stay on top of things and revamp your work process with our
              game-changing features. Get a birds&apos; eye view with our
              customizable dashboard.
            </p>

            <div className="flex w-full gap-x-2 pt-6 lg:text-lg">
              <div className="w-1/2 flex flex-col gap-y-0 p-2 text-black/80 border">
                <h3 className="text-2xl">100+</h3>
                <p>Lorem ipsum sit</p>
              </div>
              <div className="w-1/2 flex flex-col gap-y-0 p-2 text-black/80 border">
                <h3 className="text-2xl">800+</h3>
                <p>Lorem ipsum sit</p>
              </div>
            </div>

            <h2 className="flex items-center gap-x-3 pt-6 text-pink-600 font-medium lg:text-lg">
              Learn more{" "}
              <span>
                <Image src={PinkArrowIcon} alt="Arrow icon" />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
