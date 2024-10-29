---
sidebar_position: 3
---

# Token Factory Contract
## Contract Functions:

### 1. deployTREXSuite

**Signature**

```jsx solidity
function deployTREXSuite (
    string memory _salt,
    TokenDetails calldata _tokenDetails,
    ClaimDetails calldata _claimDetails
) external
```

**Working:**

Deploys new token suite contracts.

| **Parameters** | **Type** | **Description** |
| --- | --- | --- |
| _salt | string | Unique identifier for token deployment |
| _tokenDetails | struct | Struct containing token-related settings |
| _claimDetails | struct | Struct containing claim-related settings |
### 2. setImplementationAuthority

**Signature**

```jsx
function setImplementationAuthority(
    address implementationAuthority_
) public
```

**Working:**

Sets a new Implementation Authority address for the contract

| **Parameters** | **Type** | **Description** |
| --- | --- | --- |
| implementationAuthority_ | address | Unique identifier for token deployment |