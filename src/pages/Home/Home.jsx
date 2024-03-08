import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import css from "./Home.module.css";
import "../../index.css";

export default function Home() {
  return (
    <div className={css.backgroungHome}>
      <div className={css.textContainer}>
        <DocumentTitle>Home</DocumentTitle>
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.homeText}>
          Manage your contacts easily and conveniently. Add new contacts, edit
          information and find the numbers you need quickly. We care about your
          communication!
        </p>
      </div>
    </div>
  );
}
