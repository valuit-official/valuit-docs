---
sidebar_position: 5
---

# Identity Registry Contract
## Contract Functions:

### 1. Init

**Working:**

Initializes the contract with given parameters.

**Signature**

```jsx solidity
function init(
    address _trustedIssuersRegistry,
    address _claimTopicsRegistry,
    address _identityStorage
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _trustedIssuersRegistry | address | Trusted Issuers registry linked to the Identity Registry |
| _claimTopicsRegistry | address | claim topics registry linked to the Identity Registry |
| _identityStorage | address | identity registry storage linked to the Identity Registry |
### 2. Register Identity

**Working:**

This function will whitelist the user on the token.

**Signature**

```jsx solidity
function registerIdentity(
    address _userAddress,
    IIdentity _identity,
    uint16 _country
) public
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddress | address | Address of the user |
| _identity | address | Identity Contract of User |
| _country | number | Country Code of user |
### 3. Batch Register Identity

**Working:**

This function will whitelist more than 1 user on the token in a single transaction.

**Signature:**

```jsx solidity
function batchRegisterIdentity(
    address[] calldata _userAddresses,
    IIdentity[] calldata _identities,
    uint16[] calldata _countries
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddresses | Array of addresses | Addresses of the user |
| _identities | Array of addresses | Identity Contracts of User |
| _countries | Array of numbers | Country codes of users |