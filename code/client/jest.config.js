module.exports = {
    verbose: true,
    testEnvironment: "node",
    "coveragePathIgnorePatterns": ["/node_modules/", "/dist"],
    // ONLY target files inside the test folder that end with
    // ".spec.js" 
    testMatch: ["<rootDir>/tests/**"],
}