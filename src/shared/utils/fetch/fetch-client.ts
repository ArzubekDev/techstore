import { FetchError } from './fetch-error';
import type { RequestOptions, TypeSearchParams } from './fetch-types';

export class FetchClient {
  private readonly baseUrl: string;
  private readonly defaultHeaders?: Record<string, string>;
  private readonly defaultParams?: TypeSearchParams;

  public constructor(init: {
    baseUrl: string;
    headers?: Record<string, string>;
    params?: TypeSearchParams;
  }) {
    this.baseUrl = init.baseUrl;
    this.defaultHeaders = init.headers;
    this.defaultParams = init.params;
  }

  private buildSearchParams(params: TypeSearchParams = {}): string {
    const searchParams = new URLSearchParams();
    const merged = { ...this.defaultParams, ...params };

    for (const key in merged) {
      const value = merged[key];

      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined) searchParams.append(key, String(item));
        });
      } else if (value !== undefined) {
        searchParams.set(key, String(value));
      }
    }

    const query = searchParams.toString();
    return query ? `?${query}` : '';
  }

  private async request<TResponse>(
    endpoint: string,
    method: RequestInit['method'],
    options: RequestOptions = {},
  ): Promise<TResponse> {
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${path}${this.buildSearchParams(options.params)}`;

    const response = await fetch(url, {
      ...options,
      method,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      throw new FetchError(
        response.status,
        errorBody?.message ?? response.statusText,
      );
    }

    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      return response.json() as Promise<TResponse>;
    }

    return response.text() as Promise<TResponse>;
  }

  public get<TResponse>(
    endpoint: string,
    options: Omit<RequestOptions, 'body'> = {},
  ) {
    return this.request<TResponse>(endpoint, 'GET', options);
  }

  public post<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options: RequestOptions = {},
  ) {
    return this.request<TResponse>(endpoint, 'POST', {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...(body !== undefined && { body: JSON.stringify(body) }),
    });
  }

  public patch<TResponse, TBody = unknown>(
    endpoint: string,
    body?: TBody,
    options: RequestOptions = {},
  ) {
    return this.request<TResponse>(endpoint, 'PATCH', {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...(body !== undefined && { body: JSON.stringify(body) }),
    });
  }

  public delete<TResponse>(
    endpoint: string,
    options: Omit<RequestOptions, 'body'> = {},
  ) {
    return this.request<TResponse>(endpoint, 'DELETE', options);
  }
}
