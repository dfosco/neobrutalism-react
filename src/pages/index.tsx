import HeroSection from "@/components/hero-section";
import RootComponents from "@/components/root-components";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Neobrutalism Design System"
        description="A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code."
        primaryCta={{
          text: "Get Started",
          href: "/docs/installation",
        }}
        secondaryCta={{
          text: "View Components",
          href: "/stickersheet",
        }}
      />
      <div className="3xl:max-w-screen-2xl mx-auto max-w-350 px-4 pb-6 lg:px-8">
        <RootComponents />
      </div>
    </>
  );
}
