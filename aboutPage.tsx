import Navigation from "../Components/Navigation";
import styles from "../page.module.css";

export default function AboutPage() {
    //This is a page that tells a little bit about myself.
    return (
        <div className={styles.page}>
            <Navigation />
            <h1>This is the About Page</h1>
            <p>My name is Fahad Arif and I am currently a student at Humber College. This is the first assignment for the Advanced Front-End Programming Course(CPAN - 144).</p>
        </div>
    )
}
