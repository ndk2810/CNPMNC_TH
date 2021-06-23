import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import server from '../../serverAddress'

const PaymentForm = ({ amount, tenTour, hoTen, ThongTinDat }) => {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const respone = await axios.post(server + "/thanhToan", {
                    IDDat: ThongTinDat.IDDat,
                    amount: amount,
                    description: "Khách " + hoTen + " đặt tour " + tenTour,
                    id
                })

                if (respone.data.success) {
                    setSuccess(true)

                    //Cộng điểm cho khách hàng
                    axios.put('https://gift-api-v1.herokuapp.com/customer/updatepoint', {
                        khach_hang_id: (JSON.parse(localStorage.getItem('userToken'))).id,
                        diem_tich_luy: 20
                    })
                        .then(() => {
                            alert("Thanh toán thành công !")
                            //window.location.replace('/')
                        })
                }
            }
            catch (error) {
                console.log("Error: " + error)
            }
        }
        else {
            console.log(error.message)
        }
    }

    return (
        <>
            {
                !success &&
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div >
                            <CardElement className="thanhToan-cardInput" />
                        </div>
                    </fieldset>
                    <button className="btn-thanhtoan">Pay</button>
                </form>
            }
        </>
    )
}

export default PaymentForm
