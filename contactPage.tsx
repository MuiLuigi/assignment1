import Navigation from "../Components/Navigation";
import styles from "../page.module.css";
import Form from "../Components/Form";

export default function ContactPage() {
    //This is where the form is called
    return (
        <div className={styles.page}>
            <Navigation />
            <h1>This is the Contact Page</h1>
            <Form />
        </div>
    )
}
