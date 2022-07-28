 import style from './SubCategoryButton.module.css'
 
 const SubCategoryButton = () => {
  return (
    <div className={`row p-2 m-0 d-flex justify-content-center ${style.subcat}`}>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">
          Показать
        </button>
      </div>
    </div>
  );
};

export default SubCategoryButton
