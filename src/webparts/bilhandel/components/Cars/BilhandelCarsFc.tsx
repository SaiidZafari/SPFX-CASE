import * as React from "react";
import { useEffect, useState } from "react";
import styles from "../Bilhandel.module.scss";
import { IBilhandelProps } from "../IBilhandelProps";
import { FunctionComponent } from "react";
// import { sp } from "@pnp/sp";
// import '@pnp/sp/webs';
// import '@pnp/sp/lists';
// import '@pnp/sp/items/list';
// import { IItem, Items, PagedItemCollection } from '@pnp/sp/items';





const BilhandelCarsFc: FunctionComponent<IBilhandelProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const carshop = {
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
  };

  const { hasTeamsContext } = props;

  const [cars, setCars] = useState([]);
 
 
  useEffect(() => {
    setCars(carshop.carmodels);
  }, []);
  
  // const items = List.GetByTitle(carmodels).GetItems();
  
  return (
    <section
      className={`${styles.bilhandel} ${hasTeamsContext ? styles.teams : ""}`}
    >
      <h2>Cars</h2>
      
      <div className={styles.theEmployees}>
        <div className={styles.theCarBox}>
          {cars.map((car, index) => (
            <div className={styles.theCar} key={index}>
              <h3>{car.brand}</h3>
              <h3>{car.model}</h3>
              <h3>{car.price} kr.</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BilhandelCarsFc;
