const pageChangePhoto = document.querySelector("#change-photo");

if (pageChangePhoto) {

    const formSavePhoto = pageChangePhoto.querySelector("form") as HTMLFormElement;

    const btnChoosePhoto = pageChangePhoto.querySelector(".choose-photo") as HTMLButtonElement;

    const profileAvatar = pageChangePhoto.querySelector("#photo-preview") as HTMLImageElement;

    const btnSavePhoto = pageChangePhoto.querySelector("button[tupe=submit]") as HTMLButtonElement;

    const message = pageChangePhoto.querySelector(".toast") as HTMLDivElement;

    const btnCloseMessage = pageChangePhoto.querySelector(".toast .close") as HTMLButtonElement;

}