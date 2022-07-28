import { useState } from "react";
import style from "../../styles/Ad.module.css";
import Link from "next/link";

const Ad = ({ catList, subcatList }) => {
  const [cat, setCat] = useState(null);
  const [subcat, setSubcat] = useState(null);

  const chooseCat = (id) => {
    setCat(id);
  };

  const chooseSubcat = (id) => {
    setSubcat(id);
  };

  return (
    <>
      <div className="container">
        <div className=".row mt-4">
          <h3>Подать объявление на Колёса</h3>
        </div>
        <div className="row mt-4">
          <p className="fs-5">
            Срок жизни объявления на сайте — 7 дней. Продлить объявление можно в
            вашем личном кабинете.
          </p>
        </div>
        <div className="row">
          <p className="fs-5">
            Поля, обязательные к заполнению, <b>сразу видно *</b>
          </p>
        </div>
        <div className="row">
          <div className="col-auto">
            <b>Выберите категорию *</b>
          </div>
          <div className="col-2 border p-0">
            <ul className={style.list}>
              {catList.map(({ id, name }) => (
                <li
                  key={id}
                  onClick={() => chooseCat(id)}
                  className={cat == id ? style.choosen : null}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {cat && (
            <div className="col-2 border p-0">
              <ul className={style.list}>
                {subcatList.map(({ id, name }) => (
                  <Link href={`/ad/${id}`}>
                    <li
                      key={id}
                      onClick={() => chooseSubcat(id)}
                      className={subcat == id ? style.choosen : null}
                    >
                      {name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const catList = await fetch(`http://localhost:3000/api/get-cat-list`).then(
    (res) => res.json()
  );

  const subcatList = await fetch(
    `http://localhost:3000/api/get-subcat-list`
  ).then((res) => res.json());

  return { props: { catList, subcatList } };
}

export default Ad;
