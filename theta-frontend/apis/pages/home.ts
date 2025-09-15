import axios from "@/lib/axios";

/** Banner object */
export interface Banner {
  description: string;
  image: string; 
}

/** Who we are section */
export interface WhoWeAre {
  title: string;
  description: string;
  image: string;
}

/** Branch object inside contact_us */
export interface Branch {
  city_id: number;
  title: string;
  address: string;
  phone: string;
  location: string | null;
}

/** Contact city object */
export interface ContactCity {
  id: number;
  title: string;
  branches: Branch[];
}

/** Full API response */
export interface HomeResponse {
  banners: Banner[];
  who_we_are: WhoWeAre;
  contact_us: ContactCity[];
}

/** Function to fetch data */
export async function getHomeData(): Promise<HomeResponse> {
  const res = await axios.get<HomeResponse>("/home"); 
  return res.data;
}
