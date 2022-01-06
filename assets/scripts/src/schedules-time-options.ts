const pageTimeOptions = document.querySelector("#time-options");

if (pageTimeOptions) {
    const form = pageTimeOptions.querySelector("form") as HTMLFormElement;
    const date = pageTimeOptions.querySelector("h3") as HTMLHeadingElement;

    const btnConfirmTime = pageTimeOptions.querySelector("button[tupe=submit]") as HTMLButtonElement;
    
    if(form) {
        const input = form.querySelector("input") as HTMLInputElement;
        const time = form.querySelector("span") as HTMLSpanElement;
    }
}