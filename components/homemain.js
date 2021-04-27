import { ContactForm } from './contact-form';
import { SimpleSlider } from './slider';

export function Main(props) {
  return (
    <main className="bg-gray-700 shadow min-h-screen mt-16">
      <SimpleSlider data={props.data} />
      <ContactForm />
    </main>
  );
}
