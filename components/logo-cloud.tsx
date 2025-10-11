import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function LogoCloud() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-sm">Technicals skills</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80}>
              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=html"
                  alt="HTML Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=css"
                  alt="CSS Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=js"
                  alt="JavaScript Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=nextjs"
                  alt="Next.js Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=github"
                  alt="GitHub Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=react"
                  alt="React Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=cpp"
                  alt="C++ Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=n8n"
                  alt="n8n Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=microsoft"
                  alt="Microsoft Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=mysql"
                  alt="SQL Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=vercel"
                  alt="Vercel Logo"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain"
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="TailwindCSS Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-8 w-8 object-contain dark:invert"
                  src="https://skillicons.dev/icons?i=figma"
                  alt="Figma Logo"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
