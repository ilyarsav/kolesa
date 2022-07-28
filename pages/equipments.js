import EquipmentsSubCategoryBlock from "../components/EquipmentsSubCategoryBlock/EquipmentsSubCategoryBlock";

const Equipments = ({ autoEquipments }) => {
  return (
    <>
      <div className="container-lg p-4">
        <EquipmentsSubCategoryBlock 
        // autoEquipments={autoEquipments} 
        />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const autoEquipments = await fetch(
//       "http://qoldan-dev.com/api/car/ca_cat/get_cat_info"
//     ).then((res) => res.json());

//     return {
//       props: {
//         autoEquipments,
//       },
//     };
//   } catch (error) {
//     console.log("error");
//   }
// }

export default Equipments;
