import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import PageInfo from "./PageInfo";
import PageShop from "./PageShop";
import axios from "axios";
import {API} from "../../simpleJs/loginApi";
const PageContainer = () => {
  const [dataFrom, setCountirs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coutriesPerPage] = useState(8);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const lastCountryIndex = currentPage * coutriesPerPage;
  const firstCountryIndex = lastCountryIndex - coutriesPerPage;
  const currentCountry = dataFrom.slice(firstCountryIndex, lastCountryIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {

    setCountirs([
      {
        pdf: "",
        img: "/images/arxive1.jpg",
        id: 1,
        subtitle: "журнали 2021 йил 1-сони мундарижаси",
      },
      {
        pdf: "",
        img: "/images/arxive2.jpg",
        id: 2,
        subtitle: "журнали 2020 йил 4-сони мундарижаси",
      },
      {
        pdf: "",
        img: "/images/arxive3.jpg",
        id: 3,
        subtitle: "журнали 2020 йил 3-сони мундарижаси",
      },
      {
        pdf: "",
        img: "/images/arxive4.jpg",
        id: 4,
        subtitle: "журнали 2020 йил 2-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal1.pdf",
        img: "/images/arxive5.jpg",
        id: 5,
        subtitle: "журнали 2020 йил 2-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal.pdf",
        img: "/images/arxive6.jpg",
        id: 6,
        subtitle: "журнали 2020 йил 1-сони мундарижаси",
      },

      {
        pdf: "/pdf/jurnal.pdf",
        img: "/images/arxive7.jpg",
        id: 7,
        subtitle: "журнали 2019 йил 3-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal.pdf",
        img: "/images/arxive8.jpg",
        id: 8,
        subtitle: "журнали 2019 йил 2-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal.pdf",
        img: "/images/background/jurnal2019_1.jpg",
        id: 9,
        subtitle: "журнали 2019 йил 1-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal2.pdf",
        img: "/images/background/jurnal2018_4.jpg",
        id: 10,
        subtitle: "журнали 2018 йил 4-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal1.pdf",
        img: "/images/background/jurnal2018_3.jpg",
        id: 11,
        subtitle: "журнали 2018 йил 3-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal3.pdf",
        img: "/images/background/jurnal2018_2.jpg",
        id: 12,
        subtitle: "журнали 2018 йил 2-сони мундарижаси",
      },
      {
        pdf: "/pdf/jurnal3.pdf",
        img: "/images/background/jurnal2018_2.jpg",
        id: 13,
        subtitle: "журнали 2018 йил 2-сони мундарижаси",
      },

    ]);
  }, []);
  //   const dataFrom = [
  //     {
  //       pdf: "",
  //       img: "/images/arxive1.jpg",
  //       id: 1,
  //       subtitle: "журнали 2021 йил 1-сони мундарижаси",
  //     },
  //     {
  //       pdf: "",
  //       img: "/images/arxive2.jpg",
  //       id: 2,
  //       subtitle: "журнали 2020 йил 4-сони мундарижаси",
  //     },
  //     {
  //       pdf: "",
  //       img: "/images/arxive3.jpg",
  //       id: 3,
  //       subtitle: "журнали 2020 йил 3-сони мундарижаси",
  //     },
  //     {
  //       pdf: "",
  //       img: "/images/arxive4.jpg",
  //       id: 4,
  //       subtitle: "журнали 2020 йил 2-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal1.pdf",
  //       img: "/images/arxive5.jpg",
  //       id: 5,
  //       subtitle: "журнали 2020 йил 2-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal.pdf",
  //       img: "/images/arxive6.jpg",
  //       id: 6,
  //       subtitle: "журнали 2020 йил 1-сони мундарижаси",
  //     },

  //     {
  //       pdf: "/pdf/jurnal.pdf",
  //       img: "/images/arxive7.jpg",
  //       id: 7,
  //       subtitle: "журнали 2019 йил 3-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal.pdf",
  //       img: "/images/arxive8.jpg",
  //       id: 8,
  //       subtitle: "журнали 2019 йил 2-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal.pdf",
  //       img: "/images/background/jurnal2019_1.jpg",
  //       id: 9,
  //       subtitle: "журнали 2019 йил 1-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal2.pdf",
  //       img: "/images/background/jurnal2018_4.jpg",
  //       id: 10,
  //       subtitle: "журнали 2018 йил 4-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal1.pdf",
  //       img: "/images/background/jurnal2018_3.jpg",
  //       id: 11,
  //       subtitle: "журнали 2018 йил 3-сони мундарижаси",
  //     },
  //     {
  //       pdf: "/pdf/jurnal3.pdf",
  //       img: "/images/background/jurnal2018_2.jpg",
  //       id: 12,
  //       subtitle: "журнали 2018 йил 2-сони мундарижаси",
  //     },
  //   ];

  return (
    <div>
      <PageInfo />
      <PageShop dataFrom={currentCountry} loading={loading} />
      <Pagination
        countriesPerPage={coutriesPerPage}
        totalCountries={dataFrom.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};

export default PageContainer;
