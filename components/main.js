import { ContactForm } from './contact-form';
import { SimpleSlider } from './slider';

export function Main() {
  return (
    <main className="bg-gray-700 shadow min-h-screen">
      <SimpleSlider />
      <ContactForm />
    </main>
  );
}
