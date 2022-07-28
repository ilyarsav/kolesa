import AddNew from "../components/AddNew/AddNew";
import HotOffers from "../components/HotOffers/HotOffers";
import CarsSubCategoryBlock from "../components/CarsSubCategoryBlock/CarsSubCategoryBlock";
import MobCatBlock from "../components/MobCatBlock/MobCatBlock";

const Cars = ({ cars, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <div>
          <MobCatBlock />
        </div>
      ) : (
        <div className="container-lg p-4">
          <CarsSubCategoryBlock />
          <HotOffers cars={cars} />
          <AddNew />
          {/* <MainContent/> */}
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  try {
    const cars = await fetch("http://localhost:3000/api/get-cars-list").then(
      (res) => res.json()
    );

    return {
      props: {
        cars,
      },
    };
  } catch (error) {
    console.log("error");
  }
}

export default Cars;
