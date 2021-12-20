export default function Instagram(options) {
  return {
    id: "instagram",
    name: "Instagram",
    type: "oauth",
    authorization:
      "https://api.instagram.com/oauth/authorize?scope=user_profile",
    token: "https://api.instagram.com/oauth/access_token",
    userinfo:
      "https://graph.instagram.com/me?fields=id,username,account_type,name",
    async profile(profile) {
      return {
        id: profile.id,
        name: profile.username,
        email: null,
        image: null,
      };
    },
    options,
  };
}
