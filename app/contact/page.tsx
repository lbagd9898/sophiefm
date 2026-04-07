import SmallHeader from "../components/SmallHeader";
import ContactCards from "../components/Contact";
export default function Contact() {
  const contactHeaders = {
    bigHeader: "Contact Me!",
  };
  return (
    <div className="flex flex-col flex-1">
      <SmallHeader headers={contactHeaders} />
      <ContactCards />
    </div>
  );
}
