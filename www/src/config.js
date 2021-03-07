// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4g24rrukuld8l0atnh1e5jivvt",     // CognitoClientID
  "api_base_url": "https://xitdxh1201.execute-api.ap-southeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "springsheep-springsheep.auth.ap-southeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d3q68ieyfufh9e.amplifyapp.com"                                      // AmplifyURL
};

export default config;
