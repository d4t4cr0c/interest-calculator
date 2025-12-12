# Annualized Compound Interest Calculator

A simple web-based calculator to compute annualized compound interest rates and final amounts based on different compounding frequencies.

## Features

- Calculate annualized interest rate from period-based rates
- Support for multiple compounding frequencies:
  - Daily (252 trading days)
  - Weekly (52 weeks)
  - Monthly (12 months)
- Clean, responsive user interface
- Real-time calculation results

## Usage

1. Enter the initial dollar amount
2. Enter the interest rate per period (as a percentage)
3. Select the compounding frequency
4. Click "Calculate" to see results

## Formulas

**Annualized Rate:**
```
Annualized Rate = (1 + r)^n - 1
```

**Final Amount:**
```
Final Amount = P × (1 + r)^n
```

Where:
- P = Principal (initial amount)
- r = Interest rate per period (as decimal)
- n = Number of compounding periods per year

## GitHub Pages Deployment

To deploy this calculator to GitHub Pages:

1. Create a new repository on GitHub
2. Add the remote repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/interest-calculator.git
   ```
3. Add and commit all files:
   ```bash
   git add .
   git commit -m "Initial commit: Add compound interest calculator"
   ```
4. Push to GitHub:
   ```bash
   git push -u origin main
   ```
5. Go to your repository Settings → Pages
6. Under "Source", select "main" branch and "/" (root) folder
7. Click "Save"
8. Your calculator will be available at: `https://YOUR_USERNAME.github.io/interest-calculator/`

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - Calculation logic and form handling

## License

MIT License - Feel free to use and modify as needed.
