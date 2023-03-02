import axios, { AxiosResponse } from "axios";

export interface IQuote {
  author?: string;
  authorSlug?: string;
  content: string;
  dateAdded?: string;
  dateModified?: string;
  length?: number;
  tags?: string[];
  _id?: string;
}

export async function getQuote() {
  try {
    const response: AxiosResponse<IQuote> = await axios.get(
      "https://api.quotable.io/random"
    );

    const { status, statusText, ...data } = response;

    if (status !== 200) {
      throw new Error(`${status} ${statusText}`);
    }

    return data.data;
  } catch (error) {
    console.error("getQuoteError:", error);
    return { content: "Opps... Something went wrong" };
  }
}
