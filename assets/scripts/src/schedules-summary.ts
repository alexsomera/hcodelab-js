const pageSummary = document.querySelector("#schedules-services");

if (pageSummary) {
    
    const form = pageSummary.querySelector("form") as HTMLFormElement;

    const btnConfirmServices = pageSummary.querySelector("button[tupe=submit]") as HTMLButtonElement;

    if(form) {

        const payment = form.querySelector("#payment") as HTMLInputElement;
        const creditcard = form.querySelector("#creditcard") as HTMLInputElement;
        const installments = form.querySelector("#installments") as HTMLInputElement;
        const services = form.querySelector("#services") as HTMLInputElement;
        const schedule_at = form.querySelector("#schedule_at") as HTMLInputElement;
        const total = form.querySelector("#total") as HTMLInputElement;

    }


}