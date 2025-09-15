import axios from "@/lib/axios";

export interface ContactRequest {
  name: string;
  phone: string;
  subject:string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function postContact(data: ContactRequest): Promise<ContactResponse> {
  const res = await axios.post<ContactResponse>(
    "https://demo.innovationscope.com/theta/public/api/contact",
    data
  );
  return res.data;
}
