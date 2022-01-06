const pageChangePassword = document.querySelector("#change-password");

if (pageChangePassword) {

    const formSavePassword = pageChangePassword.querySelector("form") as HTMLFormElement;

    const currentPassword = pageChangePassword.querySelector("#password-current") as HTMLInputElement;

    const newPassword = pageChangePassword.querySelector("#password_new") as HTMLInputElement;

    const confirmPassword = pageChangePassword.querySelector("#password_confirm") as HTMLInputElement;

    const btnSavePassword = pageChangePassword.querySelector("button[tupe=submit]") as HTMLButtonElement;

    const message = pageChangePassword.querySelector(".toast") as HTMLDivElement;

    const btnCloseMessage = pageChangePassword.querySelector(".toast .close") as HTMLButtonElement;

}