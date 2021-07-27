import React from 'react';

const Savdo = () => {
    return (
        <div className="creditCard">
            <div className="container-fluid">
                <div className="creditCardForm">
                    <div className="heading mt-3">
                        <h1>Xaridni Tasdiqlang</h1>
                    </div>
                    <div className="payment">
                        <form>
                            <div className="form-group owner">
                                <label htmlFor="owner">Egasi</label>
                                <input type="text" className="form-control" id="owner"/>
                            </div>
                            <div className="form-group CVV">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" className="form-control" id="cvv"/>
                            </div>
                            <div className="form-group" id="card-number-field">
                                <label htmlFor="cardNumber">Karta raqami</label>
                                <input
                                    type="text"
                                       maxLength="16"
                                       minLength="16"
                                       className="form-control"
                                       id="cardNumber"
                                />
                            </div>
                            <div className="form-group" id="expiration-date">
                                <label>Amal qilish muddati</label>
                                <select>
                                    <option value="01">Yanvar</option>
                                    <option value="02">Fevral</option>
                                    <option value="03">Mart</option>
                                    <option value="04">Aprel</option>
                                    <option value="05">May</option>
                                    <option value="06">Iyun</option>
                                    <option value="07">Iyul</option>
                                    <option value="08">Avgust</option>
                                    <option value="09">Sentyabr</option>
                                    <option value="10">Oktyabr</option>
                                    <option value="11">Noyabr</option>
                                    <option value="12">Dekabr</option>
                                </select>
                                <select className="mt-3">
                                    <option value="16"> 2021</option>
                                    <option value="17"> 2020</option>
                                    <option value="18"> 2022</option>
                                    <option value="19"> 2023</option>
                                    <option value="20"> 2024</option>
                                    <option value="21"> 2025</option>
                                </select>
                            </div>
                            <div className="form-group" id="credit_cards">
                                <img src="/images/clients/visa.jpg" id="visa"/>
                                <img src="/images/clients/mastercard.jpg" id="mastercard"/> <br/>
                                <img src="/images/clients/uzcard.jpg" id="amex" width="88px" height={"59px"}/>
                                <img src="/images/clients/humo.jpg" id="amex" width="88px" height={"59px"}/>
                            </div>
                            <div className="form-group" id="pay-now">
                                <button type="submit" className="btn btn-default" id="confirm-purchase">Tasdiqlang
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Savdo;