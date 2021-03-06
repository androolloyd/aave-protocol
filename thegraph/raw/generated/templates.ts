// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Address, DataSourceTemplate } from "@graphprotocol/graph-ts";

export class LendingPoolConfigurator extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPoolConfigurator", [address.toHex()]);
  }
}

export class LendingPoolCore extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPoolCore", [address.toHex()]);
  }
}

export class AToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("AToken", [address.toHex()]);
  }
}

export class LendingPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LendingPool", [address.toHex()]);
  }
}

export class FallbackPriceOracle extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("FallbackPriceOracle", [address.toHex()]);
  }
}

export class ChainlinkAggregator extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ChainlinkAggregator", [address.toHex()]);
  }
}
