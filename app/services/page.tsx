import SmallHeader from "../components/SmallHeader";
import Services from "../components/Services";
import PhotoQuote from "../components/PhotoQuote";
import { client } from "@/sanity/lib/client";

interface Service {
  title: string;
  description: string[];
}

export default async function ServicePage() {
  const services: Service[] = await client.fetch(`*[_type == "service"]`);
  console.log(services);
  const serviceHeaders = {
    bigHeader: "Services",
    smallHeader: "Sports Management | Career Advising",
  };
  return (
    <>
      <SmallHeader headers={serviceHeaders} />
      <PhotoQuote />
      <Services services={services}></Services>
    </>
  );
}
