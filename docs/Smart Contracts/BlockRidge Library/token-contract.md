---
sidebar_position: 4
---

# Token Contract
## Contract Functions:

### 1. Init

**Signature**

```jsx solidity
function init(
    address _identityRegistry,
    address _compliance,
    string memory _name,
    string memory _symbol,
    uint8 _decimals,
    address _onchainID
) external
```

**Working:**

Initializes the contract with given parameters.

| **Parameters** | **Type** | **Description** |
| --- | --- | --- |
| _identityRegistry | address | Address of the Identity registry |
| _compliance | address | Address of the compliance contract |
| _name | string | Name of the token |
| _symbol | string | Symbol of the token |
| _decimals | uint8 | Decimals of the token |
| _onchainID | address | Address of the on-chain ID of the token |
### 2. Force Transfer

**Signature**

```jsx solidity
function forcedTransfer(
    address _from,
    address _to,
    uint256 _amount
) public
```

**Working:**

This function helps the Agent with Role to transfer frozen tokens to a whitelisted address without any approval.

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _from | address | Address from whom tokens should be transferred |
| _to | address | Agent address to whom tokens should be transferred |
| _amount | number | Amount of Frozen tokens that needs to be transferred |
### 3. Batch Forced Transfer

**Working:**

This function helps the Agent with Role to transfer frozen tokens from more than 1 user to a whitelisted address without any approval.

**Signature**

```jsx solidity
function batchForcedTransfer(
    address[] calldata _fromList,
    address[] calldata _toList,
    uint256[] calldata _amounts
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _fromlist | Array of addresses | Addresses from whom tokens should be transferred |
| _toList | Array of addresses | Whitelisted address to whom tokens should be transferred |
| _amount | Array of numbers | Amounts of Frozen tokens that need to be transferred |
### 4. Mint

**Working:**

This function helps the Agent with Role to mint tokens to a user address.

**Signature**

```jsx solidity
function mint(
    address _to,
    uint256 _amount
) public
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _to | address | Address to which tokens should be minted |
| _amount | number | Number of tokens that should be minted. |
### 5. Batch Mint

**Working:**

This function helps the Agent with Role to mint tokens from more than 1 user address.

**Signature**

```jsx solidity
function batchMint(
    address[] calldata _toList,
    uint256[] calldata _amounts
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _toList | Array of addresses | Addresses to which tokens should be minted |
| _amounts | Array of number | Number of tokens that should be minted. |
### 6. Burn

**Working:**

This function helps the Agent with Role to burn tokens from a user address.

**Signature**

```jsx solidity
function burn(
    address _userAddress,
    uint256 _amount
) public
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddress | address | Address from which tokens should be burned |
| _amount | number | Number of tokens that should be burned. |
### 7. Batch Burn

**Working:**

This function helps the Agent with Role to burn tokens from more than 1 user address.

**Signature**

```jsx solidity
function batchBurn(
    address[] calldata _userAddresses,
    uint256[] calldata _amounts
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddresses | Array of addresses | Addresses to which tokens should be burned |
| _amounts | Array of number | Number of tokens that should be burned. |
### 8. Freeze Partial Tokens

**Working:**

This function helps the Agent with Role to freeze tokens from the user address.

**Signature**

```jsx solidity
function freezePartialTokens(
    address _userAddress,
    uint256 _amount
) public
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddress | address | Address from which tokens should be frozen |
| _amount | number | Number of tokens that should be frozen. |
### 9. Batch Freeze Partial Tokens

**Working:**

This function helps the Agent with Role to freeze partial tokens from more than 1 user address.

**Signature**

```jsx solidity
function batchFreezePartialTokens(
    address[] calldata _userAddresses,
    uint256[] calldata _amounts
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddresses | Array of addresses | Addresses to which tokens should be frozen |
| _amounts | Array of number | Number of tokens that should be frozen. |
### 10. UnFreeze Partial Tokens

**Working:**

This function helps the Agent with Role to unFreeze tokens from the user address.

**Signature**

```jsx solidity
function unfreezePartialTokens(
    address _userAddress,
    uint256 _amount
) public
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddress | address | Address from which tokens should be unfrozen |
| _amount | number | Number of tokens that should be unfrozen. |
### 11. Batch unFreeze Partial Tokens

**Working:**

This function helps the Agent with Role to unFreeze partial tokens from more than 1 user address.

**Signature**

```jsx solidity
function batchUnfreezePartialTokens(
    address[] calldata _userAddresses,
    uint256[] calldata _amounts
) external
```

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| _userAddresses | Array of addresses | Addresses to which tokens should be unfrozen |
| _amounts | Array of number | Number of tokens that should be unfrozen. |