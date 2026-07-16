export type TPaginatedResponse<T> = {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: T[];
};
