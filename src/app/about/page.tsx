import SectionText from "@/components/layout/SectionText";

export default function AboutUs() {
  return (
    <section className="text-center my-16">
      <SectionText subText="Our Story" mainText={"About us "} />

      <div
        className="text-gray-500 max-w-xl mx-auto
        mt-8 mb-8"
      >
        <h2>Community Involvement: 2010-Present</h2>
        <p>
          As a token of gratitude for the support they received, the Rossi
          family actively participated in community events. They sponsored local
          sports teams, organized charity fundraisers, and collaborated with
          nearby businesses to create a vibrant neighborhood atmosphere.
        </p>
        <br />
        <p>
          Bella Cucina also became an eco-friendly establishment, implementing
          sustainable practices such as composting organic waste and using
          biodegradable packaging. The restaurant became a symbol of not just
          good food but also responsible business practices.
        </p>
        <br />
        <p>
          At our pizzeria, tradition and flavor come together to create
          delicious experiences. With fresh ingredients and a passion for
          culinary excellence, we bring authenticity to
        </p>
        <br />
        
      </div>
    </section>
  );
}
