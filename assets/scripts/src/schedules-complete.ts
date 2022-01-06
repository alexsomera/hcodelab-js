const pageSchedulesComplete = document.querySelector("#schedules-complete");

if (pageSchedulesComplete) {
    
    const date = pageSchedulesComplete.querySelector(".date") as HTMLParagraphElement;

    const orderNumber = pageSchedulesComplete.querySelector(".order-number") as HTMLSpanElement;

    const creditCardEnd = pageSchedulesComplete.querySelector(".credit-card-end") as HTMLSpanElement;
    
    const btnSummaryToggle = pageSchedulesComplete.querySelector("#btn-summary-toggle") as HTMLButtonElement;
    
    const total = pageSchedulesComplete.querySelector(".total") as HTMLSpanElement;
    
    const service = pageSchedulesComplete.querySelector("table td:not(.price)") as HTMLTableCellElement;

    const price = pageSchedulesComplete.querySelector("table .price") as HTMLTableCellElement;
}