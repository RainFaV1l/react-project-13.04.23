import { useState, useEffect } from "react";
import Item from "../components/Item/Item";
import TitleSub from "../components/TitleSub/TitleSub";

const ServicesPage = () => {
  // Обьявляем состояние для хранения всех услуг
  const [services, setServices] = useState();
  // Обьявляем состояние для поиска по всем услугам
  const [searchData, setSearch] = useState("");
  // Фильтрация по категориям
  //   const [cat, setCat] = useState(1);

  // Получаем услуги без скидки
  //   const noDiscountServices = services?.filter(
  //     (service) => service.dicsount_percent === 0
  //   );

  // Функция для получения всех услуг через api
  const fetchServices = async () => {
    // Выполняем запрос
    const response = await fetch("https://exam.avavion.ru/api/services");
    const data = await response.json();
    // console.log(data);
    // Сохраняем в состояние
    setServices(data.data);
  };

  // Функция для получения всех категорий через api
  // const fetchServicesCategories = async () => {
  //     const response = await fetch(`ссылка для вывода всех категорий`)
  //     const data = await response.json()

  //     setCategories(data.data)
  // }

  // Вызываем функции через хук useEffect
  useEffect(() => {
    fetchServices();
    // fetchServicesCategories()
  }, []);

  // Поиск по услугам
  const searchServicesArr = services?.filter((item) =>
    item.name.includes(searchData)
  );

  // Установка состояния для поиска
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="services">
      <div className="services__row">
        <TitleSub
          title="Каталог услуг"
          subtitle="Услуги, предоставляемые данной компанией"
        />
        <input
          placeholder="Поиск по наименованию"
          className="services__search"
          type="search"
          onChange={(e) => handleSearch(e)}
          value={searchData}
        />
      </div>
      <div className="list">
        {searchServicesArr?.map((item) => {
          console.log(item);
          return <Item service={item} />;
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
