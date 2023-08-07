import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.spanContainer}>
        <span className={styles.span}>
          &#169; 2023 All rights reserved. Developed by Yana Usatiuk |
        </span>{" "}
        <a
          href="https://www.linkedin.com/in/yana-usatiuk-223aa1262/"
          target="blank"
        >
          {" "}
          LinkedIn{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
