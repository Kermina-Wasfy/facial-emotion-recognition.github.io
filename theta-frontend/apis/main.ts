import axios from "@/lib/axios";

export interface MobileApp {
  os: string;
  url: string;
}

export interface MobileAppsResponse {
  mobile_apps: MobileApp[];
}

export async function getMobileApps(): Promise<MobileAppsResponse> {
  const res = await axios.get<MobileAppsResponse>("/main");
  return res.data;
}
