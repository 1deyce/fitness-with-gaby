import React from 'react';

const PaymentPage = () => {
    const pricingList = [
        {description: "30min : Targeted Muscle", cost: 150},
        {description: "60min : Full body", cost: 250},
        {description: "90min : Full body Deep Tissue", cost: 350}
    ];

    return (
        <section className="bg-black text-white">
            <div className="flex justify-center px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
                <form 
                    name="PayFastPayNowForm" 
                    action="https://payment.payfast.io/eng/process" 
                    method="post"
                    className='p-10 rounded-md'
                >
                    <h1 className='text-white mb-12 text-5xl font-bold text-center leading-normal'>
                        Pay Securely with <span className='bg-gradient-to-r from-[--heading-color] to-[#022d2d] rounded-lg p-2'>PayFast</span>
                    </h1>
                    <p 
                        className='text-white mb-12 text-center text-sm'
                    >
                        Please select the correct amount below, then click <span className='text-[--heading-color]'>'Pay Now'</span> to proceed further with your payment.
                    </p>
                    <input required type="hidden" name="cmd" value="_paynow" />
                    <input required type="hidden" name="receiver" pattern="[0-9]" value="17320049" />
                    <table className='rounded-xl flex justify-center'>
                        <tbody>
                        <tr className='flex flex-col items-center space-y-2'>
                            <td>
                            <label id="PayFastAmountLabel" htmlFor="PayFastAmount" className='text-center'>
                                Select Amount :
                            </label>
                            </td>
                            <td>
                            <select
                                required
                                id="PayFastAmount"
                                name="amount"
                                className="rounded-md text-black p-3 font-semibold text-center w-full bg-[--heading-color]"
                            >
                                {pricingList.map((item, index) => (
                                    <option 
                                        key={index} 
                                        value={item.cost}
                                    >
                                        {item.description} - R{item.cost.toFixed(2)}
                                    </option>
                                ))}
                            </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <input required type="hidden" name="item_name" maxLength="255" value="Sport Massage" />
                    <table className='flex justify-center'>
                        <tbody>
                        <tr>
                            <td colSpan={2} align="center">
                            <input type="image" src="https://my.payfast.io/images/buttons/PayNow/Dark-Large-PayNow.png" alt="Pay Now" title="Pay Now with Payfast" className='pt-20' />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default PaymentPage;