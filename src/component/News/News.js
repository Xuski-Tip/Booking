
import React, { useState, useEffect } from "react";
import FooterInfo from "../FooterInfo";
import HeaderUpper from "../HeaderUpper";
import Pagination from "../Pagination";
import axios from "axios";
import NewsCard from "./NewsCard";
function News() {
  const [News, setCountirs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coutriesPerPage] = useState(9);
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)
  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get(
         "https://paycom-test.napaautomotive.uz/api/posts"
      );
      setCountirs(res.data.post);
      setLoading(false);
    };
    getCountries();
  }, []);
  const lastCountryIndex = currentPage * coutriesPerPage;
  const firstCountryIndex = lastCountryIndex - coutriesPerPage;
  const currentCountry = News.slice(firstCountryIndex, lastCountryIndex);
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <>
      <HeaderUpper />
      <NewsCard news={currentCountry} loading={loading} />
      <div className="container">
        <Pagination
          countriesPerPage={coutriesPerPage}
          totalCountries={News.length}
          paginate ={paginate}
          nextPage = {nextPage}
          prevPage = {prevPage}
        />
      </div>
      <FooterInfo />
    </>
  );
}
export default News;
