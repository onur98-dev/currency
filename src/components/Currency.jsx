import React from 'react'
import '../images/stonk.avif'
import '../css/currency.css'
import { MdArrowCircleRight } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios'
function Currency() {

    const [amount, setAmount] = useState();
    const [fromCurrency, setFromCurrency] = useState('TRY');
    const [toCurrency, setToCurrency] = useState('USD');
    const [result, setResult] = useState(0);;

    const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest';
    const API_KEY = 'fca_live_MtSc3LQnMVTCkGm9RBVFidPXMmmBpg0tpkGODRrs'


    const calculate = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);

    }


    return (
        <div>
            <div className="currency-container" >
                <div>
                    <h4 className=' title '>Exchange App</h4>
                    <div>
                        <input
                            onChange={(e) => setAmount(e.target.value)} type='number' className='fromCurrency'></input>
                        <select
                            onChange={(e) => setFromCurrency(e.target.value)} className='firstSelection'>
                            <option>TRY</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                        <MdArrowCircleRight className='arrow' />
                        <select
                            onChange={(e) => setToCurrency(e.target.value)} className='secondSelection'>
                            <option>USD</option>
                            <option>TRY</option>
                            <option>EUR</option>
                        </select>
                        <input
                            value={result}
                            onChange={(e) => setResult(e.target.value)} type="number" className='toCurrency' readOnly />
                    </div>
                    <button
                        onClick={calculate}
                        className='calculate'> Exchange </button>
                </div>
            </div>
        </div >
    )
}

export default Currency
