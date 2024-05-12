import { CountryByRegion } from "@/components/CountryByRegion";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Welcome to Hello World Countries!</h1>

      <p className="mb-6">
        Explore the world with Hello World Countries, your gateway to discovering fascinating information about countries around the globe. Whether you're a traveler, student, or simply curious about the world, Hello World Countries provides a comprehensive platform to delve into the diverse cultures, landscapes, and histories of nations worldwide.
      </p>

      <p className="mb-6">
        With Hello World Countries, you can:
      </p>

      <ul className="list-disc pl-8 mb-10">
        <li>Discover Detailed Information: Access comprehensive details about each country, including population, capital city, languages spoken, currency, and much more.</li>
        <li>Visualize Geographic Data: View maps and flag images for each country, offering a visual representation of its location and national identity.</li>
        <li>Learn About Borders and Relationships: Explore bordering countries and understand international relationships through border-sharing nations.</li>
        <li>Understand Socio-Economic Factors: Gain insights into socio-economic indicators such as GDP, income inequality (Gini coefficient), and landlocked status.</li>
        <li>Stay Informed: Keep up-to-date with the latest data, including population statistics, currency information, and more.</li>
      </ul>

      <p>
        Hello World Countries is your passport to understanding the world around you. This project utilizes the <a className="font-bold text-neutral-400 hover:text-white" href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">REST Countries API</a> for country data, and incorporates modern web technologies including Next.js, Tailwind CSS, and React to deliver an intuitive and engaging user experience.
      </p>
    </>
  );
}
