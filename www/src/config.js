// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "33c59mabtk3hpuh1ld4o592bom",     // CognitoClientID
  "api_base_url": "https://zim9qehbe5.execute-api.ap-southeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "springsheep-springsheep.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.dk83ht7q9kn6k.amplifyapp.com"                                      // AmplifyURL
};

export default config;
