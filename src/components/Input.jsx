export default function Input(props) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={props.userInput.initialInvestment}
            onChange={(event) =>
              props.onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={props.userInput.annualInvestment}
            onChange={(event) =>
              props.onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={props.userInput.expectedReturn}
            onChange={(event) =>
              props.onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={props.userInput.duration}
            onChange={(event) => props.onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
