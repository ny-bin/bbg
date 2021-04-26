import { ContactForm } from './contact-form';
import { Profile } from './profile';

export function Main() {
  return (
    <main className="relative bg-gray-700 shadow w-screen min-h-screen">
      <Profile></Profile>
      <ContactForm />
    </main>
  );
}
