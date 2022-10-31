# TypeScript + Serverless Framework Bootstrap Project

The idea of this repository is to provide a bootstrap using Serverless projects written in TypeScript. Serverless can be cumbersome
to set up and this project wants to provide a batteries-included template to kickstart your project, not only in a sense of technologies
but also to be compliant with SSU company-policies like the [Cloud Governance Model](https://sportsunited-my.sharepoint.com/:w:/r/personal/g_alvarez_signa-sportsunited_com/_layouts/15/doc2.aspx?sourcedoc=%7B16D84B06-8BA6-4133-836F-EE5DF8CE43FE%7D&file=Cloud%20Governance%20Model%20v1.0.docx&action=edit&mobileredirect=true&wdOrigin=TEAMS-ELECTRON.teams.undefined&cid=34cfdeda-e040-417e-b3d7-5d979e462007) and the [AWS naming convention](https://signa-sportsunited.atlassian.net/wiki/spaces/IT/pages/1018888248/AWS+Naming+Convention+Standards).

If you are unfamiliar with the Serverless framework, please refer to their [concepts page](https://www.serverless.com/framework/docs/providers/aws/guide/intro) to learn about the basics.

## Technologies Used

- [Serverless Framework](https://serverless.com/) to deploy your Infrastructure as Code (IaC)
- [Typescript](https://www.typescriptlang.org/) to add typing to your project
- [Awilix](https://github.com/jeffijoe/awilix) to provide you with a dependency injection container
- [Webpack](https://webpack.js.org/) to bundle your code for each Lambda function
- [Jest](https://jestjs.io/) to write and run your tests

## Folder Structure

Please feel free to use as much or as little from this boilerplate as you need for your project, which also means that you should feel free to use a completely different software architecture or a completely different configuration structure.

### Software Architecture

This project comes with an example folder structure under the `src` folder following Domain-Driven Design's proposed software architecture, the Hexagonal Architecture, with its 3 signature layers: Domain, Application and Infrastructure. You'll see that we provide some examples on Entities, Value Objects, Errors, Ports & Adapters, and more.

This example will create an endpoint for a POST HTTP request, which you can see diving into the `src/infrastructure/handlers/create-product/create-product.ts` file.

### Configuration

Together with the `serverless.yml` file, under the `config` folder you'll find all the necessary configuration to deploy our IaC:
- Inside the `custom.yml` fike you'll find a series of parameters like webpack configuration specific to Serverless.
- Under the `environments` folder you'll find a file for each environment of your project, each will load depending on the stage defined in the `sls deploy` command.
- Under the `functions` folder you'll find the configuration file for our example POST HTTP endpoint, the `create-product.yml` file. This file is the link between Serverless and your code, defined by the `handler` attribute.
- Under the `resources` folder you'll find a series of pre-defined API Gateway responses.

## Setup Instructions

### Prerequisites

- **An AWS account**: if you don't have an account, you'll have to contact DevOps. Please refer to [Serverless' guide](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/) on how to set up your credentials with the framework. Ideally, you want to do your first deploy using the Workshops account.
- The **latest NodeJS LTS** that is supported by AWS Lambda (Currently v16)
- **NPM** to install the project's dependencies

### Project Setup

Install all necessary dependencies using `npm install`. Then, feel free to use any of the available npm scripts:

- `npm run deploy:sandbox`: deploys your project's sandbox environment to AWS
- `npm run remove:sandbox`: removes your project's sandbox environment from AWS
- `npm run test`: executes the tests using Jest
