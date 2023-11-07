document.addEventListener("DOMContentLoaded", function() {
    const medicineInventory = document.getElementById("medicineInventory");
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const medicineName = document.getElementById("medicineName").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        if (medicineName && quantity > 0) {
            const listItem = document.createElement("li");
            listItem.textContent = `${medicineName} - ${quantity} units`;
            medicineInventory.appendChild(listItem);

            // Clear the input fields
            document.getElementById("medicineName").value = "";
            document.getElementById("quantity").value = "";
        }
    });
});
