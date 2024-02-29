
import HomeMenu from "@/components/layout/HomeMenu";
import SectionText from "@/components/layout/SectionText";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionText subText="Our Story" mainText={"About us "} />

        <div
          className="text-gray-500 max-w-xl mx-auto
        mt-8 mb-8"
        >
          <p>
            At our pizzeria, tradition and flavor come together to create
            delicious experiences. With fresh ingredients and a passion for
            culinary excellence, we bring authenticity to
          </p>
          <br />
          <p>
            every slice. Embark on a journey of unparalleled flavors, where each
            pizza tells a unique story. Welcome to our pizza world, where
            quality and pleasure converge
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionText mainText="Contact Us" subText="Don't hesitate" />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-400"
            href="tel:+5561998516239"
          >
            +55 61 99851-6239
          </a>
        </div>
      </section>
    </>
  );
}
