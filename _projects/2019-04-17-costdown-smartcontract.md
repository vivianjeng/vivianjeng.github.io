---
layout: project
title: Smarter smart contract
description: 
summary: Step-by-step guideline for making smart contracts smarter
category: Blockchain
---

[Paper](https://ieeexplore.ieee.org/document/8953016)<br/>
[Github Repo](https://github.com/vivianjeng/gas-reduced-ZoKrates-verifier)

## Abstract

Different from traditional programs, which run on local machines or in the clouds, smart contracts run mostly on miners’ devices; moreover, users of smart contracts have to pay fees (i.e., gases in Ethereum) to miners for executing the transactions on the blockchain. Lack of enough experience in developing smart contracts makes writing **low cost** and **highly efficient smart contracts** a very challenging task. During this work, by collating existing approaches and developing new methods for reducing gas consumption, a set of systematical step-by-step guidelines for developing low-cost smart contracts is proposed. To prove its usefulness, **ZoKrates verifier**, a very complicated and costly contract, is used to demonstrate how our scheme can effectively decrease gas consumption.

![img13.png](img13.png)
*Figure 1. The workflow of the proposed smart contract smartening scheme for reducing gas consumption*

## Initialization
![img14](img14.png)
*Figure 2. The workflow of Initializing Input and Variables step.*
- **Example 1:** Accessing an array is more expansive than variables
```
function variables(uint a, uint b, uint c) public returns (uint) {
        return a + b * 2 + c;
} 
```
*Deployment: 109725 gas, Execution: 22189 gas*
```
function array(uint a[3]) public returns (uint) {
        return a[0] + a[1] * 2 + a[2];
}
```
*Deployment: 128233 gas, Execution: 22379 gas*

```
function StackTooDeep(uint a, uint b, uint c, uint d,
     uint e, uint f, uint g, uint h, uint i) 
     public returns (uint) {
        return a + b + c + d + e + f + g + h + i;
} 
```
*CompilerError: Stack too deep, try removing
local variables.* while too many inputs

> Comparison between the usage of multiple variables and an array as input formats. Using an array as input type causes a gas consumption increase by 18508 (16.8%) in deployment and 190 (0.86%) in execution, respectively.

- **Example 2:** Multiple Arrays v.s. One Single Array
```
function multiple(uint256[2] a, uint256[4] b, uint256[2] c, uint256[4] d) public returns( uint256) {
    uint256 sum = 0; 
    for (uint256 i = 0; i < 2; i++){sum += a[i];} 
    for (uint256 i = 0; i < 4; i++){sum += b[i];} 
    for (uint256 i = 0; i < 2; i++){sum += c[i];}
    for (uint256 i = 0; i < 4; i++){sum += d[i];}
    return sum;
}
```
*Deployment: 231725 gas, Execution: 26129 gas*
```
function multiple(uint256[12] a) public returns( uint256) {
    uint256 sum = 0; 
    for (uint256 i = 0; i < 2; i++){sum += a[i];} 
    for (uint256 i = 0; i < 6; i++){sum += a[i];} 
    for (uint256 i = 0; i < 8; i++){sum += a[i];}
    for (uint256 i = 0; i < 12; i++){sum += a[i];}
    return sum;
}
```
*Deployment: 179633, Execution: 25637 gas*
> Comparison between the usage of multiple arrays and one single array. In this situation, using one single array can save up to 52092 (22.5%) gas in deployment and 492 (1.9%) gas in execution.

## Function Design

- **Example 3:** Merge Functions
If a function is called only once, it had better be merged with the caller function for saving gas, if the merging is feasible.

<p style="text-align:center;">
<img src="img15.png" alt="The workflow of Merging functions step." style="width: 50%;" />
</p>

*Figure 3. The workflow of Merging functions step.*

## Final Adjustments

- **Example 4:** Modify function names
If we rename the functions properly the gas consumption will be reduced accordingly.
Because Solidity automatically converts a function into a method ID, which is the first (left, high-order in big-endian) four bytes of the Keccak-256 (SHA-3) hash of the signature of the function.
During compiling time, the compiler builds a binary search tree according to the method ID, and sort these functions from the smallest method ID to the biggest one.
Once a function is called, an EVM finds the function from the root of a binary search tree.
However, the Solidity compiler does not optimize this binary search tree.
If we know which function is going to be called many times in advance, we can rename this function to have a better method of ID to fit in a better place of the binary search tree.

<p style="text-align:center;">
<img src="img16.png" alt="Hello" style="width: 50%;" />
</p>

*Figure 4. If the closer the Method ID is to the root, the smaller the searching cost is.*

## Evaluation
Case study **Zokrates verifier contract**
![img17](img17.png)
*Figure 5. The gas reduction in each step*

## Conclusion
- We build a step-by-step gas reducing scheme for developers to smarten their Ethereum blockchain-based smart contracts
- To verify the effectiveness of each rule involved in our scheme, we have checked the step-by-step gas reduction achieved by applying the proposed scheme to **ZoKrates verifier contracts**.
- According to our experiments, we can **save up to 10% gas consumption** in contract deployment, which makes on-chain applications more scalable and more privacy-preserving.