<!-- sectionTitle: Solution Diagram -->

# Solution Diagram

> Speaker: **Fabio**

Explain the diagram

![solution diagram](https://raw.githubusercontent.com/devopsacademyau/2020-jun-project1-group1/master/images/solution-diagram.png)

---

<!-- sectionTitle: Technologies Used -->

# Technologies used

> Speaker: **Alan**

> Explain the technologies stack used for this project

## Development Tools

* [Github](https://github.com/)  - version control
* [Terraform](https://www.terraform.io/) - infra as code
* [Github actions](https://github.com/features/actions/) CICD pipeline
* [Docker](https://www.docker.com/) - containerisation
* [Docker-compose](https://docs.docker.com/compose/) - containerisation
* [Make](https://en.wikipedia.org/wiki/Make_(software)) - automation
* [Terraform Docs](https://github.com/terraform-docs/terraform-docs) - terraform modules documentation

## AWS Cloud Stack

* EC2 Instance
* ECS / ECR
* MySQL Aurora DB
* Elastic File System (EFS)
* CloudWatch - monitoring
* Elastic Load Balacing (LB)
* Auto Scaling (EC2 instances creation and monitoring)

---
<!-- sectionTitle: Version Deployment -->

# Version Deployment


> Speaker: **Alan**

<!-- note 
> Explain how the new version is deployed
> Mention the github actions workflow
-->

- **Deployment Type:** Rolling update using ECS
- Docker Imags will be built and pushed to ECR on changes in the docker file
- Once that PR is merged, a new `task definition` version will be created and registered to the ECS service
- ECS will create new tasks to replace the current (outdated) tasks


---
<!-- sectionTitle: System Monitoring -->

# System Monitoring

> Speaker: **Mariana**

> How the health of the system is monitored.