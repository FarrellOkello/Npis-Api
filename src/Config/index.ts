const config = {
  ttl: 1,
  veiwTtl: 3,
  redis: {
    dev: {
      url: "redis://localhost:6379",
      // auth_pass: "Emma123"
    },
  },
  Resources: {
    CompanyMasters: "company-masters"
  },
};

export default config;
