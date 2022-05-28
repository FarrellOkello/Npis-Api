import { Injectable, CACHE_MANAGER, Inject } from "@nestjs/common";
import { Cache } from "cache-manager";
import config from "src/Config";

@Injectable()
export class DataCache {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getData(key: string): Promise<string[]> {
    return await this.cacheManager.get(key);
  }

  async setData(key: string, records: string[]): Promise<void> {
    await this.cacheManager.set(key, records, { ttl: config.ttl });
  }

  async setViewData(key: string, records: string[]): Promise<void> {
    await this.cacheManager.set(key, records, { ttl: config.veiwTtl });
  }
}
