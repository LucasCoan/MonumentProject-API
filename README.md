# API Testing Project with Playwright

This project is designed to validate API endpoints using **Playwright**. It includes automated tests to verify the correctness of API responses, status codes, and specific values within the response body.

---

## Features

- Automated API testing using **Playwright**.
- Validation of status codes and response bodies.
- Support for GET, POST, PUT, and other HTTP methods.
- Easy-to-read and maintain test structure.
- Console logs for detailed output during test execution.

---

## Prerequisites

Ensure the following tools are installed on your system:

- **Node.js** (version 14 or higher): [Download Node.js](https://nodejs.org)
- **Playwright**: Installed as part of the setup process.
- **npm**: Comes with Node.js for managing packages.

---

## Installation

Follow these steps to set up the project:

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_FOLDER>
```

### 2. Install Dependencies
Install the required dependencies by running:
```bash
npm install
```

### 3. Playwright Setup
Install the necessary browsers for Playwright:
```bash
npx playwright install
```

---

## Usage

### Running the Tests
To execute the tests, use the following command:
```bash
npx playwright test
```

### Viewing Detailed Results
To see detailed test execution results, including the body of responses:
```bash
npx playwright test --ui
```

## Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push the branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Support

For questions or issues, please create a [GitHub Issue](<REPOSITORY_URL>/issues).
