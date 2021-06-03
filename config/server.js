module.exports = ({env}) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1111),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '31ceef4584dc7b8da3ae853b51486503'),
    },
  },
});


