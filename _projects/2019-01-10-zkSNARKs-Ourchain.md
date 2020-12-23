---
layout: project
title: zkSNARK Implementation on Ourchain
description: 
summary: To enhance privacy and security on C-language-based blockchain
category: Blockchain
---

[Doc](https://hackmd.io/@oB2038yeR2SkqPFeR5F5Fg/ByT6cZQG4)

## Introduction
Blockchain is a public ledger, which means that all of the data is open to be viewed by others. Recently, **programmability** and **privacy** have become the two main issues of cryptocurrency. Therefore, we would like to allow users to submit their data with smart contracts while preserving their sensitive data from being revealed.

## Servey
-  [Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts](https://eprint.iacr.org/2015/675.pdf) in 2016 was the first paper to propose the structure to preserve privacy and programmability at the same time
- [ZoKrates - Scalable Privacy-Preserving Off-Chain Computations ](https://www.ise.tu-berlin.de/fileadmin/fg308/publications/2018/2018_eberhardt_ZoKrates.pdf) in 2018 provided an off-chain toolbox to realize a Zero-knowledge protocol on Ethereum blockchain

## How ZoKrates work
![](https://i.imgur.com/pM48URI.jpg)

> We want to use this toolbox to provide a C-language based blockchain called [Ourchain](https://ieeexplore.ieee.org/document/8397612) with privacy-preserving functionality

## Ourchain
- Ourchain is built based on [Bitcoin](https://bitcoin.org/bitcoin.pdf) but with Economically Proof-of-Work protocol and with C-language smart contracts

## Implementation
- We used [gmp library](https://gmplib.org/) to implement an elliptic curve which ZoKrates used, but we had difficulties in the function pairing.
- I fixed this problem in [September 2019](bncurve-c)

## Evaluation
**Ethereum gas**
- The more public inputs, the more gas in deployment and calling smart contracts
![](https://i.imgur.com/3PJUgTl.jpg)

**Ourchain Transaction Fee**
- The more inputs also increase the transaction fee in deployment, but they are invariant while calling smart contracts
- We suggest that *Ourchain* should have a protocol to calculate transaction fees according to the smart contracts' complexity
<table class="part" data-startline="871" data-endline="877">
<thead>
<tr>
<th><span data-position="31431" data-size="15">Transaction Fees</span></th>
<th><span data-position="31452" data-size="6">Deploy</span></th>
<th><span data-position="31463" data-size="4">Call</span></th>
</tr>
</thead>
<tbody>
<tr>
<td><span data-position="31513" data-size="14">Sudoku Checker</span></td>
<td><span data-position="31534" data-size="5">54380</span></td>
<td><span data-position="31545" data-size="4">5620</span></td>
</tr>
<tr>
<td><span data-position="31554" data-size="6">if a*a==b</span></td>
<td><span data-position="31575" data-size="5">10940</span></td>
<td><span data-position="31586" data-size="4">5440</span></td>
</tr>
<tr>
<td><span data-position="31595" data-size="12">ECC addition</span></td>
<td><span data-position="31616" data-size="6">116760</span></td>
<td><span data-position="31627" data-size="4">5460</span></td>
</tr>
<tr>
<td><span data-position="31636" data-size="18">ECC multiplication</span></td>
<td><span data-position="31661" data-size="6">113480</span></td>
<td><span data-position="31672" data-size="4">5260</span></td>
</tr>
<tr>
<td><span data-position="31681" data-size="21">ECC multiplication * 7</span></td>
<td><span data-position="31706" data-size="6">139980</span></td>
<td><span data-position="31717" data-size="4">5260</span></td>
</tr>
</tbody>
</table>
