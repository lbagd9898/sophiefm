import { ServiceCard } from "./ServiceCard";

export default function Services({ services }: { services: any[] }) {
  return (
    <section className="w-full flex flex-col items-center p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[75%]">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
}
