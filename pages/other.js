import OtherSubCatBlock from "../components/OtherSubCatBlock/OtherSubCatBlock";

const Other = () => {
  return (
    <>
      <div className="container-lg p-4">
        <OtherSubCatBlock />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const subcatList = await fetch(
//       "http://localhost:3000/api/get-equipments-subcat-list"
//     ).then((res) => res.json());

//     return {
//       props: {
//         subcatList,
//       },
//     };
//   } catch (error) {
//     console.log("error");
//   }
// }

export default Other;
