# Vulnerable Javascript Application

It is an application based on NodeJs and is designed to verify the accuracy of the detection of SAST vulnerabilities of [skims](https://gitlab.com/fluidattacks/product/-/tree/master/skims). This application exposes the most common types of vulnerabilities that require analysis of the application input data flow manipulated by the user.

## Rules for adding test cases

- add a new route in `server/routes/testcases/`, the file name should in the format `test<test-number>.js`
- add a new HTTP file in `test/endpoints` to test the endpoint, the file must have 2 requests to test a normal use case and exploit case, the file name should in the format `test<test-number>.http`
- add test result in `expected_results.csv`, with the test number, vulnerability category, CWE and test result, is it vulnerable or not
