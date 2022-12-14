import Image from "next/image";
import kolesaLogo from "../../public/kolesa-logo.svg";
import style from "./Header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-2">
          <Image src={kolesaLogo} width={165} height={50}></Image>
        </div>
        <div className="col-8">
          <Link href="/">
            <a className={`me-3 ${router.pathname == "/" && style.active}`}>
              Машины
            </a>
          </Link>
          <Link href="/equipments">
            <a
              className={`me-3 ${
                router.pathname == "/equipments" && style.active
              }`}
            >
              Запчасти
            </a>
          </Link>
          <Link href="/services">
            <a
              className={`me-3 ${
                router.pathname == "/services" && style.active
              }`}
            >
              Ремонт и услуги
            </a>
          </Link>
          <Link href="/commercial">
            <a
              className={`me-3 ${
                router.pathname == "/commercial" && style.active
              }`}
            >
              Коммерческие
            </a>
          </Link>
          <Link href="/other">
            <a
              className={`me-3 ${router.pathname == "/other" && style.active}`}
            >
              Прочее
            </a>
          </Link>
        </div>
        <div className="col-auto">
          <button
            className={style.btn__advertisement}
            onClick={() => router.push("/ad")}
          >
            Подать объявление
          </button>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Header;
