import Image from "next/image";
import styles from "./page.module.css";
import Welcome from './Components/Welcome';
import Navigation from './Components/Navigation';
import Count from "./Components/Count";

export default function Home() {
  //This is the main homepage of the website.
  return (
    <div className={styles.page}>
      <h1>Welcome to the Home Page</h1>
      <Navigation />
      <Welcome userName="Fahad" />
      <Count />
    </div>
  );
}
