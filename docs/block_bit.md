---
title: Private Information Lookup and Filter
---
import { Image, License } from '../src/theme/consento'

[State: in-planning]

> **TLDR;** Consento is used to exchange data. When we exchange data we want to use the BIT standard
> to be able to declare the privacy information for each field that is submitted and also want to be able
> to prevent some partners to receive a particular kind of private information.

## Background

Consento allows to exchange data between individuals and/or companies. In this process there may be some
data that is exchanged only after approval and other that is usually not exchanged.

## Blinding Identity Taxonomy

Instead of trying to come up with our own standard for fields, we have been looking into preexisting defintions and
stumbled upon the ["Blinding Identity Taxonomy"](https://docs.kantarainitiative.org/Blinding-Identity-Taxonomy-Report-Version-1.0.pdf),
published by the [Kantara Initiative](https://kantarainitiative.org/).

It specifies 49 different categories of data that may be excluded from data transfer or not.

## Functional goal

The system should consist of a set of primitives and crypto tools that allow to specify, highlight, encrypt or remove private fields
of a given data sets.

1. _"Schema definition"_ For a data structure, defined by the user or a developer, we need to be able to specify which fields should be considered blinding taxonomy and which should not.
    
    ```javascript
    let { BitSchema, Type } = require('@consento/bit')
    let schema = new BitSchema({
      name: Type.NAME
    })
    let dataSet = { name: 'henry', sessionTime: 12 }
    schema.matches(dataSet) // figure out if there are fields in this data that are sensitive.
    ```
2. _"Partial cryptography"_ A tool to encrypt and decrypt the fields of the schema definition with keys derived for each type. This allows to send data to other parties and only later giving permission to access particular fields.

    ```javascript
    let { encrypt, decrypt } = require('@consento/bit')
    let { key, partiallyEncrypted } = encrypt(dataSet, schema)
    decrypt(partiallyEncrypted, key)
    ```
3. _"Contract definition"_ Since different users may want to share different properties with different other users we need a means to specify which
    fields are supposed to be readable by the receiving party and which fields should be hidden or removed.

    ```javascript
    let { Contract } = require('@consento/bit')

    let contract = new Contract({
      ...Contract.HIDE_ALL,
      [Type.Name]: Contract.PLAIN_TEXT,
      [Type.PhysicalAddress]: Contract.ENCRYPT
    })
    encrypt(dataSet, schema, contract)
    ```
4. _"Schema derivation"_ When passing a given data set through he encryption process, it will transform some of the properties from "plaintext" to 
    "possibly encrypted". It is stressful to update any given data structure definition to contain all those new variants. What we need is an 
    automation tool that allows us to derive new data-schemas from existing data-schemas _(preferably JSONSchema)_ combined with the bit-schema.

    ```javascript
    let { JSONSchema } = require('@consento/bit')
    await JSONSchema.derive('https://schema.url', schema)
    ```

5. _"Common Schema Library"_ As many people may already want to use common data sets (such as google or facebook export data) we need a repository 
    that already holds definitions for common data types.

    ```javascript
    let knownSchemas = require('@consento/bit-schemas/google')
    ```

## Possible Beneficiaries

This system can both be used for communication and as a internal tool to enforce data-privacy guidelines. Examples could be Survey providers that want to drop private fields after the survey results are compiled.

<License author="martin" license="CC-BY" year="2021"  />