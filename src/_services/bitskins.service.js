import config from "config";
import { fetchWrapper } from "@/_helpers";

const baseUrl = `${config.apiUrl}/bitskins`;

export const bitskinsService = {
  getAccountBalance,
  getBuyHistory,
  getRecentSalesInfo,
  getExternalPrice,
};

function getAccountBalance() {
  return fetchWrapper.get(`${baseUrl}/balance`);
}

function getBuyHistory() {
  return fetchWrapper.get(`${baseUrl}/buy-history`);
}

function getRecentSalesInfo(itemName) {
  return fetchWrapper.get(`${baseUrl}/recent-sales/${itemName}`);
}

function getExternalPrice(itemName) {
  return fetchWrapper.get(`${baseUrl}/item/${itemName}/external-price`);
}
