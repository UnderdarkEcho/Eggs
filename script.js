document
  .getElementById("calc-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from refreshing the page

    // Get input values
    let totalFixedCost = parseFloat(
      document.getElementById("fixed-cost").value
    );
    let lifespanYears = parseFloat(document.getElementById("lifespan").value);
    let monthlyVariableCost = parseFloat(
      document.getElementById("variable-cost").value
    );
    let numHens = parseFloat(document.getElementById("num-hens").value);
    let eggsPerHen = parseFloat(document.getElementById("eggs-per-hen").value);
    let profitMargin =
      parseFloat(document.getElementById("profit-margin").value) / 100;

    // Validate inputs
    if (
      totalFixedCost < 0 ||
      lifespanYears <= 0 ||
      monthlyVariableCost < 0 ||
      numHens < 1 ||
      eggsPerHen <= 0 ||
      profitMargin < 0 ||
      profitMargin >= 1
    ) {
      alert(
        "Please enter valid numbers: costs must be non-negative, lifespan and eggs per hen must be positive, hens at least 1, profit margin between 0 and 99%."
      );
      return;
    }

    // Perform calculations
    let monthlyFixedCost = totalFixedCost / lifespanYears / 12;
    let totalMonthlyCost = monthlyFixedCost + monthlyVariableCost;
    let totalEggs = numHens * eggsPerHen;
    let dozens = totalEggs / 12;
    let costPerDozen = totalMonthlyCost / dozens;
    let sellingPrice = costPerDozen / (1 - profitMargin);
    let profitPerDozen = sellingPrice - costPerDozen;

    // Display results
    document.getElementById("cost-per-dozen").textContent =
      costPerDozen.toFixed(2);
    document.getElementById("selling-price").textContent =
      sellingPrice.toFixed(2);
    document.getElementById("profit-per-dozen").textContent =
      profitPerDozen.toFixed(2);
    document.getElementById("results").style.display = "block";
  });
