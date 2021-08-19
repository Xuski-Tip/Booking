import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import SlickSlider from "react-slick";
import axios from "axios";
import {API, API_PATH, LOGIN} from "../simpleJs/loginApi";
import {getLanguage} from "../simpleJs/locale";
import {toast} from "react-toastify";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Modal, ModalFooter, ModalHeader} from "reactstrap";

function Slider(props) {

    const [jurnal12, setJurnal12] = useState([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");
    const [sent, setSend] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get(API + "magazine")
            .then((res) => {
                setJurnal12(res.data.magazine.splice(0, 1));
            })
    }, []);

    const {t} = useTranslation();
    const settings = {
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
    };

    function auto(item) {
        setId(item.id);
        setSend(item.price);
        setName(getLanguage() === "uz" ? item.title_uz : getLanguage() === "ru" ? item.title_ru : getLanguage() === "en" ? item.title_en : item.title_cril);
        setOpen(true);
    }

    function navigateToLogin() {
        props.his.push("/Authorization")
    }
    var token = localStorage.getItem(LOGIN);
    var array = (token) ? token.split(".") : "";
    var obj = array? JSON.parse(atob(array[1])) : "";


    function hello(event, error, values) {
        setOpen(!open);
        const headers = {
            'Authorization': localStorage.getItem(LOGIN)
        };
        axios.post(API + "magazinebuy", values, {
            headers: headers
        })
            .then((res) => {
                if(res.data.status === "success"){
                    window.open(res.data.checkout_url, '_blank');
                } else if(res.data.status === "Token is Expired" || res.data.status === "Authorization Token not found"){
                    navigateToLogin();
                    toast.warning(res.data.status);
                }
            })
    }

    return (
      <div className="container mt-4">
          <div  className="row">
              <>
                  <div className="MainHeader">
                      <div className="MainSlider slide kenburns">
                          <SlickSlider {...settings}>
                              <div className="backImg">
                                  <div className="MainSlider__bg">

                                      {/*<p className="MainSlider__lorem mb-4">*/}
                                      {/*    {t("Welcom.The magazine has been 1999")}*/}
                                      {/*</p>*/}
                                      {/*<div className='moreButton'>*/}
                                      {/*    <Link to="/jurnal" className="btn scroll-to">*/}
                                      {/*        {t("Welcom.Explore more")}*/}
                                      {/*    </Link>*/}
                                      {/*</div>*/}
                                  </div>
                              </div>
                              {/*<div className="MainSlider__bg1">*/}
                              {/*    /!*<h1 className="MainSlider__subtitle typing-demo">*!/*/}
                              {/*    /!*    {t("Offical Site.democration")} {" "}*!/*/}
                              {/*    /!*    <br/> {t("Offical Site.scientific and educational journal")}*!/*/}
                              {/*    /!*</h1>*!/*/}
                              {/*    /!*<p className="MainSlider__lorem mb-4">*!/*/}
                              {/*    /!*    {t("Welcom.The magazine has been 1999")}*!/*/}
                              {/*    /!*</p>*!/*/}
                              {/*    /!*<div className='moreButton'>*!/*/}
                              {/*    /!*    <Link to="/jurnal" className="btn scroll-to">*!/*/}
                              {/*    /!*        {t("Welcom.Explore more")}*!/*/}
                              {/*    /!*    </Link>*!/*/}
                              {/*    /!*</div>*!/*/}
                              {/*</div>*/}
                              <div className="MainSlider__bg2">
                                  {/*<h1 className="MainSlider__subtitle typing-demo">*/}
                                  {/*    {t("Offical Site.democration")} {" "}*/}
                                  {/*    <br/> {t("Offical Site.scientific and educational journal")}*/}
                                  {/*</h1>*/}
                                  {/*<p className="MainSlider__lorem mb-4">*/}
                                  {/*    {t("Welcom.The magazine has been 1999")}*/}
                                  {/*</p>*/}
                                  {/*<div className='moreButton'>*/}
                                  {/*    <Link to="/jurnal" className="btn scroll-to">*/}
                                  {/*        {t("Welcom.Explore more")}*/}
                                  {/*    </Link>*/}
                                  {/*</div>*/}
                              </div>
                              <div className="MainSlider__bg3">
                                  {/*<h1 className="MainSlider__subtitle typing-demo">*/}
                                  {/*    {t("Offical Site.democration")} {" "}*/}
                                  {/*    <br/> {t("Offical Site.scientific and educational journal")}*/}
                                  {/*</h1>*/}
                                  {/*<p className="MainSlider__lorem">*/}
                                  {/*    {t("Welcom.The magazine has been 1999")}*/}
                                  {/*</p>*/}
                                  {/*<div className='moreButton'>*/}
                                  {/*    <Link to="/jurnal" className="btn scroll-to">*/}
                                  {/*        {t("Welcom.Explore more")}*/}
                                  {/*    </Link>*/}
                                  {/*</div>*/}
                              </div>
                          </SlickSlider>
                          <h1 className="Title m-b-0">
                              {t("Offical Site.democration")} {" "}
                          </h1>
                          <h4 className="Title2">
                              {t("Offical Site.scientific and educational journal")}
                          </h4>
                      </div>

                      <div className="MainBg__right">
                          <div className="link">
                              {jurnal12.map((item, index) => {
                                  return (
                                      <div className="">
                                          <a target="_blank">
                                              <img
                                                  alt="error"
                                                  className="MainBg__right-img"
                                                  src={API_PATH + "storage/" + item.image}
                                              />
                                          </a>
                                          <h4 className="newNumber">{t("send.new")}</h4>
                                          <div className="rightSliderLink">
                                              <div className="link-button-main">
                                                  <a href={API_PATH + "storage/" + item.file} className="btnRight2">Mundarija</a>
                                                  <button type="button" className="btnRight"
                                                          onClick={() => (localStorage.getItem(LOGIN) !== "") ? auto(item):navigateToLogin()}
                                                  >
                                                      {t("send.send")}
                                                  </button>

                                              </div>
                                          </div>
                                      </div>
                                  )
                              })}
                          </div>

                      </div>
                  </div>

                  <Modal isOpen={open} toggle={() => setOpen(!open)}>
                      <AvForm onSubmit={hello}>
                          <ModalHeader>
                              {t("subscribe.buy")} <br/>
                              {t("subscribe.money")} : {sent} {" "} {t("subscribe.sum")} <br/>
                              {t("subscribe.nomi")}: {name}

                              {/*<ModalBody>*/}
                              <div className="d-none">
                                  <AvField name="user_id" value={obj.sub} type="text" label="user_id"/>
                                  <AvField name="product_id" value={id} type="text" label="product_id"/>
                                  <AvField name="type" value="magazine" type="text" label="Magazine"/>
                              </div>
                              {/*</ModalBody>*/}
                          </ModalHeader>
                          <ModalFooter className="d-flex justify-content-between">
                              <button type="submit" className="btn btn-primary">{t("leadershep.send")}</button>
                              <button type="button" className="btn btn-danger" onClick={() => setOpen(false)}>{t("registr.cansel")}</button>
                          </ModalFooter>
                      </AvForm>
                  </Modal>

              </>
          </div>
      </div>
    );
}

export default Slider;