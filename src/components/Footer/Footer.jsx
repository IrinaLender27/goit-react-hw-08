import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <p>
        Created by
        <a href="https://github.com/IrinaLender27">
          {" "}
          &copy; Iryna Lender{" "}
        </a>{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
