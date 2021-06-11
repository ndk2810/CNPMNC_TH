import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import server from '../../serverAddress'

const PaymentForm = ({ amount, tenTour, hoTen }) => {
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
                    amount: amount,
                    description: "Khách " + hoTen + " đặt tour " + tenTour,
                    id
                })

                if (respone.data.success) {
                    setSuccess(true)
                    alert("Thanh toán thành công rồi nha !")
                    window.location.replace('/')
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
