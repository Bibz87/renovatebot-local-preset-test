terraform {
  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "3.7.1"  # Purposefully out of date to be Renovated
    }
  }
}

resource "random_pet" "this" {
  length = 3
}
