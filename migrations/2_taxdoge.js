const TaxDoge = artifacts.require("TaxDoge");

module.exports = function (deployer) {
  deployer.deploy(TaxDoge);
};
