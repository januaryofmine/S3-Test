const ipRegex = require("ip-regex");

const checkIpAddress = (ipAdress) => {
  const isV4 = ipRegex.v4({ exact: true }).test(ipAdress);
  if (isV4) return "IPv4";
  else {
    const isV6 = ipRegex.v6({ exact: true }).test(ipAdress);
    return isV6 ? "IPv6" : "Neither";
  }
};

// console.log(checkIpAddress("255.255.255.255"))