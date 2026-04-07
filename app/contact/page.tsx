import SmallHeader from "../components/SmallHeader";
import ContactCards from "../components/Contact";
export default function Contact() {
  const contactHeaders = {
    bigHeader: "Contact Me!",
    smallHeader: "Let's get in touch",
  };
  return (
    <div>
      <SmallHeader headers={contactHeaders} />
      <ContactCards />
    </div>
  );
}
