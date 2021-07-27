import React, {useState, useEffect} from "react";
import Pagination from "../Pagination";
import PageInfo from "./PageInfo";
import PageShop from "./PageShop";
import axios from "axios";
import {API} from "../../simpleJs/loginApi";
const PageContainer = () => {
    const [jurnal, setJurnal] = useState([]);
    const [jurnal8, setJurna8] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [coutriesPerPage] = useState(8);
    const nextPage = () => setCurrentPage((prev) => prev + 1);
    const prevPage = () => setCurrentPage((prev) => prev - 1);
    const lastCountryIndex = currentPage * coutriesPerPage;
    const firstCountryIndex = lastCountryIndex - coutriesPerPage;
    const currentCountry = jurnal.slice(firstCountryIndex, lastCountryIndex);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                console.log("salom");
                console.log(res);
                setJurnal(res.data.magazine);
                setJurna8(res.data.magazine.slice(0, -8));
            })
    }, []);


    return (
        <div>
            <PageInfo/>
            <PageShop jurnal={currentCountry} loading={loading}/>
            <Pagination
                countriesPerPage={coutriesPerPage}
                totalCountries={jurnal.length}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </div>
    );
};

export default PageContainer;
