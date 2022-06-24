import * as React from "react";
import styles from "../Bilhandel.module.scss";
import { IBilhandelProps } from "../IBilhandelProps";
import { FunctionComponent } from "react";

const BilhandelEmployeeFc: FunctionComponent<IBilhandelProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const carshop = {
    employees: [
      {
        id: 1,
        name: "Hjulia Styrén",
      },
      {
        id: 2,
        name: "Antonia Cylinder",
      },
      {
        id: 3,
        name: "Kalle Bromslöf",
      },
      {
        id: 4,
        name: "Johan Sportratt",
      },
    ],    
  };

  const { isDarkTheme, hasTeamsContext } = props;

  return (
    <section
      className={`${styles.bilhandel} ${hasTeamsContext ? styles.teams : ""}`}
    >
      <h2>Employees</h2>
      <div className={styles.theEmployeesEmp}>
        {carshop.employees.map((employee) => (
          <div className={styles.theEmployee} key={employee.id}>
            <img
              alt=""
              src={
                isDarkTheme
                  ? require("../../assets/welcome-dark.png")
                  : require("../../assets/welcome-light.png")
              }
              className={styles.welcomeImageEmp}
            />
            <h2>{employee.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BilhandelEmployeeFc;
