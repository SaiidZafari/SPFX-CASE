import * as React from "react";
import styles from "../Bilhandel.module.scss";
import { IBilhandelProps} from "../IBilhandelProps";
import { FunctionComponent } from "react";

const BilhandelSalesFc: FunctionComponent<IBilhandelProps> = (props) => {
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
    carmodels: [
      {
        id: 1,
        brand: "BMW",
        model: "335i",
        price: 200000,
      },
      {
        id: 2,
        brand: "Aston Martin",
        model: "Vanquish",
        price: 233000,
      },
      {
        id: 3,
        brand: "Toyota",
        model: "Prius",
        price: 150000,
      },
      {
        id: 4,
        brand: "Volvo",
        model: "240",
        price: 100000,
      },
    ],
    sales: [
      {
        id: 1,
        employee_id: 2,
        carmodel_id: 3,
      },
      {
        id: 2,
        employee_id: 4,
        carmodel_id: 2,
      },
      {
        id: 3,
        employee_id: 4,
        carmodel_id: 4,
      },
      {
        id: 4,
        employee_id: 1,
        carmodel_id: 1,
      },
      {
        id: 5,
        employee_id: 3,
        carmodel_id: 1,
      },
      {
        id: 6,
        employee_id: 3,
        carmodel_id: 1,
      },
      {
        id: 7,
        employee_id: 2,
        carmodel_id: 2,
      },
      {
        id: 8,
        employee_id: 2,
        carmodel_id: 3,
      },
    ],
  };

 

  const {
    hasTeamsContext,
  } = props;

  return (
    <section
      className={`${styles.bilhandel} ${hasTeamsContext ? styles.teams : ""}`}
    >      
      <h2>Sales</h2>
      <div className={styles.theEmployees}>
        {carshop.employees.map((employee) => (
          <div className={styles.theEmployee} key={employee.id}>
            <h2>{employee.name}</h2>
            <div className={styles.theCarBox}>
              {carshop.sales.map((sal) =>
                carshop.carmodels.map((car) =>
                  sal.employee_id === employee.id &&
                  sal.carmodel_id === car.id ? (
                    <div className={styles.theCar}>
                      <h3>{car.brand}</h3>
                      <h3>{car.model}</h3>
                      <h3>{car.price} kr.</h3>
                    </div>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default BilhandelSalesFc;
