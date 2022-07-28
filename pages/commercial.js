import CommercialSubCategoryBlock from "../components/CommercialSubCategoryBlock/CommercialSubCategoryBlock";

const Commercial = ({ subcatList }) => {
  return (
    <>
      <div className="container-lg p-4">
        <CommercialSubCategoryBlock />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const subcatList = await fetch(
//       "http://localhost:3000/api/get-commercial-subcat-list"
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

export default Commercial;
