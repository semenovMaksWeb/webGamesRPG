
export function createLogo() {
    const logo = document.createElement("div");
    logo.classList.add("logo");

    const img = document.createElement("img")
    img.classList.add("img");
    img.setAttribute("src", "logo.jpg")

    logo.append(img);
    return logo;
}