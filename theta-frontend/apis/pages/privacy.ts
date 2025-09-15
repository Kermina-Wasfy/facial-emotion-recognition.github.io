import axios from "@/lib/axios";

/** Privacy policy object */
export interface PrivacyPolicy {
  title: string;
  description: string;
  slug: string;
  cover: string;
}

/** API response type */
export interface PrivacyPolicyResponse {
  privacy_policy: PrivacyPolicy;
}

/** Fetcher function */
export async function getPrivacyPolicy(): Promise<PrivacyPolicyResponse> {
  const res = await axios.get<PrivacyPolicyResponse>("/privacy-policy"); 
  // غيّري الـ endpoint حسب الـ API عندك
  return res.data;
}
