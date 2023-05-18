export const awsConfiguration = {
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
    cookieStorage: {
      domain: process.env.COOKIE_STORAGE_DOMAIN,
      path: '/',
      expires: 365,
      sameSite: "strict",
      secure: true
    },
    authenticationFlowType: 'USER_SRP_AUTH',
  }