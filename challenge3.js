// Function to calculate net salary
function calculateNetSalary() {
    // Get user inputs
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
  
    // Check for valid input
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      return "Invalid input. Please enter valid numbers.";
    }
  
    // Constants for tax rate, NHIF rate, and NSSF rate (you can adjust these values)
    const taxRate = 0.25;  // 25% tax rate
    const nhifRate = 0.025; // 2.5% NHIF rate
    const nssfRate = 0.06;  // 6% NSSF rate
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate deductions
    const taxDeduction = grossSalary * taxRate;
    const nhifDeduction = grossSalary * nhifRate;
    const nssfDeduction = grossSalary * nssfRate;
  
    // Calculate net salary
    const netSalary = grossSalary - (taxDeduction + nhifDeduction + nssfDeduction);
  
    // Prepare and return the result as a string
    return `
      Gross Salary: ${grossSalary.toFixed(2)}
      Tax Deduction: ${taxDeduction.toFixed(2)}
      NHIF Deduction: ${nhifDeduction.toFixed(2)}
      NSSF Deduction: ${nssfDeduction.toFixed(2)}
      Net Salary: ${netSalary.toFixed(2)}
    `;
  }
  
  // Call the function and display the result
  const result = calculateNetSalary();
  console.log(result);
  