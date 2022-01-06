const pageProfile = document.querySelector("#profile");

if (pageProfile) {

    const formSaveProfile = pageProfile.querySelector("form") as HTMLFormElement;

    const name = pageProfile.querySelector("#name") as HTMLInputElement;
    const email = pageProfile.querySelector("#email") as HTMLInputElement;
    const birth_at = pageProfile.querySelector("#birth_at") as HTMLInputElement;
    const document = pageProfile.querySelector("#document") as HTMLInputElement;
    const phone = pageProfile.querySelector("#phone") as HTMLInputElement;

    const btnSaveProfile = pageProfile.querySelector("button[tupe=submit]") as HTMLButtonElement;

    const message = pageProfile.querySelector(".toast") as HTMLDivElement;

    const btnCloseMessage = pageProfile.querySelector(".toast .close") as HTMLButtonElement;

}