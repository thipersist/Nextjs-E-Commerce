import Banner from "@/components/layouts/Banner";
import Header from "@/components/layouts/Header";
import HomeMenu from "@/components/layouts/HomeMenu";
import SectionHeader from "@/components/layouts/SectionHeader";

export default function Home() {
  return (
    <>
      <Banner />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader 
          mainHeader={"Our Story"}
          subHeader={"About Us"}
        />
        <div className="max-w-2xl text-gray-500 mx-auto font-semibold flex flex-col gap-4 mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eligendi autem, sit quidem excepturi aut molestiae rerum minima 
            facere quae quos temporibus officia distinctio accusantium veniam ipsum fugiat corporis obcaecati assumenda.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eligendi autem, sit quidem excepturi aut molestiae rerum minima 
            facere quae quos temporibus officia distinctio accusantium veniam ipsum fugiat corporis obcaecati assumenda.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader 
          mainHeader={"Don\'t hesitate"}
          subHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="underline text-4xl text-gray-500" href="tel:+8490090999">+84 90 090 999 </a>
        </div>
      </section>
    </>
  );
}
