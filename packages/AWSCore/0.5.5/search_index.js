var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#AWSCore.jl-1",
    "page": "Home",
    "title": "AWSCore.jl",
    "category": "section",
    "text": ""
},

{
    "location": "stack/#",
    "page": "Test Stack",
    "title": "Test Stack",
    "category": "page",
    "text": ""
},

{
    "location": "stack/#Setting-up-a-test-environment-1",
    "page": "Test Stack",
    "title": "Setting up a test environment",
    "category": "section",
    "text": ""
},

{
    "location": "stack/#Prerequisites-1",
    "page": "Test Stack",
    "title": "Prerequisites",
    "category": "section",
    "text": "An AWS account is required. Setting up the test stack will require permissions for IAM and CloudFormation.Some instructions below will use the AWS CLI.Invenia has a dedicated AWS account for public CI, the use of which is granted for AWSCore. The actions described below should be performed as an administrator of such an account."
},

{
    "location": "stack/#Setting-up-the-account-1",
    "page": "Test Stack",
    "title": "Setting up the account",
    "category": "section",
    "text": ""
},

{
    "location": "stack/#Creating-a-test-user-1",
    "page": "Test Stack",
    "title": "Creating a test user",
    "category": "section",
    "text": "This user will be responsible for actually running the tests. The user will be passed to CloudFormation on stack creation and given permission to assume the stack\'s testing role. This approach allows the same user to be used for multiple testing stacks in the same account, which is useful for iterating on stack design.Since the user is given permissions by CloudFormation, it needs no permissions set upon creation. It will, however, need access keys. These should be saved for running tests, ideally as a profile in an AWS credentials file.Invenia has set up a user dedicated to the AWSCore project, called AWSCoreJL."
},

{
    "location": "stack/#Creating-a-dedicated-stack-creation-role-(optional)-1",
    "page": "Test Stack",
    "title": "Creating a dedicated stack creation role (optional)",
    "category": "section",
    "text": "For greater control and visibility over stack creation, create a dedicated administrator role which will manage the creation of resources in the test stack. Edit the Trust Relationship for this role in the IAM console to allow access from CloudFormation. Adding the following to role\'s policy statement will accomplish this:{\n  \"Effect\": \"Allow\",\n  \"Principal\": {\n    \"Service\": \"cloudformation.amazonaws.com\"\n  },\n  \"Action\": \"sts:AssumeRole\"\n}"
},

{
    "location": "stack/#Creating-the-stack-1",
    "page": "Test Stack",
    "title": "Creating the stack",
    "category": "section",
    "text": "A CloudFormation template resides in the test/aws directory in the AWSCore source tree. This will be used for creating the stack."
},

{
    "location": "stack/#Environment-variables-1",
    "page": "Test Stack",
    "title": "Environment variables",
    "category": "section",
    "text": "# Relative to the root of the package directory\nexport TEMPLATE=file://test/aws/awscore_test.yml\n\n# The testing user created above\nexport PUBLIC_CI_USER=AWSCoreJL\n\n# The name of the stack. All stack names used by this package are named using the\n# scheme AWSCore-jl-#####, where ##### begins with 00001 and counts up. Do not\n# attempt to give two stacks the same name.\nexport STACK_NAME=AWSCore-jl-00011"
},

{
    "location": "stack/#AWS-CLI-commands-1",
    "page": "Test Stack",
    "title": "AWS CLI commands",
    "category": "section",
    "text": "To create a basic stack using the current profile, use the below. Note that a particular profile can be passed to this command using --profile.aws cloudformation create-stack \\\n    --template-body $TEMPLATE \\\n    --parameters ParameterKey=PublicCIUser,ParameterValue=$PUBLIC_CI_USER \\\n    --stack-name $STACK_NAMEIf a dedicated stack creation role was created in the previous step, use this:export STACK_ROLE_ARN=arn:aws:iam::263813748431:role/CloudFormationAdmin\n\naws cloudformation create-stack \\\n    --template-body $TEMPLATE \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --role-arn $STACK_ROLE_ARN \\\n    --parameters ParameterKey=PublicCIUser,ParameterValue=$PUBLIC_CI_USER \\\n    --stack-name $STACK_NAMEThe status of the stack creation can be verified using the AWS CloudFormation console or with the AWS CLI."
},

{
    "location": "stack/#Running-tests-1",
    "page": "Test Stack",
    "title": "Running tests",
    "category": "section",
    "text": "The testing user must be authenticated, either through the use of environment variables or using an AWS profile. The environment variables for Invenia\'s stack are privately in the Travis CI repository settings.Running Julia tests normally should now work!"
},

]}
