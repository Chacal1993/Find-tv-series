import { Tv } from "../models/tv";

export interface TvResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Tv[];
}