#!/bin/bash

# To work, the script has to be run as 'source config_prod.sh'

export api_base="http://ec2-18-202-226-156.eu-west-1.compute.amazonaws.com:8000/v1"
export local_storage_user_expiry_time=48
export nocache=true
export raven_id=false
