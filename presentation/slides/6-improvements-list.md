<!-- sectionTitle: Future Improvements -->

# Future Improvements

    - HTTPS (using route 53 - SSL certificate)
    - Stupid NACL's - restringe to VPC cidr_block for some ports
    - Send slack's notification on pull-request merged / wordpress deployed
        - send when it fails
    - CloudWatch (Topic) - (lambda/steps functions) - to notify when the instance is broken
    - Use CodeDeploy [blue/green] for easy rollback