import ArrowIcon from "@/public/assets/blue-button.svg";
import Image from "next/image";
import Gradient from "@/public/assets/gradientV.svg";
import HeroImage from "@/public/assets/Image.svg";
import Google from "@/public/assets/Google.svg";
import Slack from "@/public/assets/Slack.svg";
import Trustpilot from "@/public/assets/Trustpilot.svg";
import Cnn from "@/public/assets/CNN.svg";
import Cluth from "@/public/assets/Clutch.svg";

const companiesImage = [
  { name: Google, alt: "Google Logo" },
  { name: Slack, alt: "Slack Logo" },
  { name: Trustpilot, alt: "Trustpilot Logo" },
  { name: Cnn, alt: "CNN Logo" },
  { name: Cluth, alt: "Clutch Logo" },
];

export function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="px-[20px] max-w-5xl mx-auto pt-20">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl leading-10 font-bold">
          Unlock professional website monitoring today
        </h1>

        <p className="text-center text-lg lg:text-xl pt-6 font-medium text-black/80">
          Gain full visibility with our customizable dashboard. Keep everything
          in check and enhance your workflow with our innovative features.
          Elevate your productivity and efficiency!
        </p>

        <div className="flex w-full gap-x-4 pt-8 justify-center">
          <button className="bg-purple-700 text-white hover:bg-opacity-90 w-1/2 lg:w-1/4 px-4 py-6 rounded-lg focus:ring-4 focus:ring-purple-300">
            Try for free
          </button>
          <button className="flex items-center justify-center gap-4 text-purple-700 w-1/2 lg:w-1/4 px-4 py-6 rounded-lg border hover:bg-purple-100 focus:ring-4 focus:ring-purple-300">
            View Pricing
            <span>
              <Image src={ArrowIcon} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center items-center">
        {/* Background Image */}
        <Image
          src={Gradient}
          alt="Gradient background"
          className="min-h-[550px] md:h-[780px] lg:h-[990px] w-full"
        />

        <div className="absolute w-full flex flex-col items-center">
          {/* Hero Image */}
          <Image
            src={HeroImage}
            alt="Hero image showing website monitoring"
            className="-ml-12 lg:-ml-32 h-[380px] md:h-[610px] lg:h-[890px]"
          />

          <div className="px-[20px] lg:px-20 flex flex-col container lg:flex-row justify-between items-center lg:pb-8 gap-2">
            <h3 className="text-white/80 text-center">
              Trusted by most companies
            </h3>

            <div className="flex gap-4 lg:gap-10">
              {companiesImage.map((item, i) => (
                <Image
                  src={item.name}
                  alt={item.alt}
                  key={i}
                  className="w-[78px] lg:w-auto transition-transform transform hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
