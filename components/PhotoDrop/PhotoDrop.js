import { useEffect, useState } from "react";
import style from "./PhotoDrop.module.css";

const PhotoDrop = () => {
  const [drag, setDrag] = useState(false);
  const [files, setFiles] = useState([]);
  const [notImg, setNotImg] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotImg([]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [notImg]);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();

    const unfilteredFiles = [...e.dataTransfer.files];
    console.log(e.dataTransfer.files);
    unfilteredFiles.map((item, index) => {
      if (
        item.type === "image/png" ||
        item.type === "image/gif" ||
        item.type === "image/jpeg"
      ) {
        item.url = URL.createObjectURL(item);
        // item.id = index + 1;
        setFiles((prev) => [...prev, item]);
      } else {
        setNotImg((prev) => [
          ...prev,
          `Файл ${item.name} не является изображением`,
        ]);
      }
    });

    setDrag(false);
  };

  const onInputClickHandler = (e) => {
    e.preventDefault();

    const unfilteredFiles = [...e.target.files];
    unfilteredFiles.map((item, index) => {
      if (
        item.type === "image/png" ||
        item.type === "image/gif" ||
        item.type === "image/jpeg"
      ) {
        item.url = URL.createObjectURL(item);
        // item.id = index + 1;
        setFiles((prev) => [...prev, item]);
      } else {
        setNotImg((prev) => [
          ...prev,
          `Файл ${item.name} не является изображением`,
        ]);
      }
    });
  };

  const onCloseImg = (index) => {
    setFiles((state) => state.filter((item) => state.indexOf(item) != index));
  };

  const dragImgStartHandler = (e, item) => {
    setCurrentCard(item);
  };

  const dragImgEndHandler = (e) => {
    // e.target.style.opacity = '1'
  };

  const dragImgOverHandler = (e) => {
    e.preventDefault();
    // e.target.style.opacity = '0.8'
  };

  const dropImgHandler = (e, item) => {
    e.preventDefault();
    const copyListItems = [...files];
    let from_index = files.indexOf(currentCard);
    let from_item = files[from_index];
    let to_index = files.indexOf(item);
    // files[from_index] = item;
    // files[to_index] = from_item;
    copyListItems.splice(from_index, 1);
    copyListItems.splice(to_index, 0, from_item);
    setFiles(copyListItems)
    // setFiles((state) =>
    //   state.map((c) => {
    //     if (c.id === item.id) {
    //       return { ...c, id: currentCard.id };
    //     }
    //     if (c.id === currentCard.id) {
    //       return { ...c, id: item.id };
    //     }
    //     return c
    //   })
    // );
  };

  // const sortPhotos = (a, b) => {
  //     if (a.id > b.id) {
  //       return 1
  //     } else {
  //       return -1
  //     }
  // }

  return (
    <div className="col-7">
      {files.length < 1 && drag && (
        <div
          className={style.on__focus}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          <p>Перетащите фото сюда</p>
        </div>
      )}

      {files.length < 1 && !drag && (
        <div
          className={style.moto__textarea}
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
        >
          <input
            type="file"
            name="file"
            id="file"
            className={style.input__file}
            onChange={(e) => onInputClickHandler(e)}
            onClick={(e) => setNotImg([])}
            multiple
          />
          <label for="file">Добавить фото</label>
          <span>или</span>
          <p>Перетащите фото сюда</p>
        </div>
      )}

      {files.length > 0 && (
        <div className={style.drop__textarea}>
          <div className="d-flex">
            {files.map((item, index) => {
              return (
                <div
                  className={style.img__wrapper}
                  key={index}
                  draggable
                  onDragStart={(e) => dragImgStartHandler(e, item)}
                  onDragLeave={(e) => dragImgEndHandler(e)}
                  onDragEnd={(e) => dragImgEndHandler(e)}
                  onDragOver={(e) => dragImgOverHandler(e)}
                  onDrop={(e) => dropImgHandler(e, item)}
                >
                  <div
                    className={style.close__photo}
                    onClick={() => onCloseImg(index)}
                  >
                    x
                  </div>
                  <img src={item.url} alt="photo" />
                  {files[0] === item && (
                    <div className={style.main__photo}>Главное фото</div>
                  )}
                </div>
              );
            })}
            <input
              type="file"
              name="file"
              id="file"
              className={style.drop__file}
              onChange={(e) => onInputClickHandler(e)}
              onClick={(e) => setNotImg([])}
              multiple
            />
            <label for="file">
              + <br /> Добавить
            </label>
          </div>
          <div>Перетаскивайте фото, чтобы изменить их порядок</div>
        </div>
      )}
      {notImg?.map((item, index) => (
        <div className="text-danger" key={index}>
          {item}
        </div>
      ))}
      <div className="mt-3">✅ Добавляйте только фотографии</div>
      <div className="mt-3">❌ Не добавляйте скриншоты, картинки, фотокаллажи</div>
      <div className="mt-3">❌ Проследите, чтобы на фото не было логотипов, контактных данных и ссылок на сайты</div>
    </div>
  );
};

export default PhotoDrop;
