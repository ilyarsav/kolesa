import ServicesSubCategoryBlock from "../components/ServicesSubCategoryBlock/ServicesSubCategoryBlock";

const Services = ({ subcatList }) => {
  return (
    <>
      <div className="container-lg p-4">
        <ServicesSubCategoryBlock />
      </div>
    </>
  );
};

// export async function getServerSideProps() {
//   try {
//     const subcatList = await fetch(
//       "http://localhost:3000/api/get-services-subcat-list"
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

export default Services;
