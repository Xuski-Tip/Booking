import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
export default function Client({ sort, setSort }) {
    return (
        <div className="PageInfo row m-b-20">
            <div className="col-lg-6 p-t-10 m-b-20">
                <h3 className="m-b-20">A Monochromatic Spring ’15</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus, sit, exercitationem, consequuntur, assumenda
                    iusto eos commodi alias.
                </p>
            </div>
            <div className="col-lg-3" style={{ alignSelf: 'center' }}>
                <div className="order-select">
                    <select
                        value={sort}
                        className="form-control"
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value={'minus'}>{'Цена по убыванию'}</option>
                        <option value={'plus'}>{'Цена по возрастанию'}</option>
                    </select>
                </div>
            </div>
            <div className="col-lg-3" style={{ alignSelf: 'center' }}>
                <div className="order-select">
                    <ReactBootStrap.FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <ReactBootStrap.Button
                        className="btn-search"
                        variant="outline-success"
                    >
                        Search
                    </ReactBootStrap.Button>
                </div>
            </div>
        </div>
    );
}
