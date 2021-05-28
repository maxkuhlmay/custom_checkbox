const checkboxContainer = document.querySelector(".customCheckbox__container");
const checkboxes = checkboxContainer.querySelectorAll(".customCheckbox__checkbox-container");

console.log("Found Checkboxes", checkboxes);

checkboxes.forEach(function (checkbox) {
    console.log("Checkbox", checkbox);

    checkbox.addEventListener("click", function (event) {
        console.log("Checkbox Clicked", checkbox);
        const checkmark = checkbox.querySelector(".customCheckbox__checkbox-checkmark");
        if (checkmark.classList.contains("selected")) {
            checkmark.classList.remove("selected")
        } else {
            checkmark.classList.add("selected")
        }
    })
})
