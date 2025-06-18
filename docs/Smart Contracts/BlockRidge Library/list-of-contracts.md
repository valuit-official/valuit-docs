---
sidebar_position: 2
---

# List of Contracts
- Token Factory Contract
- Token Contract
- Identity Registry Contract
- Identity Registry Storage Contract
- Modular Compliance Contract
- Claim Topics Registry Contract
- Trusted Issuer Registry Contract
- Identity Contract
- Identity Factory Contract
- Implementation Authority
- Agent Manager Contract
- Owner Manager Contract
- ERC20 Wrapper Contract

## Token Factory Contract

Token Factory contract allows issuers to easily deploy security tokens without technical knowledge, using a user-friendly web interface to fill in required fields and create tokens.

## Token Contract

Token contract manages the core functionalities of the security tokens, including minting, burning, and transferring tokens. It ensures compliance by embedding transfer rules and controlling token actions like freezing and forced transfers.

## Identity Registry Contract

Identity Registry contract links wallet addresses to on-chain identities and country codes, ensuring that only verified identities can hold and transfer tokens. This contract helps enforce compliance with regulatory requirements.

## Identity Registry Storage Contract

The Identity Registry Storage contract stores the identity data used by the Identity Registry, maintaining a dynamic whitelist of verified identities and their associated attributes, such as country codes and claim statuses.

## Modular Compliance Contract

Compliance contract provides a framework for defining and enforcing compliance rules on token transfers. It allows customization of rules to meet various regulatory requirements and can be updated or extended as needed.

## Claim Topics Registry Contract

Claim Topics Registry maintains a registry of claim topics, specific attributes, or credentials required for identity verification. Only identities with the necessary claims can hold and transfer tokens.

## Trusted Issuer Registry Contract

Trusted Issuer Registry contract keeps a list of trusted issuers authorized to verify identities and issue claims. Only identities verified by trusted parties can interact with the tokens.

## Identity Contract

The identity contract represents the on-chain identity of a user, containing verified claims and other identity attributes. It interacts with the Identity Registry to validate identity-related conditions for token transfers

## Identity Factory Contract

Identity Factory contract facilitates the creation of new on-chain identities, streamlining the process for users and issuers to generate and manage their identities on the blockchain.

## Implementation Authority

Implementation Authority contract governs the upgradeability of the contracts, allowing for improvements and updates to be implemented while maintaining security and compliance.

## Agent Manager Contract

Agent Manager contract manages the roles and permissions of agents who are authorized to perform actions on behalf of the token issuer, such as adding or removing identities from the registry.

## Owner Manager Contract

The owner-manager contract handles ownership and administrative control over the ERC3643 contracts, enabling the owner to appoint agents and manage other critical aspects of the system.

## ERC20 Wrapper Contract

Wrapper contract provides a way to wrap and unwrap ERC3643 tokens, allowing for flexibility with other token standards and systems, thus enhancing the functionality and flexibility of the ERC3643 tokens