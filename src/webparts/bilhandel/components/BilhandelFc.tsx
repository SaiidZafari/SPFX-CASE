import * as React from "react";
import { FunctionComponent, useState } from "react";
import styles from "./Bilhandel.module.scss";
import { IBilhandelProps } from "./IBilhandelProps";
import BilhandelSalesFc from "./Sales/BilhandelSalesFc";
import BilhandelEmployeeFc from "./Employees/BilhandelEmployeeFc";
import BilhandelCarsFc from "./Cars/BilhandelCarsFc";

const BilhandelFc: FunctionComponent<IBilhandelProps> = (props) => {
  const { isDarkTheme, hasTeamsContext } = props;

  const [nav, setNav] = useState("");

  React.useEffect(() => {
    if (!nav) setNav("Cars");
  }, [nav]);

  return (
    <section
      className={`${styles.bilhandel} ${hasTeamsContext ? styles.teams : ""}`}
    >
      <div className={styles.welcome}>
        <img
          alt=""
          src={
            isDarkTheme
              ? require("../assets/welcome-dark.png")
              : require("../assets/welcome-light.png")
          }
          className={styles.welcomeImage}
        />
        <h1>Car Dealership</h1>
        <div>
          <button onClick={() => setNav("Cars")}>Cars</button>
          <button onClick={() => setNav("Employees")}>Employees</button>
          <button onClick={() => setNav("Sales")}>Sales</button>
        </div>
      </div>

      {nav === "Cars" ? (
        <BilhandelCarsFc
          description={""}
          websiteUrl={""}
          isDarkTheme={false}
          environmentMessage={""}
          hasTeamsContext={false}
          userDisplayName={""}
        />
      ) : nav === "Sales" ? (
        <BilhandelSalesFc
          description={""}
          websiteUrl={""}
          isDarkTheme={false}
          environmentMessage={""}
          hasTeamsContext={false}
          userDisplayName={""}
        />
      ) : (
        <BilhandelEmployeeFc
          description={""}
          websiteUrl={""}
          isDarkTheme={false}
          environmentMessage={""}
          hasTeamsContext={false}
          userDisplayName={""}
        />
      )}
    </section>
  );
};
export default BilhandelFc;
