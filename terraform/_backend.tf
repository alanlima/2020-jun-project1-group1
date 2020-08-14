terraform {
    backend "s3" {
        bucket = "github-deployments"
        key = "terraform"
        region = "ap-southeast-2"
    }
}