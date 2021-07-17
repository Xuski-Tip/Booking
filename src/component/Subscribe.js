import React, {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalFooter} from "reactstrap"
import {AvForm, AvField} from "availity-reactstrap-validation"

const Subscribe = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [array , setArray] = useState([]);
    const showModal1 = () => {
        setOpen1(!open1);
    };

    const showModal2 = () => {
        setOpen2(!open2);
    };
const buy = (event,error,values) =>{
   console.log(values);
   array.push(values.jurnal1);
   array.push(values.jurnal2)
   array.push(values.jurnal3)
   array.push(values.jurnal4)
   let k = 0;
   let soni = values.nusxa;

   for(let number of array){
       if (number === true) k++;
   }
   let summ = k*soni*25000;
  console.log(summ)
}
    return (
        <div className="container mt-5 jurnal">
            <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-outline-danger" onClick={showModal1}>
                        An'anaviy usulda obuna
                </button>
                <button type="button" className="btn btn-outline-primary" onClick={showModal2}>
                    Online usulda obuna
                </button>
            </div>

            <Modal isOpen={open1} toggle={showModal1}>
                <AvForm>
                    <ModalBody>
                        <AvField name="name" required label='F.I.SH' type="text"/>
                        <AvField name="adres" required label="Adres" type="text"/>
                        <AvField name="email" required label="Email" type="text"/>
                        <AvField name="number" required label="Telefon nomer" type="number"/>
                        <div className="d-flex justify-content-between">
                            <AvField type="select" className="w-75" required name="jurnal" label="Jurnalni tanlang">
                                <option value="1">2021-yil 1-son</option>
                                <option value="2">2021-yil 2-son</option>
                                <option value="3">2021-yil 3-son</option>
                                <option value="4">2021-yil 4-son</option>
                            </AvField>
                            <AvField name="nusxa" required type="number" label="Necha nusxada"/>
                        </div>

                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="button" className="btn btn-success">To'lov</button>
                        <button type="button" className="btn btn-success" onClick={showModal1}>Cansel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>


            <Modal isOpen={open2} toggle={showModal2}>
                <AvForm onSubmit={buy}>
                    <ModalBody>
                        <AvField name="name" required label='F.I.SH' type="text"/>
                        {/*<AvField name="adres" required label="Adres" type="text"/>*/}
                        <AvField name="email" required label="Email" type="text"/>
                        <AvField name="number" label="Telefon nomer" type="number"/>
                        <div className="">
                            <AvField type="checkbox" label="Jurnal1" className="w-75" name="jurnal1"></AvField><br/>
                            <AvField type="checkbox" label="Jurnal2" className="w-75" name="jurnal2"></AvField><br/>
                            <AvField type="checkbox" label="Jurnal3" className="w-75" name="jurnal3"></AvField><br/>
                            <AvField type="checkbox" label="Jurnal4" className="w-75" name="jurnal4"></AvField><br/>
                            <AvField name="nusxa" required type="number" label="Necha nusxada"/>
                        </div>

                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">To'lov</button>
                        <button type="button" className="btn btn-success" onClick={showModal2}>Cansel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>



        </div>
    );
};

export default Subscribe;