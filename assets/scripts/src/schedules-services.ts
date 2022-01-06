const page = document.querySelector("#schedules-services");

if (page) {
    
    const form = page.querySelector("form") as HTMLFormElement;

    const btnConfirmServices = page.querySelector("button[tupe=submit]") as HTMLButtonElement;

    if(form) {

        const input = form.querySelector("input") as HTMLInputElement;
        const service = form.querySelector(".name") as HTMLSpanElement;
        const description = form.querySelector(".description") as HTMLSpanElement;
        const price = form.querySelector(".price") as HTMLSpanElement;

    }


}