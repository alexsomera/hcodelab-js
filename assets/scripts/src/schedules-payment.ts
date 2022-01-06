const pagePayment = document.querySelector("#schedules-payment");

if (pagePayment) {

    const form = pagePayment.querySelector("form") as HTMLFormElement;

    const number = pagePayment.querySelector("#number") as HTMLInputElement;
    const expiry = pagePayment.querySelector("#expiry") as HTMLInputElement;
    const cvv = pagePayment.querySelector("#cvv") as HTMLInputElement;
    const name = pagePayment.querySelector("#name") as HTMLInputElement;
    const bank = pagePayment.querySelector("#bank") as HTMLInputElement;
    const installments = pagePayment.querySelector("#installments") as HTMLInputElement;
    const document = pagePayment.querySelector("#document") as HTMLInputElement;
    const btnConfirmPayment = pagePayment.querySelector("button[tupe=submit]") as HTMLButtonElement;

    const creditCard = pagePayment.querySelector(".form-card") as HTMLDivElement;

    const cardFront = creditCard.querySelector(".front") as SVGSVGElement;
    const cardBack = creditCard.querySelector(".back") as SVGSVGElement;

    const cardName = creditCard.querySelector(".name") as SVGTSpanElement;
    const cardNumber = creditCard.querySelector(".number-1") as SVGTSpanElement;
    const cardExpyre = creditCard.querySelector(".expiry") as SVGTSpanElement;
    const cardCvv = creditCard.querySelector(".cvv") as SVGTSpanElement;

    

}