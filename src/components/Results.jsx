import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results(props) {
  const resultData = calculateInvestmentResults(props.input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td className="center">{yearData.year}</td>
              <td className="center">
                {formatter.format(yearData.valueEndOfYear)}
              </td>
              <td className="center">{formatter.format(yearData.interest)}</td>
              <td className="center">{formatter.format(totalInterest)}</td>
              <td className="center">
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
